import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import TestimonialCard from '../components/TestimonialCard';

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
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
