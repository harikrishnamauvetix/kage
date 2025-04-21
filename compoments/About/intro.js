import React, { useState,useContext } from "react";
import { Container, Typography, Box, Paper, Stack } from "@mui/material";

const IntroductionSection = ({ section }) => {
  return (
    <Stack sx={{ marginBottom: 3 }}>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          margin: "10px 0",
          color: "secondary.main",
          textAlign: "left",
        }}
      >
        {section.heading}
      </Typography>
      <div>
        {section?.description?.length > 0 &&
          section.description.map((text, index) => (
            <Typography key={index} variant="body1" sx={{ textAlign:"justify"}}>
              {text}
            </Typography>
          ))}
      </div>
    </Stack>
  );
};

export default IntroductionSection;
