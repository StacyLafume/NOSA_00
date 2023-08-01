import React from 'react';
import ServiceCard from '../components/ServiceCard';
import{  Box
} from '@mui/material'
const Services = ({ services }) => {
  return (
    <Box id="/services" spacing={2} style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>Services</h1>
      {services.map((service, index) => (
        <ServiceCard
          service={service}
        />
      ))}
    </Box>
  );
}

export default Services;
