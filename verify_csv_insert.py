import sys
import os
import csv
import json
from flask import session

# Add backend directory to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend')))

from app import app, db_manager

def test_csv_insert():
    print("Starting CSV Insert Verification...")
    
    # Path to CSV file
    csv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'data', 'sensor_readings.csv'))
    
    # Read original line count
    with open(csv_path, 'r') as f:
        original_lines = len(f.readlines())
    print(f"Original line count: {original_lines}")
    
    # Create test client
    with app.test_client() as client:
        with client.session_transaction() as sess:
            # Mock session for CSV Data Provider
            sess['logged_in'] = True
            sess['user_id'] = 11 # Assuming ID for csv_robert
            sess['username'] = 'csv_robert'
            sess['email'] = 'robert.csv@example.com'
            sess['role'] = 'Data Provider'
            sess['assigned_database'] = 'CSV'
        
        # Payload matching frontend sensorForm
        payload = {
            'sensor_id': 'TEST-SENSOR-001',
            'region_id': 99,
            'event_type': 'TEST_EVENT',
            'severity': 'Info',
            'message': 'This is a test insertion.'
        }
        
        # Send POST request
        print("Sending POST request to /api/insert-sensor-log...")
        response = client.post('/api/insert-sensor-log', 
                             data=json.dumps(payload),
                             content_type='application/json')
        
        print(f"Response Status: {response.status_code}")
        print(f"Response Data: {response.get_json()}")
        
        if response.status_code == 201:
            print("Request successful.")
        else:
            print("Request failed!")
            return False

    # Check if line was added
    with open(csv_path, 'r') as f:
        lines = f.readlines()
        new_line_count = len(lines)
    
    print(f"New line count: {new_line_count}")
    
    if new_line_count == original_lines + 1:
        last_line = lines[-1].strip()
        print(f"Last line appended: {last_line}")
        # Validate content (ignoring timestamp)
        expected_suffix = "99,TEST_EVENT,Info,This is a test insertion."
        if expected_suffix in last_line:
            print("✓ Verification Passed: Line appended correctly.")
            
            # Cleanup - remove the test line
            # with open(csv_path, 'w') as f:
            #     f.writelines(lines[:-1])
            # print("Cleanup: Test line removed.")
            print("Test line preserved for manual inspection.")
            return True
        else:
            print("✗ Verification Failed: Content mismatch.")
            return False
    else:
        print("✗ Verification Failed: Line count did not increase.")
        return False

if __name__ == "__main__":
    success = test_csv_insert()
    if not success:
        sys.exit(1)
