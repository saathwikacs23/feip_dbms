-- ========================================
-- Data Provider Authentication System
-- ========================================

-- Create table for data provider credentials
CREATE TABLE IF NOT EXISTS Data_Provider_Credentials (
    provider_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    personal_password VARCHAR(255) NOT NULL,
    database_name VARCHAR(50) NOT NULL CHECK (database_name IN ('PostgreSQL', 'MongoDB', 'CSV')),
    database_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Create table for researcher accounts
CREATE TABLE IF NOT EXISTS Researcher_Accounts (
    researcher_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Insert default data providers (5 per database)
-- PostgreSQL Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('pg_john', 'john.postgres@example.com', 'john123', 'PostgreSQL', 'postgres_db_pass'),
('pg_sarah', 'sarah.postgres@example.com', 'sarah123', 'PostgreSQL', 'postgres_db_pass'),
('pg_mike', 'mike.postgres@example.com', 'mike123', 'PostgreSQL', 'postgres_db_pass'),
('pg_emma', 'emma.postgres@example.com', 'emma123', 'PostgreSQL', 'postgres_db_pass'),
('pg_alex', 'alex.postgres@example.com', 'alex123', 'PostgreSQL', 'postgres_db_pass');

-- MongoDB Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('mongo_lisa', 'lisa.mongo@example.com', 'lisa123', 'MongoDB', 'mongo_db_pass'),
('mongo_david', 'david.mongo@example.com', 'david123', 'MongoDB', 'mongo_db_pass'),
('mongo_kate', 'kate.mongo@example.com', 'kate123', 'MongoDB', 'mongo_db_pass'),
('mongo_tom', 'tom.mongo@example.com', 'tom123', 'MongoDB', 'mongo_db_pass'),
('mongo_jane', 'jane.mongo@example.com', 'jane123', 'MongoDB', 'mongo_db_pass');

-- CSV Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('csv_robert', 'robert.csv@example.com', 'robert123', 'CSV', 'csv_db_pass'),
('csv_maria', 'maria.csv@example.com', 'maria123', 'CSV', 'csv_db_pass'),
('csv_james', 'james.csv@example.com', 'james123', 'CSV', 'csv_db_pass'),
('csv_linda', 'linda.csv@example.com', 'linda123', 'CSV', 'csv_db_pass'),
('csv_kevin', 'kevin.csv@example.com', 'kevin123', 'CSV', 'csv_db_pass');

-- Display created accounts
SELECT 'Data Provider Accounts Created:' as info;
SELECT username, email, database_name FROM Data_Provider_Credentials ORDER BY database_name, username;
