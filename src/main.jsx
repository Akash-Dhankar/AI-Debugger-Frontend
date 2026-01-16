import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import {AuthProvider} from "./context/AuthContext.jsx"
import { HistoryProvider } from "./context/HistoryContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HistoryProvider>
          <App />
        </HistoryProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
