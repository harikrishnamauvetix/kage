import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{ py: 5, px: 3, position: "relative", }}
    >
      {/* Background Shades */}

      <Grid container spacing={3} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              background: "#E1BEE7",
            }}
          >
            <img
              src="https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg" // Replace with the actual image URL
              alt="KIMS Hospital"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "secondary.main",
              mb: 2,
              position: "relative",
              // "&::after": {
              //   content: '""',
              //   display: "block",
              //   width: "50px",
              //   height: "2px",
              //   backgroundColor: "#9C27B0",
              //   marginTop: "8px",
              // },
            }}
          >
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#555" }}>
            Bringing a new life into existence is one of the most precious
            moments of any parent’s life. At KIMS Cuddles, we strive to make
            those precious moments of a mother even more memorable and
            cherishing. Our expert team of gynecologists, pediatricians,
            surgeons, obstetricians, etc., not only understand what these
            moments mean to the parents, but also make every possible effort to
            make this new journey even more healthy and happy.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Whether you want to be a mother or soon going to be a mother or
            already a mother, our team is here to provide you with the best care
            and guidance.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
