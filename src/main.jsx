import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import { CoursesProvider } from './Context/CoursesContext.jsx';
import './index.css';

const lightTheme = createTheme({
  typography: { fontFamily: ["Quicksand", "sans-serif"].join(",") },
  palette: {
    mode: "light",
    primary: { main: "#0A5EB0" },
    secondary: { main: "#e96581ff" },
    background: { default: "#f5f5f5", paper: "#fff" },
    text: { primary: "#000", secondary: "#555" },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <AuthProvider>
          <CoursesProvider>
            <App />
          </CoursesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
