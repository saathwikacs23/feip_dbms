// ========================================
// Admin Panel JavaScript
// ========================================

const API_BASE_URL = '';
let currentEditUser = null;

// Check authentication on page load
window.addEventListener('DOMContentLoaded', async () => {
    await checkAuth();
    await loadAllUsers();
});

async function checkAuth() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/current-user`, {
            credentials: 'include'
        });

        const data = await response.json();
        if (data.success) {
            const currentUser = data.user;
            
            // Update sidebar user info
            const userDisplayName = document.getElementById('userDisplayName');
            if (userDisplayName) {
                userDisplayName.textContent = currentUser.username || 'Administrator';
            }
            
            // Check if user is administrator
            if (currentUser.role !== 'Administrator') {
                window.location.href = 'dashboard.html';
            }
        } else {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Auth check error:', error);
        window.location.href = 'login.html';
    }
}

async function loadAllUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
            credentials: 'include'
        });

        const data = await response.json();
        
        if (data.success) {
            populateTable('researchersTable', data.users.researchers, 'Researcher');
            populateTable('providersTable', data.users.providers, 'Data Provider', true);
            populateTable('adminsTable', data.users.administrators, 'Administrator');
        } else {
            showMessage('Error loading users: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error loading users:', error);
        showMessage('Error loading users', 'error');
    }
}

function populateTable(tableId, users, role, includeDatabase = false) {
    const tbody = document.getElementById(tableId);
    
    if (!users || users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (includeDatabase ? '7' : '6') + '" style="text-align: center; color: var(--text-secondary);">No users found</td></tr>';
        return;
    }
    
    tbody.innerHTML = users.map(user => {
        const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A';
        const lastLogin = user.last_login ? new Date(user.last_login).toLocaleString() : 'Never';
        
        let row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
        `;
        
        if (includeDatabase) {
            row += `<td>${user.database || 'N/A'}</td>`;
        }
        
        row += `
                <td>${createdAt}</td>
                <td>${lastLogin}</td>
                <td>
                    <div class="password-cell">
                        <span class="password-display">••••••••</span>
                        <button class="btn-edit" onclick='openEditModal(${JSON.stringify(user)}, "${role}")'>Edit</button>
                    </div>
                </td>
            </tr>
        `;
        
        return row;
    }).join('');
}

function openEditModal(user, role) {
    currentEditUser = { ...user, role };
    
    const modal = document.getElementById('passwordModal');
    const userInfo = document.getElementById('modalUserInfo');
    const passwordInput = document.getElementById('newPassword');
    
    userInfo.textContent = `${user.username} (${role})`;
    passwordInput.value = '';
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('passwordModal');
    modal.classList.remove('active');
    currentEditUser = null;
}

async function savePassword() {
    const newPassword = document.getElementById('newPassword').value.trim();
    
    if (!newPassword) {
        alert('Please enter a new password');
        return;
    }
    
    if (!currentEditUser) {
        alert('No user selected');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/update-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                user_id: currentEditUser.id,
                role: currentEditUser.role,
                new_password: newPassword
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showMessage('Password updated successfully', 'success');
            closeModal();
            await loadAllUsers();
        } else {
            showMessage('Error: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error updating password:', error);
        showMessage('Error updating password', 'error');
    }
}

function showMessage(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message ' + type;
    messageBox.style.display = 'block';
    
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 5000);
}

async function logout() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        
        if (response.ok) {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Logout error:', error);
        window.location.href = 'login.html';
    }
}

// ========================================
// Add Data Provider Functions
// ========================================
function openAddProviderModal() {
    const modal = document.getElementById('addProviderModal');
    // Clear form
    document.getElementById('providerUsername').value = '';
    document.getElementById('providerEmail').value = '';
    document.getElementById('providerPassword').value = '';
    document.getElementById('providerDatabase').value = '';
    document.getElementById('providerDbPassword').value = '';
    
    modal.classList.add('active');
}

function closeAddProviderModal() {
    const modal = document.getElementById('addProviderModal');
    modal.classList.remove('active');
}

async function saveNewProvider() {
    const username = document.getElementById('providerUsername').value.trim();
    const email = document.getElementById('providerEmail').value.trim();
    const password = document.getElementById('providerPassword').value.trim();
    const database = document.getElementById('providerDatabase').value;
    const dbPassword = document.getElementById('providerDbPassword').value.trim();
    
    if (!username || !email || !password || !database || !dbPassword) {
        alert('All fields are required');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/add-provider`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                email,
                personal_password: password,
                database_name: database,
                database_password: dbPassword
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showMessage('Data Provider added successfully', 'success');
            closeAddProviderModal();
            await loadAllUsers();
        } else {
            showMessage('Error: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error adding provider:', error);
        showMessage('Error adding Data Provider', 'error');
    }
}

// ========================================
// Add Administrator Functions
// ========================================
function openAddAdminModal() {
    const modal = document.getElementById('addAdminModal');
    // Clear form
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminEmail').value = '';
    document.getElementById('adminPassword').value = '';
    
    modal.classList.add('active');
}

function closeAddAdminModal() {
    const modal = document.getElementById('addAdminModal');
    modal.classList.remove('active');
}

async function saveNewAdmin() {
    const username = document.getElementById('adminUsername').value.trim();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    
    if (!username || !email || !password) {
        alert('All fields are required');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/add-admin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showMessage('Administrator added successfully', 'success');
            closeAddAdminModal();
            await loadAllUsers();
        } else {
            showMessage('Error: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error adding administrator:', error);
        showMessage('Error adding Administrator', 'error');
    }
}
