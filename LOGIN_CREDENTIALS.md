# Login Credentials Reference

## Role-Based Authentication System

The system now has three different login roles: **Researcher**, **Data Provider**, and **Administrator**.

---

## 🔬 Researcher Login

### Create a New Account
Researchers can create their own accounts:
1. Click on **"Researcher"** role
2. Click **"Create account"** link
3. Fill in:
   - Username (must be unique)
   - Email
   - Password (minimum 6 characters)
   - Confirm Password

### Login
- Use your registered email and password
- Access: Full query interface with federated database access

---

## 📊 Data Provider Login

Data Providers have restricted access to specific databases. Each database has its own password and 5 authorized users.

### PostgreSQL Data Providers

**Database Password:** `postgres_db_pass`

| Username | Email | Personal Password |
|----------|-------|-------------------|
| pg_john | john.postgres@example.com | john123 |
| pg_sarah | sarah.postgres@example.com | sarah123 |
| pg_mike | mike.postgres@example.com | mike123 |
| pg_emma | emma.postgres@example.com | emma123 |
| pg_alex | alex.postgres@example.com | alex123 |

**Login Steps:**
1. Click on **"Data Provider"** role
2. Select **PostgreSQL** database
3. Enter username, email, personal password, AND database password

---

### MongoDB Data Providers

**Database Password:** `mongo_db_pass`

| Username | Email | Personal Password |
|----------|-------|-------------------|
| mongo_lisa | lisa.mongo@example.com | lisa123 |
| mongo_david | david.mongo@example.com | david123 |
| mongo_kate | kate.mongo@example.com | kate123 |
| mongo_tom | tom.mongo@example.com | tom123 |
| mongo_jane | jane.mongo@example.com | jane123 |

**Login Steps:**
1. Click on **"Data Provider"** role
2. Select **MongoDB** database
3. Enter username, email, personal password, AND database password

---

### CSV Data Providers

**Database Password:** `csv_db_pass`

| Username | Email | Personal Password |
|----------|-------|-------------------|
| csv_robert | robert.csv@example.com | robert123 |
| csv_maria | maria.csv@example.com | maria123 |
| csv_james | james.csv@example.com | james123 |
| csv_linda | linda.csv@example.com | linda123 |
| csv_kevin | kevin.csv@example.com | kevin123 |

**Login Steps:**
1. Click on **"Data Provider"** role
2. Select **CSV** database
3. Enter username, email, personal password, AND database password

---

## ⚙️ Administrator Login

**Email:** admin@example.com  
**Password:** admin123

- Full system access (placeholder for future admin features)

---

## Database Access Restrictions

### Researcher
- Access: All databases (PostgreSQL, MongoDB, CSV)
- Can query across all data sources
- Cannot add or modify data (query-only access)

### Data Provider
- **PostgreSQL Providers:** Can only manage PostgreSQL tables
  - climate_data
  - agriculture_data
  - region_info
  
- **MongoDB Providers:** Can only manage MongoDB collections
  - Biodiversity_Data
  - Sensor_Logs
  - Air_Quality_History
  - Species_Details
  - Sensor_Metadata
  
- **CSV Providers:** Can only manage CSV data
  - sensor_readings.csv

### Administrator
- Full access to all databases
- User management capabilities
- System configuration

---

## Testing the System

### Test Researcher Login
1. Click **"Researcher"** → **"Create account"**
2. Create account: `test_researcher` / `test@example.com` / `test123`
3. Login and access query interface

### Test Data Provider Login
1. Click **"Data Provider"** → Select **PostgreSQL**
2. Login as:
   - Username: `pg_john`
   - Email: `john.postgres@example.com`
   - Personal Password: `john123`
   - Database Password: `postgres_db_pass`
3. Access data provider dashboard (restricted to PostgreSQL tables)

### Test Administrator Login
1. Click **"Administrator"**
2. Email: `admin@example.com`
3. Password: `admin123`

---

## Security Notes

⚠️ **Development Credentials**: These are example credentials for development only.

In production:
- Use environment variables for database passwords
- Hash personal passwords with bcrypt
- Implement password complexity requirements
- Add two-factor authentication
- Regular password rotation policy
