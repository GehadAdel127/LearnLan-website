import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';



// material ui imports
import { createTheme } from '@mui/material/styles';
import { AuthProvider } from './Context/AuthContext.jsx';
const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"]
  },
  palette: {
    primary: {
      main: "#0A5EB0"
    },
    secondary: {
      main: "#e96581ff"
    },
    background: {
      main: "#0a5db027"
    },
    background2: {
      main: "#A6F1E0"
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
