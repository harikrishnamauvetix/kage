import React from "react";
import { Box, Typography, Button } from "@mui/material";

function TakeChargeSection({ takeCharge }) {
  if (!takeCharge || !takeCharge.heading || !takeCharge.description) {
    return null;
  }

  return (
    <Box sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
        {takeCharge.heading}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }} paragraph>
        {takeCharge.description}
      </Typography>
      {takeCharge.action && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Consultation Scheduled")}
        >
          {takeCharge.action}
        </Button>
      )}
    </Box>
  );
}

export default TakeChargeSection;
