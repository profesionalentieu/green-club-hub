
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import LoginForm from './components/auth/LoginForm';
import Panel from './pages/Panel';
import Miembros from './pages/Miembros';
import Deportes from './pages/Deportes';
import Planes from './pages/Planes';
import Eventos from './pages/Eventos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/miembros" element={<Miembros />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
