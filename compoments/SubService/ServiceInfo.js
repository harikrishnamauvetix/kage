// components/SubService/ServiceInfo.js
import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const ServiceInfo = ({ serviceInfo }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
          {serviceInfo?.heading}
        </Typography>
        <Typography variant="body1">{serviceInfo?.description}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={serviceInfo?.image || "https://via.placeholder.com/300"}
          alt="Service Info Image"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default ServiceInfo;
