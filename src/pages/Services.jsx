import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Box, Container, Typography } from '@mui/material';

const Services = ({ services }) => {
  return (
    <Container
      component="section"
      id="/services"
      aria-labelledby="services-heading"
      maxWidth="xl"
      sx={{ py: 4 }}
    >
      <Typography id="services-heading" variant="h4" component="h2" align="center" gutterBottom>
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
