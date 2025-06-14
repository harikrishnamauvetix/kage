import React, { useState, useContext } from "react";
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
  Stack,
} from "@mui/material";
import { DataContext } from "../pages/_app";
export default function AppointmentForm() {
  const data = useContext(DataContext);
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
    <Stack sx={{ marginTop: "50px" }}>
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
            Book an Appointment
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href={`tel:${websiteJson?.hospitalInfo?.kimsPhonenumber?.replace(/[\s-]/g, '')}`}
            sx={{ textAlign: "center", fontSize: "20px", padding: "20px 0" ,  textDecoration: "none" ,display:"block"}}
          >
            For Book Appointment Call Now 
            <Box component="span" sx={{ color: "secondary.main" ,fontSize:"35px",padding:"0px 10px" ,fontWeight: "bold",}}>
              {data?.hospitalInfo?.kimsPhonenumber}
            </Box>
          </Typography>

          {/* <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                  type="tel"
                  size="small"
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 1 }}>
  <FormControl fullWidth margin="normal">
    <InputLabel id="doctor-loc">Select Location</InputLabel>
    <Select
      labelId="doctor-loc"
      id="doctor-loc"
      name="location"
      onChange={handleChange}
      label="Select Location"
      required
      size="small"
    >
      <MenuItem value="secunderabad">Secunderabad</MenuItem>
    
    </Select>
  </FormControl>
</Grid2>


              <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="doctor-select-label" size="small">
                    Select Doctor
                  </InputLabel>
                  <Select
                    id="doctor-select"
                    name="doctor"
                    onChange={handleChange}
                    label="Select Doctor"
                    required
                    size="small"
                  >
                    {data?.doctorsList.map((doctor) => (
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
                  onChange={handleChange}
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 12, md: 1 }}>
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
          </form> */}
        </>
      </Box>
    </Stack>
  );
}
