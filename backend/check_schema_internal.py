
from backend.database import db_manager

def list_tables():
    print("Initializing connections...")
    db_manager.initialize()

    print("\n--- PostgreSQL Tables ---")
    pg_tables = db_manager.postgres.execute_query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    if pg_tables:
        for t in pg_tables:
            print(f"- {t['table_name']}")
    else:
        print("No Postgres tables found or connection failed.")

    print("\n--- MongoDB Collections ---")
    if db_manager.mongo.connect():
        collections = db_manager.mongo.db.list_collection_names()
        for c in collections:
            print(f"- {c}")
    else:
        print("MongoDB connection failed.")

if __name__ == "__main__":
    list_tables()
