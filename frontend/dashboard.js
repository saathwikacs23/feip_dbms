// ========================================
// Dashboard JavaScript
// ========================================

const API_BASE_URL = '';
let currentUser = null;

// Check authentication on page load
window.addEventListener('DOMContentLoaded', async () => {
    await checkAuth();
    await checkDatabaseStatus();
    showRoleBasedContent();
});

async function checkAuth() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/current-user`, {
            credentials: 'include'
        });

        if (!response.ok) {
            window.location.href = 'login.html';
            return;
        }

        const data = await response.json();
        if (data.success) {
            currentUser = data.user;
            document.getElementById('userName').textContent = currentUser.username || currentUser.name || 'User';
            
            // Show database assignment for Data Providers
            if (currentUser.role === 'Data Provider' && currentUser.database) {
                document.getElementById('userRole').textContent = `${currentUser.role} (${currentUser.database})`;
                document.getElementById('userInfo').textContent = `${currentUser.username} (${currentUser.role} - ${currentUser.database})`;
            } else {
                document.getElementById('userRole').textContent = currentUser.role;
                document.getElementById('userInfo').textContent = `${currentUser.username} (${currentUser.role})`;
            }
        } else {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Auth check error:', error);
        window.location.href = 'login.html';
    }
}

function showRoleBasedContent() {
    const defaultDashboard = document.getElementById('defaultDashboard');
    const providerDashboard = document.getElementById('providerDashboard');
    const infoSection = document.querySelector('.info-section');
    const queryCard = document.getElementById('queryCard');
    const providerCard = document.getElementById('providerCard');
    const adminCard = document.getElementById('adminCard');
    const navAdmin = document.getElementById('navAdmin');

    // Hide admin nav link for everyone except Administrator
    if (navAdmin) {
        navAdmin.style.display = currentUser.role === 'Administrator' ? 'block' : 'none';
    }

    if (currentUser.role === 'Data Provider') {
        defaultDashboard.style.display = 'none';
        infoSection.style.display = 'none';
        providerDashboard.style.display = 'block';
    } else {
        defaultDashboard.style.display = 'grid';
        infoSection.style.display = 'block';
        providerDashboard.style.display = 'none';

        // Refined card visibility for other roles
        if (currentUser.role === 'Researcher') {
            queryCard.style.display = 'block';
            providerCard.style.display = 'none';
            adminCard.style.display = 'none';
        } else if (currentUser.role === 'Administrator') {
            queryCard.style.display = 'block';
            providerCard.style.display = 'block';
            adminCard.style.display = 'block';
        }
    }
}

async function executeProviderQuery() {
    const naturalInput = document.getElementById('providerQueryInput').value.trim();
    const messageDiv = document.getElementById('providerMessage');
    const resultsArea = document.getElementById('providerResultsArea');

    if (!naturalInput) {
        messageDiv.textContent = 'Please enter a question about your data.';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
        return;
    }

    messageDiv.textContent = '🤖 Processing your question...';
    messageDiv.className = 'message info';
    messageDiv.style.display = 'block';
    resultsArea.innerHTML = '';

    try {
        const response = await fetch(`${API_BASE_URL}/api/natural-query`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ query: naturalInput })
        });

        const data = await response.json();

        if (data.success) {
            messageDiv.textContent = `✓ AI Success: ${(data.confidence * 100).toFixed(0)}% confidence`;
            messageDiv.className = 'message success';
            displayProviderResults(data.data);
        } else {
            messageDiv.textContent = data.error || 'The AI could not answer this. Try rephrasing.';
            messageDiv.className = 'message error';
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Ensure the platform backend is running.';
        messageDiv.className = 'message error';
        console.error('NLP error:', error);
    }
}

function displayProviderResults(data) {
    const resultsArea = document.getElementById('providerResultsArea');
    if (!data || data.length === 0) {
        resultsArea.innerHTML = '<p class="message info" style="display:block">The query returned no records.</p>';
        return;
    }

    const columns = Object.keys(data[0]);
    let html = '<div style="overflow-x: auto;"><table class="data-table" style="width:100%"><thead><tr>';
    columns.forEach(col => {
        html += `<th style="text-align:left; padding:12px; border-bottom:2px solid #111; text-transform:uppercase; font-size:0.75rem;">${col}</th>`;
    });
    html += '</tr></thead><tbody>';

    data.forEach(row => {
        html += '<tr>';
        columns.forEach(col => {
            let val = row[col];
            if (val === null || val === undefined) val = '-';
            else if (typeof val === 'object') val = JSON.stringify(val);
            html += `<td style="padding:12px; border-bottom:1px solid #EEE; font-size:0.85rem;">${val}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table></div>';
    resultsArea.innerHTML = html;
}

async function checkDatabaseStatus() {
    const statusDiv = document.getElementById('dbStatus');
    statusDiv.innerHTML = '<p style="color: #999;">Checking...</p>';

    try {
        const response = await fetch(`${API_BASE_URL}/api/database-status`, {
            credentials: 'include'
        });

        const data = await response.json();

        if (data.success) {
            const status = data.status;
            statusDiv.innerHTML = `
                <div class="db-status-item">
                    <span>PostgreSQL</span>
                    <span class="status-indicator ${!status.postgres ? 'error' : ''}"></span>
                </div>
                <div class="db-status-item">
                    <span>MongoDB</span>
                    <span class="status-indicator ${!status.mongodb ? 'error' : ''}"></span>
                </div>
                <div class="db-status-item">
                    <span>Apache Drill</span>
                    <span class="status-indicator ${!status.drill ? 'error' : ''}"></span>
                </div>
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.7rem; color: #999;">
                    Last checked: ${new Date().toLocaleTimeString()}
                </div>
            `;
        } else {
            statusDiv.innerHTML = '<p class="error">Failed to check database status</p>';
        }
    } catch (error) {
        statusDiv.innerHTML = '<p class="error">Error connecting to server</p>';
        console.error('Status check error:', error);
    }
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
        // Redirect anyway
        window.location.href = 'login.html';
    }
}

// ========================================
// Query History Functions
// ========================================
let historyVisible = false;

async function toggleQueryHistory() {
    const historySection = document.getElementById('queryHistorySection');
    const dashboardSection = document.getElementById('defaultDashboard');
    const navHistory = document.getElementById('navHistory');
    const navDashboard = document.getElementById('navDashboard');
    
    if (!historyVisible) {
        // Show history
        historySection.style.display = 'block';
        dashboardSection.style.display = 'none';
        
        // Update nav styling
        navHistory.classList.add('active');
        navHistory.style.color = 'var(--text-main)';
        navHistory.style.borderBottom = '1px solid var(--accent-color)';
        navDashboard.classList.remove('active');
        navDashboard.style.color = 'var(--text-secondary)';
        navDashboard.style.borderBottom = '1px solid transparent';
        
        // Load query history
        await loadQueryHistory();
        historyVisible = true;
    } else {
        // Show dashboard
        historySection.style.display = 'none';
        dashboardSection.style.display = 'grid';
        
        // Update nav styling
        navDashboard.classList.add('active');
        navDashboard.style.color = 'var(--text-main)';
        navDashboard.style.borderBottom = '1px solid var(--accent-color)';
        navHistory.classList.remove('active');
        navHistory.style.color = 'var(--text-secondary)';
        navHistory.style.borderBottom = '1px solid transparent';
        
        historyVisible = false;
    }
}

async function loadQueryHistory() {
    const contentDiv = document.getElementById('queryHistoryContent');
    
    try {
        contentDiv.innerHTML = '<p style="color: var(--text-secondary);">Loading query history...</p>';
        
        const response = await fetch(`${API_BASE_URL}/api/query-history`, {
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch query history');
        }
        
        const data = await response.json();
        
        if (data.success && data.queries && data.queries.length > 0) {
            let html = '<div style="display: flex; flex-direction: column; gap: 20px;">';
            
            data.queries.forEach((query, index) => {
                const date = new Date(query.executed_at);
                const formattedDate = date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                html += `
                    <div style="padding: 20px; background: var(--bg-color); border-left: 3px solid var(--text-main);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span style="font-weight: 600; color: var(--text-main);">Query #${query.query_id}</span>
                            <span style="color: var(--text-secondary); font-size: 0.85rem;">${formattedDate}</span>
                        </div>
                        <pre style="white-space: pre-wrap; word-wrap: break-word; background: var(--surface-color); padding: 15px; border: 1px solid var(--border-color); overflow-x: auto;">${query.query_text}</pre>
                    </div>
                `;
            });
            
            html += '</div>';
            contentDiv.innerHTML = html;
        } else {
            contentDiv.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 40px;">No query history found. Execute some queries to see them here.</p>';
        }
    } catch (error) {
        console.error('Error loading query history:', error);
        contentDiv.innerHTML = '<p style="color: #FF3D00;">Error loading query history. Please try again.</p>';
    }
}
