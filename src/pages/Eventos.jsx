
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import MainLayout from '../components/layout/MainLayout';

const mockEvents = [
  {
    id: 1,
    title: 'Torneo de Tenis',
    date: '15 de Junio, 2024',
    time: '09:00 AM',
    status: 'Próximo',
  },
  {
    id: 2,
    title: 'Competencia de Natación',
    date: '22 de Junio, 2024',
    time: '10:00 AM',
    status: 'Próximo',
  },
  {
    id: 3,
    title: 'Clase Magistral de Yoga',
    date: '28 de Junio, 2024',
    time: '07:00 PM',
    status: 'Próximo',
  },
];

const EventCard = ({ event }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {event.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
            {event.date}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {event.time}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Chip 
            label={event.status}
            color="primary"
            size="small"
            sx={{ mb: 2 }}
          />
          <Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#4ade80',
                '&:hover': {
                  backgroundColor: '#22c55e',
                },
              }}
            >
              Inscribirse
            </Button>
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Eventos = () => {
  return (
    <MainLayout title="Eventos">
      <Typography variant="h4" sx={{ mb: 4 }}>
        Próximos Eventos
      </Typography>

      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </MainLayout>
  );
};

export default Eventos;
