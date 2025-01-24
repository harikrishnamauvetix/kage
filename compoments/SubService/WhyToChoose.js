
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const WhyToChoose = ({ whytochoose }) => {
  return (
    <Grid container spacing={2} sx={{ margin: "30px 0" }}>
      {whytochoose && (
        <>
          <Grid item xs={12} className="p0">
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {whytochoose.heading}
            </Typography>
          </Grid>
          {whytochoose.list?.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} spacing={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
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
