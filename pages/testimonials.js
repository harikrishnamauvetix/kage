import React from 'react';
import { Container, Typography, Grid } from '@mui/material';


const Testimonials = () => {
  const testimonials = [
    { id: 1, doctor: 'Dr. Smith', condition: 'IBD', text: 'Great experience!' },
    { id: 2, doctor: 'Dr. Jane', condition: 'Surgery', text: 'Excellent care!' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Testimonials
      </Typography>
      <Grid container spacing={3}>
      <p>test</p>
      </Grid>
    </Container>
  );
};

export default Testimonials;
