"""
Generate realistic MongoDB data for environmental collections
"""
import json
from datetime import datetime, timedelta
import random

def generate_biodiversity_data(num_records=200):
    regions = list(range(1, 21))
    region_names = {
        1: "Amazon Basin", 2: "Great Barrier Reef", 3: "Sahara Desert", 4: "Siberian Taiga",
        5: "Congo Rainforest", 6: "Himalayas", 7: "Arabian Desert", 8: "Madagascar",
        9: "Galapagos Islands", 10: "Yellowstone", 11: "Serengeti Plains", 12: "Antarctic Peninsula",
        13: "Borneo Rainforest", 14: "Rocky Mountains", 15: "Mediterranean Coast",
        16: "Australian Outback", 17: "Patagonia", 18: "Boreal Forest Canada",
        19: "African Savanna", 20: "Coral Triangle"
    }
    
    endangered_species_pool = [
        ["Jaguar", "Harpy Eagle", "Giant Otter"], ["Green Sea Turtle", "Dugong", "Whale Shark"],
        ["Addax", "Dorcas Gazelle"], ["Amur Tiger", "Snow Leopard"], ["Mountain Gorilla", "Forest Elephant"],
        ["Red Panda", "Snow Leopard"], ["Arabian Oryx"], ["Lemur", "Fossa"],
        ["Giant Tortoise", "Marine Iguana"], ["Grizzly Bear", "Gray Wolf"],
        ["African Elephant", "Cheetah"], ["Emperor Penguin"], ["Orangutan", "Proboscis Monkey"],
        ["Wolverine", "Lynx"], ["Monk Seal"], ["Koala", "Tasmanian Devil"],
        ["Andean Condor", "Puma"], ["Caribou", "Polar Bear"], ["Lion", "Black Rhino"],
        ["Hawksbill Turtle", "Manta Ray"]
    ]
    
    flora_pool = [
        ["Brazil Nut Tree", "Kapok Tree", "Rubber Tree"], ["Hard Coral", "Soft Coral", "Seagrass"],
        ["Date Palm", "Acacia"], ["Larch", "Spruce", "Pine"], ["African Mahogany", "Ebony Tree"],
        ["Rhododendron", "Blue Pine"], ["Desert Rose"], ["Baobab", "Traveller's Palm"],
        ["Prickly Pear Cactus"], ["Lodgepole Pine", "Aspen"], ["Acacia", "Baobab"],
        ["Antarctic Hairgrass"], ["Dipterocarp", "Rafflesia"], ["Douglas Fir", "Juniper"],
        ["Cork Oak", "Olive Tree"], ["Eucalyptus", "Mulga"], ["Southern Beech"],
        ["Black Spruce", "White Birch"], ["Acacia", "Marula"], ["Mangrove", "Seagrass"]
    ]
    
    conservation_statuses = ["Critical", "Endangered", "Vulnerable", "Stable"]
    
    records = []
    for i in range(num_records):
        region_id = random.choice(regions)
        record = {
            "biodiversity_id": f"BIO{str(i+1).zfill(3)}",
            "region_id": region_id,
            "region_name": region_names[region_id],
            "species_count": random.randint(500, 50000),
            "endangered_species": endangered_species_pool[region_id - 1] if region_id <= 20 else random.choice(endangered_species_pool),
            "dominant_flora": flora_pool[region_id - 1] if region_id <= 20 else random.choice(flora_pool),
            "conservation_status": random.choice(conservation_statuses),
            "last_survey_date": {"$date": (datetime(2023, 1, 1) + timedelta(days=random.randint(0, 400))).isoformat() + "Z"}
        }
        records.append(record)
    
    return records

def generate_sensor_logs(num_records=200):
    regions = list(range(1, 21))
    event_types = ["temperature_spike", "humidity_drop", "rainfall_heavy", "air_quality_degraded", 
                   "wind_speed_high", "pressure_anomaly", "uv_index_high"]
    severities = ["info", "warning", "critical"]
    
    records = []
    for i in range(num_records):
        region_id = random.choice(regions)
        event_type = random.choice(event_types)
        severity = random.choice(severities)
        
        messages = {
            "temperature_spike": f"Temperature exceeded threshold by {random.uniform(1.5, 5.0):.1f}°C",
            "humidity_drop": f"Humidity dropped below {random.randint(10, 30)}%",
            "rainfall_heavy": f"Heavy rainfall detected: {random.randint(100, 300)}mm in 24hrs",
            "air_quality_degraded": f"PM2.5 levels increased by {random.randint(20, 60)}%",
            "wind_speed_high": f"Wind speed reached {random.randint(50, 120)} km/h",
            "pressure_anomaly": f"Barometric pressure dropped to {random.randint(980, 1000)} hPa",
            "uv_index_high": f"UV index reached {random.randint(9, 15)}"
        }
        
        record = {
            "log_id": f"LOG{str(i+1).zfill(3)}",
            "sensor_id": f"SENS_{str(random.randint(1, 100)).zfill(3)}",
            "region_id": region_id,
            "event_type": event_type,
            "severity": severity,
            "message": messages[event_type],
            "timestamp": {"$date": (datetime(2024, 1, 1) + timedelta(days=random.randint(0, 90), hours=random.randint(0, 23))).isoformat() + "Z"}
        }
        records.append(record)
    
    return records

def generate_air_quality_history(num_records=200):
    regions = list(range(1, 21))
    region_names = {
        1: "Amazon Basin", 2: "Great Barrier Reef", 3: "Sahara Desert", 4: "Siberian Taiga",
        5: "Congo Rainforest", 6: "Himalayas", 7: "Arabian Desert", 8: "Madagascar",
        9: "Galapagos Islands", 10: "Yellowstone", 11: "Serengeti Plains", 12: "Antarctic Peninsula",
        13: "Borneo Rainforest", 14: "Rocky Mountains", 15: "Mediterranean Coast",
        16: "Australian Outback", 17: "Patagonia", 18: "Boreal Forest Canada",
        19: "African Savanna", 20: "Coral Triangle"
    }
    
    data_sources = ["Ground Station", "Satellite", "Mobile Unit", "Drone Survey"]
    
    records = []
    for i in range(num_records):
        region_id = random.choice(regions)
        aqi = random.randint(20, 250)
        
        record = {
            "record_id": f"AQH{str(i+1).zfill(3)}",
            "region_id": region_id,
            "region_name": region_names[region_id],
            "aqi": aqi,
            "pollutants": {
                "pm2_5": round(random.uniform(5.0, 150.0), 2),
                "pm10": round(random.uniform(10.0, 200.0), 2),
                "co": round(random.uniform(0.1, 15.0), 2),
                "no2": round(random.uniform(5.0, 100.0), 2),
                "o3": round(random.uniform(10.0, 180.0), 2),
                "so2": round(random.uniform(1.0, 50.0), 2)
            },
            "readings": {
                "temperature": round(random.uniform(5.0, 40.0), 2),
                "humidity": round(random.uniform(20.0, 90.0), 2),
                "pressure": round(random.uniform(980.0, 1030.0), 2)
            },
            "data_source": random.choice(data_sources),
            "recorded_at": {"$date": (datetime(2024, 1, 1) + timedelta(days=random.randint(0, 90))).isoformat() + "Z"}
        }
        records.append(record)
    
    return records

def generate_species_details(num_records=200):
    iucn_statuses = ["Critically Endangered", "Endangered", "Vulnerable", "Near Threatened", "Least Concern"]
    
    species_data = [
        ("Jaguar", "Panthera onca", [1, 5, 19]),
        ("Green Sea Turtle", "Chelonia mydas", [2, 20]),
        ("Snow Leopard", "Panthera uncia", [4, 6]),
        ("Mountain Gorilla", "Gorilla beringei beringei", [5]),
        ("Giant Panda", "Ailuropoda melanoleuca", [4]),
        ("African Elephant", "Loxodonta africana", [5, 11, 19]),
        ("Bengal Tiger", "Panthera tigris tigris", [5, 13]),
        ("Orangutan", "Pongo pygmaeus", [13]),
        ("Blue Whale", "Balaenoptera musculus", [2, 12, 20]),
        ("Polar Bear", "Ursus maritimus", [12, 18]),
        ("Lemur", "Lemur catta", [8]),
        ("Koala", "Phascolarctos cinereus", [16]),
        ("Grizzly Bear", "Ursus arctos", [10, 14, 17, 18]),
        ("Red Panda", "Ailurus fulgens", [6]),
        ("Cheetah", "Acinonyx jubatus", [11, 19]),
        ("Harpy Eagle", "Harpia harpyja", [1]),
        ("Emperor Penguin", "Aptenodytes forsteri", [12]),
        ("Giant Otter", "Pteronura brasiliensis", [1]),
        ("Arabian Oryx", "Oryx leucoryx", [7]),
        ("Tasmanian Devil", "Sarcophilus harrisii", [16])
    ]
    
    threats_pool = [
        ["Habitat Loss", "Poaching"], ["Climate Change", "Pollution"],
        ["Deforestation", "Human-Wildlife Conflict"], ["Disease", "Habitat Fragmentation"],
        ["Overfishing", "Bycatch"], ["Mining", "Agricultural Expansion"]
    ]
    
    conservation_pool = [
        ["Protected Areas", "Anti-Poaching Patrols"], ["Habitat Restoration", "Community Education"],
        ["Breeding Programs", "Wildlife Corridors"], ["Marine Protected Areas"],
        ["Reintroduction Programs"], ["Legal Protection", "Research Initiatives"]
    ]
    
    records = []
    for i in range(num_records):
        if i < len(species_data):
            common_name, scientific_name, habitat_regions = species_data[i]
        else:
            common_name = f"Species_{i+1}"
            scientific_name = f"Genus species_{i+1}"
            habitat_regions = [random.choice(list(range(1, 21)))]
        
        record = {
            "species_id": f"SP{str(i+1).zfill(3)}",
            "common_name": common_name,
            "scientific_name": scientific_name,
            "habitat_regions": habitat_regions,
            "population_estimate": random.randint(100, 50000),
            "iucn_status": random.choice(iucn_statuses),
            "conservation_efforts": random.choice(conservation_pool),
            "threats": random.choice(threats_pool)
        }
        records.append(record)
    
    return records

def generate_sensor_metadata(num_records=200):
    regions = list(range(1, 21))
    sensor_types = ["Temperature", "Humidity", "Air Quality", "Rainfall", "Wind Speed", "Soil Moisture", "UV Index"]
    manufacturers = ["EnviroTech", "ClimateMonitor Inc", "EcoSensors", "GreenData Systems", "AtmosTrack"]
    statuses = ["Active", "Maintenance", "Calibration Required", "Active"]
    
    records = []
    for i in range(num_records):
        region_id = random.choice(regions)
        
        record = {
            "sensor_id": f"SENS_{str(i+1).zfill(3)}",
            "region_id": region_id,
            "location": {
                "latitude": round(random.uniform(-90.0, 90.0), 6),
                "longitude": round(random.uniform(-180.0, 180.0), 6),
                "altitude": round(random.uniform(0, 5000), 2)
            },
            "sensor_type": random.choice(sensor_types),
            "manufacturer": random.choice(manufacturers),
            "installation_date": {"$date": (datetime(2020, 1, 1) + timedelta(days=random.randint(0, 1400))).isoformat() + "Z"},
            "calibration_history": [
                {"$date": (datetime(2023, 1, 1) + timedelta(days=random.randint(0, 300))).isoformat() + "Z"},
                {"$date": (datetime(2023, 6, 1) + timedelta(days=random.randint(0, 180))).isoformat() + "Z"}
            ],
            "status": random.choice(statuses)
        }
        records.append(record)
    
    return records

# Generate JavaScript file for MongoDB
if __name__ == "__main__":
    with open('mongodb_bulk_data.js', 'w') as f:
        f.write("// Bulk MongoDB Data Inserts\n")
        f.write("// Run with: mongosh environmental_db mongodb_bulk_data.js\n\n")
        
        f.write("// Biodiversity Data\n")
        bio_data = generate_biodiversity_data(200)
        f.write("db.Biodiversity_Data.insertMany(")
        f.write(json.dumps(bio_data, indent=2))
        f.write(");\n\n")
        
        f.write("// Sensor Logs\n")
        sensor_logs = generate_sensor_logs(200)
        f.write("db.Sensor_Logs.insertMany(")
        f.write(json.dumps(sensor_logs, indent=2))
        f.write(");\n\n")
        
        f.write("// Air Quality History\n")
        air_quality = generate_air_quality_history(200)
        f.write("db.Air_Quality_History.insertMany(")
        f.write(json.dumps(air_quality, indent=2))
        f.write(");\n\n")
        
        f.write("// Species Details\n")
        species = generate_species_details(200)
        f.write("db.Species_Details.insertMany(")
        f.write(json.dumps(species, indent=2))
        f.write(");\n\n")
        
        f.write("// Sensor Metadata\n")
        metadata = generate_sensor_metadata(200)
        f.write("db.Sensor_Metadata.insertMany(")
        f.write(json.dumps(metadata, indent=2))
        f.write(");\n\n")
        
        f.write('print("✓ Inserted 1000 MongoDB records (200 per collection)");\n')
    
    print("✓ Generated mongodb_bulk_data.js with 1000 records")
