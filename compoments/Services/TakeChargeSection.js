import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import BookAppointmentModal from "../BookAppointmentModal";

function TakeChargeSection({ takeCharge }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  if (!takeCharge || !takeCharge.heading || !takeCharge.description) {
    return null;
  }

  return (
    <Box sx={{ margin: "20px 0" }}>
      <Stack>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          {takeCharge.heading}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }} paragraph>
          {takeCharge.description}
        </Typography>
        {takeCharge.action && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ margin: "10px auto", display: "flex" }}
          >
            {takeCharge.action}
          </Button>
        )}
      </Stack>
      <BookAppointmentModal open={isModalOpen} handleClose={handleClose} />
    </Box>
  );
}

export default TakeChargeSection;
