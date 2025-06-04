
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Box,
} from '@mui/material';
import MainLayout from '../components/layout/MainLayout';

const mockMembers = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', status: 'Activo', plan: 'Premium' },
  { id: 2, name: 'María García', email: 'maria@email.com', status: 'Activo', plan: 'Básico' },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', status: 'Inactivo', plan: 'Elite' },
];

const Miembros = () => {
  const [members] = useState(mockMembers);

  const getStatusColor = (status) => {
    return status === 'Activo' ? 'success' : 'default';
  };

  return (
    <MainLayout title="Miembros">
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">
          Gestión de Miembros
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#4ade80', '&:hover': { backgroundColor: '#22c55e' } }}>
          Agregar Miembro
        </Button>
      </Box>

      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Plan</strong></TableCell>
                  <TableCell><strong>Estado</strong></TableCell>
                  <TableCell><strong>Acciones</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.plan}</TableCell>
                    <TableCell>
                      <Chip 
                        label={member.status}
                        color={getStatusColor(member.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="small" sx={{ mr: 1 }}>
                        Editar
                      </Button>
                      <Button size="small" color="error">
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Miembros;
