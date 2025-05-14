# PowerShell script to install dependencies for SV Marines project

Write-Host "Installing dependencies for SV Marines project..." -ForegroundColor Green

# Install core dependencies
npm install next react react-dom

# Install dev dependencies
npm install -D typescript @types/react @types/react-dom @types/node eslint

# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS if not already done
if (-not (Test-Path "tailwind.config.js")) {
    npx tailwindcss init -p
}

Write-Host "Dependencies installed successfully!" -ForegroundColor Green
Write-Host "You can now run 'npm run dev' to start the development server." -ForegroundColor Yellow 