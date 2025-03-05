import React, { useState,useContext } from "react";
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
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext } from '../pages/_app';
const BookAppointmentModal = ({ open, handleClose }) => {
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Book an Appointment
          </Typography>
          <Box>
            <CloseIcon
              onClick={handleClose}
              sx={{
                fontSize: 14,
                marginRight: "5px",
                borderRadius: "20px",
                border: "2px solid #eee",
                fontSize: "22px",
                cursor: "pointer",
                backgroundColor: "primary.main",

                color: "#fff",
              }}
            />
          </Box>
        </Stack>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              size="small"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              size="small"
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
              size="small"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="doctor-label">Select Doctor</InputLabel>
              <Select
                margin="normal"
                labelId="doctor-label"
                id="doctor-select"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                label="Select Doctor"
                required
                size="small"
              >
                {data.doctorsList.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.name} size="small">
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
              size="small"
              required
            />
            <TextField
               fullWidth
                  margin="normal"
              id="outlined-multiline-static"
              label="Write Reasons"
               size="small"
              multiline
              rows={3}
           
            />
          </FormControl>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default BookAppointmentModal;
