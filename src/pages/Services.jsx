import React from 'react';
import ServiceCard from '../components/ServiceCard';
import{  Box
} from '@mui/material'
const Services = ({ services }) => {
  return (
    <Box spacing={2} style={{ display: "flex", flexWrap: "wrap" }}>
      {services.map((service, index) => (
        <ServiceCard
          service={service}
        />
      ))}
    </Box>
  );
}

export default Services;
