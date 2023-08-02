import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Box, Container, Typography } from '@mui/material';

const Services = ({ services }) => {
  return (
    <Container id="/services" maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Services
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Box>
    </Container>
  );
}

export default Services;
