import sys
import os
from database import db_manager

def check_users():
    print("Connecting to database...")
    if not db_manager.postgres.connect():
        print("Failed to connect to PostgreSQL")
        return

    print("\n--- Researcher Accounts ---")
    researchers = db_manager.postgres.execute_query("SELECT * FROM Researcher_Accounts")
    if researchers:
        for r in researchers:
            print(r)
    else:
        print("No researchers found.")

    print("\n--- Data Provider Credentials ---")
    providers = db_manager.postgres.execute_query("SELECT provider_id, username, email, personal_password, database_name, database_password FROM Data_Provider_Credentials")
    if providers:
        for p in providers:
            print(f"User: {p['username']}, DB: {p['database_name']}, PersonalPW: {p['personal_password']}, DbPW: {p['database_password']}")
    else:
        print("No data providers found.")

    print("\n--- Administrators ---")
    admins = db_manager.postgres.execute_query("SELECT * FROM Administrators")
    if admins:
        for a in admins:
            print(a)
    else:
        print("No administrators found.")

if __name__ == "__main__":
    check_users()
