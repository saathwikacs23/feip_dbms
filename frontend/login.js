// ========================================
// Enhanced Authentication System
// Role-based login with registration
// ========================================

const API_BASE_URL = '';
let selectedRole = null;
let selectedDatabase = null;

// Show role selection on page load
window.addEventListener('DOMContentLoaded', () => {
    showRoleSelection();
});

// ========================================
// ROLE SELECTION
// ========================================
function showRoleSelection() {
    document.getElementById('roleSelection').classList.remove('hidden');
    document.getElementById('researcherLogin').classList.add('hidden');
    document.getElementById('researcherRegister').classList.add('hidden');
    document.getElementById('dataProviderLogin').classList.add('hidden');
    document.getElementById('dataProviderDBSelect').classList.add('hidden');
    document.getElementById('adminLogin').classList.add('hidden');
}

function selectRole(role) {
    selectedRole = role;
    document.getElementById('roleSelection').classList.add('hidden');
    
    if (role === 'researcher') {
        document.getElementById('researcherLogin').classList.remove('hidden');
    } else if (role === 'dataprovider') {
        document.getElementById('dataProviderDBSelect').classList.remove('hidden');
    } else if (role === 'admin') {
        document.getElementById('adminLogin').classList.remove('hidden');
    }
}

function showResearcherRegister() {
    document.getElementById('researcherLogin').classList.add('hidden');
    document.getElementById('researcherRegister').classList.remove('hidden');
}

function backToResearcherLogin() {
    document.getElementById('researcherRegister').classList.add('hidden');
    document.getElementById('researcherLogin').classList.remove('hidden');
}

// ========================================
// RESEARCHER REGISTRATION
// ========================================
async function registerResearcher() {
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const messageDiv = document.getElementById('regMessage');

    messageDiv.textContent = '';
    messageDiv.className = 'message';

    // Validation
    if (!username || !email || !password || !confirmPassword) {
        messageDiv.textContent = 'All fields are required';
        messageDiv.className = 'message error';
        return;
    }

    if (password !== confirmPassword) {
        messageDiv.textContent = 'Passwords do not match';
        messageDiv.className = 'message error';
        return;
    }

    if (password.length < 6) {
        messageDiv.textContent = 'Password must be at least 6 characters';
        messageDiv.className = 'message error';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/register-researcher`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (data.success) {
            messageDiv.textContent = '✓ Registration successful! Redirecting to login...';
            messageDiv.className = 'message success';
            setTimeout(() => backToResearcherLogin(), 2000);
        } else {
            messageDiv.textContent = data.error || 'Registration failed';
            messageDiv.className = 'message error';
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Please try again.';
        messageDiv.className = 'message error';
        console.error('Registration error:', error);
    }
}

// ========================================
// RESEARCHER LOGIN
// ========================================
async function loginResearcher() {
    const username = document.getElementById('researcherEmail').value.trim();
    const password = document.getElementById('researcherPassword').value;
    const messageDiv = document.getElementById('researcherMessage');

    messageDiv.textContent = '';
    messageDiv.className = 'message';

    if (!username || !password) {
        messageDiv.textContent = 'Username and password are required';
        messageDiv.className = 'message error';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/login-researcher`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = 'dashboard.html';
        } else {
            messageDiv.textContent = data.error || 'Login failed';
            messageDiv.className = 'message error';
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Please try again.';
        messageDiv.className = 'message error';
        console.error('Login error:', error);
    }
}

// ========================================
// DATA PROVIDER - DATABASE SELECTION
// ========================================
function selectDatabase(dbName) {
    selectedDatabase = dbName;
    
    // Hide DB selection, show login form
    document.getElementById('dataProviderDBSelect').classList.add('hidden');
    document.getElementById('dataProviderLogin').classList.remove('hidden');
    document.getElementById('selectedDbName').textContent = dbName;
}

function backToDBSelection() {
    document.getElementById('dataProviderLogin').classList.add('hidden');
    document.getElementById('dataProviderDBSelect').classList.remove('hidden');
}

// ========================================
// DATA PROVIDER LOGIN
// ========================================
async function loginDataProvider() {
    const username = document.getElementById('dpUsername').value.trim();
    const email = document.getElementById('dpEmail').value.trim();
    const personalPassword = document.getElementById('dpPersonalPassword').value;
    const dbPassword = document.getElementById('dpDbPassword').value;
    const messageDiv = document.getElementById('dpMessage');

    messageDiv.textContent = '';
    messageDiv.className = 'message';

    if (!username || !email || !personalPassword || !dbPassword) {
        messageDiv.textContent = 'All fields are required';
        messageDiv.className = 'message error';
        return;
    }

    if (!selectedDatabase) {
        messageDiv.textContent = 'Please select a database first';
        messageDiv.className = 'message error';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/login-dataprovider`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                email,
                personal_password: personalPassword,
                database_password: dbPassword,
                database: selectedDatabase
            })
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = 'data-provider.html';
        } else {
            messageDiv.textContent = data.error || 'Login failed';
            messageDiv.className = 'message error';
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Please try again.';
        messageDiv.className = 'message error';
        console.error('Data Provider login error:', error);
    }
}

// ========================================
// ADMINISTRATOR LOGIN
// ========================================
async function loginAdmin() {
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    const messageDiv = document.getElementById('adminMessage');

    messageDiv.textContent = '';
    messageDiv.className = 'message';

    if (!email || !password) {
        messageDiv.textContent = 'Email and password are required';
        messageDiv.className = 'message error';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/login-admin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = 'admin.html';
        } else {
            messageDiv.textContent = data.error || 'Login failed';
            messageDiv.className = 'message error';
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Please try again.';
        messageDiv.className = 'message error';
        console.error('Admin login error:', error);
    }
}

// Enter key support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (document.getElementById('researcherLogin').style.display === 'block') {
            loginResearcher();
        } else if (document.getElementById('researcherRegister').style.display === 'block') {
            registerResearcher();
        } else if (document.getElementById('dataProviderLogin').style.display === 'block' && 
                   document.getElementById('dpLoginForm').style.display === 'block') {
            loginDataProvider();
        } else if (document.getElementById('adminLogin').style.display === 'block') {
            loginAdmin();
        }
    }
});
