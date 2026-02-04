-- ========================================
-- Add password_hash columns to authentication tables
-- ========================================
-- This script adds bcrypt hash columns to store hashed passwords
-- Run this before executing the password migration script

-- Add password_hash column to Researcher_Accounts (if not exists)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'researcher_accounts' 
        AND column_name = 'password_hash'
    ) THEN
        ALTER TABLE Researcher_Accounts 
        ADD COLUMN password_hash VARCHAR(255);
        
        RAISE NOTICE 'Added password_hash column to Researcher_Accounts';
    ELSE
        RAISE NOTICE 'password_hash column already exists in Researcher_Accounts';
    END IF;
END $$;

-- Add personal_password_hash column to Data_Provider_Credentials (if not exists)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'data_provider_credentials' 
        AND column_name = 'personal_password_hash'
    ) THEN
        ALTER TABLE Data_Provider_Credentials 
        ADD COLUMN personal_password_hash VARCHAR(255);
        
        RAISE NOTICE 'Added personal_password_hash column to Data_Provider_Credentials';
    ELSE
        RAISE NOTICE 'personal_password_hash column already exists in Data_Provider_Credentials';
    END IF;
END $$;

-- Add password_hash column to Administrators (if not exists)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'administrators' 
        AND column_name = 'password_hash'
    ) THEN
        ALTER TABLE Administrators 
        ADD COLUMN password_hash VARCHAR(255);
        
        RAISE NOTICE 'Added password_hash column to Administrators';
    ELSE
        RAISE NOTICE 'password_hash column already exists in Administrators';
    END IF;
END $$;

-- Display current status
SELECT 
    'Researcher_Accounts' as table_name,
    COUNT(*) as total_users,
    COUNT(password_hash) as users_with_hash
FROM Researcher_Accounts

UNION ALL

SELECT 
    'Data_Provider_Credentials' as table_name,
    COUNT(*) as total_users,
    COUNT(personal_password_hash) as users_with_hash
FROM Data_Provider_Credentials

UNION ALL

SELECT 
    'Administrators' as table_name,
    COUNT(*) as total_users,
    COUNT(password_hash) as users_with_hash
FROM Administrators;
