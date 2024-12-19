import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Grid } from '@mui/material';

export default function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, id, department, phoneNumber });
  };

  return (
    <div>
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'background.paper',
          padding: 2,
          boxShadow: 3,
          zIndex: 10,
          width: '100%',
        }}
      >
        <Container>
          <Typography variant="h6">Book an Appointment</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                  type="tel"
                  required
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </div>
  );
}
