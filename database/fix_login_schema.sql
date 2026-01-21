-- ========================================
-- FIX LOGIN SCHEMA
-- Consolidates auth setup and fixes Query_Log foreign key violation
-- ========================================

-- 1. Create Researcher Accounts
CREATE TABLE IF NOT EXISTS Researcher_Accounts (
    researcher_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- 2. Create Data Provider Credentials
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

-- 3. Create Administrators
CREATE TABLE IF NOT EXISTS Administrators (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- 4. Fix Query_Log Foreign Key Issue
-- We must recreate Query_Log because it currently references User_Info,
-- but our users are now in 3 different tables.
DROP TABLE IF EXISTS Query_Log;

CREATE TABLE Query_Log (
    query_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL, -- Stores ID from one of the 3 auth tables
    query_text TEXT NOT NULL,
    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Insert Default Data Providers
-- PostgreSQL Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('pg_john', 'john.postgres@example.com', 'john123', 'PostgreSQL', 'postgres_db_pass'),
('pg_sarah', 'sarah.postgres@example.com', 'sarah123', 'PostgreSQL', 'postgres_db_pass'),
('pg_mike', 'mike.postgres@example.com', 'mike123', 'PostgreSQL', 'postgres_db_pass'),
('pg_emma', 'emma.postgres@example.com', 'emma123', 'PostgreSQL', 'postgres_db_pass'),
('pg_alex', 'alex.postgres@example.com', 'alex123', 'PostgreSQL', 'postgres_db_pass')
ON CONFLICT (username) DO NOTHING;

-- MongoDB Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('mongo_lisa', 'lisa.mongo@example.com', 'lisa123', 'MongoDB', 'mongo_db_pass'),
('mongo_david', 'david.mongo@example.com', 'david123', 'MongoDB', 'mongo_db_pass'),
('mongo_kate', 'kate.mongo@example.com', 'kate123', 'MongoDB', 'mongo_db_pass'),
('mongo_tom', 'tom.mongo@example.com', 'tom123', 'MongoDB', 'mongo_db_pass'),
('mongo_jane', 'jane.mongo@example.com', 'jane123', 'MongoDB', 'mongo_db_pass')
ON CONFLICT (username) DO NOTHING;

-- CSV Data Providers
INSERT INTO Data_Provider_Credentials (username, email, personal_password, database_name, database_password) VALUES
('csv_robert', 'robert.csv@example.com', 'robert123', 'CSV', 'csv_db_pass'),
('csv_maria', 'maria.csv@example.com', 'maria123', 'CSV', 'csv_db_pass'),
('csv_james', 'james.csv@example.com', 'james123', 'CSV', 'csv_db_pass'),
('csv_linda', 'linda.csv@example.com', 'linda123', 'CSV', 'csv_db_pass'),
('csv_kevin', 'kevin.csv@example.com', 'kevin123', 'CSV', 'csv_db_pass')
ON CONFLICT (username) DO NOTHING;

-- 6. Insert Default Administrator
INSERT INTO Administrators (username, email, password) 
VALUES ('admin', 'admin@example.com', 'admin123')
ON CONFLICT (email) DO NOTHING;
