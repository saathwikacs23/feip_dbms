"""
Generate realistic CSV data for sensor readings (CO2 and PM2.5)
"""
import csv
from datetime import datetime, timedelta
import random

def generate_sensor_readings(num_records=200):
    """Generate sensor readings for all 20 regions"""
    regions = list(range(1, 21))
    start_date = datetime(2024, 1, 1)
    
    readings = []
    
    # Header
    readings.append(['timestamp', 'region_id', 'co2_level', 'pm2_5'])
    
    for i in range(num_records):
        region_id = random.choice(regions)
        hours_offset = i * 3  # Every 3 hours
        timestamp = start_date + timedelta(hours=hours_offset)
        
        # CO2 levels vary by region
        if region_id in [3, 7, 16]:  # Desert regions - lower CO2
            co2_level = round(random.uniform(380.0, 410.0), 1)
        elif region_id in [1, 5, 8, 13]:  # Rainforest regions - moderate CO2
            co2_level = round(random.uniform(405.0, 425.0), 1)
        else:  # Mixed/Urban influenced
            co2_level = round(random.uniform(410.0, 450.0), 1)
        
        # PM2.5 levels vary by region
        if region_id in [3, 7]:  # Desert regions - high PM2.5 (dust)
            pm2_5 = round(random.uniform(60.0, 150.0), 1)
        elif region_id in [1, 2, 4, 5, 12]:  # Remote/pristine areas - low PM2.5
            pm2_5 = round(random.uniform(3.0, 20.0), 1)
        elif region_id in [15, 19]:  # Agricultural/urban mix - moderate
            pm2_5 = round(random.uniform(20.0, 60.0), 1)
        else:  # Variable
            pm2_5 = round(random.uniform(10.0, 50.0), 1)
        
        readings.append([
            timestamp.strftime('%Y-%m-%dT%H:%M:%SZ'),
            region_id,
            co2_level,
            pm2_5
        ])
    
    return readings

# Generate and write CSV
if __name__ == "__main__":
    readings = generate_sensor_readings(200)
    
    with open('../data/sensor_readings_bulk.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(readings)
    
    print(f"✓ Generated sensor_readings_bulk.csv with {len(readings)-1} records")
