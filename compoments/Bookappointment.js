import React, { useState } from "react";
import {
  Button,
  TextField,
  Modal,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Grid2,
  Container,
  Stack
} from "@mui/material";
import websiteJson from "../public/website.json";
export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, id, department, phoneNumber, doctor, date });
  };

  return (
    <Stack sx={{ marginTop:"50px"}}>
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
        <>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "secondary.main",
              textAlign: "center",
            }}
          >
         
            Book an Appointment At KAGE
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  size="small"
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <TextField
                  fullWidth
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  type="email"
                  size="small"
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                  type="tel"
                  size="small"
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <FormControl fullWidth margin="normal">
                <InputLabel id="doctor-select-label"  size="small">Select Doctor</InputLabel>
                  <Select
                    id="doctor-select"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    label="Select Doctor"
                    required
                    size="small"
                  >
                    {websiteJson.doctorsList.map((doctor) => (
                      <MenuItem key={doctor.id} value={doctor.name}>
                        {doctor.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    mt: 2,
                  }}
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </>
      </Box>
    </Stack>
  );
}
