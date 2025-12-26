// Fixed Air Quality History - Drill Compatible
// Simplified structure without complex nested objects

const airQualityLevels = ["Excellent", "Good", "Moderate", "Unhealthy", "Very Unhealthy"];
const records = [];

for (let i = 1; i <= 200; i++) {
    const region_id = Math.floor(Math.random() * 20) + 1;
    const aqi = Math.floor(Math.random() * 231) + 20; // 20-250
    
    // Determine air quality level based on AQI
    let level;
    if (aqi <= 50) level = "Excellent";
    else if (aqi <= 100) level = "Good";
    else if (aqi <= 150) level = "Moderate";
    else if (aqi <= 200) level = "Unhealthy";
    else level = "Very Unhealthy";
    
    // Generate pollutant values (flattened, no nested object)
    const pm2_5 = parseFloat((Math.random() * 145 + 5).toFixed(2));
    const pm10 = parseFloat((Math.random() * 190 + 10).toFixed(2));
    const co2 = Math.floor(Math.random() * 70 + 380); // 380-450
    const no2 = parseFloat((Math.random() * 95 + 5).toFixed(2));
    const so2 = parseFloat((Math.random() * 49 + 1).toFixed(2));
    const o3 = parseFloat((Math.random() * 170 + 10).toFixed(2));
    
    // Generate date (spread across 90 days in 2024)
    const daysOffset = Math.floor(Math.random() * 90);
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    date.setDate(date.getDate() + daysOffset);
    
    records.push({
        reading_id: `AQ${String(i).padStart(3, '0')}`,
        region_id: region_id,
        aqi: aqi,
        co2: co2,
        pm2_5: pm2_5,
        pm10: pm10,
        no2: no2,
        so2: so2,
        o3: o3,
        air_quality_level: level,
        recorded_at: date
    });
}

db.Air_Quality_History.insertMany(records);
print(`✓ Inserted ${records.length} records into Air_Quality_History (flattened structure)`);
