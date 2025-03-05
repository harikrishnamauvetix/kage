
import React, { useState,useContext } from "react";
import { Grid, Typography, Box ,Stack} from "@mui/material";

const ServiceInfo = ({ serviceInfo }) => {
  return (
    <Stack sx={{margin:"10px 0"}}>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ color: "secondary.main" }}>
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
    </Stack>
  );
};

export default ServiceInfo;
