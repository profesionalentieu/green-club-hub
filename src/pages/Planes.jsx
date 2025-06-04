
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import MainLayout from '../components/layout/MainLayout';

const plans = [
  {
    name: 'Básico',
    price: '$10',
    period: '/mes',
    features: [
      'Acceso a instalaciones básicas',
      'Reservas limitadas de clases',
    ],
    buttonText: 'Seleccionar',
  },
  {
    name: 'Premium',
    price: '$20',
    period: '/mes',
    features: [
      'Acceso a todas las instalaciones',
      'Reservas ilimitadas de clases',
      'Plan de entrenamiento personalizado',
    ],
    buttonText: 'Seleccionar',
    recommended: true,
  },
  {
    name: 'Elite',
    price: '$30',
    period: '/mes',
    features: [
      'Acceso a todas las instalaciones',
      'Reservas ilimitadas de clases',
      'Plan de entrenamiento personalizado',
      'Eventos exclusivos',
    ],
    buttonText: 'Seleccionar',
  },
];

const PlanCard = ({ plan }) => (
  <Card 
    sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative',
      border: plan.recommended ? '2px solid #4ade80' : '1px solid #e5e7eb',
    }}
  >
    {plan.recommended && (
      <Chip
        label="Mejor Valor"
        sx={{
          position: 'absolute',
          top: -12,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4ade80',
          color: 'white',
        }}
      />
    )}
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        {plan.name}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="span" sx={{ fontWeight: 600 }}>
          {plan.price}
        </Typography>
        <Typography variant="body1" component="span" sx={{ color: 'text.secondary' }}>
          {plan.period}
        </Typography>
      </Box>
      <List sx={{ mb: 3 }}>
        {plan.features.map((feature, index) => (
          <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Check sx={{ color: '#4ade80', fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText 
              primary={feature}
              primaryTypographyProps={{ fontSize: '0.9rem' }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#4ade80',
          '&:hover': {
            backgroundColor: '#22c55e',
          },
        }}
      >
        {plan.buttonText}
      </Button>
    </CardContent>
  </Card>
);

const Planes = () => {
  return (
    <MainLayout title="Planes">
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Elige tu plan
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PlanCard plan={plan} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            backgroundColor: '#4ade80',
            '&:hover': {
              backgroundColor: '#22c55e',
            },
          }}
        >
          Proceder al Pago
        </Button>
      </Box>
    </MainLayout>
  );
};

export default Planes;
