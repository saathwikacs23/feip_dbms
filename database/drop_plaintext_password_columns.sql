-- ========================================
-- Drop plaintext password columns
-- ========================================
-- This removes plaintext password columns after successful hashing.
-- Ensure all authentication uses password_hash columns first.

-- Researcher_Accounts: drop password column if exists
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'researcher_accounts' 
        AND column_name = 'password'
    ) THEN
        ALTER TABLE Researcher_Accounts
        DROP COLUMN password;
        RAISE NOTICE 'Dropped password column from Researcher_Accounts';
    ELSE
        RAISE NOTICE 'password column not found in Researcher_Accounts';
    END IF;
END $$;

-- Data_Provider_Credentials: drop personal_password column if exists
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'data_provider_credentials' 
        AND column_name = 'personal_password'
    ) THEN
        ALTER TABLE Data_Provider_Credentials
        DROP COLUMN personal_password;
        RAISE NOTICE 'Dropped personal_password column from Data_Provider_Credentials';
    ELSE
        RAISE NOTICE 'personal_password column not found in Data_Provider_Credentials';
    END IF;
END $$;

-- Administrators: drop password column if exists
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'administrators' 
        AND column_name = 'password'
    ) THEN
        ALTER TABLE Administrators
        DROP COLUMN password;
        RAISE NOTICE 'Dropped password column from Administrators';
    ELSE
        RAISE NOTICE 'password column not found in Administrators';
    END IF;
END $$;

-- Optional: show remaining hash columns
SELECT 
    table_name,
    column_name
FROM information_schema.columns
WHERE table_name IN ('researcher_accounts','data_provider_credentials','administrators')
  AND column_name LIKE '%password%'
ORDER BY table_name, column_name;
