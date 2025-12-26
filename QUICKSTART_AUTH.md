# 🚀 Quick Start: Testing the New Authentication System

## Prerequisites Check ✅

Before testing, ensure:
- ✅ PostgreSQL is running
- ✅ MongoDB is running
- ✅ Apache Drill is configured
- ✅ Authentication tables are created (ran setup_auth_system.sql)

---

## 🎯 Quick Test (5 Minutes)

### 1. Start the Server

```powershell
# Navigate to backend directory
cd c:\Users\Lenovo\dbmsel\dbms\dbms-federated-project\backend

# Activate conda environment
conda activate dbms_env

# Start Flask server
python app.py
```

Wait for:
```
PostgreSQL: ✓ Connected
MongoDB: ✓ Connected
Apache Drill: ✓ Connected
Access the application at: http://localhost:5000
```

### 2. Open Browser

Navigate to: **http://localhost:5000**

You should see the new login page with 3 role cards:
- 🔬 Researcher
- 📊 Data Provider
- ⚙️ Administrator

---

## 🧪 Test 1: Researcher Registration (30 seconds)

1. Click **"Researcher"** card
2. Click **"Create account"** link
3. Fill in:
   - Username: `test_user`
   - Email: `test@example.com`
   - Password: `test123`
   - Confirm Password: `test123`
4. Click **"Create Account"**

**Expected Result:** 
- ✅ "Account created successfully" message
- ✅ Redirect to login form
- ✅ Login works with test@example.com / test123
- ✅ Dashboard shows "Researcher" role
- ✅ Can access Query interface

---

## 🧪 Test 2: PostgreSQL Data Provider (45 seconds)

1. **Logout** (top-right corner)
2. Click **"Data Provider"** card
3. Click **"PostgreSQL"** database card (with 🐘 icon)
4. Fill in ALL 4 fields:
   - Username: `pg_john`
   - Email: `john.postgres@example.com`
   - Personal Password: `john123`
   - Database Password: `postgres_db_pass`
5. Click **"Login"**

**Expected Result:**
- ✅ Dashboard shows "Data Provider (PostgreSQL)"
- ✅ Navigate to "Data Provider" page
- ✅ **Only see**: Climate Data + Agriculture Data tabs
- ✅ **Hidden**: Biodiversity, Air Quality, Sensor Logs tabs
- ✅ Cannot access Query interface (no navigation link)

---

## 🧪 Test 3: MongoDB Data Provider (45 seconds)

1. **Logout**
2. Click **"Data Provider"** card
3. Click **"MongoDB"** database card (with 🍃 icon)
4. Fill in:
   - Username: `mongo_lisa`
   - Email: `lisa.mongo@example.com`
   - Personal Password: `lisa123`
   - Database Password: `mongo_db_pass`
5. Click **"Login"**

**Expected Result:**
- ✅ Dashboard shows "Data Provider (MongoDB)"
- ✅ Navigate to "Data Provider" page
- ✅ **Only see**: Biodiversity + Sensor Logs + Air Quality tabs
- ✅ **Hidden**: Climate Data, Agriculture Data tabs

---

## 🧪 Test 4: CSV Data Provider (45 seconds)

1. **Logout**
2. Click **"Data Provider"** card
3. Click **"CSV"** database card (with 📄 icon)
4. Fill in:
   - Username: `csv_robert`
   - Email: `robert.csv@example.com`
   - Personal Password: `robert123`
   - Database Password: `csv_db_pass`
5. Click **"Login"**

**Expected Result:**
- ✅ Dashboard shows "Data Provider (CSV)"
- ✅ Data Provider page shows only Sensor tab (CSV readings)

---

## 🧪 Test 5: Administrator (30 seconds)

1. **Logout**
2. Click **"Administrator"** card
3. Fill in:
   - Email: `admin@example.com`
   - Password: `admin123`
4. Click **"Login"**

**Expected Result:**
- ✅ Dashboard shows "Administrator"
- ✅ Full access to all features

---

## ❌ Test 6: Error Handling (1 minute)

### Test Invalid Credentials

**Wrong Password:**
1. Try logging in as researcher with wrong password
2. **Expected:** "Invalid email or password"

**Wrong Database Password:**
1. Data Provider → PostgreSQL
2. Use `pg_john` credentials but wrong database password
3. **Expected:** "Invalid database password"

**Unauthorized Username:**
1. Data Provider → PostgreSQL
2. Try username `mongo_lisa` (she's MongoDB, not PostgreSQL)
3. **Expected:** "Username not authorized for this database"

**Duplicate Username:**
1. Researcher → Create account
2. Try to register with username `test_user` (already exists)
3. **Expected:** "Username already exists"

**Password Too Short:**
1. Researcher → Create account
2. Try password `abc` (less than 6 chars)
3. **Expected:** Form validation error or "Password must be at least 6 characters"

---

## 📋 All Test Accounts

### PostgreSQL (Database Password: `postgres_db_pass`)
- pg_john / john.postgres@example.com / john123
- pg_sarah / sarah.postgres@example.com / sarah123
- pg_mike / mike.postgres@example.com / mike123
- pg_emma / emma.postgres@example.com / emma123
- pg_alex / alex.postgres@example.com / alex123

### MongoDB (Database Password: `mongo_db_pass`)
- mongo_lisa / lisa.mongo@example.com / lisa123
- mongo_david / david.mongo@example.com / david123
- mongo_kate / kate.mongo@example.com / kate123
- mongo_tom / tom.mongo@example.com / tom123
- mongo_jane / jane.mongo@example.com / jane123

### CSV (Database Password: `csv_db_pass`)
- csv_robert / robert.csv@example.com / robert123
- csv_maria / maria.csv@example.com / maria123
- csv_james / james.csv@example.com / james123
- csv_linda / linda.csv@example.com / linda123
- csv_kevin / kevin.csv@example.com / kevin123

### Administrator
- admin@example.com / admin123

---

## 🐛 Troubleshooting

### "Cannot connect to database"
```powershell
# Check PostgreSQL
pg_isready -U postgres

# If not running, start it:
# Windows: Start PostgreSQL service from Services
# Or: pg_ctl start -D "C:\Program Files\PostgreSQL\14\data"
```

### "Authentication tables not found"
```powershell
# Run the setup script:
$env:PGPASSWORD='SwathiSRao'
psql -U postgres -d environmental_db -f "c:\Users\Lenovo\dbmsel\dbms\dbms-federated-project\database\setup_auth_system.sql"
```

### "Login not working"
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify network tab shows API calls to `/api/login-*`
4. Check Flask server terminal for error messages

### "Tabs not filtering correctly"
1. After login, open browser console (F12)
2. Type: `sessionStorage` or check Application tab → Session Storage
3. Verify `assigned_database` is set correctly

### "Session not persisting"
1. Check browser allows cookies
2. Verify you're on http://localhost:5000 (not 127.0.0.1)
3. Check Flask terminal for session-related errors

---

## ✅ Success Checklist

After all tests, you should have verified:

- [ ] Researcher can self-register with unique username
- [ ] Researcher can login and access Query interface
- [ ] PostgreSQL provider sees only PostgreSQL tables
- [ ] MongoDB provider sees only MongoDB collections
- [ ] CSV provider sees only CSV data
- [ ] Dashboard correctly shows database assignment
- [ ] Wrong credentials show appropriate errors
- [ ] Duplicate username registration is rejected
- [ ] Wrong database password is rejected
- [ ] Unauthorized username for database is rejected
- [ ] Admin login works
- [ ] Session persists across page navigation
- [ ] Logout works correctly

---

## 📚 Additional Documentation

For more details, see:
- **LOGIN_CREDENTIALS.md** - Complete credentials list
- **AUTHENTICATION_TESTING.md** - Detailed testing guide
- **AUTHENTICATION_ARCHITECTURE.md** - System architecture
- **AUTHENTICATION_COMPLETE.md** - Implementation summary

---

## 🎉 Done!

If all tests pass, your authentication system is fully operational!

**Total Test Time:** ~5 minutes  
**Number of Test Scenarios:** 6 main tests + 5 error handling tests  
**Expected Success Rate:** 100% ✅

---

## 💻 Command Reference

```powershell
# Start server
cd c:\Users\Lenovo\dbmsel\dbms\dbms-federated-project\backend
conda activate dbms_env
python app.py

# Check PostgreSQL
pg_isready -U postgres

# Run setup script (if needed)
$env:PGPASSWORD='SwathiSRao'
psql -U postgres -d environmental_db -f "c:\Users\Lenovo\dbmsel\dbms\dbms-federated-project\database\setup_auth_system.sql"

# View authentication tables
$env:PGPASSWORD='SwathiSRao'
psql -U postgres -d environmental_db -c "SELECT * FROM Researcher_Accounts;"
psql -U postgres -d environmental_db -c "SELECT username, email, database_name FROM Data_Provider_Credentials;"
```

---

**Ready to test!** Open http://localhost:5000 and start with Test 1. 🚀
