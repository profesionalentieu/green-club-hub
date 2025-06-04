import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import MainLayout from '../components/layout/MainLayout';

const Miembros = () => {
  return (
    <MainLayout title="Gestión de Miembros">
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Lista de Miembros</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ backgroundColor: '#4ade80', '&:hover': { backgroundColor: '#22c55e' } }}
        >
          Nuevo Miembro
        </Button>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Aquí se mostrará la tabla de miembros con funcionalidades de búsqueda, filtrado y gestión...
          </Typography>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Miembros;
