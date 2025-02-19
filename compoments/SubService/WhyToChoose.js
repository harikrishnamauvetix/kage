import React from "react";
import { Card, CardContent, Stack, Typography,Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
const WhyToChoose = ({ whytochoose }) => {
  return (
    <Stack sx={{margin:"10px 0"}}>
      <Container>
        {whytochoose && (
          <>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Typography variant="h6" sx={{ color: "secondary.main" }}>
                  {whytochoose.heading}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent={"center"}>
              {whytochoose.list?.map((item, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 12,
                    sm: 12,
                    md: whytochoose.list.length === 4 ? 6 : 4,
                  }}
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
      </Container>
    </Stack>
  );
};

export default WhyToChoose;
