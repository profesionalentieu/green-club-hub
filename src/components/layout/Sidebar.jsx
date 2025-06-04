
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import {
  Dashboard,
  People,
  Event,
  Settings,
  SportsTennis,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const menuItems = [
  { text: 'Panel', icon: <Dashboard />, path: '/panel' },
  { text: 'Miembros', icon: <People />, path: '/miembros' },
  { text: 'Deportes', icon: <SportsTennis />, path: '/deportes' },
  { text: 'Eventos', icon: <Event />, path: '/eventos' },
  { text: 'Ajustes', icon: <Settings />, path: '/ajustes' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a4d3a',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            mx: 'auto',
            mb: 2,
            backgroundColor: '#4ade80',
          }}
        >
          SR
        </Avatar>
        <Typography variant="h6" sx={{ color: 'white', mb: 0.5 }}>
          Sofía Rodríguez
        </Typography>
        <Typography variant="body2" sx={{ color: '#86efac' }}>
          Administradora del Club
        </Typography>
      </Box>
      
      <Divider sx={{ borderColor: '#2d6b4f' }} />
      
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                mx: 1,
                borderRadius: 2,
                backgroundColor: location.pathname === item.path ? '#2d6b4f' : 'transparent',
                '&:hover': {
                  backgroundColor: '#2d6b4f',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
