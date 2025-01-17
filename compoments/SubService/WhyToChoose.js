// components/SubService/WhyToChoose.js
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const WhyToChoose = ({ list }) => {
  return (
    <Grid container spacing={2} sx={{ margin: "30px 0" }}>
      {list.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} spacing={2}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150"
              alt={item.heading}
            />
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
    </Grid>
  );
};

export default WhyToChoose;
