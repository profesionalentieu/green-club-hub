
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import MainLayout from '../components/layout/MainLayout';

const Planes = () => {
  return (
    <MainLayout title="Planes de Membresía">
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Planes Disponibles</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ backgroundColor: '#4ade80', '&:hover': { backgroundColor: '#22c55e' } }}
        >
          Nuevo Plan
        </Button>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Aquí se mostrará la gestión de planes de membresía, precios y beneficios...
          </Typography>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Planes;
