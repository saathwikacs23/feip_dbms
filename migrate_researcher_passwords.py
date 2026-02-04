"""
Migration Script: Hash Existing Passwords for All User Types
=============================================================
This script migrates plain text passwords to bcrypt hashed passwords
in the following tables:
- Researcher_Accounts
- Data_Provider_Credentials
- Administrators

Usage:
    python migrate_researcher_passwords.py
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

import bcrypt
from database import db_manager


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


def migrate_researcher_passwords():
    """
    Migrate researcher passwords from plain text to bcrypt hashes.
    """
    print("\n" + "=" * 60)
    print("RESEARCHER ACCOUNTS - Password Migration")
    print("=" * 60)
    print()
    
    try:
        # Fetch all researchers with plain text passwords
        print("Fetching researchers from database...")
        query = """
            SELECT researcher_id, username, email, password, password_hash
            FROM Researcher_Accounts
        """
        researchers = db_manager.postgres.execute_query(query)
        
        if not researchers:
            print("No researchers found in the database.")
            return True, 0, 0, 0
        
        print(f"Found {len(researchers)} researcher account(s).")
        print()
        
        # Track migration statistics
        migrated_count = 0
        skipped_count = 0
        error_count = 0
        
        # Process each researcher
        for researcher in researchers:
            researcher_id = researcher['researcher_id']
            username = researcher['username']
            plain_password = researcher.get('password')
            existing_hash = researcher.get('password_hash')
            
            # Skip if already has a hash or no plain text password
            if existing_hash and existing_hash.strip():
                print(f"✓ Skipping {username} - already has hashed password")
                skipped_count += 1
                continue
            
            if not plain_password or not plain_password.strip():
                print(f"✗ Skipping {username} - no password found")
                skipped_count += 1
                continue
            
            try:
                # Hash the password
                print(f"⟳ Hashing password for: {username}...", end=" ")
                hashed_password = hash_password(plain_password)
                
                # Update the password_hash column
                update_query = """
                    UPDATE Researcher_Accounts
                    SET password_hash = %s
                    WHERE researcher_id = %s
                """
                success = db_manager.postgres.execute_update(
                    update_query, 
                    (hashed_password, researcher_id)
                )
                
                if success:
                    print("✓ Success")
                    migrated_count += 1
                else:
                    print("✗ Failed to update")
                    error_count += 1
                    
            except Exception as e:
                print(f"✗ Error: {str(e)}")
                error_count += 1
        
        # Print summary
        print()
        print("Researcher Summary:")
        print(f"  Migrated: {migrated_count}, Skipped: {skipped_count}, Errors: {error_count}")
        
        if migrated_count > 0:
            print("✓ Researcher migration completed!")
        else:
            print("No researcher passwords were migrated.")
        
    except Exception as e:
        print(f"\n✗ Researcher migration failed: {str(e)}")
        import traceback
        traceback.print_exc()
        return False, 0, 0, 0
    
    return True, migrated_count, skipped_count, error_count


def migrate_data_provider_passwords():
    """
    Migrate data provider personal passwords from plain text to bcrypt hashes.
    """
    print("\n" + "=" * 60)
    print("DATA PROVIDER CREDENTIALS - Password Migration")
    print("=" * 60)
    print()
    
    try:
        # Fetch all data providers with plain text passwords
        print("Fetching data providers from database...")
        query = """
            SELECT provider_id, username, email, personal_password, password_hash
            FROM Data_Provider_Credentials
        """
        providers = db_manager.postgres.execute_query(query)
        
        if not providers:
            print("No data providers found in the database.")
            return True, 0, 0, 0
        
        print(f"Found {len(providers)} data provider account(s).")
        print()
        
        # Track migration statistics
        migrated_count = 0
        skipped_count = 0
        error_count = 0
        
        # Process each provider
        for provider in providers:
            provider_id = provider['provider_id']
            username = provider['username']
            plain_password = provider.get('personal_password')
            existing_hash = provider.get('password_hash')
            
            # Skip if already has a hash or no plain text password
            if existing_hash and existing_hash.strip():
                print(f"✓ Skipping {username} - already has hashed password")
                skipped_count += 1
                continue
            
            if not plain_password or not plain_password.strip():
                print(f"✗ Skipping {username} - no password found")
                skipped_count += 1
                continue
            
            try:
                # Hash the password
                print(f"⟳ Hashing password for: {username}...", end=" ")
                hashed_password = hash_password(plain_password)
                
                # Update the password_hash column
                update_query = """
                    UPDATE Data_Provider_Credentials
                    SET password_hash = %s
                    WHERE provider_id = %s
                """
                success = db_manager.postgres.execute_update(
                    update_query, 
                    (hashed_password, provider_id)
                )
                
                if success:
                    print("✓ Success")
                    migrated_count += 1
                else:
                    print("✗ Failed to update")
                    error_count += 1
                    
            except Exception as e:
                print(f"✗ Error: {str(e)}")
                error_count += 1
        
        # Print summary
        print()
        print("Data Provider Summary:")
        print(f"  Migrated: {migrated_count}, Skipped: {skipped_count}, Errors: {error_count}")
        
        if migrated_count > 0:
            print("✓ Data provider migration completed!")
        else:
            print("No data provider passwords were migrated.")
        
    except Exception as e:
        print(f"\n✗ Data provider migration failed: {str(e)}")
        import traceback
        traceback.print_exc()
        return False, 0, 0, 0
    
    return True, migrated_count, skipped_count, error_count


def migrate_administrator_passwords():
    """
    Migrate administrator passwords from plain text to bcrypt hashes.
    """
    print("\n" + "=" * 60)
    print("ADMINISTRATORS - Password Migration")
    print("=" * 60)
    print()
    
    try:
        # Fetch all administrators with plain text passwords
        print("Fetching administrators from database...")
        query = """
            SELECT admin_id, username, email, password, password_hash
            FROM Administrators
        """
        admins = db_manager.postgres.execute_query(query)
        
        if not admins:
            print("No administrators found in the database.")
            return True, 0, 0, 0
        
        print(f"Found {len(admins)} administrator account(s).")
        print()
        
        # Track migration statistics
        migrated_count = 0
        skipped_count = 0
        error_count = 0
        
        # Process each admin
        for admin in admins:
            admin_id = admin['admin_id']
            username = admin['username']
            plain_password = admin.get('password')
            existing_hash = admin.get('password_hash')
            
            # Skip if already has a hash or no plain text password
            if existing_hash and existing_hash.strip():
                print(f"✓ Skipping {username} - already has hashed password")
                skipped_count += 1
                continue
            
            if not plain_password or not plain_password.strip():
                print(f"✗ Skipping {username} - no password found")
                skipped_count += 1
                continue
            
            try:
                # Hash the password
                print(f"⟳ Hashing password for: {username}...", end=" ")
                hashed_password = hash_password(plain_password)
                
                # Update the password_hash column
                update_query = """
                    UPDATE Administrators
                    SET password_hash = %s
                    WHERE admin_id = %s
                """
                success = db_manager.postgres.execute_update(
                    update_query, 
                    (hashed_password, admin_id)
                )
                
                if success:
                    print("✓ Success")
                    migrated_count += 1
                else:
                    print("✗ Failed to update")
                    error_count += 1
                    
            except Exception as e:
                print(f"✗ Error: {str(e)}")
                error_count += 1
        
        # Print summary
        print()
        print("Administrator Summary:")
        print(f"  Migrated: {migrated_count}, Skipped: {skipped_count}, Errors: {error_count}")
        
        if migrated_count > 0:
            print("✓ Administrator migration completed!")
        else:
            print("No administrator passwords were migrated.")
        
    except Exception as e:
        print(f"\n✗ Administrator migration failed: {str(e)}")
        import traceback
        traceback.print_exc()
        return False, 0, 0, 0
    
    return True, migrated_count, skipped_count, error_count


def migrate_all_passwords():
    """
    Migrate passwords for all user types.
    """
    print("=" * 60)
    print("PASSWORD MIGRATION SCRIPT - ALL USER TYPES")
    print("=" * 60)
    
    total_migrated = 0
    total_skipped = 0
    total_errors = 0
    all_success = True
    
    # Migrate researchers
    success, migrated, skipped, errors = migrate_researcher_passwords()
    all_success = all_success and success
    total_migrated += migrated
    total_skipped += skipped
    total_errors += errors
    
    # Migrate data providers
    success, migrated, skipped, errors = migrate_data_provider_passwords()
    all_success = all_success and success
    total_migrated += migrated
    total_skipped += skipped
    total_errors += errors
    
    # Migrate administrators
    success, migrated, skipped, errors = migrate_administrator_passwords()
    all_success = all_success and success
    total_migrated += migrated
    total_skipped += skipped
    total_errors += errors
    
    # Print overall summary
    print()
    print("=" * 60)
    print("OVERALL MIGRATION SUMMARY")
    print("=" * 60)
    print(f"Total migrated: {total_migrated}")
    print(f"Total skipped: {total_skipped}")
    print(f"Total errors: {total_errors}")
    print()
    
    if total_migrated > 0:
        print("✓ Migration completed successfully!")
        print()
        print("Note: Plain text passwords still exist in original columns.")
        print("After verifying the migration, you may want to:")
        print("1. Test logging in with all migrated account types")
        print("2. Optionally drop or clear plain text password columns for security")
    else:
        print("No passwords were migrated.")
    
    return all_success


def verify_migration():
    """
    Verify that all users have hashed passwords.
    """
    print()
    print("=" * 60)
    print("VERIFICATION CHECK")
    print("=" * 60)
    
    try:
        # Check researchers
        print("\nResearcher Accounts:")
        query = """
            SELECT 
                COUNT(*) as total,
                COUNT(password_hash) as with_hash
            FROM Researcher_Accounts
        """
        result = db_manager.postgres.execute_query(query)
        
        if result:
            stats = result[0]
            print(f"  Total: {stats['total']}")
            print(f"  With hashed passwords: {stats['with_hash']}")
            
            if stats['with_hash'] == stats['total']:
                print("  ✓ All researchers have hashed passwords!")
            else:
                missing = stats['total'] - stats['with_hash']
                print(f"  ⚠ Warning: {missing} researcher(s) missing hashed passwords")
        
        # Check data providers
        print("\nData Provider Credentials:")
        query = """
            SELECT 
                COUNT(*) as total,
                COUNT(password_hash) as with_hash
            FROM Data_Provider_Credentials
        """
        result = db_manager.postgres.execute_query(query)
        
        if result:
            stats = result[0]
            print(f"  Total: {stats['total']}")
            print(f"  With hashed passwords: {stats['with_hash']}")
            
            if stats['with_hash'] == stats['total']:
                print("  ✓ All data providers have hashed passwords!")
            else:
                missing = stats['total'] - stats['with_hash']
                print(f"  ⚠ Warning: {missing} data provider(s) missing hashed passwords")
        
        # Check administrators
        print("\nAdministrators:")
        query = """
            SELECT 
                COUNT(*) as total,
                COUNT(password_hash) as with_hash
            FROM Administrators
        """
        result = db_manager.postgres.execute_query(query)
        
        if result:
            stats = result[0]
            print(f"  Total: {stats['total']}")
            print(f"  With hashed passwords: {stats['with_hash']}")
            
            if stats['with_hash'] == stats['total']:
                print("  ✓ All administrators have hashed passwords!")
            else:
                missing = stats['total'] - stats['with_hash']
                print(f"  ⚠ Warning: {missing} administrator(s) missing hashed passwords")
                
    except Exception as e:
        print(f"✗ Verification failed: {str(e)}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    print()
    print("This script will migrate plain text passwords to bcrypt hashes for:")
    print("  - Researcher Accounts")
    print("  - Data Provider Credentials")
    print("  - Administrators")
    print()
    print("The original passwords will remain in their original columns.")
    print()
    
    response = input("Do you want to proceed? (yes/no): ").strip().lower()
    
    if response in ['yes', 'y']:
        print()
        if migrate_all_passwords():
            verify_migration()
    else:
        print("\nMigration cancelled.")
    
    print()
