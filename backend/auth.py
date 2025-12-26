# ========================================
# Authentication and Authorization Module
# Handles user login, session management, and role-based access control
# ========================================

import bcrypt
from functools import wraps
from flask import session, jsonify
from database import db_manager

# ========================================
# Password Hashing Utilities
# ========================================
def hash_password(password):
    """
    Hash a password using bcrypt.
    
    Args:
        password (str): Plain text password
        
    Returns:
        str: Hashed password
    """
    salt = bcrypt.gensalt(rounds=12)
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')


def verify_password(password, password_hash):
    """
    Verify a password against its hash.
    
    Args:
        password (str): Plain text password to verify
        password_hash (str): Stored password hash
        
    Returns:
        bool: True if password matches, False otherwise
    """
    try:
        return bcrypt.checkpw(password.encode('utf-8'), password_hash.encode('utf-8'))
    except:
        return False


# ========================================
# Researcher Authentication
# ========================================
def register_researcher(username, email, password):
    """
    Register a new researcher account.
    
    Args:
        username (str): Unique username
        email (str): Email address
        password (str): Plain text password
        
    Returns:
        dict: Success status and message
    """
    try:
        # Check if username already exists
        check_query = "SELECT username FROM Researcher_Accounts WHERE username = %s"
        result = db_manager.postgres.execute_query(check_query, (username,))
        
        if result and len(result) > 0:
            return {'success': False, 'message': 'Username already exists'}
        
        # Check if email already exists
        check_email_query = "SELECT email FROM Researcher_Accounts WHERE email = %s"
        result = db_manager.postgres.execute_query(check_email_query, (email,))
        
        if result and len(result) > 0:
            return {'success': False, 'message': 'Email already exists'}
        
        # Insert new researcher with plain text password
        insert_query = """
            INSERT INTO Researcher_Accounts (username, email, password) 
            VALUES (%s, %s, %s)
        """
        success = db_manager.postgres.execute_update(insert_query, (username, email, password))
        
        if success:
            return {'success': True, 'message': 'Account created successfully'}
        else:
            return {'success': False, 'message': 'Failed to create account'}
        
    except Exception as e:
        return {'success': False, 'message': f'Registration failed: {str(e)}'}


def authenticate_researcher(username, password):
    """
    Authenticate a researcher by username and password.
    
    Args:
        username (str): Username
        password (str): Plain text password
        
    Returns:
        dict: Authentication result with user info or error
    """
    try:
        query = """
            SELECT researcher_id, username, email, password 
            FROM Researcher_Accounts 
            WHERE username = %s
        """
        result = db_manager.postgres.execute_query(query, (username,))
        
        if not result or len(result) == 0:
            return {'success': False, 'message': 'Invalid username or password'}
        
        user = result[0]
        stored_password = user['password']
        
        # Plain text password comparison
        if password == stored_password:
            # Update last login
            update_query = """
                UPDATE Researcher_Accounts 
                SET last_login = CURRENT_TIMESTAMP 
                WHERE researcher_id = %s
            """
            db_manager.postgres.execute_update(update_query, (user['researcher_id'],))
            
            return {
                'success': True,
                'user_id': user['researcher_id'],
                'username': user['username'],
                'email': user['email'],
                'role': 'Researcher'
            }
        else:
            return {'success': False, 'message': 'Invalid username or password'}
            
    except Exception as e:
        return {'success': False, 'message': f'Authentication failed: {str(e)}'}


# ========================================
# Data Provider Authentication
# ========================================
def authenticate_data_provider(username, email, personal_password, database_name, database_password):
    """
    Authenticate a data provider with database-specific credentials.
    
    Args:
        username (str): Username
        email (str): Email address
        personal_password (str): Personal password
        database_name (str): Database name (PostgreSQL, MongoDB, CSV)
        database_password (str): Database-specific password
        
    Returns:
        dict: Authentication result with user info or error
    """
    try:
        query = """
            SELECT provider_id, username, email, personal_password, database_name, database_password 
            FROM Data_Provider_Credentials 
            WHERE username = %s AND database_name = %s
        """
        result = db_manager.postgres.execute_query(query, (username, database_name))
        
        if not result or len(result) == 0:
            return {'success': False, 'message': 'Username not authorized for this database'}
        
        provider = result[0]
        stored_email = provider['email']
        stored_personal_pw = provider['personal_password']
        stored_db_pw = provider['database_password']
        
        # Validate email
        if email != stored_email:
            return {'success': False, 'message': 'Invalid credentials'}
        
        # Validate personal password (plain text for now - should be hashed in production)
        if personal_password != stored_personal_pw:
            return {'success': False, 'message': 'Invalid personal password'}
        
        # Validate database password
        if database_password != stored_db_pw:
            return {'success': False, 'message': 'Invalid database password'}
        
        # Update last login
        update_query = """
            UPDATE Data_Provider_Credentials 
            SET last_login = CURRENT_TIMESTAMP 
            WHERE provider_id = %s
        """
        db_manager.postgres.execute_update(update_query, (provider['provider_id'],))
        
        return {
            'success': True,
            'provider_id': provider['provider_id'],
            'username': provider['username'],
            'email': provider['email'],
            'database': database_name,
            'role': 'Data Provider'
        }
        
    except Exception as e:
        return {'success': False, 'message': f'Authentication failed: {str(e)}'}


# ========================================
# Administrator Authentication
# ========================================
def authenticate_administrator(email, password):
    """
    Authenticate an administrator with email and password.
    
    Args:
        email (str): Administrator email
        password (str): Administrator password
        
    Returns:
        dict: Authentication result with admin info or error
    """
    try:
        query = """
            SELECT admin_id, username, email, password 
            FROM Administrators 
            WHERE email = %s
        """
        result = db_manager.postgres.execute_query(query, (email,))
        
        if not result or len(result) == 0:
            return {'success': False, 'message': 'Invalid credentials'}
        
        admin = result[0]
        stored_password = admin['password']
        
        # Check password (plain text for now - should be hashed in production)
        if password != stored_password:
            return {'success': False, 'message': 'Invalid credentials'}
        
        # Update last login
        update_query = """
            UPDATE Administrators 
            SET last_login = CURRENT_TIMESTAMP 
            WHERE admin_id = %s
        """
        db_manager.postgres.execute_update(update_query, (admin['admin_id'],))
        
        return {
            'success': True,
            'user_id': admin['admin_id'],
            'username': admin['username'],
            'email': admin['email'],
            'role': 'Administrator'
        }
        
    except Exception as e:
        return {'success': False, 'message': f'Authentication failed: {str(e)}'}


# ========================================
# Session Management
# ========================================
def create_user_session(user_data):
    """
    Create a session for an authenticated user.
    
    Args:
        user_data (dict): User information
    """
    session['user_id'] = user_data.get('user_id')
    session['username'] = user_data.get('username')
    session['email'] = user_data.get('email')
    session['role'] = user_data.get('role')
    session['assigned_database'] = user_data.get('database')
    session['logged_in'] = True
    session.permanent = True


def destroy_user_session():
    """Clear user session data"""
    session.clear()


def get_current_user():
    """
    Get current logged-in user information from session.
    
    Returns:
        dict: User information or None if not logged in
    """
    if 'logged_in' in session and session['logged_in']:
        return {
            'user_id': session.get('user_id'),
            'username': session.get('username'),
            'email': session.get('email'),
            'role': session.get('role'),
            'database': session.get('assigned_database')
        }
    return None


# ========================================
# Authorization Decorators
# ========================================
def login_required(f):
    """
    Decorator to require user to be logged in.
    Use this decorator on routes that require authentication.
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session or not session['logged_in']:
            return jsonify({
                'success': False,
                'error': 'Authentication required',
                'redirect': '/login.html'
            }), 401
        return f(*args, **kwargs)
    return decorated_function


def role_required(*allowed_roles):
    """
    Decorator to require specific user roles.
    Use this decorator on routes that require specific role access.
    
    Example:
        @role_required('Administrator', 'Researcher')
        def admin_route():
            ...
    """
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if 'logged_in' not in session or not session['logged_in']:
                return jsonify({
                    'success': False,
                    'error': 'Authentication required',
                    'redirect': '/login.html'
                }), 401
            
            user_role = session.get('role')
            if user_role not in allowed_roles:
                return jsonify({
                    'success': False,
                    'error': f'Access denied. Required role: {", ".join(allowed_roles)}',
                    'user_role': user_role
                }), 403
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator


# ========================================
# User Management Functions (Admin Only)
# ========================================
def get_all_users():
    """
    Get all users from the database (without password hashes).
    Admin function only.
    
    Returns:
        list: List of user dictionaries
    """
    query = """
        SELECT user_id, name, email, role, created_at 
        FROM user_info 
        ORDER BY created_at DESC
    """
    return db_manager.postgres.execute_query(query)


def create_new_user(name, email, password, role):
    """
    Create a new user in the database.
    Admin function only.
    
    Args:
        name (str): User's full name
        email (str): User's email
        password (str): Plain text password
        role (str): User role (Researcher, Data Provider, Administrator)
        
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        # Check if email already exists
        check_query = 'SELECT email FROM user_info WHERE email = %s'
        existing = db_manager.postgres.execute_query(check_query, (email,))
        
        if existing and len(existing) > 0:
            return False  # Email already exists
        
        # Store plain text password (no hashing)
        password_hash = password
        
        # Insert new user
        insert_query = """
            INSERT INTO user_info (name, email, password_hash, role)
            VALUES (%s, %s, %s, %s)
        """
        return db_manager.postgres.execute_update(
            insert_query, 
            (name, email, password_hash, role)
        )
    except Exception as e:
        print(f"Create User Error: {e}")
        return False


def delete_user(user_id):
    """
    Delete a user from the database.
    Admin function only.
    
    Args:
        user_id (int): User ID to delete
        
    Returns:
        bool: True if successful, False otherwise
    """
    query = 'DELETE FROM user_info WHERE user_id = %s'
    return db_manager.postgres.execute_update(query, (user_id,))


# ========================================
# Query Logging
# ========================================
def log_query(user_id, query_text):
    """
    Log a federated query execution to the database.
    
    Args:
        user_id (int): User who executed the query
        query_text (str): The SQL query text
        
    Returns:
        bool: True if successful, False otherwise
    """
    insert_query = """
        INSERT INTO query_log (user_id, query_text)
        VALUES (%s, %s)
    """
    return db_manager.postgres.execute_update(insert_query, (user_id, query_text))


def get_query_logs(limit=50):
    """
    Get recent query logs with user information.
    Admin function only.
    
    Args:
        limit (int): Maximum number of logs to retrieve
        
    Returns:
        list: List of query log dictionaries
    """
    query = """
        SELECT 
            q.query_id,
            q.query_text,
            q.executed_at,
            u.name as user_name,
            u.email as user_email,
            u.role as user_role
        FROM query_log q
        JOIN user_info u ON q.user_id = u.user_id
        ORDER BY q.executed_at DESC
        LIMIT %s
    """
    return db_manager.postgres.execute_query(query, (limit,))
