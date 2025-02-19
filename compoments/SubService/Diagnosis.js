
import React from "react";
import { Grid, Typography, Box ,Stack} from "@mui/material";

const Diagnosis = ({ diagnosis, introduction }) => {
  return (
    diagnosis && (
      <Stack sx={{margin:"10px 0"}}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            {diagnosis.heading}
          </Typography>
          <Typography variant="body1" sx={{textAlign:"justify"}}>{introduction?.description}</Typography>
        </Grid>
        
      </Grid>
      </Stack>
    )
  );
};

export default Diagnosis;
