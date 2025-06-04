
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import MainLayout from '../components/layout/MainLayout';

const StatCard = ({ title, value, change, changeColor = '#4ade80' }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
        {title}
      </Typography>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 600 }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ color: changeColor, fontWeight: 500 }}>
        {change}
      </Typography>
    </CardContent>
  </Card>
);

const Panel = () => {
  return (
    <MainLayout title="Panel">
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Bienvenida de nuevo, Sofía Rodríguez
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Miembros Totales"
            value="250"
            change="+10%"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Miembros Activos"
            value="200"
            change="+5%"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Próximos Eventos"
            value="5"
            change="+2"
          />
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Estado de los Miembros
          </Typography>
          <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Aquí irá el gráfico de estado de miembros
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Panel;
