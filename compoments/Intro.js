import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import websiteJson from "../public/website.json";
const Intro = () => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Column layout for small screens, row for larger screens
      alignItems: "center",
      justifyContent: "space-between",
  
      padding: 4,
      borderRadius: 2,
      gap: 4,
    }}
  >
    {/* Left Section (Images) */}
    <Box
      sx={{
        flexBasis: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, // Single column on small screens, two columns on larger
        gap: 2,
      }}
    >
      {websiteJson.introimages.map((slide, index) => (
        <Box
          key={index}
          component="img"
          src={slide.image} // Dynamically use the image source from the `slide` object
          alt={slide.alt || `Slide ${index + 1}`} // Provide a fallback for the alt text
          sx={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  
    {/* Right Section (Content) */}
    <Box
      sx={{
        flexBasis: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
        textAlign: { xs: "center", md: "left" }, // Centered text on small screens
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "secondary.main" }}>
      IBD clinic Intro
      </Typography>
      <Typography
        sx={{
          color: "#555",
          margin: "16px 0",
        }}
      >
        We take pride in offering a wide range of best-in-class medical services
        and popular treatments to cater to your diverse healthcare needs.
      </Typography>
      <Box sx={{ color: "#1e1e1e", marginBottom: 2 }}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          ✔ Mental Health Solutions
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          ✔ Rapid Patient Improvement
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          ✔ World-Class Treatment
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary.main"
        sx={{
          textTransform: "none",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "primary.main",
            color:"#fff",
          },
        }}
      >
        Read More ➔
      </Button>
    </Box>
  </Box>
  
  );
};

export default Intro;
