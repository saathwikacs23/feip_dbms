import sys
sys.path.insert(0, 'backend')

from database import db_manager

# Update PostgreSQL data provider password to match actual DB password
query = """
UPDATE Data_Provider_Credentials 
SET database_password = %s 
WHERE database_name = %s
"""

result = db_manager.postgres.execute_update(query, ('postgres', 'PostgreSQL'))
print(f"PostgreSQL provider password updated: {result}")

# Verify
providers = db_manager.postgres.execute_query(
    "SELECT username, database_name, database_password FROM Data_Provider_Credentials WHERE database_name = 'PostgreSQL'"
)
print("\nPostgreSQL Data Providers:")
for p in providers:
    print(f"  {p['username']}: {p['database_password']}")
