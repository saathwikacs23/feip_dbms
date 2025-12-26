// Bulk MongoDB Data Inserts
// Run with: mongosh environmental_db mongodb_bulk_data.js

// Biodiversity Data
db.Biodiversity_Data.insertMany([
  {
    "biodiversity_id": "BIO001",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 36639,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO002",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 46202,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2024-02-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO003",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 4690,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-08-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO004",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 19774,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-02-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO005",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 29196,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO006",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 24908,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO007",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 47756,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-11-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO008",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "species_count": 22856,
    "endangered_species": [
      "Jaguar",
      "Harpy Eagle",
      "Giant Otter"
    ],
    "dominant_flora": [
      "Brazil Nut Tree",
      "Kapok Tree",
      "Rubber Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-08-25T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO009",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 44419,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-02-18T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO010",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 33118,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-04-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO011",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 34642,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO012",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 3080,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-11T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO013",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 24963,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-17T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO014",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 42738,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-06-17T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO015",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 8844,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-10-29T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO016",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 22591,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-12-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO017",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 30811,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-01-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO018",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 34972,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-01-25T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO019",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 38782,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-05T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO020",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 5637,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-01-21T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO021",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 30821,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-11-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO022",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 6676,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-11-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO023",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 43106,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-11-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO024",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 40214,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-07-08T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO025",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 41276,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-03-29T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO026",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 7570,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO027",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 11039,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-03-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO028",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 17436,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-27T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO029",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 47769,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO030",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 1796,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-09-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO031",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 18834,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-08-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO032",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 20060,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO033",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 44452,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-12-08T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO034",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 2012,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-11-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO035",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 45679,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-02-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO036",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 25046,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-10-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO037",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 5505,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-04-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO038",
    "region_id": 16,
    "region_name": "Australian Outback",
    "species_count": 22566,
    "endangered_species": [
      "Koala",
      "Tasmanian Devil"
    ],
    "dominant_flora": [
      "Eucalyptus",
      "Mulga"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-02-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO039",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 40597,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO040",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 32958,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-07-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO041",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 9719,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-07-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO042",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 8319,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-29T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO043",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 13343,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-07-27T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO044",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 41266,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-04-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO045",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 26232,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-05-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO046",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 46720,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-02-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO047",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 37709,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-11-06T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO048",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 35063,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO049",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 19204,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-04-11T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO050",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 28553,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-07-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO051",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 30741,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO052",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 31511,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-10-18T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO053",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 14114,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-24T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO054",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 22748,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-06T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO055",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 46371,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-02-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO056",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 17121,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO057",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 22801,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-12T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO058",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 49990,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-04-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO059",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 45311,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-07-17T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO060",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 47046,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-06-30T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO061",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 3407,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-03-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO062",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 14272,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-10-28T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO063",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 48050,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-03-12T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO064",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 37475,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-02-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO065",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 29755,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO066",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 27110,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-02-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO067",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 20871,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-05-07T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO068",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 34316,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-09-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO069",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 15737,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-12-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO070",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 34978,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-04-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO071",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 34614,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-06-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO072",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 6514,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-06-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO073",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 9958,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-08-06T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO074",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 32228,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-12-30T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO075",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 46738,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-08-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO076",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 34222,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO077",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 29027,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-09-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO078",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 10530,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO079",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 786,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO080",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 31216,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-10-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO081",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 39219,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-08-07T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO082",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 25168,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-24T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO083",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 34092,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-01-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO084",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 4450,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-03-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO085",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 31484,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-02-11T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO086",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 33084,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-06-05T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO087",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 43999,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO088",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 46521,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-11-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO089",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 7904,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-21T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO090",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 41997,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-07-06T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO091",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 7000,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-07-28T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO092",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 12766,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-08-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO093",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 37108,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO094",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 35493,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-09-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO095",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 8451,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO096",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 4573,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-11-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO097",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 17687,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-04-08T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO098",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 32533,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-05-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO099",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 12069,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-04-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO100",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 4245,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO101",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 38024,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-18T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO102",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 29747,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-02-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO103",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 9753,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-10-08T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO104",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 17127,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-05-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO105",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 28246,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-01-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO106",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 23113,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-06-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO107",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 36904,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO108",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "species_count": 8276,
    "endangered_species": [
      "Jaguar",
      "Harpy Eagle",
      "Giant Otter"
    ],
    "dominant_flora": [
      "Brazil Nut Tree",
      "Kapok Tree",
      "Rubber Tree"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-02-02T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO109",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 29321,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO110",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 18610,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2024-01-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO111",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 18874,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO112",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 15596,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-11-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO113",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 27174,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-05-09T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO114",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "species_count": 45628,
    "endangered_species": [
      "Monk Seal"
    ],
    "dominant_flora": [
      "Cork Oak",
      "Olive Tree"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-12-18T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO115",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 2062,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-08-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO116",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 29257,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-03-11T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO117",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 1589,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-01-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO118",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 7241,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-11-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO119",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 6340,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-11-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO120",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 40355,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-12-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO121",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 14627,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-03-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO122",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 16248,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO123",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "species_count": 29369,
    "endangered_species": [
      "Jaguar",
      "Harpy Eagle",
      "Giant Otter"
    ],
    "dominant_flora": [
      "Brazil Nut Tree",
      "Kapok Tree",
      "Rubber Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-08-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO124",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 5531,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-07-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO125",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 32136,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO126",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 40979,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-10-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO127",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 15471,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-04-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO128",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 3008,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-05-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO129",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 24985,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-10-17T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO130",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 45148,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2024-01-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO131",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 48718,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-03-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO132",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 2479,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-08-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO133",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 5261,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO134",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 42871,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO135",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 2362,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-03-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO136",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 32875,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-11T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO137",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 5036,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-01-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO138",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 13607,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-02-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO139",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 1843,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-08-06T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO140",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "species_count": 39808,
    "endangered_species": [
      "Jaguar",
      "Harpy Eagle",
      "Giant Otter"
    ],
    "dominant_flora": [
      "Brazil Nut Tree",
      "Kapok Tree",
      "Rubber Tree"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-02-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO141",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 47183,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-06-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO142",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 701,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-09-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO143",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 860,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-17T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO144",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "species_count": 5033,
    "endangered_species": [
      "Orangutan",
      "Proboscis Monkey"
    ],
    "dominant_flora": [
      "Dipterocarp",
      "Rafflesia"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO145",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 22432,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-02-25T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO146",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 21337,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-02-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO147",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 38809,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-08-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO148",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 16950,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO149",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 24909,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-11-24T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO150",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 18549,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-05T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO151",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 32265,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO152",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 49610,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-11-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO153",
    "region_id": 10,
    "region_name": "Yellowstone",
    "species_count": 19273,
    "endangered_species": [
      "Grizzly Bear",
      "Gray Wolf"
    ],
    "dominant_flora": [
      "Lodgepole Pine",
      "Aspen"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-27T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO154",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 49024,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-06-08T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO155",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 46875,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-05-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO156",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 8035,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-06-07T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO157",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "species_count": 28867,
    "endangered_species": [
      "African Elephant",
      "Cheetah"
    ],
    "dominant_flora": [
      "Acacia",
      "Baobab"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO158",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "species_count": 43809,
    "endangered_species": [
      "Addax",
      "Dorcas Gazelle"
    ],
    "dominant_flora": [
      "Date Palm",
      "Acacia"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-02-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO159",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 3819,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-01-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO160",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 49037,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-09-29T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO161",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 1103,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-12-10T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO162",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 2317,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-03-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO163",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 45832,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-07-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO164",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 26117,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-09-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO165",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 49829,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-08-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO166",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 14326,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-01-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO167",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 6026,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-10-22T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO168",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "species_count": 5094,
    "endangered_species": [
      "Hawksbill Turtle",
      "Manta Ray"
    ],
    "dominant_flora": [
      "Mangrove",
      "Seagrass"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO169",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 39201,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-06-05T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO170",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 12803,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-25T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO171",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 5529,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-06-30T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO172",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 34627,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-01-27T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO173",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 18281,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-05-16T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO174",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 4693,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-09-21T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO175",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 45044,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-02-28T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO176",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 23474,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-01-23T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO177",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 18389,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO178",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "species_count": 1822,
    "endangered_species": [
      "Green Sea Turtle",
      "Dugong",
      "Whale Shark"
    ],
    "dominant_flora": [
      "Hard Coral",
      "Soft Coral",
      "Seagrass"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-03-26T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO179",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 26555,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-11-21T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO180",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "species_count": 46074,
    "endangered_species": [
      "Giant Tortoise",
      "Marine Iguana"
    ],
    "dominant_flora": [
      "Prickly Pear Cactus"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-10-07T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO181",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "species_count": 43621,
    "endangered_species": [
      "Arabian Oryx"
    ],
    "dominant_flora": [
      "Desert Rose"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-06-27T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO182",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 25785,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-12-07T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO183",
    "region_id": 19,
    "region_name": "African Savanna",
    "species_count": 39820,
    "endangered_species": [
      "Lion",
      "Black Rhino"
    ],
    "dominant_flora": [
      "Acacia",
      "Marula"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2023-07-03T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO184",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 28091,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-05-14T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO185",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "species_count": 36012,
    "endangered_species": [
      "Emperor Penguin"
    ],
    "dominant_flora": [
      "Antarctic Hairgrass"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-04-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO186",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 10202,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-10-15T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO187",
    "region_id": 16,
    "region_name": "Australian Outback",
    "species_count": 38939,
    "endangered_species": [
      "Koala",
      "Tasmanian Devil"
    ],
    "dominant_flora": [
      "Eucalyptus",
      "Mulga"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-06-01T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO188",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 25828,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Vulnerable",
    "last_survey_date": {
      "$date": "2023-10-31T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO189",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "species_count": 10575,
    "endangered_species": [
      "Mountain Gorilla",
      "Forest Elephant"
    ],
    "dominant_flora": [
      "African Mahogany",
      "Ebony Tree"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-01-29T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO190",
    "region_id": 17,
    "region_name": "Patagonia",
    "species_count": 15007,
    "endangered_species": [
      "Andean Condor",
      "Puma"
    ],
    "dominant_flora": [
      "Southern Beech"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-04-12T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO191",
    "region_id": 8,
    "region_name": "Madagascar",
    "species_count": 5369,
    "endangered_species": [
      "Lemur",
      "Fossa"
    ],
    "dominant_flora": [
      "Baobab",
      "Traveller's Palm"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-07-12T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO192",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 8754,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-11-18T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO193",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "species_count": 18021,
    "endangered_species": [
      "Amur Tiger",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Larch",
      "Spruce",
      "Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-11-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO194",
    "region_id": 6,
    "region_name": "Himalayas",
    "species_count": 2540,
    "endangered_species": [
      "Red Panda",
      "Snow Leopard"
    ],
    "dominant_flora": [
      "Rhododendron",
      "Blue Pine"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2024-01-24T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO195",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 47560,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-03-24T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO196",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "species_count": 7246,
    "endangered_species": [
      "Wolverine",
      "Lynx"
    ],
    "dominant_flora": [
      "Douglas Fir",
      "Juniper"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-04-13T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO197",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "species_count": 26587,
    "endangered_species": [
      "Jaguar",
      "Harpy Eagle",
      "Giant Otter"
    ],
    "dominant_flora": [
      "Brazil Nut Tree",
      "Kapok Tree",
      "Rubber Tree"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-01-19T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO198",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 14861,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Critical",
    "last_survey_date": {
      "$date": "2024-01-05T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO199",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "species_count": 13606,
    "endangered_species": [
      "Caribou",
      "Polar Bear"
    ],
    "dominant_flora": [
      "Black Spruce",
      "White Birch"
    ],
    "conservation_status": "Stable",
    "last_survey_date": {
      "$date": "2023-11-20T00:00:00Z"
    }
  },
  {
    "biodiversity_id": "BIO200",
    "region_id": 16,
    "region_name": "Australian Outback",
    "species_count": 21892,
    "endangered_species": [
      "Koala",
      "Tasmanian Devil"
    ],
    "dominant_flora": [
      "Eucalyptus",
      "Mulga"
    ],
    "conservation_status": "Endangered",
    "last_survey_date": {
      "$date": "2023-11-28T00:00:00Z"
    }
  }
]);

// Sensor Logs
db.Sensor_Logs.insertMany([
  {
    "log_id": "LOG001",
    "sensor_id": "SENS_061",
    "region_id": 20,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-01-16T23:00:00Z"
    }
  },
  {
    "log_id": "LOG002",
    "sensor_id": "SENS_009",
    "region_id": 9,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 58%",
    "timestamp": {
      "$date": "2024-02-10T15:00:00Z"
    }
  },
  {
    "log_id": "LOG003",
    "sensor_id": "SENS_042",
    "region_id": 4,
    "event_type": "pressure_anomaly",
    "severity": "info",
    "message": "Barometric pressure dropped to 992 hPa",
    "timestamp": {
      "$date": "2024-03-15T13:00:00Z"
    }
  },
  {
    "log_id": "LOG004",
    "sensor_id": "SENS_021",
    "region_id": 4,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 93 km/h",
    "timestamp": {
      "$date": "2024-01-25T23:00:00Z"
    }
  },
  {
    "log_id": "LOG005",
    "sensor_id": "SENS_066",
    "region_id": 4,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-01-10T09:00:00Z"
    }
  },
  {
    "log_id": "LOG006",
    "sensor_id": "SENS_093",
    "region_id": 12,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 96 km/h",
    "timestamp": {
      "$date": "2024-02-05T10:00:00Z"
    }
  },
  {
    "log_id": "LOG007",
    "sensor_id": "SENS_073",
    "region_id": 5,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-03-08T11:00:00Z"
    }
  },
  {
    "log_id": "LOG008",
    "sensor_id": "SENS_038",
    "region_id": 20,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-03-03T21:00:00Z"
    }
  },
  {
    "log_id": "LOG009",
    "sensor_id": "SENS_050",
    "region_id": 9,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 3.0\u00b0C",
    "timestamp": {
      "$date": "2024-01-03T10:00:00Z"
    }
  },
  {
    "log_id": "LOG010",
    "sensor_id": "SENS_012",
    "region_id": 15,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 285mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-13T17:00:00Z"
    }
  },
  {
    "log_id": "LOG011",
    "sensor_id": "SENS_007",
    "region_id": 1,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.6\u00b0C",
    "timestamp": {
      "$date": "2024-01-01T05:00:00Z"
    }
  },
  {
    "log_id": "LOG012",
    "sensor_id": "SENS_081",
    "region_id": 19,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-01-05T11:00:00Z"
    }
  },
  {
    "log_id": "LOG013",
    "sensor_id": "SENS_007",
    "region_id": 2,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 999 hPa",
    "timestamp": {
      "$date": "2024-02-14T13:00:00Z"
    }
  },
  {
    "log_id": "LOG014",
    "sensor_id": "SENS_061",
    "region_id": 11,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-03-22T10:00:00Z"
    }
  },
  {
    "log_id": "LOG015",
    "sensor_id": "SENS_003",
    "region_id": 2,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 38%",
    "timestamp": {
      "$date": "2024-01-10T05:00:00Z"
    }
  },
  {
    "log_id": "LOG016",
    "sensor_id": "SENS_100",
    "region_id": 19,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 21%",
    "timestamp": {
      "$date": "2024-01-07T15:00:00Z"
    }
  },
  {
    "log_id": "LOG017",
    "sensor_id": "SENS_094",
    "region_id": 1,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 174mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-10T15:00:00Z"
    }
  },
  {
    "log_id": "LOG018",
    "sensor_id": "SENS_021",
    "region_id": 5,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 992 hPa",
    "timestamp": {
      "$date": "2024-01-30T16:00:00Z"
    }
  },
  {
    "log_id": "LOG019",
    "sensor_id": "SENS_078",
    "region_id": 2,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-02-14T09:00:00Z"
    }
  },
  {
    "log_id": "LOG020",
    "sensor_id": "SENS_001",
    "region_id": 5,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 135mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "log_id": "LOG021",
    "sensor_id": "SENS_075",
    "region_id": 7,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 258mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-21T08:00:00Z"
    }
  },
  {
    "log_id": "LOG022",
    "sensor_id": "SENS_002",
    "region_id": 11,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 28%",
    "timestamp": {
      "$date": "2024-03-13T04:00:00Z"
    }
  },
  {
    "log_id": "LOG023",
    "sensor_id": "SENS_099",
    "region_id": 3,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 214mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-13T23:00:00Z"
    }
  },
  {
    "log_id": "LOG024",
    "sensor_id": "SENS_003",
    "region_id": 10,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 56%",
    "timestamp": {
      "$date": "2024-01-25T06:00:00Z"
    }
  },
  {
    "log_id": "LOG025",
    "sensor_id": "SENS_067",
    "region_id": 5,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 998 hPa",
    "timestamp": {
      "$date": "2024-03-17T15:00:00Z"
    }
  },
  {
    "log_id": "LOG026",
    "sensor_id": "SENS_015",
    "region_id": 18,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 13%",
    "timestamp": {
      "$date": "2024-02-25T14:00:00Z"
    }
  },
  {
    "log_id": "LOG027",
    "sensor_id": "SENS_078",
    "region_id": 16,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 12",
    "timestamp": {
      "$date": "2024-03-07T05:00:00Z"
    }
  },
  {
    "log_id": "LOG028",
    "sensor_id": "SENS_068",
    "region_id": 6,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 990 hPa",
    "timestamp": {
      "$date": "2024-03-07T00:00:00Z"
    }
  },
  {
    "log_id": "LOG029",
    "sensor_id": "SENS_044",
    "region_id": 11,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 203mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-25T11:00:00Z"
    }
  },
  {
    "log_id": "LOG030",
    "sensor_id": "SENS_038",
    "region_id": 18,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-03-07T12:00:00Z"
    }
  },
  {
    "log_id": "LOG031",
    "sensor_id": "SENS_048",
    "region_id": 13,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 232mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-30T03:00:00Z"
    }
  },
  {
    "log_id": "LOG032",
    "sensor_id": "SENS_084",
    "region_id": 11,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-02-19T15:00:00Z"
    }
  },
  {
    "log_id": "LOG033",
    "sensor_id": "SENS_031",
    "region_id": 19,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 141mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-23T16:00:00Z"
    }
  },
  {
    "log_id": "LOG034",
    "sensor_id": "SENS_044",
    "region_id": 9,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 38%",
    "timestamp": {
      "$date": "2024-03-15T17:00:00Z"
    }
  },
  {
    "log_id": "LOG035",
    "sensor_id": "SENS_084",
    "region_id": 6,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 51%",
    "timestamp": {
      "$date": "2024-02-24T03:00:00Z"
    }
  },
  {
    "log_id": "LOG036",
    "sensor_id": "SENS_088",
    "region_id": 7,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 66 km/h",
    "timestamp": {
      "$date": "2024-03-15T16:00:00Z"
    }
  },
  {
    "log_id": "LOG037",
    "sensor_id": "SENS_054",
    "region_id": 1,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-02-29T17:00:00Z"
    }
  },
  {
    "log_id": "LOG038",
    "sensor_id": "SENS_066",
    "region_id": 15,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 66 km/h",
    "timestamp": {
      "$date": "2024-02-21T14:00:00Z"
    }
  },
  {
    "log_id": "LOG039",
    "sensor_id": "SENS_058",
    "region_id": 15,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 4.5\u00b0C",
    "timestamp": {
      "$date": "2024-03-15T01:00:00Z"
    }
  },
  {
    "log_id": "LOG040",
    "sensor_id": "SENS_058",
    "region_id": 4,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 13%",
    "timestamp": {
      "$date": "2024-03-06T05:00:00Z"
    }
  },
  {
    "log_id": "LOG041",
    "sensor_id": "SENS_034",
    "region_id": 10,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 4.3\u00b0C",
    "timestamp": {
      "$date": "2024-01-25T09:00:00Z"
    }
  },
  {
    "log_id": "LOG042",
    "sensor_id": "SENS_010",
    "region_id": 12,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 72 km/h",
    "timestamp": {
      "$date": "2024-03-27T20:00:00Z"
    }
  },
  {
    "log_id": "LOG043",
    "sensor_id": "SENS_090",
    "region_id": 6,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 13%",
    "timestamp": {
      "$date": "2024-03-08T12:00:00Z"
    }
  },
  {
    "log_id": "LOG044",
    "sensor_id": "SENS_090",
    "region_id": 1,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 73 km/h",
    "timestamp": {
      "$date": "2024-01-03T20:00:00Z"
    }
  },
  {
    "log_id": "LOG045",
    "sensor_id": "SENS_065",
    "region_id": 9,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 78 km/h",
    "timestamp": {
      "$date": "2024-01-06T03:00:00Z"
    }
  },
  {
    "log_id": "LOG046",
    "sensor_id": "SENS_009",
    "region_id": 10,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 2.7\u00b0C",
    "timestamp": {
      "$date": "2024-01-28T04:00:00Z"
    }
  },
  {
    "log_id": "LOG047",
    "sensor_id": "SENS_055",
    "region_id": 12,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 30%",
    "timestamp": {
      "$date": "2024-01-11T21:00:00Z"
    }
  },
  {
    "log_id": "LOG048",
    "sensor_id": "SENS_095",
    "region_id": 7,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 25%",
    "timestamp": {
      "$date": "2024-02-16T12:00:00Z"
    }
  },
  {
    "log_id": "LOG049",
    "sensor_id": "SENS_084",
    "region_id": 19,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 226mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-09T11:00:00Z"
    }
  },
  {
    "log_id": "LOG050",
    "sensor_id": "SENS_034",
    "region_id": 12,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 29%",
    "timestamp": {
      "$date": "2024-01-10T12:00:00Z"
    }
  },
  {
    "log_id": "LOG051",
    "sensor_id": "SENS_059",
    "region_id": 16,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 37%",
    "timestamp": {
      "$date": "2024-03-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG052",
    "sensor_id": "SENS_053",
    "region_id": 10,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-03-21T01:00:00Z"
    }
  },
  {
    "log_id": "LOG053",
    "sensor_id": "SENS_099",
    "region_id": 2,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 137mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-18T05:00:00Z"
    }
  },
  {
    "log_id": "LOG054",
    "sensor_id": "SENS_096",
    "region_id": 16,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 18%",
    "timestamp": {
      "$date": "2024-02-28T19:00:00Z"
    }
  },
  {
    "log_id": "LOG055",
    "sensor_id": "SENS_037",
    "region_id": 1,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 984 hPa",
    "timestamp": {
      "$date": "2024-02-18T21:00:00Z"
    }
  },
  {
    "log_id": "LOG056",
    "sensor_id": "SENS_020",
    "region_id": 13,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 4.4\u00b0C",
    "timestamp": {
      "$date": "2024-02-21T01:00:00Z"
    }
  },
  {
    "log_id": "LOG057",
    "sensor_id": "SENS_087",
    "region_id": 12,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 186mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-15T00:00:00Z"
    }
  },
  {
    "log_id": "LOG058",
    "sensor_id": "SENS_064",
    "region_id": 1,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 12%",
    "timestamp": {
      "$date": "2024-02-21T09:00:00Z"
    }
  },
  {
    "log_id": "LOG059",
    "sensor_id": "SENS_031",
    "region_id": 7,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 27%",
    "timestamp": {
      "$date": "2024-01-25T03:00:00Z"
    }
  },
  {
    "log_id": "LOG060",
    "sensor_id": "SENS_005",
    "region_id": 10,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 90 km/h",
    "timestamp": {
      "$date": "2024-03-19T04:00:00Z"
    }
  },
  {
    "log_id": "LOG061",
    "sensor_id": "SENS_047",
    "region_id": 19,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 52%",
    "timestamp": {
      "$date": "2024-01-14T16:00:00Z"
    }
  },
  {
    "log_id": "LOG062",
    "sensor_id": "SENS_009",
    "region_id": 10,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 986 hPa",
    "timestamp": {
      "$date": "2024-01-27T03:00:00Z"
    }
  },
  {
    "log_id": "LOG063",
    "sensor_id": "SENS_003",
    "region_id": 3,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 996 hPa",
    "timestamp": {
      "$date": "2024-02-29T18:00:00Z"
    }
  },
  {
    "log_id": "LOG064",
    "sensor_id": "SENS_052",
    "region_id": 5,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 293mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-04T02:00:00Z"
    }
  },
  {
    "log_id": "LOG065",
    "sensor_id": "SENS_003",
    "region_id": 9,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 29%",
    "timestamp": {
      "$date": "2024-01-02T05:00:00Z"
    }
  },
  {
    "log_id": "LOG066",
    "sensor_id": "SENS_052",
    "region_id": 14,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 122mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-17T06:00:00Z"
    }
  },
  {
    "log_id": "LOG067",
    "sensor_id": "SENS_042",
    "region_id": 20,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 3.8\u00b0C",
    "timestamp": {
      "$date": "2024-03-10T00:00:00Z"
    }
  },
  {
    "log_id": "LOG068",
    "sensor_id": "SENS_035",
    "region_id": 5,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-01-19T05:00:00Z"
    }
  },
  {
    "log_id": "LOG069",
    "sensor_id": "SENS_021",
    "region_id": 5,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 65 km/h",
    "timestamp": {
      "$date": "2024-01-24T17:00:00Z"
    }
  },
  {
    "log_id": "LOG070",
    "sensor_id": "SENS_053",
    "region_id": 5,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 13",
    "timestamp": {
      "$date": "2024-01-13T01:00:00Z"
    }
  },
  {
    "log_id": "LOG071",
    "sensor_id": "SENS_060",
    "region_id": 20,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 21%",
    "timestamp": {
      "$date": "2024-03-11T11:00:00Z"
    }
  },
  {
    "log_id": "LOG072",
    "sensor_id": "SENS_084",
    "region_id": 16,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 59%",
    "timestamp": {
      "$date": "2024-03-09T01:00:00Z"
    }
  },
  {
    "log_id": "LOG073",
    "sensor_id": "SENS_013",
    "region_id": 6,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 33%",
    "timestamp": {
      "$date": "2024-02-06T23:00:00Z"
    }
  },
  {
    "log_id": "LOG074",
    "sensor_id": "SENS_024",
    "region_id": 13,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 996 hPa",
    "timestamp": {
      "$date": "2024-01-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG075",
    "sensor_id": "SENS_013",
    "region_id": 2,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 162mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-16T20:00:00Z"
    }
  },
  {
    "log_id": "LOG076",
    "sensor_id": "SENS_047",
    "region_id": 15,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 2.1\u00b0C",
    "timestamp": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "log_id": "LOG077",
    "sensor_id": "SENS_018",
    "region_id": 16,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 4.1\u00b0C",
    "timestamp": {
      "$date": "2024-01-22T17:00:00Z"
    }
  },
  {
    "log_id": "LOG078",
    "sensor_id": "SENS_015",
    "region_id": 6,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.4\u00b0C",
    "timestamp": {
      "$date": "2024-02-06T04:00:00Z"
    }
  },
  {
    "log_id": "LOG079",
    "sensor_id": "SENS_059",
    "region_id": 11,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 58 km/h",
    "timestamp": {
      "$date": "2024-03-15T08:00:00Z"
    }
  },
  {
    "log_id": "LOG080",
    "sensor_id": "SENS_054",
    "region_id": 10,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 1.9\u00b0C",
    "timestamp": {
      "$date": "2024-02-16T00:00:00Z"
    }
  },
  {
    "log_id": "LOG081",
    "sensor_id": "SENS_016",
    "region_id": 4,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 204mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-28T07:00:00Z"
    }
  },
  {
    "log_id": "LOG082",
    "sensor_id": "SENS_041",
    "region_id": 11,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 51 km/h",
    "timestamp": {
      "$date": "2024-01-26T20:00:00Z"
    }
  },
  {
    "log_id": "LOG083",
    "sensor_id": "SENS_084",
    "region_id": 9,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 225mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-25T16:00:00Z"
    }
  },
  {
    "log_id": "LOG084",
    "sensor_id": "SENS_063",
    "region_id": 19,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 986 hPa",
    "timestamp": {
      "$date": "2024-01-20T13:00:00Z"
    }
  },
  {
    "log_id": "LOG085",
    "sensor_id": "SENS_064",
    "region_id": 19,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 204mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-03T07:00:00Z"
    }
  },
  {
    "log_id": "LOG086",
    "sensor_id": "SENS_028",
    "region_id": 5,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 23%",
    "timestamp": {
      "$date": "2024-01-09T17:00:00Z"
    }
  },
  {
    "log_id": "LOG087",
    "sensor_id": "SENS_078",
    "region_id": 12,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 49%",
    "timestamp": {
      "$date": "2024-01-12T06:00:00Z"
    }
  },
  {
    "log_id": "LOG088",
    "sensor_id": "SENS_069",
    "region_id": 5,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 276mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-01T04:00:00Z"
    }
  },
  {
    "log_id": "LOG089",
    "sensor_id": "SENS_013",
    "region_id": 2,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 74 km/h",
    "timestamp": {
      "$date": "2024-03-26T22:00:00Z"
    }
  },
  {
    "log_id": "LOG090",
    "sensor_id": "SENS_058",
    "region_id": 12,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 1.6\u00b0C",
    "timestamp": {
      "$date": "2024-03-12T03:00:00Z"
    }
  },
  {
    "log_id": "LOG091",
    "sensor_id": "SENS_011",
    "region_id": 16,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 238mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-09T01:00:00Z"
    }
  },
  {
    "log_id": "LOG092",
    "sensor_id": "SENS_074",
    "region_id": 17,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 13%",
    "timestamp": {
      "$date": "2024-02-23T16:00:00Z"
    }
  },
  {
    "log_id": "LOG093",
    "sensor_id": "SENS_058",
    "region_id": 8,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.3\u00b0C",
    "timestamp": {
      "$date": "2024-01-22T00:00:00Z"
    }
  },
  {
    "log_id": "LOG094",
    "sensor_id": "SENS_094",
    "region_id": 9,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 48%",
    "timestamp": {
      "$date": "2024-01-20T01:00:00Z"
    }
  },
  {
    "log_id": "LOG095",
    "sensor_id": "SENS_080",
    "region_id": 20,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-03-03T00:00:00Z"
    }
  },
  {
    "log_id": "LOG096",
    "sensor_id": "SENS_086",
    "region_id": 10,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 980 hPa",
    "timestamp": {
      "$date": "2024-02-15T20:00:00Z"
    }
  },
  {
    "log_id": "LOG097",
    "sensor_id": "SENS_013",
    "region_id": 12,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 20%",
    "timestamp": {
      "$date": "2024-02-29T23:00:00Z"
    }
  },
  {
    "log_id": "LOG098",
    "sensor_id": "SENS_091",
    "region_id": 2,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-02-27T12:00:00Z"
    }
  },
  {
    "log_id": "LOG099",
    "sensor_id": "SENS_098",
    "region_id": 20,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 46%",
    "timestamp": {
      "$date": "2024-02-24T04:00:00Z"
    }
  },
  {
    "log_id": "LOG100",
    "sensor_id": "SENS_033",
    "region_id": 20,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-02-02T23:00:00Z"
    }
  },
  {
    "log_id": "LOG101",
    "sensor_id": "SENS_069",
    "region_id": 18,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 10%",
    "timestamp": {
      "$date": "2024-01-04T02:00:00Z"
    }
  },
  {
    "log_id": "LOG102",
    "sensor_id": "SENS_080",
    "region_id": 5,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 12%",
    "timestamp": {
      "$date": "2024-02-16T13:00:00Z"
    }
  },
  {
    "log_id": "LOG103",
    "sensor_id": "SENS_062",
    "region_id": 19,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 90 km/h",
    "timestamp": {
      "$date": "2024-01-24T03:00:00Z"
    }
  },
  {
    "log_id": "LOG104",
    "sensor_id": "SENS_082",
    "region_id": 13,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 14",
    "timestamp": {
      "$date": "2024-02-26T04:00:00Z"
    }
  },
  {
    "log_id": "LOG105",
    "sensor_id": "SENS_030",
    "region_id": 10,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 58%",
    "timestamp": {
      "$date": "2024-01-19T10:00:00Z"
    }
  },
  {
    "log_id": "LOG106",
    "sensor_id": "SENS_035",
    "region_id": 3,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 994 hPa",
    "timestamp": {
      "$date": "2024-02-07T18:00:00Z"
    }
  },
  {
    "log_id": "LOG107",
    "sensor_id": "SENS_056",
    "region_id": 18,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 2.2\u00b0C",
    "timestamp": {
      "$date": "2024-01-28T11:00:00Z"
    }
  },
  {
    "log_id": "LOG108",
    "sensor_id": "SENS_072",
    "region_id": 11,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 984 hPa",
    "timestamp": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "log_id": "LOG109",
    "sensor_id": "SENS_029",
    "region_id": 14,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 53 km/h",
    "timestamp": {
      "$date": "2024-02-20T12:00:00Z"
    }
  },
  {
    "log_id": "LOG110",
    "sensor_id": "SENS_012",
    "region_id": 14,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 10",
    "timestamp": {
      "$date": "2024-01-26T11:00:00Z"
    }
  },
  {
    "log_id": "LOG111",
    "sensor_id": "SENS_029",
    "region_id": 10,
    "event_type": "pressure_anomaly",
    "severity": "info",
    "message": "Barometric pressure dropped to 997 hPa",
    "timestamp": {
      "$date": "2024-03-04T09:00:00Z"
    }
  },
  {
    "log_id": "LOG112",
    "sensor_id": "SENS_043",
    "region_id": 13,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 264mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-21T05:00:00Z"
    }
  },
  {
    "log_id": "LOG113",
    "sensor_id": "SENS_040",
    "region_id": 7,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 227mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-02T23:00:00Z"
    }
  },
  {
    "log_id": "LOG114",
    "sensor_id": "SENS_037",
    "region_id": 5,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 2.6\u00b0C",
    "timestamp": {
      "$date": "2024-03-24T01:00:00Z"
    }
  },
  {
    "log_id": "LOG115",
    "sensor_id": "SENS_019",
    "region_id": 20,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 997 hPa",
    "timestamp": {
      "$date": "2024-03-29T09:00:00Z"
    }
  },
  {
    "log_id": "LOG116",
    "sensor_id": "SENS_054",
    "region_id": 14,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 1.6\u00b0C",
    "timestamp": {
      "$date": "2024-01-16T10:00:00Z"
    }
  },
  {
    "log_id": "LOG117",
    "sensor_id": "SENS_025",
    "region_id": 17,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 992 hPa",
    "timestamp": {
      "$date": "2024-03-14T08:00:00Z"
    }
  },
  {
    "log_id": "LOG118",
    "sensor_id": "SENS_044",
    "region_id": 1,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-01-18T14:00:00Z"
    }
  },
  {
    "log_id": "LOG119",
    "sensor_id": "SENS_020",
    "region_id": 19,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 52 km/h",
    "timestamp": {
      "$date": "2024-03-03T20:00:00Z"
    }
  },
  {
    "log_id": "LOG120",
    "sensor_id": "SENS_039",
    "region_id": 6,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 4.1\u00b0C",
    "timestamp": {
      "$date": "2024-03-26T05:00:00Z"
    }
  },
  {
    "log_id": "LOG121",
    "sensor_id": "SENS_024",
    "region_id": 7,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 77 km/h",
    "timestamp": {
      "$date": "2024-03-29T10:00:00Z"
    }
  },
  {
    "log_id": "LOG122",
    "sensor_id": "SENS_069",
    "region_id": 14,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 67 km/h",
    "timestamp": {
      "$date": "2024-03-06T13:00:00Z"
    }
  },
  {
    "log_id": "LOG123",
    "sensor_id": "SENS_077",
    "region_id": 11,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-02-08T05:00:00Z"
    }
  },
  {
    "log_id": "LOG124",
    "sensor_id": "SENS_051",
    "region_id": 9,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 121mm in 24hrs",
    "timestamp": {
      "$date": "2024-02-06T09:00:00Z"
    }
  },
  {
    "log_id": "LOG125",
    "sensor_id": "SENS_014",
    "region_id": 2,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 987 hPa",
    "timestamp": {
      "$date": "2024-02-11T02:00:00Z"
    }
  },
  {
    "log_id": "LOG126",
    "sensor_id": "SENS_051",
    "region_id": 20,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 57%",
    "timestamp": {
      "$date": "2024-01-24T20:00:00Z"
    }
  },
  {
    "log_id": "LOG127",
    "sensor_id": "SENS_021",
    "region_id": 13,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 10",
    "timestamp": {
      "$date": "2024-01-14T16:00:00Z"
    }
  },
  {
    "log_id": "LOG128",
    "sensor_id": "SENS_100",
    "region_id": 15,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-03-30T20:00:00Z"
    }
  },
  {
    "log_id": "LOG129",
    "sensor_id": "SENS_083",
    "region_id": 5,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 19%",
    "timestamp": {
      "$date": "2024-02-02T14:00:00Z"
    }
  },
  {
    "log_id": "LOG130",
    "sensor_id": "SENS_045",
    "region_id": 12,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 35%",
    "timestamp": {
      "$date": "2024-02-17T20:00:00Z"
    }
  },
  {
    "log_id": "LOG131",
    "sensor_id": "SENS_028",
    "region_id": 11,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 96 km/h",
    "timestamp": {
      "$date": "2024-03-03T09:00:00Z"
    }
  },
  {
    "log_id": "LOG132",
    "sensor_id": "SENS_079",
    "region_id": 1,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 142mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "log_id": "LOG133",
    "sensor_id": "SENS_050",
    "region_id": 2,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 24%",
    "timestamp": {
      "$date": "2024-03-25T17:00:00Z"
    }
  },
  {
    "log_id": "LOG134",
    "sensor_id": "SENS_087",
    "region_id": 10,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 26%",
    "timestamp": {
      "$date": "2024-01-12T05:00:00Z"
    }
  },
  {
    "log_id": "LOG135",
    "sensor_id": "SENS_013",
    "region_id": 10,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 24%",
    "timestamp": {
      "$date": "2024-03-09T05:00:00Z"
    }
  },
  {
    "log_id": "LOG136",
    "sensor_id": "SENS_035",
    "region_id": 11,
    "event_type": "rainfall_heavy",
    "severity": "critical",
    "message": "Heavy rainfall detected: 118mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-30T18:00:00Z"
    }
  },
  {
    "log_id": "LOG137",
    "sensor_id": "SENS_048",
    "region_id": 11,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 4.3\u00b0C",
    "timestamp": {
      "$date": "2024-03-08T18:00:00Z"
    }
  },
  {
    "log_id": "LOG138",
    "sensor_id": "SENS_084",
    "region_id": 14,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 80 km/h",
    "timestamp": {
      "$date": "2024-03-06T14:00:00Z"
    }
  },
  {
    "log_id": "LOG139",
    "sensor_id": "SENS_081",
    "region_id": 9,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 20%",
    "timestamp": {
      "$date": "2024-02-26T13:00:00Z"
    }
  },
  {
    "log_id": "LOG140",
    "sensor_id": "SENS_033",
    "region_id": 3,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 14%",
    "timestamp": {
      "$date": "2024-03-24T04:00:00Z"
    }
  },
  {
    "log_id": "LOG141",
    "sensor_id": "SENS_009",
    "region_id": 8,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 12",
    "timestamp": {
      "$date": "2024-03-28T15:00:00Z"
    }
  },
  {
    "log_id": "LOG142",
    "sensor_id": "SENS_033",
    "region_id": 9,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 22%",
    "timestamp": {
      "$date": "2024-03-09T15:00:00Z"
    }
  },
  {
    "log_id": "LOG143",
    "sensor_id": "SENS_049",
    "region_id": 4,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 3.8\u00b0C",
    "timestamp": {
      "$date": "2024-01-08T00:00:00Z"
    }
  },
  {
    "log_id": "LOG144",
    "sensor_id": "SENS_028",
    "region_id": 11,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 60%",
    "timestamp": {
      "$date": "2024-01-28T04:00:00Z"
    }
  },
  {
    "log_id": "LOG145",
    "sensor_id": "SENS_018",
    "region_id": 8,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.4\u00b0C",
    "timestamp": {
      "$date": "2024-02-23T19:00:00Z"
    }
  },
  {
    "log_id": "LOG146",
    "sensor_id": "SENS_008",
    "region_id": 15,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 46%",
    "timestamp": {
      "$date": "2024-01-02T13:00:00Z"
    }
  },
  {
    "log_id": "LOG147",
    "sensor_id": "SENS_049",
    "region_id": 12,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 108 km/h",
    "timestamp": {
      "$date": "2024-02-19T20:00:00Z"
    }
  },
  {
    "log_id": "LOG148",
    "sensor_id": "SENS_085",
    "region_id": 9,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 240mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-11T20:00:00Z"
    }
  },
  {
    "log_id": "LOG149",
    "sensor_id": "SENS_013",
    "region_id": 8,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 21%",
    "timestamp": {
      "$date": "2024-02-28T14:00:00Z"
    }
  },
  {
    "log_id": "LOG150",
    "sensor_id": "SENS_098",
    "region_id": 6,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 2.8\u00b0C",
    "timestamp": {
      "$date": "2024-03-13T22:00:00Z"
    }
  },
  {
    "log_id": "LOG151",
    "sensor_id": "SENS_011",
    "region_id": 9,
    "event_type": "wind_speed_high",
    "severity": "info",
    "message": "Wind speed reached 119 km/h",
    "timestamp": {
      "$date": "2024-03-11T03:00:00Z"
    }
  },
  {
    "log_id": "LOG152",
    "sensor_id": "SENS_041",
    "region_id": 16,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.8\u00b0C",
    "timestamp": {
      "$date": "2024-02-02T04:00:00Z"
    }
  },
  {
    "log_id": "LOG153",
    "sensor_id": "SENS_093",
    "region_id": 6,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 210mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-28T15:00:00Z"
    }
  },
  {
    "log_id": "LOG154",
    "sensor_id": "SENS_055",
    "region_id": 5,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 52%",
    "timestamp": {
      "$date": "2024-02-06T04:00:00Z"
    }
  },
  {
    "log_id": "LOG155",
    "sensor_id": "SENS_059",
    "region_id": 2,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 994 hPa",
    "timestamp": {
      "$date": "2024-02-23T17:00:00Z"
    }
  },
  {
    "log_id": "LOG156",
    "sensor_id": "SENS_035",
    "region_id": 5,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 25%",
    "timestamp": {
      "$date": "2024-02-21T11:00:00Z"
    }
  },
  {
    "log_id": "LOG157",
    "sensor_id": "SENS_095",
    "region_id": 4,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.9\u00b0C",
    "timestamp": {
      "$date": "2024-02-29T06:00:00Z"
    }
  },
  {
    "log_id": "LOG158",
    "sensor_id": "SENS_055",
    "region_id": 5,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-01-02T04:00:00Z"
    }
  },
  {
    "log_id": "LOG159",
    "sensor_id": "SENS_063",
    "region_id": 12,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.1\u00b0C",
    "timestamp": {
      "$date": "2024-03-18T12:00:00Z"
    }
  },
  {
    "log_id": "LOG160",
    "sensor_id": "SENS_060",
    "region_id": 13,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 3.2\u00b0C",
    "timestamp": {
      "$date": "2024-01-18T14:00:00Z"
    }
  },
  {
    "log_id": "LOG161",
    "sensor_id": "SENS_054",
    "region_id": 4,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 995 hPa",
    "timestamp": {
      "$date": "2024-01-02T13:00:00Z"
    }
  },
  {
    "log_id": "LOG162",
    "sensor_id": "SENS_088",
    "region_id": 18,
    "event_type": "humidity_drop",
    "severity": "critical",
    "message": "Humidity dropped below 19%",
    "timestamp": {
      "$date": "2024-02-18T21:00:00Z"
    }
  },
  {
    "log_id": "LOG163",
    "sensor_id": "SENS_100",
    "region_id": 9,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 4.7\u00b0C",
    "timestamp": {
      "$date": "2024-01-25T04:00:00Z"
    }
  },
  {
    "log_id": "LOG164",
    "sensor_id": "SENS_007",
    "region_id": 10,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 60 km/h",
    "timestamp": {
      "$date": "2024-03-06T06:00:00Z"
    }
  },
  {
    "log_id": "LOG165",
    "sensor_id": "SENS_100",
    "region_id": 4,
    "event_type": "air_quality_degraded",
    "severity": "warning",
    "message": "PM2.5 levels increased by 36%",
    "timestamp": {
      "$date": "2024-03-04T13:00:00Z"
    }
  },
  {
    "log_id": "LOG166",
    "sensor_id": "SENS_047",
    "region_id": 17,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-01-27T22:00:00Z"
    }
  },
  {
    "log_id": "LOG167",
    "sensor_id": "SENS_053",
    "region_id": 8,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 23%",
    "timestamp": {
      "$date": "2024-02-07T21:00:00Z"
    }
  },
  {
    "log_id": "LOG168",
    "sensor_id": "SENS_037",
    "region_id": 8,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-03-17T06:00:00Z"
    }
  },
  {
    "log_id": "LOG169",
    "sensor_id": "SENS_034",
    "region_id": 3,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-01-27T07:00:00Z"
    }
  },
  {
    "log_id": "LOG170",
    "sensor_id": "SENS_024",
    "region_id": 7,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 162mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-05T00:00:00Z"
    }
  },
  {
    "log_id": "LOG171",
    "sensor_id": "SENS_032",
    "region_id": 6,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 989 hPa",
    "timestamp": {
      "$date": "2024-02-20T09:00:00Z"
    }
  },
  {
    "log_id": "LOG172",
    "sensor_id": "SENS_043",
    "region_id": 7,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 107 km/h",
    "timestamp": {
      "$date": "2024-01-26T05:00:00Z"
    }
  },
  {
    "log_id": "LOG173",
    "sensor_id": "SENS_074",
    "region_id": 11,
    "event_type": "wind_speed_high",
    "severity": "critical",
    "message": "Wind speed reached 110 km/h",
    "timestamp": {
      "$date": "2024-02-14T17:00:00Z"
    }
  },
  {
    "log_id": "LOG174",
    "sensor_id": "SENS_061",
    "region_id": 19,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 17%",
    "timestamp": {
      "$date": "2024-01-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG175",
    "sensor_id": "SENS_026",
    "region_id": 7,
    "event_type": "pressure_anomaly",
    "severity": "info",
    "message": "Barometric pressure dropped to 997 hPa",
    "timestamp": {
      "$date": "2024-02-11T10:00:00Z"
    }
  },
  {
    "log_id": "LOG176",
    "sensor_id": "SENS_036",
    "region_id": 7,
    "event_type": "uv_index_high",
    "severity": "critical",
    "message": "UV index reached 9",
    "timestamp": {
      "$date": "2024-02-14T06:00:00Z"
    }
  },
  {
    "log_id": "LOG177",
    "sensor_id": "SENS_011",
    "region_id": 19,
    "event_type": "pressure_anomaly",
    "severity": "warning",
    "message": "Barometric pressure dropped to 984 hPa",
    "timestamp": {
      "$date": "2024-03-31T15:00:00Z"
    }
  },
  {
    "log_id": "LOG178",
    "sensor_id": "SENS_012",
    "region_id": 1,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 2.3\u00b0C",
    "timestamp": {
      "$date": "2024-01-05T15:00:00Z"
    }
  },
  {
    "log_id": "LOG179",
    "sensor_id": "SENS_092",
    "region_id": 10,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-01-05T23:00:00Z"
    }
  },
  {
    "log_id": "LOG180",
    "sensor_id": "SENS_030",
    "region_id": 5,
    "event_type": "pressure_anomaly",
    "severity": "critical",
    "message": "Barometric pressure dropped to 983 hPa",
    "timestamp": {
      "$date": "2024-03-18T08:00:00Z"
    }
  },
  {
    "log_id": "LOG181",
    "sensor_id": "SENS_076",
    "region_id": 3,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 87 km/h",
    "timestamp": {
      "$date": "2024-03-21T06:00:00Z"
    }
  },
  {
    "log_id": "LOG182",
    "sensor_id": "SENS_038",
    "region_id": 1,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 28%",
    "timestamp": {
      "$date": "2024-01-27T01:00:00Z"
    }
  },
  {
    "log_id": "LOG183",
    "sensor_id": "SENS_027",
    "region_id": 20,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 143mm in 24hrs",
    "timestamp": {
      "$date": "2024-01-30T04:00:00Z"
    }
  },
  {
    "log_id": "LOG184",
    "sensor_id": "SENS_048",
    "region_id": 1,
    "event_type": "rainfall_heavy",
    "severity": "info",
    "message": "Heavy rainfall detected: 258mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-01T10:00:00Z"
    }
  },
  {
    "log_id": "LOG185",
    "sensor_id": "SENS_035",
    "region_id": 16,
    "event_type": "air_quality_degraded",
    "severity": "critical",
    "message": "PM2.5 levels increased by 56%",
    "timestamp": {
      "$date": "2024-03-12T11:00:00Z"
    }
  },
  {
    "log_id": "LOG186",
    "sensor_id": "SENS_040",
    "region_id": 18,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 30%",
    "timestamp": {
      "$date": "2024-03-13T09:00:00Z"
    }
  },
  {
    "log_id": "LOG187",
    "sensor_id": "SENS_023",
    "region_id": 14,
    "event_type": "air_quality_degraded",
    "severity": "info",
    "message": "PM2.5 levels increased by 27%",
    "timestamp": {
      "$date": "2024-02-06T06:00:00Z"
    }
  },
  {
    "log_id": "LOG188",
    "sensor_id": "SENS_069",
    "region_id": 17,
    "event_type": "temperature_spike",
    "severity": "critical",
    "message": "Temperature exceeded threshold by 2.0\u00b0C",
    "timestamp": {
      "$date": "2024-02-20T13:00:00Z"
    }
  },
  {
    "log_id": "LOG189",
    "sensor_id": "SENS_010",
    "region_id": 6,
    "event_type": "wind_speed_high",
    "severity": "warning",
    "message": "Wind speed reached 60 km/h",
    "timestamp": {
      "$date": "2024-03-22T00:00:00Z"
    }
  },
  {
    "log_id": "LOG190",
    "sensor_id": "SENS_019",
    "region_id": 9,
    "event_type": "temperature_spike",
    "severity": "warning",
    "message": "Temperature exceeded threshold by 4.4\u00b0C",
    "timestamp": {
      "$date": "2024-03-21T12:00:00Z"
    }
  },
  {
    "log_id": "LOG191",
    "sensor_id": "SENS_014",
    "region_id": 8,
    "event_type": "temperature_spike",
    "severity": "info",
    "message": "Temperature exceeded threshold by 2.9\u00b0C",
    "timestamp": {
      "$date": "2024-02-25T21:00:00Z"
    }
  },
  {
    "log_id": "LOG192",
    "sensor_id": "SENS_051",
    "region_id": 3,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 12",
    "timestamp": {
      "$date": "2024-03-26T00:00:00Z"
    }
  },
  {
    "log_id": "LOG193",
    "sensor_id": "SENS_074",
    "region_id": 18,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 13",
    "timestamp": {
      "$date": "2024-01-09T08:00:00Z"
    }
  },
  {
    "log_id": "LOG194",
    "sensor_id": "SENS_077",
    "region_id": 19,
    "event_type": "rainfall_heavy",
    "severity": "warning",
    "message": "Heavy rainfall detected: 269mm in 24hrs",
    "timestamp": {
      "$date": "2024-03-05T18:00:00Z"
    }
  },
  {
    "log_id": "LOG195",
    "sensor_id": "SENS_009",
    "region_id": 3,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 21%",
    "timestamp": {
      "$date": "2024-03-12T16:00:00Z"
    }
  },
  {
    "log_id": "LOG196",
    "sensor_id": "SENS_060",
    "region_id": 13,
    "event_type": "humidity_drop",
    "severity": "info",
    "message": "Humidity dropped below 24%",
    "timestamp": {
      "$date": "2024-03-15T14:00:00Z"
    }
  },
  {
    "log_id": "LOG197",
    "sensor_id": "SENS_060",
    "region_id": 1,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 11",
    "timestamp": {
      "$date": "2024-03-21T21:00:00Z"
    }
  },
  {
    "log_id": "LOG198",
    "sensor_id": "SENS_045",
    "region_id": 12,
    "event_type": "uv_index_high",
    "severity": "warning",
    "message": "UV index reached 13",
    "timestamp": {
      "$date": "2024-02-21T08:00:00Z"
    }
  },
  {
    "log_id": "LOG199",
    "sensor_id": "SENS_014",
    "region_id": 5,
    "event_type": "humidity_drop",
    "severity": "warning",
    "message": "Humidity dropped below 17%",
    "timestamp": {
      "$date": "2024-01-01T06:00:00Z"
    }
  },
  {
    "log_id": "LOG200",
    "sensor_id": "SENS_053",
    "region_id": 5,
    "event_type": "uv_index_high",
    "severity": "info",
    "message": "UV index reached 15",
    "timestamp": {
      "$date": "2024-03-13T13:00:00Z"
    }
  }
]);

// Air Quality History
db.Air_Quality_History.insertMany([
  {
    "record_id": "AQH001",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 233,
    "pollutants": {
      "pm2_5": 104.91,
      "pm10": 45.8,
      "co": 11.14,
      "no2": 11.45,
      "o3": 12.56,
      "so2": 8.46
    },
    "readings": {
      "temperature": 7.52,
      "humidity": 54.7,
      "pressure": 985.73
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH002",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 133,
    "pollutants": {
      "pm2_5": 85.61,
      "pm10": 95.11,
      "co": 0.12,
      "no2": 85.79,
      "o3": 61.51,
      "so2": 12.22
    },
    "readings": {
      "temperature": 13.25,
      "humidity": 36.43,
      "pressure": 986.96
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH003",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 41,
    "pollutants": {
      "pm2_5": 90.44,
      "pm10": 130.31,
      "co": 10.93,
      "no2": 88.34,
      "o3": 13.52,
      "so2": 9.38
    },
    "readings": {
      "temperature": 8.6,
      "humidity": 49.48,
      "pressure": 1029.33
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH004",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 135,
    "pollutants": {
      "pm2_5": 73.83,
      "pm10": 128.85,
      "co": 8.27,
      "no2": 25.97,
      "o3": 74.81,
      "so2": 45.16
    },
    "readings": {
      "temperature": 12.79,
      "humidity": 42.81,
      "pressure": 998.16
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH005",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 195,
    "pollutants": {
      "pm2_5": 134.36,
      "pm10": 30.92,
      "co": 3.73,
      "no2": 36.54,
      "o3": 169.24,
      "so2": 10.1
    },
    "readings": {
      "temperature": 21.0,
      "humidity": 89.02,
      "pressure": 1026.33
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-05T00:00:00Z"
    }
  },
  {
    "record_id": "AQH006",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 250,
    "pollutants": {
      "pm2_5": 21.99,
      "pm10": 166.5,
      "co": 8.42,
      "no2": 42.41,
      "o3": 17.16,
      "so2": 15.45
    },
    "readings": {
      "temperature": 17.06,
      "humidity": 35.77,
      "pressure": 994.39
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-21T00:00:00Z"
    }
  },
  {
    "record_id": "AQH007",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 46,
    "pollutants": {
      "pm2_5": 71.43,
      "pm10": 152.48,
      "co": 9.9,
      "no2": 46.22,
      "o3": 71.64,
      "so2": 45.56
    },
    "readings": {
      "temperature": 26.79,
      "humidity": 77.22,
      "pressure": 985.44
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH008",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 169,
    "pollutants": {
      "pm2_5": 6.54,
      "pm10": 38.62,
      "co": 8.44,
      "no2": 40.21,
      "o3": 120.03,
      "so2": 31.07
    },
    "readings": {
      "temperature": 9.85,
      "humidity": 30.08,
      "pressure": 988.99
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-13T00:00:00Z"
    }
  },
  {
    "record_id": "AQH009",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 232,
    "pollutants": {
      "pm2_5": 42.78,
      "pm10": 99.02,
      "co": 4.69,
      "no2": 88.59,
      "o3": 75.84,
      "so2": 7.49
    },
    "readings": {
      "temperature": 13.84,
      "humidity": 73.32,
      "pressure": 1028.9
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH010",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 37,
    "pollutants": {
      "pm2_5": 59.75,
      "pm10": 15.97,
      "co": 13.44,
      "no2": 79.89,
      "o3": 162.07,
      "so2": 25.91
    },
    "readings": {
      "temperature": 14.67,
      "humidity": 84.86,
      "pressure": 1027.93
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH011",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 47,
    "pollutants": {
      "pm2_5": 88.3,
      "pm10": 68.63,
      "co": 9.03,
      "no2": 82.61,
      "o3": 118.43,
      "so2": 47.77
    },
    "readings": {
      "temperature": 20.51,
      "humidity": 49.72,
      "pressure": 999.64
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH012",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 48,
    "pollutants": {
      "pm2_5": 147.76,
      "pm10": 61.48,
      "co": 3.23,
      "no2": 64.65,
      "o3": 138.76,
      "so2": 15.25
    },
    "readings": {
      "temperature": 24.06,
      "humidity": 67.65,
      "pressure": 994.97
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH013",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 42,
    "pollutants": {
      "pm2_5": 138.49,
      "pm10": 12.18,
      "co": 8.19,
      "no2": 74.87,
      "o3": 65.93,
      "so2": 17.26
    },
    "readings": {
      "temperature": 28.82,
      "humidity": 79.09,
      "pressure": 1011.37
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH014",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 50,
    "pollutants": {
      "pm2_5": 121.81,
      "pm10": 174.41,
      "co": 4.28,
      "no2": 23.54,
      "o3": 123.69,
      "so2": 20.8
    },
    "readings": {
      "temperature": 5.75,
      "humidity": 31.93,
      "pressure": 1015.54
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH015",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 231,
    "pollutants": {
      "pm2_5": 146.69,
      "pm10": 112.75,
      "co": 9.53,
      "no2": 22.71,
      "o3": 152.31,
      "so2": 28.46
    },
    "readings": {
      "temperature": 15.3,
      "humidity": 54.08,
      "pressure": 986.97
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH016",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 59,
    "pollutants": {
      "pm2_5": 117.77,
      "pm10": 109.43,
      "co": 10.76,
      "no2": 67.47,
      "o3": 122.72,
      "so2": 34.18
    },
    "readings": {
      "temperature": 14.67,
      "humidity": 87.73,
      "pressure": 989.88
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-03T00:00:00Z"
    }
  },
  {
    "record_id": "AQH017",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 222,
    "pollutants": {
      "pm2_5": 79.32,
      "pm10": 195.06,
      "co": 7.96,
      "no2": 67.72,
      "o3": 126.75,
      "so2": 16.97
    },
    "readings": {
      "temperature": 28.82,
      "humidity": 79.01,
      "pressure": 995.0
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-13T00:00:00Z"
    }
  },
  {
    "record_id": "AQH018",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 246,
    "pollutants": {
      "pm2_5": 96.72,
      "pm10": 124.57,
      "co": 3.14,
      "no2": 97.01,
      "o3": 123.37,
      "so2": 48.18
    },
    "readings": {
      "temperature": 11.32,
      "humidity": 58.41,
      "pressure": 1029.37
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH019",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 49,
    "pollutants": {
      "pm2_5": 135.04,
      "pm10": 49.32,
      "co": 7.0,
      "no2": 25.7,
      "o3": 33.6,
      "so2": 46.94
    },
    "readings": {
      "temperature": 22.0,
      "humidity": 86.1,
      "pressure": 1024.97
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH020",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 110,
    "pollutants": {
      "pm2_5": 49.34,
      "pm10": 75.59,
      "co": 7.47,
      "no2": 28.74,
      "o3": 106.19,
      "so2": 35.21
    },
    "readings": {
      "temperature": 30.9,
      "humidity": 31.99,
      "pressure": 988.74
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-10T00:00:00Z"
    }
  },
  {
    "record_id": "AQH021",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 234,
    "pollutants": {
      "pm2_5": 78.44,
      "pm10": 163.95,
      "co": 9.11,
      "no2": 12.97,
      "o3": 24.22,
      "so2": 29.53
    },
    "readings": {
      "temperature": 6.17,
      "humidity": 22.45,
      "pressure": 1017.32
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH022",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 173,
    "pollutants": {
      "pm2_5": 117.55,
      "pm10": 77.12,
      "co": 6.01,
      "no2": 67.21,
      "o3": 104.49,
      "so2": 22.89
    },
    "readings": {
      "temperature": 12.17,
      "humidity": 55.53,
      "pressure": 1008.33
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH023",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 156,
    "pollutants": {
      "pm2_5": 103.57,
      "pm10": 78.05,
      "co": 4.53,
      "no2": 66.79,
      "o3": 133.54,
      "so2": 16.2
    },
    "readings": {
      "temperature": 28.5,
      "humidity": 24.81,
      "pressure": 997.43
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH024",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 36,
    "pollutants": {
      "pm2_5": 76.42,
      "pm10": 67.26,
      "co": 14.97,
      "no2": 89.08,
      "o3": 63.89,
      "so2": 27.53
    },
    "readings": {
      "temperature": 32.79,
      "humidity": 25.43,
      "pressure": 990.39
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-02T00:00:00Z"
    }
  },
  {
    "record_id": "AQH025",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 49,
    "pollutants": {
      "pm2_5": 147.33,
      "pm10": 108.89,
      "co": 7.26,
      "no2": 16.33,
      "o3": 113.48,
      "so2": 29.75
    },
    "readings": {
      "temperature": 16.7,
      "humidity": 42.3,
      "pressure": 1019.67
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH026",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 176,
    "pollutants": {
      "pm2_5": 91.78,
      "pm10": 51.1,
      "co": 8.26,
      "no2": 37.38,
      "o3": 124.39,
      "so2": 12.1
    },
    "readings": {
      "temperature": 22.47,
      "humidity": 57.58,
      "pressure": 982.03
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH027",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 161,
    "pollutants": {
      "pm2_5": 89.91,
      "pm10": 15.11,
      "co": 10.76,
      "no2": 58.8,
      "o3": 97.46,
      "so2": 38.17
    },
    "readings": {
      "temperature": 22.18,
      "humidity": 33.51,
      "pressure": 1020.39
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-02T00:00:00Z"
    }
  },
  {
    "record_id": "AQH028",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 97,
    "pollutants": {
      "pm2_5": 104.84,
      "pm10": 55.71,
      "co": 14.19,
      "no2": 8.38,
      "o3": 57.05,
      "so2": 44.64
    },
    "readings": {
      "temperature": 25.21,
      "humidity": 83.65,
      "pressure": 1021.29
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-03T00:00:00Z"
    }
  },
  {
    "record_id": "AQH029",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 225,
    "pollutants": {
      "pm2_5": 103.05,
      "pm10": 180.92,
      "co": 5.41,
      "no2": 38.48,
      "o3": 108.16,
      "so2": 47.21
    },
    "readings": {
      "temperature": 39.35,
      "humidity": 89.48,
      "pressure": 1009.47
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH030",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 110,
    "pollutants": {
      "pm2_5": 40.44,
      "pm10": 45.71,
      "co": 11.61,
      "no2": 95.58,
      "o3": 25.87,
      "so2": 24.7
    },
    "readings": {
      "temperature": 29.59,
      "humidity": 33.03,
      "pressure": 982.74
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH031",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 37,
    "pollutants": {
      "pm2_5": 102.2,
      "pm10": 64.98,
      "co": 10.64,
      "no2": 30.62,
      "o3": 38.92,
      "so2": 49.63
    },
    "readings": {
      "temperature": 18.06,
      "humidity": 78.98,
      "pressure": 980.67
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH032",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 70,
    "pollutants": {
      "pm2_5": 68.51,
      "pm10": 35.95,
      "co": 13.1,
      "no2": 65.08,
      "o3": 89.32,
      "so2": 17.11
    },
    "readings": {
      "temperature": 8.51,
      "humidity": 55.1,
      "pressure": 997.78
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH033",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 60,
    "pollutants": {
      "pm2_5": 121.64,
      "pm10": 139.62,
      "co": 2.74,
      "no2": 74.7,
      "o3": 145.94,
      "so2": 30.47
    },
    "readings": {
      "temperature": 29.01,
      "humidity": 57.9,
      "pressure": 996.57
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-22T00:00:00Z"
    }
  },
  {
    "record_id": "AQH034",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 120,
    "pollutants": {
      "pm2_5": 70.33,
      "pm10": 38.08,
      "co": 4.78,
      "no2": 91.15,
      "o3": 28.78,
      "so2": 16.52
    },
    "readings": {
      "temperature": 11.15,
      "humidity": 63.65,
      "pressure": 1019.21
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH035",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 216,
    "pollutants": {
      "pm2_5": 21.48,
      "pm10": 16.4,
      "co": 0.18,
      "no2": 98.41,
      "o3": 57.61,
      "so2": 18.08
    },
    "readings": {
      "temperature": 31.53,
      "humidity": 81.05,
      "pressure": 1017.02
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH036",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 163,
    "pollutants": {
      "pm2_5": 33.6,
      "pm10": 87.77,
      "co": 12.47,
      "no2": 71.83,
      "o3": 157.71,
      "so2": 16.37
    },
    "readings": {
      "temperature": 29.99,
      "humidity": 45.83,
      "pressure": 1017.99
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH037",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 20,
    "pollutants": {
      "pm2_5": 18.94,
      "pm10": 96.34,
      "co": 2.82,
      "no2": 73.0,
      "o3": 102.15,
      "so2": 30.85
    },
    "readings": {
      "temperature": 28.0,
      "humidity": 60.26,
      "pressure": 984.65
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH038",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 54,
    "pollutants": {
      "pm2_5": 41.36,
      "pm10": 75.86,
      "co": 2.3,
      "no2": 37.46,
      "o3": 62.38,
      "so2": 24.66
    },
    "readings": {
      "temperature": 10.73,
      "humidity": 67.4,
      "pressure": 980.82
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-27T00:00:00Z"
    }
  },
  {
    "record_id": "AQH039",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 237,
    "pollutants": {
      "pm2_5": 10.82,
      "pm10": 91.42,
      "co": 2.61,
      "no2": 66.81,
      "o3": 176.06,
      "so2": 17.73
    },
    "readings": {
      "temperature": 20.57,
      "humidity": 65.71,
      "pressure": 981.0
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH040",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 249,
    "pollutants": {
      "pm2_5": 74.27,
      "pm10": 56.69,
      "co": 4.27,
      "no2": 38.61,
      "o3": 144.24,
      "so2": 9.46
    },
    "readings": {
      "temperature": 13.21,
      "humidity": 75.91,
      "pressure": 1003.3
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH041",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 78,
    "pollutants": {
      "pm2_5": 81.25,
      "pm10": 114.7,
      "co": 10.23,
      "no2": 93.75,
      "o3": 16.24,
      "so2": 19.98
    },
    "readings": {
      "temperature": 22.76,
      "humidity": 34.51,
      "pressure": 984.67
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH042",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 136,
    "pollutants": {
      "pm2_5": 58.24,
      "pm10": 177.47,
      "co": 4.74,
      "no2": 46.18,
      "o3": 178.98,
      "so2": 22.01
    },
    "readings": {
      "temperature": 29.26,
      "humidity": 60.24,
      "pressure": 995.63
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-27T00:00:00Z"
    }
  },
  {
    "record_id": "AQH043",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 34,
    "pollutants": {
      "pm2_5": 84.49,
      "pm10": 194.27,
      "co": 5.52,
      "no2": 40.63,
      "o3": 18.57,
      "so2": 46.3
    },
    "readings": {
      "temperature": 33.48,
      "humidity": 61.2,
      "pressure": 980.23
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH044",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 174,
    "pollutants": {
      "pm2_5": 37.25,
      "pm10": 66.22,
      "co": 10.48,
      "no2": 68.68,
      "o3": 62.96,
      "so2": 13.06
    },
    "readings": {
      "temperature": 21.64,
      "humidity": 76.6,
      "pressure": 1007.39
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH045",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 162,
    "pollutants": {
      "pm2_5": 34.16,
      "pm10": 132.91,
      "co": 7.74,
      "no2": 44.22,
      "o3": 27.3,
      "so2": 46.1
    },
    "readings": {
      "temperature": 18.66,
      "humidity": 22.69,
      "pressure": 987.23
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH046",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 245,
    "pollutants": {
      "pm2_5": 21.56,
      "pm10": 37.27,
      "co": 4.16,
      "no2": 88.78,
      "o3": 34.7,
      "so2": 28.97
    },
    "readings": {
      "temperature": 36.35,
      "humidity": 70.84,
      "pressure": 1023.59
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH047",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 151,
    "pollutants": {
      "pm2_5": 64.55,
      "pm10": 20.09,
      "co": 0.67,
      "no2": 11.29,
      "o3": 87.14,
      "so2": 44.73
    },
    "readings": {
      "temperature": 9.83,
      "humidity": 31.85,
      "pressure": 1017.98
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH048",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 139,
    "pollutants": {
      "pm2_5": 45.68,
      "pm10": 111.91,
      "co": 7.13,
      "no2": 34.33,
      "o3": 51.15,
      "so2": 18.96
    },
    "readings": {
      "temperature": 13.07,
      "humidity": 85.87,
      "pressure": 1004.78
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH049",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 213,
    "pollutants": {
      "pm2_5": 102.73,
      "pm10": 190.17,
      "co": 12.54,
      "no2": 81.15,
      "o3": 87.06,
      "so2": 43.55
    },
    "readings": {
      "temperature": 20.37,
      "humidity": 83.49,
      "pressure": 1015.52
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH050",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 117,
    "pollutants": {
      "pm2_5": 104.2,
      "pm10": 120.11,
      "co": 4.42,
      "no2": 45.17,
      "o3": 70.07,
      "so2": 9.31
    },
    "readings": {
      "temperature": 20.27,
      "humidity": 63.27,
      "pressure": 1017.78
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH051",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 124,
    "pollutants": {
      "pm2_5": 133.18,
      "pm10": 144.69,
      "co": 4.78,
      "no2": 90.9,
      "o3": 15.56,
      "so2": 29.22
    },
    "readings": {
      "temperature": 29.26,
      "humidity": 32.51,
      "pressure": 981.36
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH052",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 113,
    "pollutants": {
      "pm2_5": 126.41,
      "pm10": 41.76,
      "co": 5.42,
      "no2": 66.45,
      "o3": 46.53,
      "so2": 44.52
    },
    "readings": {
      "temperature": 30.77,
      "humidity": 54.9,
      "pressure": 1009.74
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH053",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 149,
    "pollutants": {
      "pm2_5": 106.34,
      "pm10": 148.03,
      "co": 8.95,
      "no2": 25.74,
      "o3": 47.9,
      "so2": 43.22
    },
    "readings": {
      "temperature": 35.26,
      "humidity": 50.5,
      "pressure": 998.62
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-02T00:00:00Z"
    }
  },
  {
    "record_id": "AQH054",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 93,
    "pollutants": {
      "pm2_5": 72.3,
      "pm10": 21.54,
      "co": 0.82,
      "no2": 31.27,
      "o3": 162.83,
      "so2": 23.43
    },
    "readings": {
      "temperature": 7.61,
      "humidity": 35.19,
      "pressure": 1001.22
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH055",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 181,
    "pollutants": {
      "pm2_5": 119.74,
      "pm10": 199.21,
      "co": 13.9,
      "no2": 12.33,
      "o3": 22.46,
      "so2": 40.12
    },
    "readings": {
      "temperature": 18.88,
      "humidity": 34.96,
      "pressure": 995.33
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH056",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 126,
    "pollutants": {
      "pm2_5": 7.77,
      "pm10": 175.7,
      "co": 1.25,
      "no2": 59.69,
      "o3": 98.33,
      "so2": 22.61
    },
    "readings": {
      "temperature": 7.15,
      "humidity": 64.2,
      "pressure": 993.19
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-02T00:00:00Z"
    }
  },
  {
    "record_id": "AQH057",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 136,
    "pollutants": {
      "pm2_5": 9.27,
      "pm10": 150.66,
      "co": 9.18,
      "no2": 99.57,
      "o3": 162.96,
      "so2": 14.95
    },
    "readings": {
      "temperature": 36.7,
      "humidity": 86.19,
      "pressure": 1025.39
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH058",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 122,
    "pollutants": {
      "pm2_5": 68.6,
      "pm10": 31.91,
      "co": 13.47,
      "no2": 8.73,
      "o3": 68.98,
      "so2": 35.68
    },
    "readings": {
      "temperature": 14.86,
      "humidity": 55.96,
      "pressure": 1001.82
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH059",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 146,
    "pollutants": {
      "pm2_5": 37.74,
      "pm10": 126.47,
      "co": 7.33,
      "no2": 90.37,
      "o3": 84.94,
      "so2": 26.14
    },
    "readings": {
      "temperature": 19.39,
      "humidity": 75.57,
      "pressure": 1028.4
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-10T00:00:00Z"
    }
  },
  {
    "record_id": "AQH060",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 157,
    "pollutants": {
      "pm2_5": 118.82,
      "pm10": 47.25,
      "co": 6.19,
      "no2": 76.39,
      "o3": 119.77,
      "so2": 17.29
    },
    "readings": {
      "temperature": 6.14,
      "humidity": 53.97,
      "pressure": 1020.71
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH061",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 111,
    "pollutants": {
      "pm2_5": 54.63,
      "pm10": 134.41,
      "co": 1.34,
      "no2": 53.1,
      "o3": 47.22,
      "so2": 8.45
    },
    "readings": {
      "temperature": 38.48,
      "humidity": 64.83,
      "pressure": 988.58
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-31T00:00:00Z"
    }
  },
  {
    "record_id": "AQH062",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 228,
    "pollutants": {
      "pm2_5": 50.95,
      "pm10": 91.66,
      "co": 2.29,
      "no2": 56.93,
      "o3": 54.21,
      "so2": 43.99
    },
    "readings": {
      "temperature": 31.69,
      "humidity": 73.97,
      "pressure": 1027.18
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH063",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 70,
    "pollutants": {
      "pm2_5": 5.28,
      "pm10": 38.58,
      "co": 5.29,
      "no2": 88.72,
      "o3": 40.13,
      "so2": 29.29
    },
    "readings": {
      "temperature": 35.51,
      "humidity": 41.46,
      "pressure": 1029.46
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-21T00:00:00Z"
    }
  },
  {
    "record_id": "AQH064",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 192,
    "pollutants": {
      "pm2_5": 12.25,
      "pm10": 100.98,
      "co": 13.59,
      "no2": 30.72,
      "o3": 35.06,
      "so2": 39.7
    },
    "readings": {
      "temperature": 31.26,
      "humidity": 30.97,
      "pressure": 988.37
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH065",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 42,
    "pollutants": {
      "pm2_5": 78.14,
      "pm10": 187.85,
      "co": 3.08,
      "no2": 26.76,
      "o3": 114.53,
      "so2": 25.58
    },
    "readings": {
      "temperature": 38.51,
      "humidity": 84.49,
      "pressure": 1026.87
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH066",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 127,
    "pollutants": {
      "pm2_5": 97.16,
      "pm10": 144.03,
      "co": 9.76,
      "no2": 96.95,
      "o3": 125.53,
      "so2": 14.42
    },
    "readings": {
      "temperature": 31.5,
      "humidity": 86.38,
      "pressure": 1023.41
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH067",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 227,
    "pollutants": {
      "pm2_5": 85.14,
      "pm10": 108.08,
      "co": 4.62,
      "no2": 77.61,
      "o3": 168.41,
      "so2": 32.94
    },
    "readings": {
      "temperature": 14.13,
      "humidity": 49.94,
      "pressure": 1004.47
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH068",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 249,
    "pollutants": {
      "pm2_5": 57.43,
      "pm10": 156.22,
      "co": 12.94,
      "no2": 65.14,
      "o3": 93.01,
      "so2": 41.1
    },
    "readings": {
      "temperature": 33.26,
      "humidity": 51.17,
      "pressure": 1018.57
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH069",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 42,
    "pollutants": {
      "pm2_5": 75.68,
      "pm10": 163.45,
      "co": 14.41,
      "no2": 84.38,
      "o3": 50.49,
      "so2": 32.59
    },
    "readings": {
      "temperature": 27.64,
      "humidity": 85.22,
      "pressure": 1027.37
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH070",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 91,
    "pollutants": {
      "pm2_5": 36.85,
      "pm10": 171.27,
      "co": 5.35,
      "no2": 28.04,
      "o3": 162.11,
      "so2": 7.72
    },
    "readings": {
      "temperature": 17.41,
      "humidity": 30.19,
      "pressure": 1021.49
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH071",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 68,
    "pollutants": {
      "pm2_5": 24.77,
      "pm10": 27.45,
      "co": 2.84,
      "no2": 13.21,
      "o3": 157.21,
      "so2": 5.94
    },
    "readings": {
      "temperature": 12.36,
      "humidity": 50.72,
      "pressure": 995.97
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-31T00:00:00Z"
    }
  },
  {
    "record_id": "AQH072",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 189,
    "pollutants": {
      "pm2_5": 147.76,
      "pm10": 69.01,
      "co": 5.86,
      "no2": 77.99,
      "o3": 137.24,
      "so2": 17.25
    },
    "readings": {
      "temperature": 25.88,
      "humidity": 23.79,
      "pressure": 1001.34
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH073",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 229,
    "pollutants": {
      "pm2_5": 97.52,
      "pm10": 95.06,
      "co": 7.33,
      "no2": 8.46,
      "o3": 161.43,
      "so2": 8.6
    },
    "readings": {
      "temperature": 25.39,
      "humidity": 34.0,
      "pressure": 1018.73
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH074",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 114,
    "pollutants": {
      "pm2_5": 88.8,
      "pm10": 45.2,
      "co": 11.84,
      "no2": 78.24,
      "o3": 139.53,
      "so2": 21.59
    },
    "readings": {
      "temperature": 21.51,
      "humidity": 68.33,
      "pressure": 1021.0
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH075",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 214,
    "pollutants": {
      "pm2_5": 74.62,
      "pm10": 168.68,
      "co": 1.77,
      "no2": 33.37,
      "o3": 29.72,
      "so2": 7.71
    },
    "readings": {
      "temperature": 6.31,
      "humidity": 39.04,
      "pressure": 1017.69
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH076",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 105,
    "pollutants": {
      "pm2_5": 78.99,
      "pm10": 194.98,
      "co": 3.42,
      "no2": 59.35,
      "o3": 25.32,
      "so2": 46.16
    },
    "readings": {
      "temperature": 38.95,
      "humidity": 55.15,
      "pressure": 1019.12
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH077",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 143,
    "pollutants": {
      "pm2_5": 7.43,
      "pm10": 40.05,
      "co": 1.15,
      "no2": 66.47,
      "o3": 177.76,
      "so2": 10.66
    },
    "readings": {
      "temperature": 16.93,
      "humidity": 58.18,
      "pressure": 1003.32
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH078",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 188,
    "pollutants": {
      "pm2_5": 138.58,
      "pm10": 119.62,
      "co": 2.78,
      "no2": 79.66,
      "o3": 156.78,
      "so2": 36.9
    },
    "readings": {
      "temperature": 11.7,
      "humidity": 61.69,
      "pressure": 1012.01
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH079",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 233,
    "pollutants": {
      "pm2_5": 149.84,
      "pm10": 115.52,
      "co": 6.74,
      "no2": 73.07,
      "o3": 164.77,
      "so2": 15.91
    },
    "readings": {
      "temperature": 22.23,
      "humidity": 37.21,
      "pressure": 1016.79
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH080",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 231,
    "pollutants": {
      "pm2_5": 51.28,
      "pm10": 13.61,
      "co": 11.27,
      "no2": 38.61,
      "o3": 93.65,
      "so2": 30.76
    },
    "readings": {
      "temperature": 27.96,
      "humidity": 56.95,
      "pressure": 985.13
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH081",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 30,
    "pollutants": {
      "pm2_5": 117.55,
      "pm10": 27.24,
      "co": 3.79,
      "no2": 90.57,
      "o3": 41.84,
      "so2": 20.49
    },
    "readings": {
      "temperature": 10.95,
      "humidity": 48.0,
      "pressure": 1016.34
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH082",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 95,
    "pollutants": {
      "pm2_5": 31.21,
      "pm10": 82.72,
      "co": 2.47,
      "no2": 92.28,
      "o3": 54.91,
      "so2": 10.31
    },
    "readings": {
      "temperature": 14.04,
      "humidity": 23.34,
      "pressure": 992.73
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH083",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 93,
    "pollutants": {
      "pm2_5": 33.22,
      "pm10": 17.7,
      "co": 6.52,
      "no2": 20.15,
      "o3": 38.74,
      "so2": 38.39
    },
    "readings": {
      "temperature": 13.76,
      "humidity": 64.87,
      "pressure": 1022.02
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH084",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 161,
    "pollutants": {
      "pm2_5": 137.82,
      "pm10": 65.49,
      "co": 11.98,
      "no2": 13.46,
      "o3": 128.96,
      "so2": 8.11
    },
    "readings": {
      "temperature": 37.62,
      "humidity": 24.27,
      "pressure": 999.92
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH085",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 100,
    "pollutants": {
      "pm2_5": 112.47,
      "pm10": 124.36,
      "co": 4.44,
      "no2": 80.22,
      "o3": 81.98,
      "so2": 46.24
    },
    "readings": {
      "temperature": 6.18,
      "humidity": 81.07,
      "pressure": 996.76
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-10T00:00:00Z"
    }
  },
  {
    "record_id": "AQH086",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 205,
    "pollutants": {
      "pm2_5": 36.16,
      "pm10": 16.81,
      "co": 2.72,
      "no2": 99.51,
      "o3": 29.4,
      "so2": 19.49
    },
    "readings": {
      "temperature": 28.78,
      "humidity": 55.85,
      "pressure": 996.55
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH087",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 49,
    "pollutants": {
      "pm2_5": 39.22,
      "pm10": 77.81,
      "co": 13.61,
      "no2": 96.31,
      "o3": 30.58,
      "so2": 4.59
    },
    "readings": {
      "temperature": 38.14,
      "humidity": 55.21,
      "pressure": 991.19
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH088",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 159,
    "pollutants": {
      "pm2_5": 55.61,
      "pm10": 183.77,
      "co": 10.26,
      "no2": 87.29,
      "o3": 114.84,
      "so2": 8.84
    },
    "readings": {
      "temperature": 39.81,
      "humidity": 53.8,
      "pressure": 1017.58
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH089",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 30,
    "pollutants": {
      "pm2_5": 104.08,
      "pm10": 109.7,
      "co": 14.36,
      "no2": 71.22,
      "o3": 177.67,
      "so2": 26.64
    },
    "readings": {
      "temperature": 37.0,
      "humidity": 39.43,
      "pressure": 988.47
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH090",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 245,
    "pollutants": {
      "pm2_5": 53.8,
      "pm10": 109.28,
      "co": 2.18,
      "no2": 93.53,
      "o3": 112.88,
      "so2": 29.64
    },
    "readings": {
      "temperature": 15.45,
      "humidity": 52.26,
      "pressure": 996.6
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH091",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 120,
    "pollutants": {
      "pm2_5": 50.25,
      "pm10": 182.2,
      "co": 10.52,
      "no2": 15.02,
      "o3": 162.39,
      "so2": 8.71
    },
    "readings": {
      "temperature": 36.47,
      "humidity": 66.28,
      "pressure": 1027.91
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH092",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 125,
    "pollutants": {
      "pm2_5": 39.24,
      "pm10": 19.03,
      "co": 1.89,
      "no2": 43.75,
      "o3": 19.57,
      "so2": 23.61
    },
    "readings": {
      "temperature": 27.25,
      "humidity": 49.84,
      "pressure": 1013.64
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH093",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 204,
    "pollutants": {
      "pm2_5": 96.73,
      "pm10": 31.58,
      "co": 14.74,
      "no2": 10.48,
      "o3": 28.07,
      "so2": 13.49
    },
    "readings": {
      "temperature": 16.71,
      "humidity": 85.58,
      "pressure": 1006.1
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH094",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 156,
    "pollutants": {
      "pm2_5": 41.26,
      "pm10": 86.57,
      "co": 13.69,
      "no2": 87.57,
      "o3": 119.61,
      "so2": 32.59
    },
    "readings": {
      "temperature": 36.45,
      "humidity": 35.23,
      "pressure": 998.35
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH095",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 117,
    "pollutants": {
      "pm2_5": 77.56,
      "pm10": 142.52,
      "co": 10.63,
      "no2": 27.92,
      "o3": 65.06,
      "so2": 2.7
    },
    "readings": {
      "temperature": 34.11,
      "humidity": 71.25,
      "pressure": 1012.69
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH096",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 124,
    "pollutants": {
      "pm2_5": 47.82,
      "pm10": 87.92,
      "co": 13.7,
      "no2": 62.55,
      "o3": 89.23,
      "so2": 24.24
    },
    "readings": {
      "temperature": 21.64,
      "humidity": 40.88,
      "pressure": 1021.55
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH097",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 229,
    "pollutants": {
      "pm2_5": 104.63,
      "pm10": 49.4,
      "co": 0.36,
      "no2": 7.37,
      "o3": 165.86,
      "so2": 23.22
    },
    "readings": {
      "temperature": 18.49,
      "humidity": 50.27,
      "pressure": 987.5
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH098",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 162,
    "pollutants": {
      "pm2_5": 107.26,
      "pm10": 112.7,
      "co": 1.13,
      "no2": 37.6,
      "o3": 56.05,
      "so2": 42.9
    },
    "readings": {
      "temperature": 38.16,
      "humidity": 45.02,
      "pressure": 1020.79
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH099",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 177,
    "pollutants": {
      "pm2_5": 84.78,
      "pm10": 181.82,
      "co": 5.89,
      "no2": 92.22,
      "o3": 55.25,
      "so2": 23.14
    },
    "readings": {
      "temperature": 37.23,
      "humidity": 21.07,
      "pressure": 1023.83
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH100",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 192,
    "pollutants": {
      "pm2_5": 53.87,
      "pm10": 70.51,
      "co": 6.52,
      "no2": 17.06,
      "o3": 87.22,
      "so2": 18.53
    },
    "readings": {
      "temperature": 8.24,
      "humidity": 41.64,
      "pressure": 1021.44
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH101",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 137,
    "pollutants": {
      "pm2_5": 39.08,
      "pm10": 109.15,
      "co": 6.56,
      "no2": 55.36,
      "o3": 77.77,
      "so2": 37.85
    },
    "readings": {
      "temperature": 34.17,
      "humidity": 85.7,
      "pressure": 1010.5
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH102",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 211,
    "pollutants": {
      "pm2_5": 135.3,
      "pm10": 51.13,
      "co": 4.99,
      "no2": 41.25,
      "o3": 138.64,
      "so2": 3.98
    },
    "readings": {
      "temperature": 30.77,
      "humidity": 88.14,
      "pressure": 991.36
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-23T00:00:00Z"
    }
  },
  {
    "record_id": "AQH103",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 166,
    "pollutants": {
      "pm2_5": 127.35,
      "pm10": 32.31,
      "co": 4.14,
      "no2": 19.73,
      "o3": 168.78,
      "so2": 43.17
    },
    "readings": {
      "temperature": 35.04,
      "humidity": 47.38,
      "pressure": 998.92
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-23T00:00:00Z"
    }
  },
  {
    "record_id": "AQH104",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 46,
    "pollutants": {
      "pm2_5": 106.37,
      "pm10": 163.9,
      "co": 11.91,
      "no2": 37.79,
      "o3": 171.76,
      "so2": 2.96
    },
    "readings": {
      "temperature": 6.62,
      "humidity": 86.79,
      "pressure": 995.38
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-13T00:00:00Z"
    }
  },
  {
    "record_id": "AQH105",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 224,
    "pollutants": {
      "pm2_5": 21.23,
      "pm10": 189.04,
      "co": 8.08,
      "no2": 77.46,
      "o3": 159.49,
      "so2": 35.44
    },
    "readings": {
      "temperature": 17.91,
      "humidity": 74.15,
      "pressure": 1007.85
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH106",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 105,
    "pollutants": {
      "pm2_5": 149.14,
      "pm10": 74.37,
      "co": 3.75,
      "no2": 77.74,
      "o3": 68.46,
      "so2": 49.69
    },
    "readings": {
      "temperature": 8.44,
      "humidity": 55.67,
      "pressure": 1002.69
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH107",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 63,
    "pollutants": {
      "pm2_5": 32.23,
      "pm10": 162.66,
      "co": 2.89,
      "no2": 75.6,
      "o3": 163.42,
      "so2": 4.89
    },
    "readings": {
      "temperature": 26.81,
      "humidity": 89.74,
      "pressure": 989.33
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH108",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 32,
    "pollutants": {
      "pm2_5": 80.13,
      "pm10": 158.11,
      "co": 7.26,
      "no2": 77.9,
      "o3": 36.36,
      "so2": 29.58
    },
    "readings": {
      "temperature": 37.1,
      "humidity": 52.38,
      "pressure": 1017.38
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH109",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 29,
    "pollutants": {
      "pm2_5": 123.23,
      "pm10": 87.4,
      "co": 7.83,
      "no2": 94.71,
      "o3": 67.28,
      "so2": 6.32
    },
    "readings": {
      "temperature": 5.22,
      "humidity": 82.58,
      "pressure": 986.86
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH110",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 130,
    "pollutants": {
      "pm2_5": 69.17,
      "pm10": 198.87,
      "co": 7.69,
      "no2": 30.94,
      "o3": 168.95,
      "so2": 26.25
    },
    "readings": {
      "temperature": 18.44,
      "humidity": 85.76,
      "pressure": 981.57
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH111",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 87,
    "pollutants": {
      "pm2_5": 128.83,
      "pm10": 183.39,
      "co": 14.5,
      "no2": 79.89,
      "o3": 110.13,
      "so2": 4.56
    },
    "readings": {
      "temperature": 34.17,
      "humidity": 29.54,
      "pressure": 1014.64
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH112",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 57,
    "pollutants": {
      "pm2_5": 71.43,
      "pm10": 55.53,
      "co": 10.48,
      "no2": 47.84,
      "o3": 168.62,
      "so2": 43.6
    },
    "readings": {
      "temperature": 24.03,
      "humidity": 86.16,
      "pressure": 1026.65
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH113",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 45,
    "pollutants": {
      "pm2_5": 113.91,
      "pm10": 172.98,
      "co": 1.0,
      "no2": 21.91,
      "o3": 24.02,
      "so2": 41.66
    },
    "readings": {
      "temperature": 10.25,
      "humidity": 47.1,
      "pressure": 985.51
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-23T00:00:00Z"
    }
  },
  {
    "record_id": "AQH114",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 212,
    "pollutants": {
      "pm2_5": 141.85,
      "pm10": 81.28,
      "co": 7.2,
      "no2": 60.02,
      "o3": 61.69,
      "so2": 44.53
    },
    "readings": {
      "temperature": 14.66,
      "humidity": 65.45,
      "pressure": 1011.34
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-21T00:00:00Z"
    }
  },
  {
    "record_id": "AQH115",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 202,
    "pollutants": {
      "pm2_5": 125.12,
      "pm10": 103.41,
      "co": 3.93,
      "no2": 5.96,
      "o3": 110.98,
      "so2": 8.46
    },
    "readings": {
      "temperature": 11.53,
      "humidity": 59.22,
      "pressure": 1017.07
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH116",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 48,
    "pollutants": {
      "pm2_5": 76.66,
      "pm10": 71.21,
      "co": 7.47,
      "no2": 11.3,
      "o3": 148.57,
      "so2": 11.91
    },
    "readings": {
      "temperature": 6.96,
      "humidity": 28.1,
      "pressure": 1014.89
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH117",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 112,
    "pollutants": {
      "pm2_5": 31.41,
      "pm10": 136.45,
      "co": 10.29,
      "no2": 33.4,
      "o3": 69.96,
      "so2": 23.73
    },
    "readings": {
      "temperature": 6.92,
      "humidity": 39.16,
      "pressure": 1024.77
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH118",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 233,
    "pollutants": {
      "pm2_5": 80.54,
      "pm10": 19.44,
      "co": 13.91,
      "no2": 92.0,
      "o3": 45.2,
      "so2": 40.1
    },
    "readings": {
      "temperature": 11.57,
      "humidity": 79.63,
      "pressure": 1014.42
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH119",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 96,
    "pollutants": {
      "pm2_5": 36.06,
      "pm10": 66.94,
      "co": 11.51,
      "no2": 31.82,
      "o3": 36.91,
      "so2": 48.86
    },
    "readings": {
      "temperature": 31.92,
      "humidity": 24.44,
      "pressure": 1027.94
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH120",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 224,
    "pollutants": {
      "pm2_5": 110.51,
      "pm10": 120.01,
      "co": 11.54,
      "no2": 5.62,
      "o3": 30.53,
      "so2": 42.33
    },
    "readings": {
      "temperature": 21.12,
      "humidity": 26.72,
      "pressure": 993.88
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH121",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 46,
    "pollutants": {
      "pm2_5": 129.77,
      "pm10": 89.83,
      "co": 5.38,
      "no2": 98.67,
      "o3": 179.63,
      "so2": 44.07
    },
    "readings": {
      "temperature": 29.4,
      "humidity": 56.8,
      "pressure": 1008.12
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH122",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 56,
    "pollutants": {
      "pm2_5": 16.96,
      "pm10": 196.02,
      "co": 1.74,
      "no2": 51.64,
      "o3": 42.77,
      "so2": 49.98
    },
    "readings": {
      "temperature": 19.9,
      "humidity": 72.15,
      "pressure": 999.26
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH123",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 25,
    "pollutants": {
      "pm2_5": 46.52,
      "pm10": 148.54,
      "co": 3.05,
      "no2": 59.5,
      "o3": 108.21,
      "so2": 13.44
    },
    "readings": {
      "temperature": 24.72,
      "humidity": 40.29,
      "pressure": 991.1
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH124",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 243,
    "pollutants": {
      "pm2_5": 92.97,
      "pm10": 191.06,
      "co": 6.58,
      "no2": 31.13,
      "o3": 94.12,
      "so2": 2.56
    },
    "readings": {
      "temperature": 32.59,
      "humidity": 56.55,
      "pressure": 993.86
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH125",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 155,
    "pollutants": {
      "pm2_5": 133.69,
      "pm10": 147.76,
      "co": 9.24,
      "no2": 24.55,
      "o3": 115.95,
      "so2": 16.15
    },
    "readings": {
      "temperature": 21.98,
      "humidity": 83.12,
      "pressure": 1020.97
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH126",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 59,
    "pollutants": {
      "pm2_5": 35.95,
      "pm10": 153.37,
      "co": 10.98,
      "no2": 48.86,
      "o3": 178.92,
      "so2": 2.15
    },
    "readings": {
      "temperature": 34.3,
      "humidity": 42.82,
      "pressure": 1008.04
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-05T00:00:00Z"
    }
  },
  {
    "record_id": "AQH127",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 24,
    "pollutants": {
      "pm2_5": 127.19,
      "pm10": 150.35,
      "co": 10.86,
      "no2": 64.51,
      "o3": 169.52,
      "so2": 34.26
    },
    "readings": {
      "temperature": 15.82,
      "humidity": 82.14,
      "pressure": 1020.69
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH128",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 171,
    "pollutants": {
      "pm2_5": 64.25,
      "pm10": 67.76,
      "co": 7.45,
      "no2": 22.1,
      "o3": 77.27,
      "so2": 12.91
    },
    "readings": {
      "temperature": 13.85,
      "humidity": 40.27,
      "pressure": 981.0
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH129",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 159,
    "pollutants": {
      "pm2_5": 6.66,
      "pm10": 163.37,
      "co": 9.95,
      "no2": 60.9,
      "o3": 156.46,
      "so2": 23.24
    },
    "readings": {
      "temperature": 15.43,
      "humidity": 42.3,
      "pressure": 1010.64
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH130",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 246,
    "pollutants": {
      "pm2_5": 72.31,
      "pm10": 103.03,
      "co": 3.19,
      "no2": 20.7,
      "o3": 56.08,
      "so2": 19.6
    },
    "readings": {
      "temperature": 28.34,
      "humidity": 23.05,
      "pressure": 1003.66
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH131",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 103,
    "pollutants": {
      "pm2_5": 53.7,
      "pm10": 34.9,
      "co": 3.91,
      "no2": 79.35,
      "o3": 126.83,
      "so2": 1.89
    },
    "readings": {
      "temperature": 37.41,
      "humidity": 31.57,
      "pressure": 999.01
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH132",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 136,
    "pollutants": {
      "pm2_5": 148.42,
      "pm10": 114.44,
      "co": 1.5,
      "no2": 95.78,
      "o3": 60.41,
      "so2": 10.68
    },
    "readings": {
      "temperature": 12.22,
      "humidity": 41.11,
      "pressure": 1011.96
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH133",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 169,
    "pollutants": {
      "pm2_5": 101.02,
      "pm10": 148.62,
      "co": 2.52,
      "no2": 56.99,
      "o3": 139.26,
      "so2": 44.61
    },
    "readings": {
      "temperature": 7.34,
      "humidity": 33.05,
      "pressure": 995.12
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH134",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 175,
    "pollutants": {
      "pm2_5": 134.46,
      "pm10": 160.16,
      "co": 2.62,
      "no2": 93.86,
      "o3": 176.73,
      "so2": 5.48
    },
    "readings": {
      "temperature": 16.58,
      "humidity": 22.43,
      "pressure": 1027.25
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH135",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 119,
    "pollutants": {
      "pm2_5": 99.14,
      "pm10": 98.33,
      "co": 4.11,
      "no2": 65.18,
      "o3": 30.71,
      "so2": 24.31
    },
    "readings": {
      "temperature": 15.22,
      "humidity": 36.19,
      "pressure": 1005.96
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-03T00:00:00Z"
    }
  },
  {
    "record_id": "AQH136",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 48,
    "pollutants": {
      "pm2_5": 57.99,
      "pm10": 173.64,
      "co": 14.64,
      "no2": 18.42,
      "o3": 161.14,
      "so2": 21.99
    },
    "readings": {
      "temperature": 8.01,
      "humidity": 29.22,
      "pressure": 998.65
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH137",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 250,
    "pollutants": {
      "pm2_5": 66.75,
      "pm10": 76.51,
      "co": 13.07,
      "no2": 87.71,
      "o3": 35.18,
      "so2": 20.61
    },
    "readings": {
      "temperature": 37.59,
      "humidity": 62.13,
      "pressure": 1003.52
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-17T00:00:00Z"
    }
  },
  {
    "record_id": "AQH138",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 102,
    "pollutants": {
      "pm2_5": 96.95,
      "pm10": 129.89,
      "co": 7.73,
      "no2": 87.22,
      "o3": 91.45,
      "so2": 1.83
    },
    "readings": {
      "temperature": 18.92,
      "humidity": 78.51,
      "pressure": 1014.88
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-01T00:00:00Z"
    }
  },
  {
    "record_id": "AQH139",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 164,
    "pollutants": {
      "pm2_5": 57.54,
      "pm10": 194.21,
      "co": 9.34,
      "no2": 20.37,
      "o3": 171.77,
      "so2": 47.49
    },
    "readings": {
      "temperature": 20.49,
      "humidity": 74.92,
      "pressure": 1011.4
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH140",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 243,
    "pollutants": {
      "pm2_5": 134.86,
      "pm10": 192.98,
      "co": 12.35,
      "no2": 52.94,
      "o3": 76.11,
      "so2": 6.33
    },
    "readings": {
      "temperature": 6.47,
      "humidity": 29.95,
      "pressure": 994.94
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-02T00:00:00Z"
    }
  },
  {
    "record_id": "AQH141",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 209,
    "pollutants": {
      "pm2_5": 72.67,
      "pm10": 14.63,
      "co": 3.83,
      "no2": 84.56,
      "o3": 110.95,
      "so2": 17.47
    },
    "readings": {
      "temperature": 36.58,
      "humidity": 82.99,
      "pressure": 1002.71
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-31T00:00:00Z"
    }
  },
  {
    "record_id": "AQH142",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 212,
    "pollutants": {
      "pm2_5": 56.08,
      "pm10": 182.64,
      "co": 7.25,
      "no2": 78.76,
      "o3": 48.9,
      "so2": 31.85
    },
    "readings": {
      "temperature": 7.28,
      "humidity": 89.74,
      "pressure": 991.64
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH143",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 46,
    "pollutants": {
      "pm2_5": 25.91,
      "pm10": 51.98,
      "co": 10.93,
      "no2": 86.2,
      "o3": 24.29,
      "so2": 9.67
    },
    "readings": {
      "temperature": 16.21,
      "humidity": 67.47,
      "pressure": 1019.21
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH144",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 222,
    "pollutants": {
      "pm2_5": 10.39,
      "pm10": 119.4,
      "co": 13.04,
      "no2": 8.04,
      "o3": 143.67,
      "so2": 21.43
    },
    "readings": {
      "temperature": 33.67,
      "humidity": 76.8,
      "pressure": 994.7
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH145",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 209,
    "pollutants": {
      "pm2_5": 27.8,
      "pm10": 184.8,
      "co": 0.64,
      "no2": 28.48,
      "o3": 41.29,
      "so2": 44.62
    },
    "readings": {
      "temperature": 29.72,
      "humidity": 48.72,
      "pressure": 1001.27
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH146",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 125,
    "pollutants": {
      "pm2_5": 61.9,
      "pm10": 97.2,
      "co": 13.01,
      "no2": 67.53,
      "o3": 50.04,
      "so2": 17.93
    },
    "readings": {
      "temperature": 31.16,
      "humidity": 72.13,
      "pressure": 1026.18
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-14T00:00:00Z"
    }
  },
  {
    "record_id": "AQH147",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 229,
    "pollutants": {
      "pm2_5": 59.39,
      "pm10": 132.92,
      "co": 0.97,
      "no2": 43.13,
      "o3": 27.11,
      "so2": 4.51
    },
    "readings": {
      "temperature": 21.09,
      "humidity": 58.58,
      "pressure": 980.76
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH148",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 233,
    "pollutants": {
      "pm2_5": 8.56,
      "pm10": 105.54,
      "co": 4.69,
      "no2": 28.58,
      "o3": 117.89,
      "so2": 11.93
    },
    "readings": {
      "temperature": 35.66,
      "humidity": 22.47,
      "pressure": 1011.77
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH149",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 211,
    "pollutants": {
      "pm2_5": 7.27,
      "pm10": 184.23,
      "co": 10.34,
      "no2": 63.58,
      "o3": 123.77,
      "so2": 28.05
    },
    "readings": {
      "temperature": 37.08,
      "humidity": 25.16,
      "pressure": 1020.3
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-26T00:00:00Z"
    }
  },
  {
    "record_id": "AQH150",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 200,
    "pollutants": {
      "pm2_5": 149.95,
      "pm10": 48.0,
      "co": 3.44,
      "no2": 55.99,
      "o3": 52.64,
      "so2": 6.72
    },
    "readings": {
      "temperature": 12.25,
      "humidity": 77.66,
      "pressure": 1007.15
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-27T00:00:00Z"
    }
  },
  {
    "record_id": "AQH151",
    "region_id": 17,
    "region_name": "Patagonia",
    "aqi": 236,
    "pollutants": {
      "pm2_5": 53.34,
      "pm10": 187.53,
      "co": 8.08,
      "no2": 43.6,
      "o3": 151.58,
      "so2": 33.92
    },
    "readings": {
      "temperature": 17.45,
      "humidity": 74.73,
      "pressure": 1015.15
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH152",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 237,
    "pollutants": {
      "pm2_5": 76.61,
      "pm10": 164.73,
      "co": 9.9,
      "no2": 6.06,
      "o3": 159.66,
      "so2": 13.22
    },
    "readings": {
      "temperature": 13.88,
      "humidity": 71.12,
      "pressure": 1017.0
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH153",
    "region_id": 20,
    "region_name": "Coral Triangle",
    "aqi": 91,
    "pollutants": {
      "pm2_5": 67.84,
      "pm10": 107.6,
      "co": 6.02,
      "no2": 26.21,
      "o3": 135.01,
      "so2": 10.41
    },
    "readings": {
      "temperature": 22.47,
      "humidity": 78.14,
      "pressure": 992.8
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-31T00:00:00Z"
    }
  },
  {
    "record_id": "AQH154",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 193,
    "pollutants": {
      "pm2_5": 44.29,
      "pm10": 197.66,
      "co": 2.12,
      "no2": 83.86,
      "o3": 134.79,
      "so2": 9.53
    },
    "readings": {
      "temperature": 10.82,
      "humidity": 84.15,
      "pressure": 1019.64
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-30T00:00:00Z"
    }
  },
  {
    "record_id": "AQH155",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 114,
    "pollutants": {
      "pm2_5": 142.23,
      "pm10": 42.42,
      "co": 8.63,
      "no2": 74.11,
      "o3": 75.23,
      "so2": 25.61
    },
    "readings": {
      "temperature": 6.28,
      "humidity": 48.46,
      "pressure": 998.61
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-03T00:00:00Z"
    }
  },
  {
    "record_id": "AQH156",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 140,
    "pollutants": {
      "pm2_5": 53.86,
      "pm10": 44.23,
      "co": 0.62,
      "no2": 37.7,
      "o3": 74.67,
      "so2": 23.07
    },
    "readings": {
      "temperature": 13.06,
      "humidity": 81.4,
      "pressure": 1011.04
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH157",
    "region_id": 14,
    "region_name": "Rocky Mountains",
    "aqi": 218,
    "pollutants": {
      "pm2_5": 9.58,
      "pm10": 28.54,
      "co": 1.17,
      "no2": 94.6,
      "o3": 107.95,
      "so2": 38.61
    },
    "readings": {
      "temperature": 28.36,
      "humidity": 21.29,
      "pressure": 999.42
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH158",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 123,
    "pollutants": {
      "pm2_5": 107.27,
      "pm10": 35.78,
      "co": 9.09,
      "no2": 11.4,
      "o3": 146.84,
      "so2": 21.44
    },
    "readings": {
      "temperature": 27.48,
      "humidity": 48.88,
      "pressure": 1029.58
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH159",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 94,
    "pollutants": {
      "pm2_5": 54.67,
      "pm10": 148.49,
      "co": 1.64,
      "no2": 73.22,
      "o3": 147.03,
      "so2": 16.94
    },
    "readings": {
      "temperature": 17.37,
      "humidity": 76.13,
      "pressure": 1028.59
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH160",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 170,
    "pollutants": {
      "pm2_5": 69.62,
      "pm10": 112.66,
      "co": 7.55,
      "no2": 46.63,
      "o3": 146.99,
      "so2": 48.96
    },
    "readings": {
      "temperature": 12.57,
      "humidity": 74.79,
      "pressure": 992.42
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH161",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 144,
    "pollutants": {
      "pm2_5": 41.04,
      "pm10": 121.08,
      "co": 7.96,
      "no2": 27.1,
      "o3": 137.39,
      "so2": 20.08
    },
    "readings": {
      "temperature": 34.86,
      "humidity": 26.53,
      "pressure": 992.57
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH162",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 180,
    "pollutants": {
      "pm2_5": 23.36,
      "pm10": 98.31,
      "co": 12.17,
      "no2": 16.52,
      "o3": 143.59,
      "so2": 17.02
    },
    "readings": {
      "temperature": 17.05,
      "humidity": 26.0,
      "pressure": 1014.18
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH163",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 84,
    "pollutants": {
      "pm2_5": 117.59,
      "pm10": 175.11,
      "co": 5.77,
      "no2": 14.08,
      "o3": 38.19,
      "so2": 28.87
    },
    "readings": {
      "temperature": 13.33,
      "humidity": 72.54,
      "pressure": 1003.81
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH164",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 225,
    "pollutants": {
      "pm2_5": 109.37,
      "pm10": 181.79,
      "co": 3.37,
      "no2": 69.34,
      "o3": 19.61,
      "so2": 47.56
    },
    "readings": {
      "temperature": 10.81,
      "humidity": 21.36,
      "pressure": 984.84
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-31T00:00:00Z"
    }
  },
  {
    "record_id": "AQH165",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 36,
    "pollutants": {
      "pm2_5": 98.91,
      "pm10": 131.1,
      "co": 13.34,
      "no2": 36.56,
      "o3": 139.28,
      "so2": 35.7
    },
    "readings": {
      "temperature": 10.81,
      "humidity": 48.5,
      "pressure": 986.44
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH166",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 64,
    "pollutants": {
      "pm2_5": 67.04,
      "pm10": 66.83,
      "co": 5.65,
      "no2": 82.21,
      "o3": 174.44,
      "so2": 9.42
    },
    "readings": {
      "temperature": 27.81,
      "humidity": 69.62,
      "pressure": 1027.46
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH167",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 159,
    "pollutants": {
      "pm2_5": 76.65,
      "pm10": 174.15,
      "co": 9.22,
      "no2": 42.23,
      "o3": 108.75,
      "so2": 21.1
    },
    "readings": {
      "temperature": 34.64,
      "humidity": 55.63,
      "pressure": 1014.91
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH168",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 55,
    "pollutants": {
      "pm2_5": 29.34,
      "pm10": 154.72,
      "co": 7.6,
      "no2": 16.36,
      "o3": 39.11,
      "so2": 4.19
    },
    "readings": {
      "temperature": 37.63,
      "humidity": 64.28,
      "pressure": 1017.29
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-18T00:00:00Z"
    }
  },
  {
    "record_id": "AQH169",
    "region_id": 7,
    "region_name": "Arabian Desert",
    "aqi": 53,
    "pollutants": {
      "pm2_5": 32.15,
      "pm10": 21.6,
      "co": 2.22,
      "no2": 37.71,
      "o3": 98.39,
      "so2": 1.11
    },
    "readings": {
      "temperature": 13.82,
      "humidity": 86.43,
      "pressure": 1020.86
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-09T00:00:00Z"
    }
  },
  {
    "record_id": "AQH170",
    "region_id": 18,
    "region_name": "Boreal Forest Canada",
    "aqi": 128,
    "pollutants": {
      "pm2_5": 9.13,
      "pm10": 58.85,
      "co": 2.28,
      "no2": 99.87,
      "o3": 121.03,
      "so2": 10.41
    },
    "readings": {
      "temperature": 14.62,
      "humidity": 56.13,
      "pressure": 1009.14
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH171",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 102,
    "pollutants": {
      "pm2_5": 85.32,
      "pm10": 22.15,
      "co": 14.64,
      "no2": 40.4,
      "o3": 131.04,
      "so2": 14.56
    },
    "readings": {
      "temperature": 17.82,
      "humidity": 51.34,
      "pressure": 1012.49
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-16T00:00:00Z"
    }
  },
  {
    "record_id": "AQH172",
    "region_id": 5,
    "region_name": "Congo Rainforest",
    "aqi": 61,
    "pollutants": {
      "pm2_5": 35.23,
      "pm10": 134.04,
      "co": 6.72,
      "no2": 98.04,
      "o3": 150.07,
      "so2": 18.74
    },
    "readings": {
      "temperature": 31.16,
      "humidity": 28.74,
      "pressure": 991.02
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH173",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 31,
    "pollutants": {
      "pm2_5": 144.91,
      "pm10": 197.96,
      "co": 13.84,
      "no2": 25.93,
      "o3": 76.68,
      "so2": 3.62
    },
    "readings": {
      "temperature": 20.51,
      "humidity": 75.42,
      "pressure": 1012.74
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH174",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 108,
    "pollutants": {
      "pm2_5": 118.4,
      "pm10": 195.67,
      "co": 10.03,
      "no2": 46.32,
      "o3": 100.83,
      "so2": 17.9
    },
    "readings": {
      "temperature": 39.38,
      "humidity": 55.36,
      "pressure": 1010.52
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-30T00:00:00Z"
    }
  },
  {
    "record_id": "AQH175",
    "region_id": 12,
    "region_name": "Antarctic Peninsula",
    "aqi": 52,
    "pollutants": {
      "pm2_5": 15.24,
      "pm10": 167.14,
      "co": 13.01,
      "no2": 86.24,
      "o3": 70.71,
      "so2": 12.23
    },
    "readings": {
      "temperature": 39.7,
      "humidity": 65.76,
      "pressure": 987.84
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH176",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 107,
    "pollutants": {
      "pm2_5": 79.16,
      "pm10": 102.38,
      "co": 6.4,
      "no2": 11.12,
      "o3": 168.5,
      "so2": 32.37
    },
    "readings": {
      "temperature": 26.05,
      "humidity": 85.46,
      "pressure": 1020.11
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-24T00:00:00Z"
    }
  },
  {
    "record_id": "AQH177",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 165,
    "pollutants": {
      "pm2_5": 74.93,
      "pm10": 70.94,
      "co": 6.76,
      "no2": 21.48,
      "o3": 118.54,
      "so2": 29.63
    },
    "readings": {
      "temperature": 5.22,
      "humidity": 55.46,
      "pressure": 1012.73
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-02-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH178",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 124,
    "pollutants": {
      "pm2_5": 41.94,
      "pm10": 158.52,
      "co": 9.76,
      "no2": 97.51,
      "o3": 105.91,
      "so2": 4.52
    },
    "readings": {
      "temperature": 25.52,
      "humidity": 46.75,
      "pressure": 1029.44
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-01-21T00:00:00Z"
    }
  },
  {
    "record_id": "AQH179",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 204,
    "pollutants": {
      "pm2_5": 132.49,
      "pm10": 181.26,
      "co": 9.11,
      "no2": 88.03,
      "o3": 102.85,
      "so2": 1.6
    },
    "readings": {
      "temperature": 30.63,
      "humidity": 44.66,
      "pressure": 1015.21
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-25T00:00:00Z"
    }
  },
  {
    "record_id": "AQH180",
    "region_id": 9,
    "region_name": "Galapagos Islands",
    "aqi": 50,
    "pollutants": {
      "pm2_5": 133.52,
      "pm10": 112.69,
      "co": 2.47,
      "no2": 79.41,
      "o3": 30.78,
      "so2": 21.84
    },
    "readings": {
      "temperature": 14.94,
      "humidity": 21.8,
      "pressure": 1000.91
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-05T00:00:00Z"
    }
  },
  {
    "record_id": "AQH181",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 78,
    "pollutants": {
      "pm2_5": 55.21,
      "pm10": 83.6,
      "co": 7.31,
      "no2": 63.2,
      "o3": 71.63,
      "so2": 7.05
    },
    "readings": {
      "temperature": 33.24,
      "humidity": 53.27,
      "pressure": 1003.34
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH182",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 145,
    "pollutants": {
      "pm2_5": 57.64,
      "pm10": 86.4,
      "co": 7.93,
      "no2": 43.92,
      "o3": 71.04,
      "so2": 41.19
    },
    "readings": {
      "temperature": 20.32,
      "humidity": 24.75,
      "pressure": 985.15
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-02-13T00:00:00Z"
    }
  },
  {
    "record_id": "AQH183",
    "region_id": 19,
    "region_name": "African Savanna",
    "aqi": 116,
    "pollutants": {
      "pm2_5": 141.23,
      "pm10": 144.37,
      "co": 1.8,
      "no2": 33.71,
      "o3": 64.2,
      "so2": 37.06
    },
    "readings": {
      "temperature": 27.63,
      "humidity": 45.08,
      "pressure": 1025.17
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH184",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 26,
    "pollutants": {
      "pm2_5": 85.67,
      "pm10": 83.44,
      "co": 11.94,
      "no2": 83.31,
      "o3": 148.85,
      "so2": 1.3
    },
    "readings": {
      "temperature": 8.96,
      "humidity": 32.03,
      "pressure": 1020.1
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-03-30T00:00:00Z"
    }
  },
  {
    "record_id": "AQH185",
    "region_id": 16,
    "region_name": "Australian Outback",
    "aqi": 126,
    "pollutants": {
      "pm2_5": 44.67,
      "pm10": 84.99,
      "co": 4.68,
      "no2": 96.15,
      "o3": 64.22,
      "so2": 8.37
    },
    "readings": {
      "temperature": 7.45,
      "humidity": 89.47,
      "pressure": 983.23
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH186",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 25,
    "pollutants": {
      "pm2_5": 49.59,
      "pm10": 49.98,
      "co": 1.7,
      "no2": 13.46,
      "o3": 106.2,
      "so2": 7.34
    },
    "readings": {
      "temperature": 36.1,
      "humidity": 66.31,
      "pressure": 1005.24
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-29T00:00:00Z"
    }
  },
  {
    "record_id": "AQH187",
    "region_id": 13,
    "region_name": "Borneo Rainforest",
    "aqi": 107,
    "pollutants": {
      "pm2_5": 125.87,
      "pm10": 94.65,
      "co": 11.72,
      "no2": 67.18,
      "o3": 87.55,
      "so2": 15.63
    },
    "readings": {
      "temperature": 23.6,
      "humidity": 36.36,
      "pressure": 980.69
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-02-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH188",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 56,
    "pollutants": {
      "pm2_5": 125.13,
      "pm10": 190.02,
      "co": 8.77,
      "no2": 72.92,
      "o3": 21.3,
      "so2": 26.76
    },
    "readings": {
      "temperature": 16.07,
      "humidity": 88.14,
      "pressure": 1001.14
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-12T00:00:00Z"
    }
  },
  {
    "record_id": "AQH189",
    "region_id": 6,
    "region_name": "Himalayas",
    "aqi": 101,
    "pollutants": {
      "pm2_5": 58.27,
      "pm10": 190.02,
      "co": 8.99,
      "no2": 43.56,
      "o3": 25.73,
      "so2": 47.88
    },
    "readings": {
      "temperature": 36.37,
      "humidity": 47.65,
      "pressure": 1011.2
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH190",
    "region_id": 11,
    "region_name": "Serengeti Plains",
    "aqi": 168,
    "pollutants": {
      "pm2_5": 15.89,
      "pm10": 51.39,
      "co": 12.48,
      "no2": 24.85,
      "o3": 108.83,
      "so2": 9.4
    },
    "readings": {
      "temperature": 25.27,
      "humidity": 44.47,
      "pressure": 986.82
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH191",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 82,
    "pollutants": {
      "pm2_5": 57.74,
      "pm10": 47.34,
      "co": 9.37,
      "no2": 44.49,
      "o3": 162.59,
      "so2": 1.38
    },
    "readings": {
      "temperature": 24.71,
      "humidity": 51.44,
      "pressure": 1001.67
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-01-07T00:00:00Z"
    }
  },
  {
    "record_id": "AQH192",
    "region_id": 2,
    "region_name": "Great Barrier Reef",
    "aqi": 239,
    "pollutants": {
      "pm2_5": 78.94,
      "pm10": 169.28,
      "co": 13.09,
      "no2": 22.62,
      "o3": 73.99,
      "so2": 18.57
    },
    "readings": {
      "temperature": 7.52,
      "humidity": 49.2,
      "pressure": 1028.82
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-03-19T00:00:00Z"
    }
  },
  {
    "record_id": "AQH193",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 27,
    "pollutants": {
      "pm2_5": 26.78,
      "pm10": 96.19,
      "co": 0.69,
      "no2": 92.78,
      "o3": 158.71,
      "so2": 8.77
    },
    "readings": {
      "temperature": 34.73,
      "humidity": 26.62,
      "pressure": 990.04
    },
    "data_source": "Satellite",
    "recorded_at": {
      "$date": "2024-03-08T00:00:00Z"
    }
  },
  {
    "record_id": "AQH194",
    "region_id": 1,
    "region_name": "Amazon Basin",
    "aqi": 105,
    "pollutants": {
      "pm2_5": 23.7,
      "pm10": 125.76,
      "co": 0.24,
      "no2": 50.19,
      "o3": 95.61,
      "so2": 49.33
    },
    "readings": {
      "temperature": 6.67,
      "humidity": 88.77,
      "pressure": 1020.45
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-03-28T00:00:00Z"
    }
  },
  {
    "record_id": "AQH195",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 185,
    "pollutants": {
      "pm2_5": 40.71,
      "pm10": 63.16,
      "co": 13.16,
      "no2": 72.92,
      "o3": 161.0,
      "so2": 1.65
    },
    "readings": {
      "temperature": 10.02,
      "humidity": 59.74,
      "pressure": 1029.43
    },
    "data_source": "Drone Survey",
    "recorded_at": {
      "$date": "2024-02-15T00:00:00Z"
    }
  },
  {
    "record_id": "AQH196",
    "region_id": 4,
    "region_name": "Siberian Taiga",
    "aqi": 46,
    "pollutants": {
      "pm2_5": 136.75,
      "pm10": 92.92,
      "co": 0.52,
      "no2": 40.87,
      "o3": 154.46,
      "so2": 49.31
    },
    "readings": {
      "temperature": 19.59,
      "humidity": 33.47,
      "pressure": 1003.8
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-04T00:00:00Z"
    }
  },
  {
    "record_id": "AQH197",
    "region_id": 10,
    "region_name": "Yellowstone",
    "aqi": 116,
    "pollutants": {
      "pm2_5": 65.72,
      "pm10": 194.19,
      "co": 0.92,
      "no2": 17.13,
      "o3": 148.59,
      "so2": 7.11
    },
    "readings": {
      "temperature": 28.89,
      "humidity": 46.85,
      "pressure": 984.27
    },
    "data_source": "Mobile Unit",
    "recorded_at": {
      "$date": "2024-01-06T00:00:00Z"
    }
  },
  {
    "record_id": "AQH198",
    "region_id": 15,
    "region_name": "Mediterranean Coast",
    "aqi": 83,
    "pollutants": {
      "pm2_5": 66.87,
      "pm10": 73.85,
      "co": 1.86,
      "no2": 81.49,
      "o3": 97.36,
      "so2": 11.75
    },
    "readings": {
      "temperature": 20.28,
      "humidity": 33.41,
      "pressure": 1008.79
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-20T00:00:00Z"
    }
  },
  {
    "record_id": "AQH199",
    "region_id": 3,
    "region_name": "Sahara Desert",
    "aqi": 125,
    "pollutants": {
      "pm2_5": 63.79,
      "pm10": 179.54,
      "co": 4.33,
      "no2": 66.92,
      "o3": 25.99,
      "so2": 38.91
    },
    "readings": {
      "temperature": 7.74,
      "humidity": 36.02,
      "pressure": 981.06
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-11T00:00:00Z"
    }
  },
  {
    "record_id": "AQH200",
    "region_id": 8,
    "region_name": "Madagascar",
    "aqi": 52,
    "pollutants": {
      "pm2_5": 21.57,
      "pm10": 81.28,
      "co": 0.51,
      "no2": 41.32,
      "o3": 129.63,
      "so2": 38.74
    },
    "readings": {
      "temperature": 22.86,
      "humidity": 40.12,
      "pressure": 1008.41
    },
    "data_source": "Ground Station",
    "recorded_at": {
      "$date": "2024-01-25T00:00:00Z"
    }
  }
]);

// Species Details
db.Species_Details.insertMany([
  {
    "species_id": "SP001",
    "common_name": "Jaguar",
    "scientific_name": "Panthera onca",
    "habitat_regions": [
      1,
      5,
      19
    ],
    "population_estimate": 41777,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP002",
    "common_name": "Green Sea Turtle",
    "scientific_name": "Chelonia mydas",
    "habitat_regions": [
      2,
      20
    ],
    "population_estimate": 28115,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP003",
    "common_name": "Snow Leopard",
    "scientific_name": "Panthera uncia",
    "habitat_regions": [
      4,
      6
    ],
    "population_estimate": 4287,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP004",
    "common_name": "Mountain Gorilla",
    "scientific_name": "Gorilla beringei beringei",
    "habitat_regions": [
      5
    ],
    "population_estimate": 11395,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP005",
    "common_name": "Giant Panda",
    "scientific_name": "Ailuropoda melanoleuca",
    "habitat_regions": [
      4
    ],
    "population_estimate": 7818,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP006",
    "common_name": "African Elephant",
    "scientific_name": "Loxodonta africana",
    "habitat_regions": [
      5,
      11,
      19
    ],
    "population_estimate": 3503,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP007",
    "common_name": "Bengal Tiger",
    "scientific_name": "Panthera tigris tigris",
    "habitat_regions": [
      5,
      13
    ],
    "population_estimate": 47655,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP008",
    "common_name": "Orangutan",
    "scientific_name": "Pongo pygmaeus",
    "habitat_regions": [
      13
    ],
    "population_estimate": 16369,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP009",
    "common_name": "Blue Whale",
    "scientific_name": "Balaenoptera musculus",
    "habitat_regions": [
      2,
      12,
      20
    ],
    "population_estimate": 32275,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP010",
    "common_name": "Polar Bear",
    "scientific_name": "Ursus maritimus",
    "habitat_regions": [
      12,
      18
    ],
    "population_estimate": 25838,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP011",
    "common_name": "Lemur",
    "scientific_name": "Lemur catta",
    "habitat_regions": [
      8
    ],
    "population_estimate": 41310,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP012",
    "common_name": "Koala",
    "scientific_name": "Phascolarctos cinereus",
    "habitat_regions": [
      16
    ],
    "population_estimate": 21652,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP013",
    "common_name": "Grizzly Bear",
    "scientific_name": "Ursus arctos",
    "habitat_regions": [
      10,
      14,
      17,
      18
    ],
    "population_estimate": 28426,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP014",
    "common_name": "Red Panda",
    "scientific_name": "Ailurus fulgens",
    "habitat_regions": [
      6
    ],
    "population_estimate": 25945,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP015",
    "common_name": "Cheetah",
    "scientific_name": "Acinonyx jubatus",
    "habitat_regions": [
      11,
      19
    ],
    "population_estimate": 43365,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP016",
    "common_name": "Harpy Eagle",
    "scientific_name": "Harpia harpyja",
    "habitat_regions": [
      1
    ],
    "population_estimate": 16119,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP017",
    "common_name": "Emperor Penguin",
    "scientific_name": "Aptenodytes forsteri",
    "habitat_regions": [
      12
    ],
    "population_estimate": 35154,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP018",
    "common_name": "Giant Otter",
    "scientific_name": "Pteronura brasiliensis",
    "habitat_regions": [
      1
    ],
    "population_estimate": 35551,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP019",
    "common_name": "Arabian Oryx",
    "scientific_name": "Oryx leucoryx",
    "habitat_regions": [
      7
    ],
    "population_estimate": 5437,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP020",
    "common_name": "Tasmanian Devil",
    "scientific_name": "Sarcophilus harrisii",
    "habitat_regions": [
      16
    ],
    "population_estimate": 355,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP021",
    "common_name": "Species_21",
    "scientific_name": "Genus species_21",
    "habitat_regions": [
      5
    ],
    "population_estimate": 6498,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP022",
    "common_name": "Species_22",
    "scientific_name": "Genus species_22",
    "habitat_regions": [
      5
    ],
    "population_estimate": 38103,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP023",
    "common_name": "Species_23",
    "scientific_name": "Genus species_23",
    "habitat_regions": [
      17
    ],
    "population_estimate": 33104,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP024",
    "common_name": "Species_24",
    "scientific_name": "Genus species_24",
    "habitat_regions": [
      16
    ],
    "population_estimate": 32414,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP025",
    "common_name": "Species_25",
    "scientific_name": "Genus species_25",
    "habitat_regions": [
      5
    ],
    "population_estimate": 31238,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP026",
    "common_name": "Species_26",
    "scientific_name": "Genus species_26",
    "habitat_regions": [
      9
    ],
    "population_estimate": 31667,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP027",
    "common_name": "Species_27",
    "scientific_name": "Genus species_27",
    "habitat_regions": [
      16
    ],
    "population_estimate": 14796,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP028",
    "common_name": "Species_28",
    "scientific_name": "Genus species_28",
    "habitat_regions": [
      20
    ],
    "population_estimate": 33246,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP029",
    "common_name": "Species_29",
    "scientific_name": "Genus species_29",
    "habitat_regions": [
      2
    ],
    "population_estimate": 23659,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP030",
    "common_name": "Species_30",
    "scientific_name": "Genus species_30",
    "habitat_regions": [
      8
    ],
    "population_estimate": 35016,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP031",
    "common_name": "Species_31",
    "scientific_name": "Genus species_31",
    "habitat_regions": [
      19
    ],
    "population_estimate": 29961,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP032",
    "common_name": "Species_32",
    "scientific_name": "Genus species_32",
    "habitat_regions": [
      19
    ],
    "population_estimate": 48930,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP033",
    "common_name": "Species_33",
    "scientific_name": "Genus species_33",
    "habitat_regions": [
      18
    ],
    "population_estimate": 15486,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP034",
    "common_name": "Species_34",
    "scientific_name": "Genus species_34",
    "habitat_regions": [
      16
    ],
    "population_estimate": 12871,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP035",
    "common_name": "Species_35",
    "scientific_name": "Genus species_35",
    "habitat_regions": [
      12
    ],
    "population_estimate": 24244,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP036",
    "common_name": "Species_36",
    "scientific_name": "Genus species_36",
    "habitat_regions": [
      4
    ],
    "population_estimate": 32054,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP037",
    "common_name": "Species_37",
    "scientific_name": "Genus species_37",
    "habitat_regions": [
      9
    ],
    "population_estimate": 3570,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP038",
    "common_name": "Species_38",
    "scientific_name": "Genus species_38",
    "habitat_regions": [
      16
    ],
    "population_estimate": 38116,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP039",
    "common_name": "Species_39",
    "scientific_name": "Genus species_39",
    "habitat_regions": [
      14
    ],
    "population_estimate": 15834,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP040",
    "common_name": "Species_40",
    "scientific_name": "Genus species_40",
    "habitat_regions": [
      18
    ],
    "population_estimate": 39064,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP041",
    "common_name": "Species_41",
    "scientific_name": "Genus species_41",
    "habitat_regions": [
      9
    ],
    "population_estimate": 23554,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP042",
    "common_name": "Species_42",
    "scientific_name": "Genus species_42",
    "habitat_regions": [
      11
    ],
    "population_estimate": 30242,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP043",
    "common_name": "Species_43",
    "scientific_name": "Genus species_43",
    "habitat_regions": [
      8
    ],
    "population_estimate": 6282,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP044",
    "common_name": "Species_44",
    "scientific_name": "Genus species_44",
    "habitat_regions": [
      7
    ],
    "population_estimate": 30245,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP045",
    "common_name": "Species_45",
    "scientific_name": "Genus species_45",
    "habitat_regions": [
      2
    ],
    "population_estimate": 28957,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP046",
    "common_name": "Species_46",
    "scientific_name": "Genus species_46",
    "habitat_regions": [
      1
    ],
    "population_estimate": 8241,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP047",
    "common_name": "Species_47",
    "scientific_name": "Genus species_47",
    "habitat_regions": [
      13
    ],
    "population_estimate": 3879,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP048",
    "common_name": "Species_48",
    "scientific_name": "Genus species_48",
    "habitat_regions": [
      3
    ],
    "population_estimate": 15217,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP049",
    "common_name": "Species_49",
    "scientific_name": "Genus species_49",
    "habitat_regions": [
      11
    ],
    "population_estimate": 39236,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP050",
    "common_name": "Species_50",
    "scientific_name": "Genus species_50",
    "habitat_regions": [
      13
    ],
    "population_estimate": 9204,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP051",
    "common_name": "Species_51",
    "scientific_name": "Genus species_51",
    "habitat_regions": [
      15
    ],
    "population_estimate": 33579,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP052",
    "common_name": "Species_52",
    "scientific_name": "Genus species_52",
    "habitat_regions": [
      8
    ],
    "population_estimate": 21965,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP053",
    "common_name": "Species_53",
    "scientific_name": "Genus species_53",
    "habitat_regions": [
      7
    ],
    "population_estimate": 4560,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP054",
    "common_name": "Species_54",
    "scientific_name": "Genus species_54",
    "habitat_regions": [
      18
    ],
    "population_estimate": 36937,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP055",
    "common_name": "Species_55",
    "scientific_name": "Genus species_55",
    "habitat_regions": [
      7
    ],
    "population_estimate": 18602,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP056",
    "common_name": "Species_56",
    "scientific_name": "Genus species_56",
    "habitat_regions": [
      15
    ],
    "population_estimate": 10021,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP057",
    "common_name": "Species_57",
    "scientific_name": "Genus species_57",
    "habitat_regions": [
      15
    ],
    "population_estimate": 28288,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP058",
    "common_name": "Species_58",
    "scientific_name": "Genus species_58",
    "habitat_regions": [
      18
    ],
    "population_estimate": 21237,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP059",
    "common_name": "Species_59",
    "scientific_name": "Genus species_59",
    "habitat_regions": [
      19
    ],
    "population_estimate": 4788,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP060",
    "common_name": "Species_60",
    "scientific_name": "Genus species_60",
    "habitat_regions": [
      20
    ],
    "population_estimate": 44962,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP061",
    "common_name": "Species_61",
    "scientific_name": "Genus species_61",
    "habitat_regions": [
      9
    ],
    "population_estimate": 30319,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP062",
    "common_name": "Species_62",
    "scientific_name": "Genus species_62",
    "habitat_regions": [
      11
    ],
    "population_estimate": 48376,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP063",
    "common_name": "Species_63",
    "scientific_name": "Genus species_63",
    "habitat_regions": [
      18
    ],
    "population_estimate": 45723,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP064",
    "common_name": "Species_64",
    "scientific_name": "Genus species_64",
    "habitat_regions": [
      5
    ],
    "population_estimate": 4640,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP065",
    "common_name": "Species_65",
    "scientific_name": "Genus species_65",
    "habitat_regions": [
      10
    ],
    "population_estimate": 38467,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP066",
    "common_name": "Species_66",
    "scientific_name": "Genus species_66",
    "habitat_regions": [
      5
    ],
    "population_estimate": 28640,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP067",
    "common_name": "Species_67",
    "scientific_name": "Genus species_67",
    "habitat_regions": [
      2
    ],
    "population_estimate": 42922,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP068",
    "common_name": "Species_68",
    "scientific_name": "Genus species_68",
    "habitat_regions": [
      10
    ],
    "population_estimate": 14368,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP069",
    "common_name": "Species_69",
    "scientific_name": "Genus species_69",
    "habitat_regions": [
      6
    ],
    "population_estimate": 9019,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP070",
    "common_name": "Species_70",
    "scientific_name": "Genus species_70",
    "habitat_regions": [
      9
    ],
    "population_estimate": 46672,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP071",
    "common_name": "Species_71",
    "scientific_name": "Genus species_71",
    "habitat_regions": [
      5
    ],
    "population_estimate": 17355,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP072",
    "common_name": "Species_72",
    "scientific_name": "Genus species_72",
    "habitat_regions": [
      9
    ],
    "population_estimate": 47106,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP073",
    "common_name": "Species_73",
    "scientific_name": "Genus species_73",
    "habitat_regions": [
      11
    ],
    "population_estimate": 35177,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP074",
    "common_name": "Species_74",
    "scientific_name": "Genus species_74",
    "habitat_regions": [
      17
    ],
    "population_estimate": 35061,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP075",
    "common_name": "Species_75",
    "scientific_name": "Genus species_75",
    "habitat_regions": [
      17
    ],
    "population_estimate": 13964,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP076",
    "common_name": "Species_76",
    "scientific_name": "Genus species_76",
    "habitat_regions": [
      16
    ],
    "population_estimate": 28235,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP077",
    "common_name": "Species_77",
    "scientific_name": "Genus species_77",
    "habitat_regions": [
      1
    ],
    "population_estimate": 27088,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP078",
    "common_name": "Species_78",
    "scientific_name": "Genus species_78",
    "habitat_regions": [
      8
    ],
    "population_estimate": 1792,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP079",
    "common_name": "Species_79",
    "scientific_name": "Genus species_79",
    "habitat_regions": [
      6
    ],
    "population_estimate": 14810,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP080",
    "common_name": "Species_80",
    "scientific_name": "Genus species_80",
    "habitat_regions": [
      14
    ],
    "population_estimate": 29860,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP081",
    "common_name": "Species_81",
    "scientific_name": "Genus species_81",
    "habitat_regions": [
      18
    ],
    "population_estimate": 46133,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP082",
    "common_name": "Species_82",
    "scientific_name": "Genus species_82",
    "habitat_regions": [
      17
    ],
    "population_estimate": 25611,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP083",
    "common_name": "Species_83",
    "scientific_name": "Genus species_83",
    "habitat_regions": [
      18
    ],
    "population_estimate": 26393,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP084",
    "common_name": "Species_84",
    "scientific_name": "Genus species_84",
    "habitat_regions": [
      10
    ],
    "population_estimate": 23115,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP085",
    "common_name": "Species_85",
    "scientific_name": "Genus species_85",
    "habitat_regions": [
      4
    ],
    "population_estimate": 24666,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP086",
    "common_name": "Species_86",
    "scientific_name": "Genus species_86",
    "habitat_regions": [
      6
    ],
    "population_estimate": 37007,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP087",
    "common_name": "Species_87",
    "scientific_name": "Genus species_87",
    "habitat_regions": [
      15
    ],
    "population_estimate": 48399,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP088",
    "common_name": "Species_88",
    "scientific_name": "Genus species_88",
    "habitat_regions": [
      11
    ],
    "population_estimate": 11046,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP089",
    "common_name": "Species_89",
    "scientific_name": "Genus species_89",
    "habitat_regions": [
      4
    ],
    "population_estimate": 15343,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP090",
    "common_name": "Species_90",
    "scientific_name": "Genus species_90",
    "habitat_regions": [
      8
    ],
    "population_estimate": 36037,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP091",
    "common_name": "Species_91",
    "scientific_name": "Genus species_91",
    "habitat_regions": [
      16
    ],
    "population_estimate": 14970,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP092",
    "common_name": "Species_92",
    "scientific_name": "Genus species_92",
    "habitat_regions": [
      15
    ],
    "population_estimate": 30100,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP093",
    "common_name": "Species_93",
    "scientific_name": "Genus species_93",
    "habitat_regions": [
      4
    ],
    "population_estimate": 6942,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP094",
    "common_name": "Species_94",
    "scientific_name": "Genus species_94",
    "habitat_regions": [
      1
    ],
    "population_estimate": 6143,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP095",
    "common_name": "Species_95",
    "scientific_name": "Genus species_95",
    "habitat_regions": [
      7
    ],
    "population_estimate": 40841,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP096",
    "common_name": "Species_96",
    "scientific_name": "Genus species_96",
    "habitat_regions": [
      10
    ],
    "population_estimate": 43704,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP097",
    "common_name": "Species_97",
    "scientific_name": "Genus species_97",
    "habitat_regions": [
      19
    ],
    "population_estimate": 38919,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP098",
    "common_name": "Species_98",
    "scientific_name": "Genus species_98",
    "habitat_regions": [
      17
    ],
    "population_estimate": 11590,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP099",
    "common_name": "Species_99",
    "scientific_name": "Genus species_99",
    "habitat_regions": [
      19
    ],
    "population_estimate": 3177,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP100",
    "common_name": "Species_100",
    "scientific_name": "Genus species_100",
    "habitat_regions": [
      14
    ],
    "population_estimate": 24792,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP101",
    "common_name": "Species_101",
    "scientific_name": "Genus species_101",
    "habitat_regions": [
      12
    ],
    "population_estimate": 4743,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP102",
    "common_name": "Species_102",
    "scientific_name": "Genus species_102",
    "habitat_regions": [
      1
    ],
    "population_estimate": 35128,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP103",
    "common_name": "Species_103",
    "scientific_name": "Genus species_103",
    "habitat_regions": [
      11
    ],
    "population_estimate": 34411,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP104",
    "common_name": "Species_104",
    "scientific_name": "Genus species_104",
    "habitat_regions": [
      12
    ],
    "population_estimate": 20269,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP105",
    "common_name": "Species_105",
    "scientific_name": "Genus species_105",
    "habitat_regions": [
      9
    ],
    "population_estimate": 30026,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP106",
    "common_name": "Species_106",
    "scientific_name": "Genus species_106",
    "habitat_regions": [
      20
    ],
    "population_estimate": 3518,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP107",
    "common_name": "Species_107",
    "scientific_name": "Genus species_107",
    "habitat_regions": [
      4
    ],
    "population_estimate": 22195,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP108",
    "common_name": "Species_108",
    "scientific_name": "Genus species_108",
    "habitat_regions": [
      13
    ],
    "population_estimate": 38626,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP109",
    "common_name": "Species_109",
    "scientific_name": "Genus species_109",
    "habitat_regions": [
      20
    ],
    "population_estimate": 35827,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP110",
    "common_name": "Species_110",
    "scientific_name": "Genus species_110",
    "habitat_regions": [
      9
    ],
    "population_estimate": 18099,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP111",
    "common_name": "Species_111",
    "scientific_name": "Genus species_111",
    "habitat_regions": [
      18
    ],
    "population_estimate": 23025,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP112",
    "common_name": "Species_112",
    "scientific_name": "Genus species_112",
    "habitat_regions": [
      7
    ],
    "population_estimate": 19470,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP113",
    "common_name": "Species_113",
    "scientific_name": "Genus species_113",
    "habitat_regions": [
      15
    ],
    "population_estimate": 22161,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP114",
    "common_name": "Species_114",
    "scientific_name": "Genus species_114",
    "habitat_regions": [
      5
    ],
    "population_estimate": 39962,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP115",
    "common_name": "Species_115",
    "scientific_name": "Genus species_115",
    "habitat_regions": [
      2
    ],
    "population_estimate": 34465,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP116",
    "common_name": "Species_116",
    "scientific_name": "Genus species_116",
    "habitat_regions": [
      10
    ],
    "population_estimate": 1590,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP117",
    "common_name": "Species_117",
    "scientific_name": "Genus species_117",
    "habitat_regions": [
      16
    ],
    "population_estimate": 47181,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP118",
    "common_name": "Species_118",
    "scientific_name": "Genus species_118",
    "habitat_regions": [
      17
    ],
    "population_estimate": 22304,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP119",
    "common_name": "Species_119",
    "scientific_name": "Genus species_119",
    "habitat_regions": [
      3
    ],
    "population_estimate": 41997,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP120",
    "common_name": "Species_120",
    "scientific_name": "Genus species_120",
    "habitat_regions": [
      16
    ],
    "population_estimate": 32524,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP121",
    "common_name": "Species_121",
    "scientific_name": "Genus species_121",
    "habitat_regions": [
      1
    ],
    "population_estimate": 7371,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP122",
    "common_name": "Species_122",
    "scientific_name": "Genus species_122",
    "habitat_regions": [
      19
    ],
    "population_estimate": 29011,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP123",
    "common_name": "Species_123",
    "scientific_name": "Genus species_123",
    "habitat_regions": [
      20
    ],
    "population_estimate": 24343,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP124",
    "common_name": "Species_124",
    "scientific_name": "Genus species_124",
    "habitat_regions": [
      6
    ],
    "population_estimate": 7047,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP125",
    "common_name": "Species_125",
    "scientific_name": "Genus species_125",
    "habitat_regions": [
      19
    ],
    "population_estimate": 4340,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP126",
    "common_name": "Species_126",
    "scientific_name": "Genus species_126",
    "habitat_regions": [
      5
    ],
    "population_estimate": 29317,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP127",
    "common_name": "Species_127",
    "scientific_name": "Genus species_127",
    "habitat_regions": [
      19
    ],
    "population_estimate": 6065,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP128",
    "common_name": "Species_128",
    "scientific_name": "Genus species_128",
    "habitat_regions": [
      16
    ],
    "population_estimate": 18193,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP129",
    "common_name": "Species_129",
    "scientific_name": "Genus species_129",
    "habitat_regions": [
      20
    ],
    "population_estimate": 12816,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP130",
    "common_name": "Species_130",
    "scientific_name": "Genus species_130",
    "habitat_regions": [
      1
    ],
    "population_estimate": 29493,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP131",
    "common_name": "Species_131",
    "scientific_name": "Genus species_131",
    "habitat_regions": [
      3
    ],
    "population_estimate": 3758,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP132",
    "common_name": "Species_132",
    "scientific_name": "Genus species_132",
    "habitat_regions": [
      4
    ],
    "population_estimate": 3289,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP133",
    "common_name": "Species_133",
    "scientific_name": "Genus species_133",
    "habitat_regions": [
      2
    ],
    "population_estimate": 38752,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP134",
    "common_name": "Species_134",
    "scientific_name": "Genus species_134",
    "habitat_regions": [
      19
    ],
    "population_estimate": 48011,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP135",
    "common_name": "Species_135",
    "scientific_name": "Genus species_135",
    "habitat_regions": [
      16
    ],
    "population_estimate": 39974,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP136",
    "common_name": "Species_136",
    "scientific_name": "Genus species_136",
    "habitat_regions": [
      19
    ],
    "population_estimate": 12229,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP137",
    "common_name": "Species_137",
    "scientific_name": "Genus species_137",
    "habitat_regions": [
      11
    ],
    "population_estimate": 27033,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP138",
    "common_name": "Species_138",
    "scientific_name": "Genus species_138",
    "habitat_regions": [
      2
    ],
    "population_estimate": 32445,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP139",
    "common_name": "Species_139",
    "scientific_name": "Genus species_139",
    "habitat_regions": [
      19
    ],
    "population_estimate": 44161,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP140",
    "common_name": "Species_140",
    "scientific_name": "Genus species_140",
    "habitat_regions": [
      1
    ],
    "population_estimate": 25573,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP141",
    "common_name": "Species_141",
    "scientific_name": "Genus species_141",
    "habitat_regions": [
      5
    ],
    "population_estimate": 13789,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP142",
    "common_name": "Species_142",
    "scientific_name": "Genus species_142",
    "habitat_regions": [
      16
    ],
    "population_estimate": 36295,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP143",
    "common_name": "Species_143",
    "scientific_name": "Genus species_143",
    "habitat_regions": [
      10
    ],
    "population_estimate": 10462,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP144",
    "common_name": "Species_144",
    "scientific_name": "Genus species_144",
    "habitat_regions": [
      7
    ],
    "population_estimate": 46287,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP145",
    "common_name": "Species_145",
    "scientific_name": "Genus species_145",
    "habitat_regions": [
      13
    ],
    "population_estimate": 32721,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP146",
    "common_name": "Species_146",
    "scientific_name": "Genus species_146",
    "habitat_regions": [
      16
    ],
    "population_estimate": 5528,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP147",
    "common_name": "Species_147",
    "scientific_name": "Genus species_147",
    "habitat_regions": [
      12
    ],
    "population_estimate": 4799,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP148",
    "common_name": "Species_148",
    "scientific_name": "Genus species_148",
    "habitat_regions": [
      5
    ],
    "population_estimate": 46093,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP149",
    "common_name": "Species_149",
    "scientific_name": "Genus species_149",
    "habitat_regions": [
      20
    ],
    "population_estimate": 23244,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP150",
    "common_name": "Species_150",
    "scientific_name": "Genus species_150",
    "habitat_regions": [
      11
    ],
    "population_estimate": 27669,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP151",
    "common_name": "Species_151",
    "scientific_name": "Genus species_151",
    "habitat_regions": [
      4
    ],
    "population_estimate": 32358,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP152",
    "common_name": "Species_152",
    "scientific_name": "Genus species_152",
    "habitat_regions": [
      20
    ],
    "population_estimate": 32455,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP153",
    "common_name": "Species_153",
    "scientific_name": "Genus species_153",
    "habitat_regions": [
      13
    ],
    "population_estimate": 21970,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP154",
    "common_name": "Species_154",
    "scientific_name": "Genus species_154",
    "habitat_regions": [
      3
    ],
    "population_estimate": 49334,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP155",
    "common_name": "Species_155",
    "scientific_name": "Genus species_155",
    "habitat_regions": [
      13
    ],
    "population_estimate": 7696,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP156",
    "common_name": "Species_156",
    "scientific_name": "Genus species_156",
    "habitat_regions": [
      5
    ],
    "population_estimate": 40030,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP157",
    "common_name": "Species_157",
    "scientific_name": "Genus species_157",
    "habitat_regions": [
      13
    ],
    "population_estimate": 18551,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP158",
    "common_name": "Species_158",
    "scientific_name": "Genus species_158",
    "habitat_regions": [
      19
    ],
    "population_estimate": 3049,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP159",
    "common_name": "Species_159",
    "scientific_name": "Genus species_159",
    "habitat_regions": [
      7
    ],
    "population_estimate": 33686,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP160",
    "common_name": "Species_160",
    "scientific_name": "Genus species_160",
    "habitat_regions": [
      2
    ],
    "population_estimate": 21146,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP161",
    "common_name": "Species_161",
    "scientific_name": "Genus species_161",
    "habitat_regions": [
      15
    ],
    "population_estimate": 3560,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP162",
    "common_name": "Species_162",
    "scientific_name": "Genus species_162",
    "habitat_regions": [
      15
    ],
    "population_estimate": 16551,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP163",
    "common_name": "Species_163",
    "scientific_name": "Genus species_163",
    "habitat_regions": [
      13
    ],
    "population_estimate": 20969,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP164",
    "common_name": "Species_164",
    "scientific_name": "Genus species_164",
    "habitat_regions": [
      3
    ],
    "population_estimate": 37404,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP165",
    "common_name": "Species_165",
    "scientific_name": "Genus species_165",
    "habitat_regions": [
      17
    ],
    "population_estimate": 44735,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP166",
    "common_name": "Species_166",
    "scientific_name": "Genus species_166",
    "habitat_regions": [
      7
    ],
    "population_estimate": 20579,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP167",
    "common_name": "Species_167",
    "scientific_name": "Genus species_167",
    "habitat_regions": [
      6
    ],
    "population_estimate": 25851,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP168",
    "common_name": "Species_168",
    "scientific_name": "Genus species_168",
    "habitat_regions": [
      11
    ],
    "population_estimate": 1868,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP169",
    "common_name": "Species_169",
    "scientific_name": "Genus species_169",
    "habitat_regions": [
      10
    ],
    "population_estimate": 47085,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP170",
    "common_name": "Species_170",
    "scientific_name": "Genus species_170",
    "habitat_regions": [
      4
    ],
    "population_estimate": 42268,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP171",
    "common_name": "Species_171",
    "scientific_name": "Genus species_171",
    "habitat_regions": [
      15
    ],
    "population_estimate": 39566,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP172",
    "common_name": "Species_172",
    "scientific_name": "Genus species_172",
    "habitat_regions": [
      19
    ],
    "population_estimate": 8702,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP173",
    "common_name": "Species_173",
    "scientific_name": "Genus species_173",
    "habitat_regions": [
      19
    ],
    "population_estimate": 29855,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP174",
    "common_name": "Species_174",
    "scientific_name": "Genus species_174",
    "habitat_regions": [
      10
    ],
    "population_estimate": 39205,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP175",
    "common_name": "Species_175",
    "scientific_name": "Genus species_175",
    "habitat_regions": [
      20
    ],
    "population_estimate": 19177,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP176",
    "common_name": "Species_176",
    "scientific_name": "Genus species_176",
    "habitat_regions": [
      2
    ],
    "population_estimate": 35023,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP177",
    "common_name": "Species_177",
    "scientific_name": "Genus species_177",
    "habitat_regions": [
      19
    ],
    "population_estimate": 19174,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Habitat Loss",
      "Poaching"
    ]
  },
  {
    "species_id": "SP178",
    "common_name": "Species_178",
    "scientific_name": "Genus species_178",
    "habitat_regions": [
      15
    ],
    "population_estimate": 26549,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP179",
    "common_name": "Species_179",
    "scientific_name": "Genus species_179",
    "habitat_regions": [
      9
    ],
    "population_estimate": 9030,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP180",
    "common_name": "Species_180",
    "scientific_name": "Genus species_180",
    "habitat_regions": [
      19
    ],
    "population_estimate": 13732,
    "iucn_status": "Endangered",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Mining",
      "Agricultural Expansion"
    ]
  },
  {
    "species_id": "SP181",
    "common_name": "Species_181",
    "scientific_name": "Genus species_181",
    "habitat_regions": [
      10
    ],
    "population_estimate": 18829,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP182",
    "common_name": "Species_182",
    "scientific_name": "Genus species_182",
    "habitat_regions": [
      16
    ],
    "population_estimate": 34620,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP183",
    "common_name": "Species_183",
    "scientific_name": "Genus species_183",
    "habitat_regions": [
      6
    ],
    "population_estimate": 16487,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP184",
    "common_name": "Species_184",
    "scientific_name": "Genus species_184",
    "habitat_regions": [
      13
    ],
    "population_estimate": 46470,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP185",
    "common_name": "Species_185",
    "scientific_name": "Genus species_185",
    "habitat_regions": [
      2
    ],
    "population_estimate": 36695,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP186",
    "common_name": "Species_186",
    "scientific_name": "Genus species_186",
    "habitat_regions": [
      20
    ],
    "population_estimate": 22083,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP187",
    "common_name": "Species_187",
    "scientific_name": "Genus species_187",
    "habitat_regions": [
      9
    ],
    "population_estimate": 44072,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  },
  {
    "species_id": "SP188",
    "common_name": "Species_188",
    "scientific_name": "Genus species_188",
    "habitat_regions": [
      14
    ],
    "population_estimate": 9651,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP189",
    "common_name": "Species_189",
    "scientific_name": "Genus species_189",
    "habitat_regions": [
      16
    ],
    "population_estimate": 35163,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP190",
    "common_name": "Species_190",
    "scientific_name": "Genus species_190",
    "habitat_regions": [
      14
    ],
    "population_estimate": 42757,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP191",
    "common_name": "Species_191",
    "scientific_name": "Genus species_191",
    "habitat_regions": [
      5
    ],
    "population_estimate": 13219,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP192",
    "common_name": "Species_192",
    "scientific_name": "Genus species_192",
    "habitat_regions": [
      6
    ],
    "population_estimate": 39397,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP193",
    "common_name": "Species_193",
    "scientific_name": "Genus species_193",
    "habitat_regions": [
      17
    ],
    "population_estimate": 11626,
    "iucn_status": "Critically Endangered",
    "conservation_efforts": [
      "Legal Protection",
      "Research Initiatives"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP194",
    "common_name": "Species_194",
    "scientific_name": "Genus species_194",
    "habitat_regions": [
      1
    ],
    "population_estimate": 6775,
    "iucn_status": "Least Concern",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP195",
    "common_name": "Species_195",
    "scientific_name": "Genus species_195",
    "habitat_regions": [
      16
    ],
    "population_estimate": 11211,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP196",
    "common_name": "Species_196",
    "scientific_name": "Genus species_196",
    "habitat_regions": [
      12
    ],
    "population_estimate": 39227,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Marine Protected Areas"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP197",
    "common_name": "Species_197",
    "scientific_name": "Genus species_197",
    "habitat_regions": [
      19
    ],
    "population_estimate": 34502,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Habitat Restoration",
      "Community Education"
    ],
    "threats": [
      "Climate Change",
      "Pollution"
    ]
  },
  {
    "species_id": "SP198",
    "common_name": "Species_198",
    "scientific_name": "Genus species_198",
    "habitat_regions": [
      11
    ],
    "population_estimate": 30451,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Breeding Programs",
      "Wildlife Corridors"
    ],
    "threats": [
      "Deforestation",
      "Human-Wildlife Conflict"
    ]
  },
  {
    "species_id": "SP199",
    "common_name": "Species_199",
    "scientific_name": "Genus species_199",
    "habitat_regions": [
      15
    ],
    "population_estimate": 46975,
    "iucn_status": "Near Threatened",
    "conservation_efforts": [
      "Protected Areas",
      "Anti-Poaching Patrols"
    ],
    "threats": [
      "Overfishing",
      "Bycatch"
    ]
  },
  {
    "species_id": "SP200",
    "common_name": "Species_200",
    "scientific_name": "Genus species_200",
    "habitat_regions": [
      6
    ],
    "population_estimate": 5943,
    "iucn_status": "Vulnerable",
    "conservation_efforts": [
      "Reintroduction Programs"
    ],
    "threats": [
      "Disease",
      "Habitat Fragmentation"
    ]
  }
]);

// Sensor Metadata
db.Sensor_Metadata.insertMany([
  {
    "sensor_id": "SENS_001",
    "region_id": 10,
    "location": {
      "latitude": 23.20273,
      "longitude": -41.063757,
      "altitude": 3908.89
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-02-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-24T00:00:00Z"
      },
      {
        "$date": "2023-11-19T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_002",
    "region_id": 11,
    "location": {
      "latitude": 3.704542,
      "longitude": -155.148095,
      "altitude": 3598.79
    },
    "sensor_type": "Humidity",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-06-21T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-06T00:00:00Z"
      },
      {
        "$date": "2023-11-13T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_003",
    "region_id": 4,
    "location": {
      "latitude": 83.629785,
      "longitude": 164.266295,
      "altitude": 4361.07
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-04-21T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-09T00:00:00Z"
      },
      {
        "$date": "2023-07-11T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_004",
    "region_id": 10,
    "location": {
      "latitude": 18.862732,
      "longitude": 142.365156,
      "altitude": 4420.35
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-11-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-21T00:00:00Z"
      },
      {
        "$date": "2023-11-12T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_005",
    "region_id": 19,
    "location": {
      "latitude": 11.38493,
      "longitude": -116.675994,
      "altitude": 4380.65
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-04-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-17T00:00:00Z"
      },
      {
        "$date": "2023-08-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_006",
    "region_id": 7,
    "location": {
      "latitude": 22.384716,
      "longitude": -126.20545,
      "altitude": 2157.74
    },
    "sensor_type": "Humidity",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-03-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-02T00:00:00Z"
      },
      {
        "$date": "2023-08-17T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_007",
    "region_id": 12,
    "location": {
      "latitude": 75.906639,
      "longitude": 5.351065,
      "altitude": 2316.25
    },
    "sensor_type": "UV Index",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-04-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-28T00:00:00Z"
      },
      {
        "$date": "2023-09-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_008",
    "region_id": 9,
    "location": {
      "latitude": 26.139504,
      "longitude": -147.887814,
      "altitude": 1782.14
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2022-06-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-16T00:00:00Z"
      },
      {
        "$date": "2023-06-12T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_009",
    "region_id": 3,
    "location": {
      "latitude": -82.289429,
      "longitude": 129.721421,
      "altitude": 2697.51
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-08-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-28T00:00:00Z"
      },
      {
        "$date": "2023-08-03T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_010",
    "region_id": 5,
    "location": {
      "latitude": 16.385017,
      "longitude": 35.321081,
      "altitude": 1797.73
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-03-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-23T00:00:00Z"
      },
      {
        "$date": "2023-07-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_011",
    "region_id": 2,
    "location": {
      "latitude": -61.289295,
      "longitude": -172.851111,
      "altitude": 66.54
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-01-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-12T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_012",
    "region_id": 18,
    "location": {
      "latitude": 69.399976,
      "longitude": 84.857915,
      "altitude": 3927.04
    },
    "sensor_type": "Temperature",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-04-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-12T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_013",
    "region_id": 1,
    "location": {
      "latitude": 17.241614,
      "longitude": 37.206436,
      "altitude": 4198.5
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-07-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-06T00:00:00Z"
      },
      {
        "$date": "2023-06-25T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_014",
    "region_id": 14,
    "location": {
      "latitude": 80.127836,
      "longitude": -130.279777,
      "altitude": 3622.92
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-05-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-19T00:00:00Z"
      },
      {
        "$date": "2023-09-22T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_015",
    "region_id": 20,
    "location": {
      "latitude": 23.973241,
      "longitude": 166.903513,
      "altitude": 595.28
    },
    "sensor_type": "Humidity",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-04-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-10T00:00:00Z"
      },
      {
        "$date": "2023-10-27T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_016",
    "region_id": 2,
    "location": {
      "latitude": -10.486127,
      "longitude": 107.35554,
      "altitude": 4051.27
    },
    "sensor_type": "Humidity",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2023-08-17T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-17T00:00:00Z"
      },
      {
        "$date": "2023-08-22T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_017",
    "region_id": 1,
    "location": {
      "latitude": 56.682668,
      "longitude": 118.389139,
      "altitude": 3895.53
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-09-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-16T00:00:00Z"
      },
      {
        "$date": "2023-06-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_018",
    "region_id": 12,
    "location": {
      "latitude": -35.356344,
      "longitude": -150.726759,
      "altitude": 3019.89
    },
    "sensor_type": "Rainfall",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-01-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-16T00:00:00Z"
      },
      {
        "$date": "2023-08-22T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_019",
    "region_id": 3,
    "location": {
      "latitude": 62.559627,
      "longitude": 5.745539,
      "altitude": 1409.23
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-01-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-14T00:00:00Z"
      },
      {
        "$date": "2023-07-09T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_020",
    "region_id": 1,
    "location": {
      "latitude": 70.452855,
      "longitude": 132.266309,
      "altitude": 1177.63
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-08-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-01T00:00:00Z"
      },
      {
        "$date": "2023-09-08T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_021",
    "region_id": 5,
    "location": {
      "latitude": -46.073762,
      "longitude": 63.097774,
      "altitude": 225.17
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2022-03-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-19T00:00:00Z"
      },
      {
        "$date": "2023-08-29T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_022",
    "region_id": 12,
    "location": {
      "latitude": 31.106207,
      "longitude": 70.718799,
      "altitude": 1374.62
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-07-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-27T00:00:00Z"
      },
      {
        "$date": "2023-09-03T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_023",
    "region_id": 9,
    "location": {
      "latitude": 51.097494,
      "longitude": -58.83322,
      "altitude": 4295.12
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-09-17T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-15T00:00:00Z"
      },
      {
        "$date": "2023-08-28T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_024",
    "region_id": 1,
    "location": {
      "latitude": 88.188242,
      "longitude": 151.660412,
      "altitude": 1664.59
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-07-06T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-19T00:00:00Z"
      },
      {
        "$date": "2023-07-31T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_025",
    "region_id": 11,
    "location": {
      "latitude": -14.633651,
      "longitude": 85.103201,
      "altitude": 3186.55
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-10-17T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-26T00:00:00Z"
      },
      {
        "$date": "2023-10-21T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_026",
    "region_id": 15,
    "location": {
      "latitude": 17.351655,
      "longitude": -123.757979,
      "altitude": 2911.32
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-07-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-06T00:00:00Z"
      },
      {
        "$date": "2023-06-18T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_027",
    "region_id": 6,
    "location": {
      "latitude": -56.166821,
      "longitude": 5.146615,
      "altitude": 4814.95
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2023-05-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-16T00:00:00Z"
      },
      {
        "$date": "2023-08-25T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_028",
    "region_id": 17,
    "location": {
      "latitude": 21.044397,
      "longitude": 52.611593,
      "altitude": 1926.62
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-12-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-23T00:00:00Z"
      },
      {
        "$date": "2023-10-23T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_029",
    "region_id": 8,
    "location": {
      "latitude": -83.057153,
      "longitude": 152.693301,
      "altitude": 1595.96
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-09-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-02T00:00:00Z"
      },
      {
        "$date": "2023-09-16T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_030",
    "region_id": 14,
    "location": {
      "latitude": -4.891129,
      "longitude": -117.271178,
      "altitude": 1451.22
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-12-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-24T00:00:00Z"
      },
      {
        "$date": "2023-07-07T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_031",
    "region_id": 5,
    "location": {
      "latitude": 2.288139,
      "longitude": -85.124086,
      "altitude": 2184.33
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-04-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-08T00:00:00Z"
      },
      {
        "$date": "2023-08-08T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_032",
    "region_id": 17,
    "location": {
      "latitude": -58.605507,
      "longitude": 161.261421,
      "altitude": 1653.53
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-05-04T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-21T00:00:00Z"
      },
      {
        "$date": "2023-11-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_033",
    "region_id": 13,
    "location": {
      "latitude": -64.082544,
      "longitude": -137.013733,
      "altitude": 4742.97
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-09-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-06T00:00:00Z"
      },
      {
        "$date": "2023-11-18T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_034",
    "region_id": 19,
    "location": {
      "latitude": -37.983952,
      "longitude": -21.245333,
      "altitude": 4447.08
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-11-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-07T00:00:00Z"
      },
      {
        "$date": "2023-10-29T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_035",
    "region_id": 2,
    "location": {
      "latitude": 31.375224,
      "longitude": 36.339302,
      "altitude": 185.13
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-07-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-18T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_036",
    "region_id": 5,
    "location": {
      "latitude": 65.097241,
      "longitude": -128.323816,
      "altitude": 400.74
    },
    "sensor_type": "UV Index",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-01-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-16T00:00:00Z"
      },
      {
        "$date": "2023-10-28T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_037",
    "region_id": 20,
    "location": {
      "latitude": -0.296677,
      "longitude": -141.367702,
      "altitude": 261.57
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-03-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-14T00:00:00Z"
      },
      {
        "$date": "2023-11-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_038",
    "region_id": 18,
    "location": {
      "latitude": -82.299916,
      "longitude": 38.522783,
      "altitude": 1083.59
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-07-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-04T00:00:00Z"
      },
      {
        "$date": "2023-11-16T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_039",
    "region_id": 10,
    "location": {
      "latitude": -28.261557,
      "longitude": -104.288133,
      "altitude": 3362.23
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-07-31T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-30T00:00:00Z"
      },
      {
        "$date": "2023-09-20T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_040",
    "region_id": 8,
    "location": {
      "latitude": -24.18098,
      "longitude": -111.082337,
      "altitude": 3064.2
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-09-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-25T00:00:00Z"
      },
      {
        "$date": "2023-11-01T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_041",
    "region_id": 5,
    "location": {
      "latitude": -81.73391,
      "longitude": -76.147031,
      "altitude": 4680.89
    },
    "sensor_type": "Temperature",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-02-09T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-18T00:00:00Z"
      },
      {
        "$date": "2023-11-27T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_042",
    "region_id": 8,
    "location": {
      "latitude": 20.710133,
      "longitude": 3.753759,
      "altitude": 1237.64
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-06-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-02T00:00:00Z"
      },
      {
        "$date": "2023-06-08T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_043",
    "region_id": 6,
    "location": {
      "latitude": 44.837393,
      "longitude": -19.997434,
      "altitude": 2223.53
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-10-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-14T00:00:00Z"
      },
      {
        "$date": "2023-09-04T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_044",
    "region_id": 11,
    "location": {
      "latitude": 32.897044,
      "longitude": 47.241797,
      "altitude": 104.57
    },
    "sensor_type": "Rainfall",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-08-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-28T00:00:00Z"
      },
      {
        "$date": "2023-07-12T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_045",
    "region_id": 16,
    "location": {
      "latitude": 64.40647,
      "longitude": -61.358424,
      "altitude": 2778.18
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-09-21T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-05T00:00:00Z"
      },
      {
        "$date": "2023-06-24T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_046",
    "region_id": 14,
    "location": {
      "latitude": 87.806255,
      "longitude": 149.808705,
      "altitude": 1717.11
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-12-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-17T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_047",
    "region_id": 17,
    "location": {
      "latitude": -52.629107,
      "longitude": 170.53254,
      "altitude": 16.17
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2022-05-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-11T00:00:00Z"
      },
      {
        "$date": "2023-09-08T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_048",
    "region_id": 8,
    "location": {
      "latitude": 1.068063,
      "longitude": 119.274696,
      "altitude": 1411.77
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-04-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-27T00:00:00Z"
      },
      {
        "$date": "2023-10-07T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_049",
    "region_id": 7,
    "location": {
      "latitude": 6.545422,
      "longitude": -6.539147,
      "altitude": 1186.53
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-05-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-05T00:00:00Z"
      },
      {
        "$date": "2023-10-07T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_050",
    "region_id": 14,
    "location": {
      "latitude": -43.44384,
      "longitude": 122.33606,
      "altitude": 164.71
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-01-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-14T00:00:00Z"
      },
      {
        "$date": "2023-09-05T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_051",
    "region_id": 7,
    "location": {
      "latitude": 72.319796,
      "longitude": -81.270343,
      "altitude": 2070.38
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-04-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-11T00:00:00Z"
      },
      {
        "$date": "2023-09-27T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_052",
    "region_id": 17,
    "location": {
      "latitude": 36.473898,
      "longitude": -15.544516,
      "altitude": 3570.1
    },
    "sensor_type": "Temperature",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-06-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-01T00:00:00Z"
      },
      {
        "$date": "2023-08-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_053",
    "region_id": 3,
    "location": {
      "latitude": -53.034368,
      "longitude": -76.149464,
      "altitude": 2298.96
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-09-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-10T00:00:00Z"
      },
      {
        "$date": "2023-07-02T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_054",
    "region_id": 13,
    "location": {
      "latitude": -1.359666,
      "longitude": -1.936717,
      "altitude": 1541.44
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-12-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-27T00:00:00Z"
      },
      {
        "$date": "2023-07-11T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_055",
    "region_id": 3,
    "location": {
      "latitude": 51.580687,
      "longitude": 66.073021,
      "altitude": 4334.55
    },
    "sensor_type": "UV Index",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-11-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-21T00:00:00Z"
      },
      {
        "$date": "2023-09-04T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_056",
    "region_id": 15,
    "location": {
      "latitude": -77.881019,
      "longitude": 1.178069,
      "altitude": 2681.86
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-09-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-31T00:00:00Z"
      },
      {
        "$date": "2023-07-29T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_057",
    "region_id": 4,
    "location": {
      "latitude": 67.243323,
      "longitude": -104.344811,
      "altitude": 3318.44
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-09-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-08T00:00:00Z"
      },
      {
        "$date": "2023-07-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_058",
    "region_id": 9,
    "location": {
      "latitude": -82.056148,
      "longitude": 126.226648,
      "altitude": 4962.04
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-03-09T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-01T00:00:00Z"
      },
      {
        "$date": "2023-08-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_059",
    "region_id": 17,
    "location": {
      "latitude": 19.655219,
      "longitude": -163.953988,
      "altitude": 4795.8
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-12-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-08-03T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_060",
    "region_id": 1,
    "location": {
      "latitude": 65.814602,
      "longitude": -139.14644,
      "altitude": 266.82
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-12-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-09T00:00:00Z"
      },
      {
        "$date": "2023-11-28T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_061",
    "region_id": 3,
    "location": {
      "latitude": 77.487993,
      "longitude": -40.379425,
      "altitude": 4677.92
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-08-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-19T00:00:00Z"
      },
      {
        "$date": "2023-08-09T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_062",
    "region_id": 4,
    "location": {
      "latitude": -26.351714,
      "longitude": -30.369663,
      "altitude": 1566.9
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-01-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-03T00:00:00Z"
      },
      {
        "$date": "2023-08-22T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_063",
    "region_id": 9,
    "location": {
      "latitude": 38.193221,
      "longitude": 32.16566,
      "altitude": 1069.46
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-08-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-16T00:00:00Z"
      },
      {
        "$date": "2023-06-23T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_064",
    "region_id": 5,
    "location": {
      "latitude": -17.69546,
      "longitude": -113.513017,
      "altitude": 3643.73
    },
    "sensor_type": "Humidity",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-02-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-23T00:00:00Z"
      },
      {
        "$date": "2023-09-04T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_065",
    "region_id": 20,
    "location": {
      "latitude": 84.830979,
      "longitude": 151.980217,
      "altitude": 2890.52
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-10-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-12T00:00:00Z"
      },
      {
        "$date": "2023-08-21T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_066",
    "region_id": 19,
    "location": {
      "latitude": -0.316801,
      "longitude": -121.699676,
      "altitude": 2556.86
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-08-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-10T00:00:00Z"
      },
      {
        "$date": "2023-09-15T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_067",
    "region_id": 4,
    "location": {
      "latitude": -18.601133,
      "longitude": -123.198834,
      "altitude": 178.89
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-03-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-17T00:00:00Z"
      },
      {
        "$date": "2023-07-04T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_068",
    "region_id": 3,
    "location": {
      "latitude": 85.389787,
      "longitude": -20.854368,
      "altitude": 867.43
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2023-01-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-16T00:00:00Z"
      },
      {
        "$date": "2023-06-14T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_069",
    "region_id": 18,
    "location": {
      "latitude": 38.623208,
      "longitude": -106.663319,
      "altitude": 4602.84
    },
    "sensor_type": "UV Index",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-06-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-27T00:00:00Z"
      },
      {
        "$date": "2023-08-14T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_070",
    "region_id": 20,
    "location": {
      "latitude": -15.238819,
      "longitude": -106.300702,
      "altitude": 1716.39
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-03-09T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-26T00:00:00Z"
      },
      {
        "$date": "2023-08-01T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_071",
    "region_id": 20,
    "location": {
      "latitude": -51.43444,
      "longitude": -40.012234,
      "altitude": 651.91
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2022-12-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-03T00:00:00Z"
      },
      {
        "$date": "2023-09-17T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_072",
    "region_id": 4,
    "location": {
      "latitude": 69.543855,
      "longitude": 139.707394,
      "altitude": 3471.92
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-08-31T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-08-23T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_073",
    "region_id": 19,
    "location": {
      "latitude": 29.320989,
      "longitude": -13.817906,
      "altitude": 2075.25
    },
    "sensor_type": "Humidity",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-09-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-13T00:00:00Z"
      },
      {
        "$date": "2023-10-11T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_074",
    "region_id": 12,
    "location": {
      "latitude": -26.280672,
      "longitude": -74.86387,
      "altitude": 3624.82
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-07-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-11T00:00:00Z"
      },
      {
        "$date": "2023-07-22T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_075",
    "region_id": 5,
    "location": {
      "latitude": 4.464893,
      "longitude": 53.60879,
      "altitude": 1184.79
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-09-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-29T00:00:00Z"
      },
      {
        "$date": "2023-09-09T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_076",
    "region_id": 17,
    "location": {
      "latitude": -84.665185,
      "longitude": -139.325753,
      "altitude": 2822.35
    },
    "sensor_type": "UV Index",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-03-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-16T00:00:00Z"
      },
      {
        "$date": "2023-09-05T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_077",
    "region_id": 15,
    "location": {
      "latitude": 53.709058,
      "longitude": -178.736947,
      "altitude": 115.97
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-12-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-21T00:00:00Z"
      },
      {
        "$date": "2023-07-17T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_078",
    "region_id": 4,
    "location": {
      "latitude": 53.920164,
      "longitude": -35.228052,
      "altitude": 3689.68
    },
    "sensor_type": "Humidity",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-01-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-04T00:00:00Z"
      },
      {
        "$date": "2023-06-11T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_079",
    "region_id": 20,
    "location": {
      "latitude": 17.476485,
      "longitude": -91.201098,
      "altitude": 2894.66
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-07-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-10T00:00:00Z"
      },
      {
        "$date": "2023-11-23T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_080",
    "region_id": 4,
    "location": {
      "latitude": -4.370594,
      "longitude": -99.585498,
      "altitude": 532.97
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-03-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-31T00:00:00Z"
      },
      {
        "$date": "2023-09-30T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_081",
    "region_id": 14,
    "location": {
      "latitude": 20.833603,
      "longitude": 45.715264,
      "altitude": 3682.79
    },
    "sensor_type": "Rainfall",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-05-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-08T00:00:00Z"
      },
      {
        "$date": "2023-08-28T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_082",
    "region_id": 9,
    "location": {
      "latitude": 78.658599,
      "longitude": 123.271023,
      "altitude": 2588.94
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-08-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-13T00:00:00Z"
      },
      {
        "$date": "2023-11-14T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_083",
    "region_id": 9,
    "location": {
      "latitude": -38.259285,
      "longitude": -52.46915,
      "altitude": 262.27
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-02-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-07T00:00:00Z"
      },
      {
        "$date": "2023-09-12T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_084",
    "region_id": 16,
    "location": {
      "latitude": -11.985691,
      "longitude": 12.219341,
      "altitude": 744.07
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-09-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-11T00:00:00Z"
      },
      {
        "$date": "2023-10-19T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_085",
    "region_id": 1,
    "location": {
      "latitude": 65.860854,
      "longitude": -158.502551,
      "altitude": 3676.83
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-01-04T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-28T00:00:00Z"
      },
      {
        "$date": "2023-11-18T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_086",
    "region_id": 14,
    "location": {
      "latitude": -82.769701,
      "longitude": 59.097943,
      "altitude": 4415.35
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-11-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-31T00:00:00Z"
      },
      {
        "$date": "2023-11-10T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_087",
    "region_id": 3,
    "location": {
      "latitude": -41.257168,
      "longitude": 7.635747,
      "altitude": 3834.07
    },
    "sensor_type": "Humidity",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-11-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-14T00:00:00Z"
      },
      {
        "$date": "2023-08-09T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_088",
    "region_id": 13,
    "location": {
      "latitude": 45.60991,
      "longitude": -4.027796,
      "altitude": 2897.59
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-10-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-09-09T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_089",
    "region_id": 7,
    "location": {
      "latitude": -51.9154,
      "longitude": -170.6717,
      "altitude": 2365.15
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-09-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-22T00:00:00Z"
      },
      {
        "$date": "2023-11-18T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_090",
    "region_id": 2,
    "location": {
      "latitude": 20.932092,
      "longitude": 17.381498,
      "altitude": 3440.6
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-01-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-24T00:00:00Z"
      },
      {
        "$date": "2023-10-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_091",
    "region_id": 1,
    "location": {
      "latitude": -46.618819,
      "longitude": 37.817151,
      "altitude": 3275.99
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-01-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-06T00:00:00Z"
      },
      {
        "$date": "2023-10-13T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_092",
    "region_id": 13,
    "location": {
      "latitude": 78.862378,
      "longitude": 88.733443,
      "altitude": 2761.12
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-02-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-14T00:00:00Z"
      },
      {
        "$date": "2023-11-17T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_093",
    "region_id": 18,
    "location": {
      "latitude": 57.849571,
      "longitude": -162.329364,
      "altitude": 794.7
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-08-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-17T00:00:00Z"
      },
      {
        "$date": "2023-07-22T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_094",
    "region_id": 13,
    "location": {
      "latitude": 50.809799,
      "longitude": 90.041993,
      "altitude": 2098.02
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-03-01T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-21T00:00:00Z"
      },
      {
        "$date": "2023-07-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_095",
    "region_id": 3,
    "location": {
      "latitude": -62.680129,
      "longitude": 124.166393,
      "altitude": 4050.76
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-01-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-11-17T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_096",
    "region_id": 10,
    "location": {
      "latitude": -22.429055,
      "longitude": 26.427214,
      "altitude": 3353.9
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-04-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-07T00:00:00Z"
      },
      {
        "$date": "2023-08-06T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_097",
    "region_id": 1,
    "location": {
      "latitude": 8.631145,
      "longitude": 172.108456,
      "altitude": 689.56
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-07-06T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-31T00:00:00Z"
      },
      {
        "$date": "2023-06-09T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_098",
    "region_id": 18,
    "location": {
      "latitude": -67.626044,
      "longitude": -26.804346,
      "altitude": 2002.24
    },
    "sensor_type": "Rainfall",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-10-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-28T00:00:00Z"
      },
      {
        "$date": "2023-07-15T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_099",
    "region_id": 10,
    "location": {
      "latitude": -24.843655,
      "longitude": 35.685497,
      "altitude": 3907.43
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-11-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-22T00:00:00Z"
      },
      {
        "$date": "2023-07-13T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_100",
    "region_id": 8,
    "location": {
      "latitude": 88.428501,
      "longitude": 173.065196,
      "altitude": 2673.64
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-08-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-16T00:00:00Z"
      },
      {
        "$date": "2023-11-21T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_101",
    "region_id": 1,
    "location": {
      "latitude": 43.426475,
      "longitude": 172.175826,
      "altitude": 838.44
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-10-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-26T00:00:00Z"
      },
      {
        "$date": "2023-10-31T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_102",
    "region_id": 3,
    "location": {
      "latitude": -84.91614,
      "longitude": -71.095125,
      "altitude": 2112.28
    },
    "sensor_type": "UV Index",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-07-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-20T00:00:00Z"
      },
      {
        "$date": "2023-07-14T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_103",
    "region_id": 4,
    "location": {
      "latitude": 4.05206,
      "longitude": 100.614802,
      "altitude": 2277.45
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-07-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-06T00:00:00Z"
      },
      {
        "$date": "2023-06-16T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_104",
    "region_id": 1,
    "location": {
      "latitude": -7.471715,
      "longitude": 106.163497,
      "altitude": 1818.9
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-06-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-07T00:00:00Z"
      },
      {
        "$date": "2023-08-04T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_105",
    "region_id": 9,
    "location": {
      "latitude": 81.146641,
      "longitude": -141.194538,
      "altitude": 3316.86
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-05-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-15T00:00:00Z"
      },
      {
        "$date": "2023-06-29T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_106",
    "region_id": 10,
    "location": {
      "latitude": -86.991412,
      "longitude": 46.318685,
      "altitude": 1883.01
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-10-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-24T00:00:00Z"
      },
      {
        "$date": "2023-06-13T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_107",
    "region_id": 4,
    "location": {
      "latitude": -15.065533,
      "longitude": 143.438185,
      "altitude": 3703.25
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-02-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-28T00:00:00Z"
      },
      {
        "$date": "2023-06-10T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_108",
    "region_id": 2,
    "location": {
      "latitude": -26.785666,
      "longitude": 29.342325,
      "altitude": 1459.64
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-01-08T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-27T00:00:00Z"
      },
      {
        "$date": "2023-09-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_109",
    "region_id": 20,
    "location": {
      "latitude": 68.067244,
      "longitude": -11.219348,
      "altitude": 2289.59
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-11-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-27T00:00:00Z"
      },
      {
        "$date": "2023-06-03T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_110",
    "region_id": 3,
    "location": {
      "latitude": 11.938793,
      "longitude": -53.754961,
      "altitude": 3618.02
    },
    "sensor_type": "Humidity",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-08-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-30T00:00:00Z"
      },
      {
        "$date": "2023-10-04T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_111",
    "region_id": 12,
    "location": {
      "latitude": 54.859806,
      "longitude": 107.973955,
      "altitude": 1946.86
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-10-06T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-13T00:00:00Z"
      },
      {
        "$date": "2023-07-18T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_112",
    "region_id": 20,
    "location": {
      "latitude": 79.05496,
      "longitude": 157.948122,
      "altitude": 1513.59
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-03-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-24T00:00:00Z"
      },
      {
        "$date": "2023-09-30T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_113",
    "region_id": 9,
    "location": {
      "latitude": -35.044038,
      "longitude": 55.321266,
      "altitude": 1602.22
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-12-08T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-15T00:00:00Z"
      },
      {
        "$date": "2023-10-03T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_114",
    "region_id": 10,
    "location": {
      "latitude": -80.509649,
      "longitude": 166.818001,
      "altitude": 1055.94
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-12-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-04T00:00:00Z"
      },
      {
        "$date": "2023-06-18T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_115",
    "region_id": 16,
    "location": {
      "latitude": 49.457377,
      "longitude": -132.259928,
      "altitude": 987.59
    },
    "sensor_type": "UV Index",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-01-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-31T00:00:00Z"
      },
      {
        "$date": "2023-06-05T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_116",
    "region_id": 18,
    "location": {
      "latitude": 40.394733,
      "longitude": -51.396856,
      "altitude": 4857.58
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-11-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-10T00:00:00Z"
      },
      {
        "$date": "2023-11-03T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_117",
    "region_id": 6,
    "location": {
      "latitude": 44.886315,
      "longitude": -11.578114,
      "altitude": 3343.08
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-06-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-25T00:00:00Z"
      },
      {
        "$date": "2023-06-23T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_118",
    "region_id": 8,
    "location": {
      "latitude": -77.824834,
      "longitude": 13.433501,
      "altitude": 782.31
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-03-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-06T00:00:00Z"
      },
      {
        "$date": "2023-06-29T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_119",
    "region_id": 12,
    "location": {
      "latitude": -60.666615,
      "longitude": 131.437219,
      "altitude": 3776.41
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-01-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-12T00:00:00Z"
      },
      {
        "$date": "2023-11-14T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_120",
    "region_id": 19,
    "location": {
      "latitude": 21.572298,
      "longitude": -148.40353,
      "altitude": 4826.88
    },
    "sensor_type": "UV Index",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-06-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-24T00:00:00Z"
      },
      {
        "$date": "2023-08-04T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_121",
    "region_id": 12,
    "location": {
      "latitude": -83.928339,
      "longitude": -3.452457,
      "altitude": 1869.47
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-09-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-19T00:00:00Z"
      },
      {
        "$date": "2023-07-21T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_122",
    "region_id": 5,
    "location": {
      "latitude": -42.517566,
      "longitude": 28.792106,
      "altitude": 4832.14
    },
    "sensor_type": "Rainfall",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-11-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-26T00:00:00Z"
      },
      {
        "$date": "2023-11-27T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_123",
    "region_id": 7,
    "location": {
      "latitude": 68.314551,
      "longitude": 167.731062,
      "altitude": 4707.44
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-01-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-07T00:00:00Z"
      },
      {
        "$date": "2023-07-08T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_124",
    "region_id": 11,
    "location": {
      "latitude": -21.791544,
      "longitude": 156.627311,
      "altitude": 2056.64
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-08-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-02T00:00:00Z"
      },
      {
        "$date": "2023-08-17T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_125",
    "region_id": 7,
    "location": {
      "latitude": 3.685511,
      "longitude": -110.658277,
      "altitude": 1784.24
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-03-02T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-20T00:00:00Z"
      },
      {
        "$date": "2023-09-28T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_126",
    "region_id": 4,
    "location": {
      "latitude": -11.614442,
      "longitude": 71.723961,
      "altitude": 2331.25
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-11-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-10T00:00:00Z"
      },
      {
        "$date": "2023-09-30T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_127",
    "region_id": 13,
    "location": {
      "latitude": 74.389736,
      "longitude": 124.664597,
      "altitude": 1482.8
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-07-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-13T00:00:00Z"
      },
      {
        "$date": "2023-09-05T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_128",
    "region_id": 13,
    "location": {
      "latitude": 36.80266,
      "longitude": -9.432491,
      "altitude": 2226.18
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-05-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-28T00:00:00Z"
      },
      {
        "$date": "2023-11-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_129",
    "region_id": 7,
    "location": {
      "latitude": 7.061236,
      "longitude": 136.404008,
      "altitude": 4294.28
    },
    "sensor_type": "UV Index",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-02-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-12T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_130",
    "region_id": 18,
    "location": {
      "latitude": -33.269794,
      "longitude": 20.902184,
      "altitude": 37.04
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-09-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-06T00:00:00Z"
      },
      {
        "$date": "2023-11-02T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_131",
    "region_id": 3,
    "location": {
      "latitude": 11.473004,
      "longitude": -103.801353,
      "altitude": 3824.7
    },
    "sensor_type": "UV Index",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-05-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-15T00:00:00Z"
      },
      {
        "$date": "2023-06-27T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_132",
    "region_id": 8,
    "location": {
      "latitude": -87.140375,
      "longitude": 5.185884,
      "altitude": 103.9
    },
    "sensor_type": "UV Index",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-01-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-16T00:00:00Z"
      },
      {
        "$date": "2023-10-28T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_133",
    "region_id": 12,
    "location": {
      "latitude": 34.307441,
      "longitude": -29.496058,
      "altitude": 3998.4
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-09-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-04T00:00:00Z"
      },
      {
        "$date": "2023-07-04T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_134",
    "region_id": 2,
    "location": {
      "latitude": -71.364759,
      "longitude": 38.707245,
      "altitude": 3490.22
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-03-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-21T00:00:00Z"
      },
      {
        "$date": "2023-09-08T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_135",
    "region_id": 13,
    "location": {
      "latitude": -39.151867,
      "longitude": 63.462555,
      "altitude": 4481.23
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-02-10T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-14T00:00:00Z"
      },
      {
        "$date": "2023-11-04T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_136",
    "region_id": 20,
    "location": {
      "latitude": -84.893097,
      "longitude": -53.248002,
      "altitude": 2576.68
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2022-12-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-03T00:00:00Z"
      },
      {
        "$date": "2023-07-18T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_137",
    "region_id": 2,
    "location": {
      "latitude": -5.02436,
      "longitude": -11.781086,
      "altitude": 2170.29
    },
    "sensor_type": "Air Quality",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-12-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-13T00:00:00Z"
      },
      {
        "$date": "2023-08-23T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_138",
    "region_id": 17,
    "location": {
      "latitude": -13.444931,
      "longitude": 71.685384,
      "altitude": 2190.68
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-08-17T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-05T00:00:00Z"
      },
      {
        "$date": "2023-07-09T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_139",
    "region_id": 2,
    "location": {
      "latitude": -81.70824,
      "longitude": -49.366624,
      "altitude": 1475.42
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-10-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-06T00:00:00Z"
      },
      {
        "$date": "2023-06-03T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_140",
    "region_id": 9,
    "location": {
      "latitude": -17.314689,
      "longitude": 168.354271,
      "altitude": 1757.33
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-05-08T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-17T00:00:00Z"
      },
      {
        "$date": "2023-10-15T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_141",
    "region_id": 13,
    "location": {
      "latitude": -20.941704,
      "longitude": 170.335747,
      "altitude": 4925.34
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-11-24T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-21T00:00:00Z"
      },
      {
        "$date": "2023-06-17T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_142",
    "region_id": 7,
    "location": {
      "latitude": -12.303837,
      "longitude": -15.623694,
      "altitude": 3562.32
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-10-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-12T00:00:00Z"
      },
      {
        "$date": "2023-10-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_143",
    "region_id": 7,
    "location": {
      "latitude": 62.927131,
      "longitude": 16.316843,
      "altitude": 4444.25
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-11-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-08T00:00:00Z"
      },
      {
        "$date": "2023-07-16T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_144",
    "region_id": 3,
    "location": {
      "latitude": -26.46206,
      "longitude": 0.544765,
      "altitude": 4643.2
    },
    "sensor_type": "Humidity",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-01-06T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-06-29T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_145",
    "region_id": 6,
    "location": {
      "latitude": 70.349354,
      "longitude": -35.460681,
      "altitude": 298.39
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-06-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-23T00:00:00Z"
      },
      {
        "$date": "2023-11-21T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_146",
    "region_id": 12,
    "location": {
      "latitude": 28.397002,
      "longitude": 5.817427,
      "altitude": 31.64
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-03-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-25T00:00:00Z"
      },
      {
        "$date": "2023-11-13T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_147",
    "region_id": 20,
    "location": {
      "latitude": -5.754781,
      "longitude": 142.232659,
      "altitude": 4458.08
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-04-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-09T00:00:00Z"
      },
      {
        "$date": "2023-10-14T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_148",
    "region_id": 18,
    "location": {
      "latitude": 86.516262,
      "longitude": -143.558782,
      "altitude": 3034.19
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-02-01T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-12T00:00:00Z"
      },
      {
        "$date": "2023-07-15T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_149",
    "region_id": 17,
    "location": {
      "latitude": 68.611605,
      "longitude": 49.700131,
      "altitude": 1139.4
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2023-09-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-14T00:00:00Z"
      },
      {
        "$date": "2023-11-01T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_150",
    "region_id": 17,
    "location": {
      "latitude": 64.235221,
      "longitude": -53.013921,
      "altitude": 4701.86
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-03-10T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-03T00:00:00Z"
      },
      {
        "$date": "2023-08-16T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_151",
    "region_id": 4,
    "location": {
      "latitude": -17.358083,
      "longitude": -36.277277,
      "altitude": 674.17
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-06-21T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-21T00:00:00Z"
      },
      {
        "$date": "2023-07-12T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_152",
    "region_id": 20,
    "location": {
      "latitude": 6.406811,
      "longitude": -159.295452,
      "altitude": 24.6
    },
    "sensor_type": "Rainfall",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-04-07T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-21T00:00:00Z"
      },
      {
        "$date": "2023-06-27T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_153",
    "region_id": 14,
    "location": {
      "latitude": 2.543849,
      "longitude": 38.583224,
      "altitude": 3477.33
    },
    "sensor_type": "Humidity",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-05-10T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-08T00:00:00Z"
      },
      {
        "$date": "2023-06-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_154",
    "region_id": 13,
    "location": {
      "latitude": 28.520833,
      "longitude": -152.108073,
      "altitude": 1373.73
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-04-04T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-01T00:00:00Z"
      },
      {
        "$date": "2023-09-15T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_155",
    "region_id": 2,
    "location": {
      "latitude": 82.81253,
      "longitude": 148.343849,
      "altitude": 4614.19
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2020-12-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-18T00:00:00Z"
      },
      {
        "$date": "2023-06-09T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_156",
    "region_id": 7,
    "location": {
      "latitude": 25.526563,
      "longitude": 119.615539,
      "altitude": 1585.33
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-08-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-26T00:00:00Z"
      },
      {
        "$date": "2023-10-02T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_157",
    "region_id": 7,
    "location": {
      "latitude": -81.390655,
      "longitude": -138.589509,
      "altitude": 998.27
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-08-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-08T00:00:00Z"
      },
      {
        "$date": "2023-07-31T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_158",
    "region_id": 16,
    "location": {
      "latitude": 15.843852,
      "longitude": 126.214264,
      "altitude": 1696.04
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-01-26T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-19T00:00:00Z"
      },
      {
        "$date": "2023-10-18T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_159",
    "region_id": 20,
    "location": {
      "latitude": -51.388233,
      "longitude": 146.206991,
      "altitude": 4357.69
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-07-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-02T00:00:00Z"
      },
      {
        "$date": "2023-11-09T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_160",
    "region_id": 9,
    "location": {
      "latitude": -15.304232,
      "longitude": -100.942097,
      "altitude": 2284.48
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-06-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-26T00:00:00Z"
      },
      {
        "$date": "2023-11-08T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_161",
    "region_id": 15,
    "location": {
      "latitude": 62.555281,
      "longitude": -51.543832,
      "altitude": 2948.09
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-01-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-22T00:00:00Z"
      },
      {
        "$date": "2023-11-27T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_162",
    "region_id": 3,
    "location": {
      "latitude": 68.848904,
      "longitude": -85.926215,
      "altitude": 4635.37
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-10-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-15T00:00:00Z"
      },
      {
        "$date": "2023-07-24T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_163",
    "region_id": 3,
    "location": {
      "latitude": 31.909563,
      "longitude": 86.37261,
      "altitude": 3311.0
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-05-09T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-11T00:00:00Z"
      },
      {
        "$date": "2023-07-26T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_164",
    "region_id": 3,
    "location": {
      "latitude": 47.101483,
      "longitude": 30.419204,
      "altitude": 3854.09
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2022-06-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-06-28T00:00:00Z"
      },
      {
        "$date": "2023-10-24T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_165",
    "region_id": 20,
    "location": {
      "latitude": 41.320043,
      "longitude": 51.203948,
      "altitude": 3313.39
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-08-14T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-07T00:00:00Z"
      },
      {
        "$date": "2023-09-11T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_166",
    "region_id": 20,
    "location": {
      "latitude": 6.540852,
      "longitude": 120.066899,
      "altitude": 1446.54
    },
    "sensor_type": "UV Index",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-08-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-05T00:00:00Z"
      },
      {
        "$date": "2023-06-30T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_167",
    "region_id": 6,
    "location": {
      "latitude": 40.027136,
      "longitude": 94.063562,
      "altitude": 2900.3
    },
    "sensor_type": "Temperature",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-07-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-08T00:00:00Z"
      },
      {
        "$date": "2023-06-01T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_168",
    "region_id": 5,
    "location": {
      "latitude": 10.035213,
      "longitude": 33.458755,
      "altitude": 4031.66
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-09-25T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-10T00:00:00Z"
      },
      {
        "$date": "2023-06-18T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_169",
    "region_id": 11,
    "location": {
      "latitude": -89.410489,
      "longitude": -133.799844,
      "altitude": 1822.55
    },
    "sensor_type": "Temperature",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2021-10-19T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-10T00:00:00Z"
      },
      {
        "$date": "2023-09-08T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_170",
    "region_id": 19,
    "location": {
      "latitude": 57.24937,
      "longitude": 78.988693,
      "altitude": 4438.19
    },
    "sensor_type": "Air Quality",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-10-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-30T00:00:00Z"
      },
      {
        "$date": "2023-10-28T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_171",
    "region_id": 16,
    "location": {
      "latitude": -82.266435,
      "longitude": -68.799727,
      "altitude": 3802.76
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-10-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-11T00:00:00Z"
      },
      {
        "$date": "2023-08-07T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_172",
    "region_id": 13,
    "location": {
      "latitude": -36.828422,
      "longitude": 128.651115,
      "altitude": 2712.42
    },
    "sensor_type": "Air Quality",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2023-05-01T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-14T00:00:00Z"
      },
      {
        "$date": "2023-10-20T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_173",
    "region_id": 14,
    "location": {
      "latitude": 17.84139,
      "longitude": 53.359559,
      "altitude": 4270.75
    },
    "sensor_type": "UV Index",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2022-11-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-09T00:00:00Z"
      },
      {
        "$date": "2023-08-16T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_174",
    "region_id": 5,
    "location": {
      "latitude": 38.335337,
      "longitude": 121.193983,
      "altitude": 2090.7
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2021-08-12T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-30T00:00:00Z"
      },
      {
        "$date": "2023-08-25T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_175",
    "region_id": 9,
    "location": {
      "latitude": 57.385552,
      "longitude": -77.726597,
      "altitude": 1548.76
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-05-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-20T00:00:00Z"
      },
      {
        "$date": "2023-09-26T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_176",
    "region_id": 7,
    "location": {
      "latitude": 40.056179,
      "longitude": 48.102695,
      "altitude": 3044.36
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-07-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-05T00:00:00Z"
      },
      {
        "$date": "2023-10-12T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_177",
    "region_id": 9,
    "location": {
      "latitude": -88.415831,
      "longitude": -148.310461,
      "altitude": 3207.8
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-02-18T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-07T00:00:00Z"
      },
      {
        "$date": "2023-06-20T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_178",
    "region_id": 12,
    "location": {
      "latitude": -63.666145,
      "longitude": -27.665165,
      "altitude": 4308.84
    },
    "sensor_type": "Rainfall",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2020-05-28T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-13T00:00:00Z"
      },
      {
        "$date": "2023-09-17T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_179",
    "region_id": 14,
    "location": {
      "latitude": -9.979797,
      "longitude": -96.201632,
      "altitude": 3340.77
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2020-05-06T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-15T00:00:00Z"
      },
      {
        "$date": "2023-06-18T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_180",
    "region_id": 11,
    "location": {
      "latitude": 61.014422,
      "longitude": 26.318646,
      "altitude": 4788.24
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-01-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-20T00:00:00Z"
      },
      {
        "$date": "2023-09-19T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_181",
    "region_id": 8,
    "location": {
      "latitude": -65.298964,
      "longitude": 25.382585,
      "altitude": 3356.5
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-09-21T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-03-07T00:00:00Z"
      },
      {
        "$date": "2023-09-11T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_182",
    "region_id": 1,
    "location": {
      "latitude": 8.213281,
      "longitude": 73.29408,
      "altitude": 4573.53
    },
    "sensor_type": "Humidity",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-10-27T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-10T00:00:00Z"
      },
      {
        "$date": "2023-06-24T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_183",
    "region_id": 9,
    "location": {
      "latitude": -2.586308,
      "longitude": -156.972806,
      "altitude": 3389.09
    },
    "sensor_type": "UV Index",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-01-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-05-31T00:00:00Z"
      },
      {
        "$date": "2023-09-08T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_184",
    "region_id": 12,
    "location": {
      "latitude": -52.182328,
      "longitude": 76.340659,
      "altitude": 4511.61
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-12-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-23T00:00:00Z"
      },
      {
        "$date": "2023-09-13T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_185",
    "region_id": 8,
    "location": {
      "latitude": 89.631496,
      "longitude": -27.220281,
      "altitude": 2076.89
    },
    "sensor_type": "UV Index",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-09-01T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-07-03T00:00:00Z"
      },
      {
        "$date": "2023-08-22T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_186",
    "region_id": 9,
    "location": {
      "latitude": -52.724353,
      "longitude": 104.821429,
      "altitude": 3098.5
    },
    "sensor_type": "Temperature",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-04-22T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-21T00:00:00Z"
      },
      {
        "$date": "2023-07-24T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_187",
    "region_id": 2,
    "location": {
      "latitude": -12.395372,
      "longitude": 139.341861,
      "altitude": 1368.94
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2020-05-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-14T00:00:00Z"
      },
      {
        "$date": "2023-06-12T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_188",
    "region_id": 16,
    "location": {
      "latitude": 4.343796,
      "longitude": -135.016572,
      "altitude": 2440.6
    },
    "sensor_type": "Humidity",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-02-13T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-22T00:00:00Z"
      },
      {
        "$date": "2023-10-08T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_189",
    "region_id": 3,
    "location": {
      "latitude": -14.736887,
      "longitude": -84.284801,
      "altitude": 1286.87
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "AtmosTrack",
    "installation_date": {
      "$date": "2023-05-20T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-04-14T00:00:00Z"
      },
      {
        "$date": "2023-07-20T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_190",
    "region_id": 8,
    "location": {
      "latitude": 88.340473,
      "longitude": 143.226812,
      "altitude": 3576.78
    },
    "sensor_type": "Temperature",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2022-05-16T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-08T00:00:00Z"
      },
      {
        "$date": "2023-06-21T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_191",
    "region_id": 2,
    "location": {
      "latitude": 29.385932,
      "longitude": -176.719638,
      "altitude": 4032.17
    },
    "sensor_type": "UV Index",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-02-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-05T00:00:00Z"
      },
      {
        "$date": "2023-06-09T00:00:00Z"
      }
    ],
    "status": "Calibration Required"
  },
  {
    "sensor_id": "SENS_192",
    "region_id": 5,
    "location": {
      "latitude": 40.963531,
      "longitude": -109.697264,
      "altitude": 1262.62
    },
    "sensor_type": "Soil Moisture",
    "manufacturer": "GreenData Systems",
    "installation_date": {
      "$date": "2021-06-23T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-24T00:00:00Z"
      },
      {
        "$date": "2023-06-25T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_193",
    "region_id": 11,
    "location": {
      "latitude": -61.21797,
      "longitude": 35.335607,
      "altitude": 1549.64
    },
    "sensor_type": "Temperature",
    "manufacturer": "EnviroTech",
    "installation_date": {
      "$date": "2021-04-08T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-20T00:00:00Z"
      },
      {
        "$date": "2023-11-10T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_194",
    "region_id": 6,
    "location": {
      "latitude": -59.051438,
      "longitude": -144.89154,
      "altitude": 449.46
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2020-10-05T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-27T00:00:00Z"
      },
      {
        "$date": "2023-07-07T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_195",
    "region_id": 17,
    "location": {
      "latitude": -61.94297,
      "longitude": 158.998247,
      "altitude": 920.95
    },
    "sensor_type": "Air Quality",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-01-29T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-28T00:00:00Z"
      },
      {
        "$date": "2023-09-16T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_196",
    "region_id": 3,
    "location": {
      "latitude": -83.510187,
      "longitude": -131.099514,
      "altitude": 4838.08
    },
    "sensor_type": "Rainfall",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-02-03T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-10-09T00:00:00Z"
      },
      {
        "$date": "2023-10-30T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_197",
    "region_id": 5,
    "location": {
      "latitude": 53.242193,
      "longitude": -150.749626,
      "altitude": 2833.85
    },
    "sensor_type": "Temperature",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2021-04-30T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-09-11T00:00:00Z"
      },
      {
        "$date": "2023-10-19T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_198",
    "region_id": 12,
    "location": {
      "latitude": 48.068257,
      "longitude": -7.148168,
      "altitude": 4639.55
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2022-01-04T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-08-15T00:00:00Z"
      },
      {
        "$date": "2023-07-12T00:00:00Z"
      }
    ],
    "status": "Active"
  },
  {
    "sensor_id": "SENS_199",
    "region_id": 4,
    "location": {
      "latitude": 64.303631,
      "longitude": 72.393906,
      "altitude": 1654.78
    },
    "sensor_type": "Wind Speed",
    "manufacturer": "ClimateMonitor Inc",
    "installation_date": {
      "$date": "2023-01-15T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-01-04T00:00:00Z"
      },
      {
        "$date": "2023-08-19T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  },
  {
    "sensor_id": "SENS_200",
    "region_id": 7,
    "location": {
      "latitude": 85.359722,
      "longitude": -165.142557,
      "altitude": 25.96
    },
    "sensor_type": "Temperature",
    "manufacturer": "EcoSensors",
    "installation_date": {
      "$date": "2023-07-11T00:00:00Z"
    },
    "calibration_history": [
      {
        "$date": "2023-02-01T00:00:00Z"
      },
      {
        "$date": "2023-09-29T00:00:00Z"
      }
    ],
    "status": "Maintenance"
  }
]);

print("✓ Inserted 1000 MongoDB records (200 per collection)");
