// components/SubService/Diagnosis.js
import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Diagnosis = ({ diagnosis, introduction }) => {
  return (
    diagnosis && (
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
            {diagnosis.heading}
          </Typography>
          <Typography variant="body1">{introduction?.description}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={introduction?.image || "https://via.placeholder.com/300"}
            alt="Introduction Image"
            width="100%"
          />
        </Grid>
      </Grid>
    )
  );
};

export default Diagnosis;
