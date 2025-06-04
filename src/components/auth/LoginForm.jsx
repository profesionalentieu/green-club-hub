
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    memberId: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos login exitoso
    console.log('Login attempt:', credentials);
    navigate('/panel');
  };

  const handleChange = (field) => (e) => {
    setCredentials(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            Club Manager
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            Bienvenido de nuevo
          </Typography>
        </Box>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="ID de miembro"
                placeholder="ID de miembro"
                value={credentials.memberId}
                onChange={handleChange('memberId')}
                sx={{ mb: 3 }}
                required
              />
              
              <TextField
                fullWidth
                type="password"
                label="Contraseña"
                placeholder="Contraseña"
                value={credentials.password}
                onChange={handleChange('password')}
                sx={{ mb: 2 }}
                required
              />
              
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </Box>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mb: 3,
                  py: 1.5,
                  backgroundColor: '#4ade80',
                  '&:hover': {
                    backgroundColor: '#22c55e',
                  },
                }}
              >
                Iniciar sesión
              </Button>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  ¿No tienes una cuenta?{' '}
                  <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Regístrate
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginForm;
