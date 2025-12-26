# Authentication System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     FEDERATED DATABASE SYSTEM                    │
│                    Multi-Role Authentication                     │
└─────────────────────────────────────────────────────────────────┘

                              │
                              ▼
                    ┌─────────────────┐
                    │   Login Page    │
                    │  Role Selection │
                    └─────────────────┘
                              │
                 ┌────────────┼────────────┐
                 │            │            │
                 ▼            ▼            ▼
         ┌──────────┐  ┌──────────┐  ┌──────────┐
         │Researcher│  │   Data   │  │  Admin   │
         │   🔬     │  │ Provider │  │   ⚙️     │
         └──────────┘  │   📊     │  └──────────┘
              │        └──────────┘        │
              │             │              │
         ┌────┴───┐    ┌────┴────┐        │
         │ Login  │    │Database │        │
         │Register│    │Selection│        │
         └────────┘    └─────────┘        │
                            │              │
              ┌─────────────┼──────────┐   │
              │             │          │   │
              ▼             ▼          ▼   │
        ┌──────────┐  ┌──────────┐┌──────────┐
        │PostgreSQL│  │ MongoDB  ││   CSV    │
        │  5 users │  │  5 users ││  5 users │
        └──────────┘  └──────────┘└──────────┘
              │             │          │   │
              └─────────────┼──────────┘   │
                            ▼              ▼
                    ┌──────────────────────────┐
                    │     Dashboard            │
                    │  - Full Access (Researcher)│
                    │  - Restricted (Provider)  │
                    │  - Admin Panel (Admin)    │
                    └──────────────────────────┘
```

---

## Role-Based Access Matrix

| Feature | Researcher | Data Provider | Administrator |
|---------|-----------|---------------|---------------|
| **Create Account** | ✅ Self-register | ❌ Pre-configured | ❌ Pre-configured |
| **Query Interface** | ✅ Full federated access | ❌ No access | ✅ Full access |
| **Data Provider Page** | ❌ No access | ✅ Database-specific | ✅ Full access |
| **Admin Panel** | ❌ No access | ❌ No access | ✅ Full access |
| **View All Databases** | ✅ PostgreSQL, MongoDB, CSV | ❌ Assigned DB only | ✅ All databases |
| **Add/Edit Data** | ❌ Read-only | ✅ Assigned DB only | ✅ All databases |

---

## Authentication Flow Diagrams

### 1. Researcher Registration Flow

```
User clicks "Researcher"
         │
         ▼
   Create Account?
         │ Yes
         ▼
┌─────────────────┐
│  Registration   │
│  Form:          │
│  - Username     │
│  - Email        │
│  - Password     │
│  - Confirm      │
└─────────────────┘
         │
         ▼
  Frontend Validation
  - Password >= 6 chars
  - Passwords match
         │
         ▼
POST /api/register-researcher
         │
         ▼
┌─────────────────┐
│ Backend Check:  │
│ - Username      │
│   unique?       │
│ - Email unique? │
└─────────────────┘
         │
    ┌────┴────┐
    │  Exists │
    ▼         ▼
  Error    Success
           Hash password
           Save to DB
           Return success
```

### 2. Data Provider Login Flow

```
User clicks "Data Provider"
         │
         ▼
┌─────────────────┐
│Select Database: │
│  🐘 PostgreSQL  │
│  🍃 MongoDB     │
│  📄 CSV         │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│  Login Form:    │
│  - Username     │
│  - Email        │
│  - Personal PW  │
│  - Database PW  │
└─────────────────┘
         │
         ▼
POST /api/login-dataprovider
         │
         ▼
┌─────────────────┐
│ Backend Checks: │
│ 1. Username in  │
│    DB auth list?│
│ 2. Email match? │
│ 3. Personal PW? │
│ 4. Database PW? │
└─────────────────┘
         │
    ┌────┴────┐
 Fail│        │Success
    ▼         ▼
  Error    Create Session
          + assigned_database
          Redirect to Dashboard
```

### 3. Session & Access Control

```
┌─────────────────────────────────────────┐
│            User Session                  │
├─────────────────────────────────────────┤
│ user_id: 123                            │
│ username: "pg_john"                     │
│ email: "john.postgres@example.com"      │
│ role: "Data Provider"                   │
│ assigned_database: "PostgreSQL"         │
└─────────────────────────────────────────┘
                  │
                  ▼
         Dashboard Loads
                  │
                  ▼
    ┌─────────────────────────┐
    │  Role === "Researcher"? │
    └─────────────────────────┘
         │ No        │ Yes
         ▼           ▼
    Data Provider  Full Access
         │
         ▼
┌─────────────────────────┐
│ Filter by assigned_db   │
├─────────────────────────┤
│ PostgreSQL → Climate +  │
│              Agriculture│
│ MongoDB → Biodiversity +│
│           Sensor Logs + │
│           Air Quality   │
│ CSV → Sensor Readings   │
└─────────────────────────┘
```

---

## Database Schema

### Researcher_Accounts Table

```sql
┌────────────────┬──────────┬─────────────┬─────────┐
│ researcher_id  │ username │    email    │password │
│   (SERIAL PK)  │ (UNIQUE) │  (UNIQUE)   │ (HASH)  │
├────────────────┼──────────┼─────────────┼─────────┤
│       1        │researcher│researcher@  │ *****   │
│                │   _test  │  test.com   │         │
└────────────────┴──────────┴─────────────┴─────────┘
```

### Data_Provider_Credentials Table

```sql
┌──────────┬──────────┬────────────┬──────────────┬──────────┬──────────────┐
│provider_id│ username │   email    │personal_pass │ database │database_pass │
│ (SERIAL) │ (UNIQUE) │  (UNIQUE)  │              │   name   │              │
├──────────┼──────────┼────────────┼──────────────┼──────────┼──────────────┤
│    1     │ pg_john  │ john.post  │   john123    │PostgreSQL│postgres_db_  │
│          │          │ gres@...   │              │          │    pass      │
│    2     │ pg_sarah │ sarah.post │   sarah123   │PostgreSQL│postgres_db_  │
│          │          │ gres@...   │              │          │    pass      │
│    ...   │   ...    │    ...     │     ...      │   ...    │     ...      │
│    6     │mongo_lisa│ lisa.mongo │   lisa123    │ MongoDB  │mongo_db_pass │
│          │          │    @...    │              │          │              │
│    ...   │   ...    │    ...     │     ...      │   ...    │     ...      │
│    11    │csv_robert│robert.csv  │  robert123   │   CSV    │ csv_db_pass  │
│          │          │    @...    │              │          │              │
└──────────┴──────────┴────────────┴──────────────┴──────────┴──────────────┘

Total: 15 pre-configured accounts (5 per database)
```

---

## API Endpoints

### Authentication Routes

| Endpoint | Method | Auth Required | Description |
|----------|--------|---------------|-------------|
| `/api/register-researcher` | POST | ❌ | Create new researcher account |
| `/api/login-researcher` | POST | ❌ | Researcher login |
| `/api/login-dataprovider` | POST | ❌ | Data Provider login with DB credentials |
| `/api/login-admin` | POST | ❌ | Administrator login |
| `/api/logout` | POST | ✅ | Destroy session |
| `/api/current-user` | GET | ✅ | Get current user info |

### Request/Response Examples

**Register Researcher:**
```json
POST /api/register-researcher
{
  "username": "researcher_test",
  "email": "researcher@test.com",
  "password": "test123"
}

Response:
{
  "success": true,
  "message": "Account created successfully"
}
```

**Login Data Provider:**
```json
POST /api/login-dataprovider
{
  "username": "pg_john",
  "email": "john.postgres@example.com",
  "personalPassword": "john123",
  "database": "PostgreSQL",
  "databasePassword": "postgres_db_pass"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "user": {
    "username": "pg_john",
    "email": "john.postgres@example.com",
    "role": "Data Provider",
    "database": "PostgreSQL"
  }
}
```

---

## Security Features

### ✅ Implemented
- Session-based authentication
- Role-based access control (RBAC)
- Database-specific access restrictions
- Password validation (min 6 characters)
- Username uniqueness check
- Database password requirement for providers
- Authorized username lists per database

### 🔄 Recommended Enhancements
- [ ] Bcrypt hashing for Data Provider passwords
- [ ] HTTPS for production
- [ ] JWT tokens for API authentication
- [ ] Rate limiting on login endpoints
- [ ] Two-factor authentication
- [ ] Password complexity requirements
- [ ] Session timeout after inactivity
- [ ] Audit logging for all authentication events
- [ ] CAPTCHA for registration

---

## Access Control Logic

### Frontend (data-provider.js)

```javascript
if (database === 'PostgreSQL') {
    showTabs(['climate', 'agriculture']);
    hideTabs(['sensor', 'biodiversity', 'airQuality']);
}
else if (database === 'MongoDB') {
    showTabs(['biodiversity', 'sensor', 'airQuality']);
    hideTabs(['climate', 'agriculture']);
}
else if (database === 'CSV') {
    showTabs(['sensor']);
    hideTabs(['climate', 'agriculture', 'biodiversity', 'airQuality']);
}
```

### Backend (auth.py)

```python
# Data Provider Authentication
query = """
    SELECT provider_id, username, email, database_name 
    FROM Data_Provider_Credentials 
    WHERE username = %s AND database_name = %s
"""

# Verify:
# 1. Username exists for this database
# 2. Email matches
# 3. Personal password matches
# 4. Database password matches

# Store in session:
session['assigned_database'] = result['database']
```

---

## File Structure

```
dbms-federated-project/
├── backend/
│   ├── auth.py ..................... ✨ Enhanced with new functions
│   ├── app.py ...................... ✨ New authentication routes
│   └── config.py
├── frontend/
│   ├── login.html .................. ✨ New multi-role interface
│   ├── login.js .................... ✨ Role-based login logic
│   ├── dashboard.js ................ ✨ Shows database assignment
│   └── data-provider.js ............ ✨ Filters tabs by database
├── database/
│   └── setup_auth_system.sql ....... ✨ New authentication tables
└── documentation/
    ├── LOGIN_CREDENTIALS.md ........ ✨ All login credentials
    ├── AUTHENTICATION_TESTING.md ... ✨ Testing guide
    └── AUTHENTICATION_ARCHITECTURE.md ✨ This file
```

---

## Testing Checklist

- [ ] Researcher can register with unique username
- [ ] Researcher can login with email/password
- [ ] PostgreSQL provider sees only PostgreSQL tables
- [ ] MongoDB provider sees only MongoDB collections
- [ ] CSV provider sees only CSV data
- [ ] Dashboard shows "Data Provider (PostgreSQL)" for PostgreSQL users
- [ ] Invalid credentials show appropriate error messages
- [ ] Duplicate username registration is rejected
- [ ] Wrong database password is rejected
- [ ] Unauthorized username is rejected
- [ ] Admin login works with admin@example.com/admin123
- [ ] Session persists across page navigation
- [ ] Logout clears session properly

---

🎉 **Complete Authentication System with Role-Based Access Control!**
