#!/usr/bin/env python3
"""
Quick connection test for PostgreSQL, MongoDB, and Apache Drill
"""

import sys
import os

# Add backend to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

from database import db_manager

print("=" * 60)
print("Testing Database Connections")
print("=" * 60)

# Test PostgreSQL
print("\n1. Testing PostgreSQL...")
try:
    pg_test = db_manager.postgres.execute_query("SELECT 1 as test, current_database() as db")
    if pg_test:
        print(f"   ✓ PostgreSQL connected successfully!")
        print(f"   Database: {pg_test[0]['db']}")
    else:
        print("   ✗ PostgreSQL connection failed!")
        print("   Check your POSTGRES_PASSWORD in .env file")
except Exception as e:
    print(f"   ✗ PostgreSQL error: {e}")

# Test MongoDB
print("\n2. Testing MongoDB...")
try:
    if db_manager.mongo.test_connection():
        print("   ✓ MongoDB connected successfully!")
    else:
        print("   ✗ MongoDB connection failed!")
        print("   Make sure MongoDB is running: net start MongoDB")
except Exception as e:
    print(f"   ✗ MongoDB error: {e}")

# Test Apache Drill
print("\n3. Testing Apache Drill...")
try:
    if db_manager.drill.test_connection():
        print("   ✓ Apache Drill is running!")
        
        # Test federated query
        print("\n4. Testing Drill → PostgreSQL connection...")
        result = db_manager.drill.execute_query("SELECT * FROM postgres.public.`region_info` LIMIT 1")
        if result['success']:
            print("   ✓ Drill can query PostgreSQL!")
            print(f"   Rows: {len(result['rows'])}")
        else:
            print("   ✗ Drill cannot query PostgreSQL!")
            print(f"   Error: {result.get('error', 'Unknown')}")
            print("\n   ACTION REQUIRED:")
            print("   Update PostgreSQL password in Drill web interface:")
            print("   1. Go to: http://localhost:8047")
            print("   2. Click 'Storage' tab")
            print("   3. Update 'postgres' plugin with your password")
    else:
        print("   ✗ Apache Drill is not running!")
        print("   Start it from: C:\\Users\\Lenovo\\dbmsel\\apache-drill-1.22.0\\apache-drill-1.22.0\\bin")
        print("   Run: .\\drill-embedded.bat")
except Exception as e:
    print(f"   ✗ Apache Drill error: {e}")

print("\n" + "=" * 60)
print("Connection Test Complete")
print("=" * 60)
