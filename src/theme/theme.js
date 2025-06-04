
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a4d3a', // Verde oscuro
      light: '#2d6b4f',
      dark: '#0f2e23',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4ade80', // Verde claro/accent
      light: '#86efac',
      dark: '#22c55e',
      contrastText: '#000000',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a4d3a',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#1a4d3a',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1a4d3a',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1a4d3a',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1a4d3a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 4px rgba(26, 77, 58, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(26, 77, 58, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});
