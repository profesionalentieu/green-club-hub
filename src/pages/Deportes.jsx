
import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import MainLayout from '../components/layout/MainLayout';

const mockSports = [
  { 
    id: 1, 
    name: 'Tenis', 
    description: 'Participa en nuestro programa de tenis y mejora tus habilidades con entrenamiento experto y sesiones de práctica regulares.',
    enrolled: true 
  },
  { 
    id: 2, 
    name: 'Natación', 
    description: 'Sumérgete en nuestro programa de natación, adecuado para todos los niveles, desde principiantes hasta nadadores avanzados.',
    enrolled: false 
  },
  { 
    id: 3, 
    name: 'Baloncesto', 
    description: 'Participa en nuestro equipo de baloncesto y participa en partidos competitivos y sesiones de entrenamiento.',
    enrolled: true 
  },
  { 
    id: 4, 
    name: 'Yoga', 
    description: 'Mejora tu flexibilidad y atención plena con nuestras clases de yoga, adecuadas para todos los niveles de condición física.',
    enrolled: false 
  },
];

const SportCard = ({ sport, onToggleEnrollment }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">
          {sport.name}
        </Typography>
        <Chip 
          label={sport.enrolled ? 'Inscrito' : 'Disponible'}
          color={sport.enrolled ? 'success' : 'default'}
          size="small"
        />
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        {sport.description}
      </Typography>
      <Button
        variant={sport.enrolled ? 'outlined' : 'contained'}
        color={sport.enrolled ? 'error' : 'primary'}
        onClick={() => onToggleEnrollment(sport.id)}
        sx={{
          backgroundColor: sport.enrolled ? 'transparent' : '#4ade80',
          '&:hover': {
            backgroundColor: sport.enrolled ? 'transparent' : '#22c55e',
          },
        }}
      >
        {sport.enrolled ? 'Cancelar Inscripción' : 'Inscribirse'}
      </Button>
    </CardContent>
  </Card>
);

const Deportes = () => {
  const [sports, setSports] = useState(mockSports);

  const handleToggleEnrollment = (sportId) => {
    setSports(prevSports =>
      prevSports.map(sport =>
        sport.id === sportId
          ? { ...sport, enrolled: !sport.enrolled }
          : sport
      )
    );
  };

  const enrolledSports = sports.filter(sport => sport.enrolled);

  return (
    <MainLayout title="Mis Deportes">
      <Typography variant="h4" sx={{ mb: 1 }}>
        Mis Deportes
      </Typography>

      {enrolledSports.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Deportes Activos
          </Typography>
          <Grid container spacing={3}>
            {enrolledSports.map((sport) => (
              <Grid item xs={12} md={6} lg={4} key={sport.id}>
                <SportCard 
                  sport={sport} 
                  onToggleEnrollment={handleToggleEnrollment}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Typography variant="h5" sx={{ mb: 3 }}>
        Deportes Disponibles
      </Typography>
      <Grid container spacing={3}>
        {sports.map((sport) => (
          <Grid item xs={12} md={6} lg={4} key={sport.id}>
            <SportCard 
              sport={sport} 
              onToggleEnrollment={handleToggleEnrollment}
            />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Deportes;
