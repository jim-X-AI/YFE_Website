import os

# Backend requirements
REQUIREMENTS_TXT = '''flask
flask-cors
'''

# Frontend package.json
PACKAGE_JSON = '''{
  "name": "community-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.266.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.21",
    "autoprefixer": "^10.4.13"
  }
}
'''

# Vite config
VITE_CONFIG = '''import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
'''

# Tailwind config
TAILWIND_CONFIG = '''/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./main.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
'''

# PostCSS config
POSTCSS_CONFIG = '''export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
'''

# HTML entry
INDEX_HTML = '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Visionary Community</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>
'''

# Entry point for React
MAIN_JSX = '''import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
'''

# Tailwind base styles
INDEX_CSS = '''@tailwind base;
@tailwind components;
@tailwind utilities;
'''

# === File Creation Utility ===
def create_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Created: {path}")

# === Main Setup ===
def main():
    os.makedirs("backend", exist_ok=True)
    os.makedirs("frontend", exist_ok=True)

    create_file("backend/requirements.txt", REQUIREMENTS_TXT)
    create_file("frontend/package.json", PACKAGE_JSON)
    create_file("frontend/vite.config.js", VITE_CONFIG)
    create_file("frontend/tailwind.config.js", TAILWIND_CONFIG)
    create_file("frontend/postcss.config.js", POSTCSS_CONFIG)
    create_file("frontend/index.html", INDEX_HTML)
    create_file("frontend/main.jsx", MAIN_JSX)
    create_file("frontend/index.css", INDEX_CSS)

    print("\n🎉 All setup files generated. Next steps below:")

    print("""
➡️ 1. Paste your App.jsx file into frontend/App.jsx
➡️ 2. Initialize frontend:
   cd frontend
   npm install
   npx tailwindcss init -p   # Just to confirm tailwind setup
   npm run dev

➡️ 3. Initialize backend:
   cd backend
   python -m venv venv
   venv\\Scripts\\activate  (or source venv/bin/activate)
   pip install -r requirements.txt
   python app.py
""")

if __name__ == '__main__':
    main()
