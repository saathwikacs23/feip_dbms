"""
Master script to generate all bulk data for the federated database system
Run this script to generate:
- PostgreSQL bulk data (Climate + Agriculture)
- MongoDB bulk data (5 collections)
- CSV sensor readings
"""

print("=" * 60)
print("FEDERATED DATABASE - BULK DATA GENERATOR")
print("=" * 60)

# Generate PostgreSQL data
print("\n[1/3] Generating PostgreSQL data...")
exec(open('generate_postgresql_data.py').read())

# Generate MongoDB data  
print("\n[2/3] Generating MongoDB data...")
exec(open('generate_mongodb_data.py').read())

# Generate CSV data
print("\n[3/3] Generating CSV data...")
exec(open('generate_csv_data.py').read())

print("\n" + "=" * 60)
print("GENERATION COMPLETE!")
print("=" * 60)
print("\nNext steps:")
print("1. PostgreSQL: psql -U postgres -d environmental_db -f postgresql_bulk_data.sql")
print("2. MongoDB:    mongosh environmental_db mongodb_bulk_data.js")
print("3. CSV:        Replace data/sensor_readings.csv with sensor_readings_bulk.csv")
print("=" * 60)
