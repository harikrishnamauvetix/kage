
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const WhyToChoose = ({ whytochoose }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ margin: "30px 0" }}>
      {whytochoose && (
        <>
          <Grid  size={{ xs: 12, sm: 12, md: 12 }}className="p0">
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {whytochoose.heading}
            </Typography>
          </Grid>
          {whytochoose.list?.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index} spacing={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ color: "primary.main",}}>
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default WhyToChoose;
