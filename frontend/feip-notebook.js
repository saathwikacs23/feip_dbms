// ========================================
// FEIP Notebook - Interactive Data Analysis
// ========================================

let cellCounter = 0;
let availableTables = {};
let currentLoadedData = null;
let currentDataInfo = {};

// ========================================
// Initialize Notebook
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('FEIP Notebook initializing...');
    checkAuthentication();
});

// ========================================
// Authentication Check
// ========================================
async function checkAuthentication() {
    console.log('Checking authentication...');
    try {
        const response = await fetch('/api/check-session', {
            credentials: 'include'
        });
        
        console.log('Auth response status:', response.status);
        const data = await response.json();
        console.log('Auth data:', data);
        
        if (!data.authenticated) {
            console.log('Not authenticated, redirecting to login');
            alert('Please log in to access FEIP Notebook.');
            window.location.href = 'login.html';
            return;
        }
        
        console.log('User role:', data.user.role);
        
        // Accept both 'Researcher' and 'researcher' (case-insensitive)
        const userRole = (data.user.role || '').toLowerCase();
        if (userRole !== 'researcher') {
            console.log('Not a researcher, access denied. Role is:', data.user.role);
            alert(`Access denied. FEIP Notebook is only available to researchers. Your role: ${data.user.role}`);
            window.location.href = 'dashboard.html';
            return;
        }
        
        console.log('Authentication successful, initializing notebook...');
        // Authentication successful - initialize notebook
        await fetchAvailableTables();
        addCell();
        console.log('Notebook initialized successfully');
        
    } catch (error) {
        console.error('Authentication check failed:', error);
        alert('Failed to verify authentication: ' + error.message);
        window.location.href = 'login.html';
    }
}

// ========================================
// Data Loader Functions
// ========================================
function toggleDataLoader() {
    const loader = document.getElementById('dataLoader');
    loader.style.display = loader.style.display === 'none' ? 'block' : 'none';
}

async function fetchAvailableTables() {
    try {
        const response = await fetch('/api/notebook/tables', {
            credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.success) {
            availableTables = data.tables;
        } else {
            console.error('Failed to fetch tables:', data.error);
        }
    } catch (error) {
        console.error('Error fetching tables:', error);
    }
}

function loadTables() {
    const databaseSelect = document.getElementById('databaseSelect');
    const tableSelect = document.getElementById('tableSelect');
    const loadBtn = document.getElementById('loadDataBtn');
    const csvBlocked = document.getElementById('csvBlocked');
    
    let selectedDb = databaseSelect.value;
    
    // Clear previous selections
    tableSelect.innerHTML = '<option value="">Select Table</option>';
    tableSelect.disabled = true;
    loadBtn.disabled = true;
    csvBlocked.style.display = 'none';
    
    if (selectedDb === 'CSV') {
        // Block CSV access
        csvBlocked.style.display = 'block';
        return;
    }
    
    // Ensure 'Environmental DB' is used instead of 'PostgreSQL'
    if (selectedDb === 'PostgreSQL') selectedDb = 'Environmental DB';
    
    if (selectedDb && availableTables[selectedDb]) {
        const tables = availableTables[selectedDb];
        
        tables.forEach(table => {
            const option = document.createElement('option');
            option.value = table;
            option.textContent = table;
            tableSelect.appendChild(option);
        });
        
        tableSelect.disabled = false;
        loadBtn.disabled = false;
    } else if (selectedDb === 'MongoDB') {
        csvBlocked.style.display = 'block';
        csvBlocked.textContent = '⚠️ MongoDB access is not permitted to protect data provider privacy.';
        tableSelect.disabled = true;
        loadBtn.disabled = true;
        return;
    }
}

async function loadSampleData() {
    const databaseSelect = document.getElementById('databaseSelect');
    const tableSelect = document.getElementById('tableSelect');
    const loadBtn = document.getElementById('loadDataBtn');
    const loadedInfo = document.getElementById('loadedDataInfo');
    
    const database = databaseSelect.value;
    const table = tableSelect.value;
    
    if (!database || !table) {
        alert('Please select both database and table');
        return;
    }
    
    // Show loading
    loadBtn.disabled = true;
    loadBtn.innerHTML = '<span class="loading-spinner"></span> Loading...';
    
    try {
        const response = await fetch('/api/notebook/sample-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ database, table })
        });
        
        const data = await response.json();
        
        if (data.success) {
            currentLoadedData = data.data;
            currentDataInfo = {
                database: data.database,
                table: data.table,
                rows: data.rows
            };
            
            // Show success message
            loadedInfo.innerHTML = `✅ Loaded ${data.rows} rows from <strong>${database}.${table}</strong>. Data is available as <code>df</code> in cells.`;
            loadedInfo.classList.add('show');
            
            // Add a cell with the loaded data
            const code = `# Data loaded from ${database}.${table}
import pandas as pd
import numpy as np

# Sample data (20 rows) - any changes here won't affect the database
data = ${JSON.stringify(currentLoadedData, null, 2)}

df = pd.DataFrame(data)
print(f"Loaded ${'len(data)'} rows from ${database}.${table}")
print("\\nDataFrame Info:")
print(df.head())`;
            
            addCell(code);
            
            // Hide data loader
            toggleDataLoader();
        } else {
            alert('Failed to load data: ' + data.error);
        }
    } catch (error) {
        console.error('Error loading sample data:', error);
        alert('Error loading data. Please try again.');
    } finally {
        loadBtn.disabled = false;
        loadBtn.textContent = 'Load Sample (20 rows)';
    }
}

// ========================================
// Cell Management
// ========================================
function addCell(initialCode = '') {
    cellCounter++;
    
    const cellsContainer = document.getElementById('cellsContainer');
    
    const cellDiv = document.createElement('div');
    cellDiv.className = 'notebook-cell';
    cellDiv.id = `cell-${cellCounter}`;
    
    cellDiv.innerHTML = `
        <div class="cell-header">
            <span class="cell-type">Python Code Cell [${cellCounter}]</span>
            <div class="cell-actions">
                <button class="btn-run" onclick="runCell(${cellCounter})">▶ Run</button>
                <button class="btn-move-up" onclick="moveCell(${cellCounter}, 'up')">↑</button>
                <button class="btn-move-down" onclick="moveCell(${cellCounter}, 'down')">↓</button>
                <button class="btn-delete" onclick="deleteCell(${cellCounter})">✕</button>
            </div>
        </div>
        <div class="cell-input">
            <textarea class="cell-textarea" id="code-${cellCounter}" placeholder="# Enter Python code here...
# Available libraries: pandas (pd), numpy (np), matplotlib.pyplot (plt), sklearn
# After loading data, access it as 'df'

print('Hello from FEIP Notebook!')
">${initialCode}</textarea>
        </div>
        <div class="cell-output" id="output-${cellCounter}" style="display: none;"></div>
    `;
    
    cellsContainer.appendChild(cellDiv);
    
    // Scroll to new cell
    cellDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function runCell(cellId) {
    const codeTextarea = document.getElementById(`code-${cellId}`);
    const outputDiv = document.getElementById(`output-${cellId}`);
    const runBtn = document.querySelector(`#cell-${cellId} .btn-run`);
    
    const code = codeTextarea.value.trim();
    
    if (!code) {
        alert('Cell is empty. Please enter some code.');
        return;
    }
    
    // Show loading
    outputDiv.style.display = 'block';
    outputDiv.className = 'cell-output';
    outputDiv.innerHTML = '<span class="loading-spinner"></span> Executing...';
    runBtn.disabled = true;
    
    try {
        const response = await fetch('/api/notebook/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ code })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Display output
            let outputHTML = '';
            
            if (data.output) {
                outputHTML += `<pre>${escapeHtml(data.output)}</pre>`;
            }
            
            // Display figures if any
            if (data.figures && data.figures.length > 0) {
                data.figures.forEach((figBase64, index) => {
                    outputHTML += `<img src="data:image/png;base64,${figBase64}" alt="Figure ${index + 1}">`;
                });
            }
            
            if (!outputHTML) {
                outputHTML = '<em style="color: #666;">Code executed successfully (no output)</em>';
            }
            
            outputDiv.className = 'cell-output success';
            outputDiv.innerHTML = outputHTML;
        } else {
            // Display error
            let errorHTML = `<strong>Error:</strong>\n${escapeHtml(data.error)}`;
            
            if (data.traceback) {
                errorHTML += `\n\n<strong>Traceback:</strong>\n${escapeHtml(data.traceback)}`;
            }
            
            outputDiv.className = 'cell-output error';
            outputDiv.innerHTML = `<pre>${errorHTML}</pre>`;
        }
    } catch (error) {
        console.error('Error executing cell:', error);
        outputDiv.className = 'cell-output error';
        outputDiv.innerHTML = `<pre><strong>Network Error:</strong>\n${escapeHtml(error.message)}</pre>`;
    } finally {
        runBtn.disabled = false;
    }
}

function deleteCell(cellId) {
    const cell = document.getElementById(`cell-${cellId}`);
    if (cell && confirm('Delete this cell?')) {
        cell.remove();
    }
}

function moveCell(cellId, direction) {
    const cell = document.getElementById(`cell-${cellId}`);
    const container = document.getElementById('cellsContainer');
    
    if (!cell) return;
    
    if (direction === 'up') {
        const prevCell = cell.previousElementSibling;
        if (prevCell) {
            container.insertBefore(cell, prevCell);
            cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else if (direction === 'down') {
        const nextCell = cell.nextElementSibling;
        if (nextCell) {
            container.insertBefore(nextCell, cell);
            cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function clearAllCells() {
    if (confirm('Clear all cells? This cannot be undone.')) {
        const container = document.getElementById('cellsContainer');
        container.innerHTML = '';
        cellCounter = 0;
        currentLoadedData = null;
        currentDataInfo = {};
        
        // Add one empty cell
        addCell();
    }
}

// ========================================
// Notebook Save/Export
// ========================================
function saveNotebook() {
    const cells = document.querySelectorAll('.notebook-cell');
    
    if (cells.length === 0) {
        alert('Notebook is empty. Nothing to save.');
        return;
    }
    
    const notebookData = {
        metadata: {
            name: 'FEIP Notebook',
            created: new Date().toISOString(),
            platform: 'Federated Environmental Intelligence Platform',
            dataInfo: currentDataInfo
        },
        cells: []
    };
    
    cells.forEach((cell, index) => {
        const cellId = cell.id.split('-')[1];
        const code = document.getElementById(`code-${cellId}`).value;
        const outputDiv = document.getElementById(`output-${cellId}`);
        const output = outputDiv.style.display !== 'none' ? outputDiv.textContent : '';
        
        notebookData.cells.push({
            cell_number: index + 1,
            cell_type: 'code',
            source: code,
            output: output
        });
    });
    
    // Create downloadable file
    const jsonString = JSON.stringify(notebookData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `feip_notebook_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Notebook saved successfully!');
}

// Remove MongoDB from dropdown if present
const databaseSelect = document.getElementById('databaseSelect');
for (let i = 0; i < databaseSelect.options.length; i++) {
    if (databaseSelect.options[i].value === 'MongoDB') {
        databaseSelect.remove(i);
        break;
    }
}

// Add MongoDB (Restricted) option if not present
const mongoOption = Array.from(databaseSelect.options).find(opt => opt.value === 'MongoDB');
if (!mongoOption) {
    let option = document.createElement('option');
    option.value = 'MongoDB';
    option.textContent = 'MongoDB (Restricted)';
    databaseSelect.appendChild(option);
}

// ========================================
// Utility Functions
// ========================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to run cell
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('cell-textarea')) {
            const cellId = activeElement.id.split('-')[1];
            runCell(parseInt(cellId));
        }
    }
    
    // Ctrl/Cmd + B to add new cell
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        addCell();
    }
});
