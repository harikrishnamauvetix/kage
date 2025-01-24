
import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Diagnosis = ({ diagnosis, introduction }) => {
  return (
    diagnosis && (
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
            {diagnosis.heading}
          </Typography>
          <Typography variant="body1" sx={{textAlign:"justify"}}>{introduction?.description}</Typography>
        </Grid>
        
      </Grid>
    )
  );
};

export default Diagnosis;
