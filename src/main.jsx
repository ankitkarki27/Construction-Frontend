import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './components/backend/context/Auth.jsx'
// import './assets/css/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
   
  </StrictMode>,
)
