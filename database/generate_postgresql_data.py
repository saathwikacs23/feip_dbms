"""
Generate realistic PostgreSQL data inserts for Climate_Data and Agriculture_Data
Requires: psycopg2
"""
import random
from datetime import datetime, timedelta

# Climate data generator
def generate_climate_data(num_records=200):
    regions = list(range(1, 21))  # 20 regions
    start_date = datetime(2023, 1, 1)
    
    sql_statements = []
    for i in range(num_records):
        region_id = random.choice(regions)
        days_offset = random.randint(0, 400)
        timestamp = start_date + timedelta(days=days_offset, hours=random.randint(0, 23))
        
        # Realistic climate data based on region patterns
        if region_id in [1, 5, 8]:  # Tropical regions
            temp = round(random.uniform(22.0, 35.0), 2)
            rainfall = round(random.uniform(50.0, 500.0), 2)
            humidity = round(random.uniform(60.0, 95.0), 2)
        elif region_id in [4, 10, 15]:  # Temperate regions
            temp = round(random.uniform(5.0, 25.0), 2)
            rainfall = round(random.uniform(20.0, 200.0), 2)
            humidity = round(random.uniform(40.0, 75.0), 2)
        elif region_id in [3, 7]:  # Arid regions
            temp = round(random.uniform(25.0, 45.0), 2)
            rainfall = round(random.uniform(0.5, 50.0), 2)
            humidity = round(random.uniform(10.0, 40.0), 2)
        else:  # Mixed climate
            temp = round(random.uniform(10.0, 30.0), 2)
            rainfall = round(random.uniform(30.0, 300.0), 2)
            humidity = round(random.uniform(35.0, 80.0), 2)
        
        sql = f"INSERT INTO climate_data (region_id, temperature, rainfall, humidity, timestamp) VALUES ({region_id}, {temp}, {rainfall}, {humidity}, '{timestamp.strftime('%Y-%m-%d %H:%M:%S')}');"
        sql_statements.append(sql)
    
    return sql_statements

# Agriculture data generator
def generate_agriculture_data(num_records=200):
    regions = list(range(1, 21))
    crops = ['Wheat', 'Rice', 'Corn', 'Soybeans', 'Barley', 'Cotton', 'Sugarcane', 'Coffee', 
             'Tea', 'Cocoa', 'Potatoes', 'Cassava', 'Tomatoes', 'Bananas', 'Apples']
    seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'Monsoon', 'Annual']
    years = [2020, 2021, 2022, 2023, 2024]
    
    sql_statements = []
    for i in range(num_records):
        region_id = random.choice(regions)
        crop_type = random.choice(crops)
        season = random.choice(seasons)
        year = random.choice(years)
        
        # Yield varies by crop type
        if crop_type in ['Wheat', 'Rice', 'Corn']:
            yield_val = round(random.uniform(2000.0, 8000.0), 2)
        elif crop_type in ['Soybeans', 'Barley']:
            yield_val = round(random.uniform(1500.0, 5000.0), 2)
        elif crop_type in ['Cotton', 'Sugarcane']:
            yield_val = round(random.uniform(3000.0, 10000.0), 2)
        elif crop_type in ['Coffee', 'Tea', 'Cocoa']:
            yield_val = round(random.uniform(500.0, 2500.0), 2)
        else:
            yield_val = round(random.uniform(1000.0, 6000.0), 2)
        
        sql = f"INSERT INTO agriculture_data (region_id, crop_type, yield, season, year) VALUES ({region_id}, '{crop_type}', {yield_val}, '{season}', {year});"
        sql_statements.append(sql)
    
    return sql_statements

# Generate and write to file
if __name__ == "__main__":
    with open('postgresql_bulk_data.sql', 'w') as f:
        f.write("-- Bulk Climate Data Inserts\n")
        climate_data = generate_climate_data(200)
        for sql in climate_data:
            f.write(sql + '\n')
        
        f.write("\n-- Bulk Agriculture Data Inserts\n")
        agri_data = generate_agriculture_data(200)
        for sql in agri_data:
            f.write(sql + '\n')
    
    print("✓ Generated postgresql_bulk_data.sql with 400 records (200 climate + 200 agriculture)")
