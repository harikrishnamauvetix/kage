import React from "react";
import { Typography, Card, CardContent, Container, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Grid from "@mui/material/Grid2";
function WhyChooseSection({ whyChoose }) {
  if (!whyChoose?.heading) {
    return null;
  }

  return (
   <Stack sx={{margin:"10px 0"}}>
     <Grid container>
      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
        {/* Heading */}
        <Typography
          variant="h6"
          sx={{  color: "secondary.main" }}
        >
          {whyChoose.heading}
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent={"center"}>
        {whyChoose?.steps?.length > 0
          ? whyChoose.steps.map((step, index) => (
              <Grid  size={{ xs: 12, sm: 6, md:6, lg: whyChoose.steps.length === 4 ? 6 : 4 }} key={index}>
                {/* Use item instead of size */}
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : whyChoose?.description && (
              <Typography
                variant="body1"
                sx={{ textAlign: "justify" }}
                paragraph
              >
                {whyChoose.description}
              </Typography>
            )}
      </Grid>
    </Grid>
   </Stack>
  );
}

export default WhyChooseSection;
