-- Create Administrators table
CREATE TABLE IF NOT EXISTS Administrators (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Insert default administrator
INSERT INTO Administrators (username, email, password) 
VALUES ('admin', 'admin@environmental.com', 'admin123')
ON CONFLICT (username) DO NOTHING;
