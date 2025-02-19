import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const WhyToChoose = ({ whytochoose }) => {
  return (
    <Stack sx={{margin:"0px 0 40px"}}>
      {whytochoose && (
        <>
          <Grid container spacing={2} sx={{ margin: "30px 0" }}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }} className="p0">
              <Typography
                variant="h6"
                sx={{ margin: "10px 0", color: "secondary.main" }}
              >
                {whytochoose.heading}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {whytochoose.list?.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 12, md: whytochoose.list.length === 4 ? 6 : 4 }}
                item
                xs={12}
                sm={12}
               
              >
                <Card>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "primary.main" }}
                    >
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
        </>
      )}
    </Stack>
  );
};

export default WhyToChoose;
