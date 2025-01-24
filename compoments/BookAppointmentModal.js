import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import websiteJson from "../public/website.json";
const BookAppointmentModal = ({ open, handleClose }) => {
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
    console.log("Appointment Data:", formData);

    // Add API logic here if needed

    handleClose(); // Close the modal after submission
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          borderRadius: "10px",
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Book an Appointment
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              required
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="doctor-label">Select Doctor</InputLabel>
              <Select
                labelId="doctor-label"
                id="doctor-select"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                label="Select Doctor"
                required
              >
                {websiteJson.doctorsList.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.name}>
                    {doctor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              required
            />
          </FormControl>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default BookAppointmentModal;
