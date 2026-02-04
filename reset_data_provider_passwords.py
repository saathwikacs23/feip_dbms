"""
Reset Data Provider Password Hashes
===================================
Resets password_hash for default data provider accounts using the
original setup_auth_system.sql passwords.

Usage:
    python reset_data_provider_passwords.py
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

from auth import hash_password
from database import db_manager

DEFAULT_PASSWORDS = {
    # PostgreSQL Data Providers
    'pg_john': 'john123',
    'pg_sarah': 'sarah123',
    'pg_mike': 'mike123',
    'pg_emma': 'emma123',
    'pg_alex': 'alex123',
    # MongoDB Data Providers
    'mongo_lisa': 'lisa123',
    'mongo_david': 'david123',
    'mongo_kate': 'kate123',
    'mongo_tom': 'tom123',
    'mongo_jane': 'jane123',
    # CSV Data Providers
    'csv_robert': 'robert123',
    'csv_maria': 'maria123',
    'csv_james': 'james123',
    'csv_linda': 'linda123',
    'csv_kevin': 'kevin123',
}


def reset_password_hashes():
    print("Resetting data provider password hashes...")
    updated = 0
    skipped = 0

    for username, plain_password in DEFAULT_PASSWORDS.items():
        hashed = hash_password(plain_password)
        update_query = """
            UPDATE Data_Provider_Credentials
            SET password_hash = %s
            WHERE username = %s
        """
        success = db_manager.postgres.execute_update(update_query, (hashed, username))
        if success:
            updated += 1
        else:
            skipped += 1

    print(f"Updated: {updated}")
    print(f"Skipped/Failed: {skipped}")


if __name__ == "__main__":
    reset_password_hashes()
