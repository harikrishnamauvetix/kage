import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Grid2,
} from "@mui/material";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, id, department, phoneNumber });
  };

  return (
    <div>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "background.paper",
          padding: 2,
          boxShadow: 3,
          zIndex: 10,
          width: "100%",
        }}
      >
        <Container>
          <Typography variant="h6">Book an Appointment</Typography>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  defaultValue="Small"
                   size="small"
                  required
                />
              </Grid2>
              <Grid2 item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  type="email"
                  defaultValue="Small"
                   size="small"
                  required
                />
              </Grid2>
              
              <Grid2 item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  margin="normal"
                  defaultValue="Small"
                   size="small"
                  required
                />
              </Grid2>
              <Grid2 item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                  type="tel"
                  defaultValue="Small"
                   size="small"
                  required
                />
              </Grid2>
              <Grid2 item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                mt:2
                  }}
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Container>
      </Box>
    </div>
  );
}
