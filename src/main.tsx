import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { ThemeContextProvider } from './context/ThemeContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
)
