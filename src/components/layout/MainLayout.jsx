
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import Sidebar from './Sidebar';

const MainLayout = ({ children, title = 'Panel' }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f8fafc',
          minHeight: '100vh',
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: '#1a4d3a',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              {title}
            </Typography>
            <Avatar sx={{ width: 40, height: 40, backgroundColor: '#4ade80' }}>
              SR
            </Avatar>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 4 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
