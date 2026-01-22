# FEIP Notebook - Interactive Data Analysis Feature

## Overview
FEIP Notebook is an integrated Jupyter-like notebook environment for researchers to perform interactive data analysis, visualization, and basic machine learning on sample data from the federated database system.

## Key Features

### 1. **Isolated Analysis Environment**
- Works with **20-row sample data** only
- Changes made in the notebook **do NOT affect** the actual databases
- Completely isolated from production data

### 2. **Data Access Control**
- ✅ **PostgreSQL**: Access to sample data (20 rows per table)
- ✅ **MongoDB**: Access to sample data (20 documents per collection)
- ❌ **CSV Files**: Blocked to protect data provider privacy

### 3. **Available Libraries**
The notebook comes with pre-installed data science libraries:
- **pandas** - Data manipulation and analysis
- **numpy** - Numerical computing
- **matplotlib** - Data visualization
- **scikit-learn** - Machine learning algorithms

### 4. **Notebook Features**
- Add, delete, and reorder cells
- Execute Python code with instant output
- View matplotlib plots inline
- Save notebook to local system
- Keyboard shortcuts (Ctrl/Cmd + Enter to run, Ctrl/Cmd + B to add cell)

## How to Use

### Step 1: Access the Notebook
1. Log in as a **Researcher**
2. Navigate to **Dashboard** or **Query Environment**
3. Click on **📓 FEIP Notebook** in the sidebar

### Step 2: Load Sample Data
1. Click **"📊 Load Data"** button
2. Select a database (PostgreSQL or MongoDB)
3. Choose a table/collection
4. Click **"Load Sample (20 rows)"**
5. Data will be automatically loaded as a pandas DataFrame named `df`

### Step 3: Analyze Data
Write Python code in cells to analyze your data:

```python
# View the data
print(df.head())
print(df.info())
print(df.describe())

# Data manipulation
df_filtered = df[df['column_name'] > 100]
print(df_filtered)

# Visualization
import matplotlib.pyplot as plt
df['column_name'].plot(kind='bar')
plt.title('My Visualization')
plt.show()

# Machine Learning
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Your ML code here...
```

### Step 4: Save Your Work
- Click **"💾 Save Notebook"** to download as JSON
- The file contains all your code, outputs, and metadata

## Example Workflows

### Basic Data Exploration
```python
# Load data first using the UI
print(f"Dataset shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
print(f"\nFirst 5 rows:")
print(df.head())
print(f"\nStatistics:")
print(df.describe())
```

### Data Visualization
```python
import matplotlib.pyplot as plt
import numpy as np

# Create multiple plots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1: Bar chart
df.groupby('category')['value'].mean().plot(kind='bar', ax=axes[0, 0])
axes[0, 0].set_title('Average Value by Category')

# Plot 2: Histogram
df['value'].plot(kind='hist', bins=20, ax=axes[0, 1])
axes[0, 1].set_title('Value Distribution')

# Plot 3: Line plot
df.plot(x='date', y='value', ax=axes[1, 0])
axes[1, 0].set_title('Value Over Time')

# Plot 4: Scatter plot
df.plot(kind='scatter', x='column1', y='column2', ax=axes[1, 1])
axes[1, 1].set_title('Correlation Plot')

plt.tight_layout()
plt.show()
```

### Simple Machine Learning
```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Prepare data (example)
X = df[['feature1', 'feature2']].values
y = df['target'].values

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Model Performance:")
print(f"Mean Squared Error: {mse:.2f}")
print(f"R² Score: {r2:.2f}")
print(f"\nCoefficients: {model.coef_}")
print(f"Intercept: {model.intercept_:.2f}")
```

## Security & Privacy

### Data Protection
- Only 20 rows per table are exposed
- Data is read-only (no write operations possible)
- CSV files are completely blocked
- All operations are isolated from production databases

### Code Execution
- Python code runs in a controlled server environment
- No access to file system or network operations
- Standard data science libraries only

## API Endpoints

### Backend Routes (for developers)

1. **GET /api/notebook/tables**
   - Returns available tables from PostgreSQL and MongoDB
   - Requires researcher authentication

2. **POST /api/notebook/sample-data**
   - Fetches 20-row sample from specified table
   - Body: `{"database": "PostgreSQL", "table": "table_name"}`

3. **POST /api/notebook/execute**
   - Executes Python code and returns output
   - Body: `{"code": "print('Hello')"}`
   - Returns text output and matplotlib figures as base64

## Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Run current cell
- **Ctrl/Cmd + B**: Add new cell

## Troubleshooting

### Issue: "Module not found" error
**Solution**: The required library might not be installed. Contact the administrator.

### Issue: "Access denied" when loading data
**Solution**: Make sure you're logged in as a Researcher.

### Issue: CSV data shows "not accessible"
**Solution**: This is intentional. CSV files are restricted to protect data provider privacy.

### Issue: Code runs but shows no output
**Solution**: Make sure to use `print()` statements to display results. Matplotlib plots will appear automatically.

## File Structure

```
frontend/
  ├── feip-notebook.html    # Notebook UI
  └── feip-notebook.js      # Notebook logic

backend/
  ├── app.py                # API endpoints (lines ~1220-1450)
  └── requirements.txt      # Added pandas, numpy, matplotlib, scikit-learn
```

## Future Enhancements

Potential improvements:
- Support for more ML libraries (TensorFlow, PyTorch)
- Collaborative notebooks (multiple users)
- Version control for notebooks
- Export to actual Jupyter .ipynb format
- Cell execution history
- Variable inspector panel

## Notes

- This feature is **researcher-only**
- Sample data is cached for performance
- Large datasets are automatically truncated to 20 rows
- All datetime objects are serialized to ISO format for JSON compatibility

---

**Developed for**: Federated Environmental Intelligence Platform (FEIP)
**Version**: 1.0
**Last Updated**: January 2026
