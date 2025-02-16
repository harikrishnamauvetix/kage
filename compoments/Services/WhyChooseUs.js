import React from "react";
import { Typography, Card, CardContent, Box } from "@mui/material";

import Grid from "@mui/material/Grid2";
function WhyChooseSection({ whyChoose }) {
  if (!whyChoose?.heading )  {
    return null;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          {/* Heading */}
          <Typography
            variant="h5"
            sx={{ margin: "10px 0", color: "secondary.main" }}
          >
            {whyChoose.heading}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {whyChoose?.steps?.length > 0
              ? whyChoose.steps.map((step, index) => (
                  <Grid  size={{ xs: 12, sm: 12, md: 4 }} key={index}>
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
      </Grid>
    </Box>
  );
}

export default WhyChooseSection;
