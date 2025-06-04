
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { People, Event, SportsTennis, TrendingUp } from '@mui/icons-material';
import MainLayout from '../components/layout/MainLayout';

const Panel = () => {
  const stats = [
    { title: 'Miembros Activos', value: '1,247', icon: <People />, color: '#4ade80' },
    { title: 'Eventos este Mes', value: '28', icon: <Event />, color: '#1a4d3a' },
    { title: 'Deportes Disponibles', value: '12', icon: <SportsTennis />, color: '#4ade80' },
    { title: 'Ingresos Mensuales', value: '$45,230', icon: <TrendingUp />, color: '#1a4d3a' },
  ];

  return (
    <MainLayout title="Panel de Control">
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: stat.color,
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: stat.color }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Actividad Reciente
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aquí se mostrará la actividad reciente del club...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Próximos Eventos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lista de próximos eventos...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Panel;
