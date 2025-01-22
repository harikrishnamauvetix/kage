import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const IntroductionSection = ({ section }) => {
  return (
    <Paper sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {section.heading}
      </Typography>
      <div>
        {section?.description?.length > 0 &&
          section.description.map((text, index) => (
            <Typography key={index} variant="body1" sx={{ marginBottom: 1 }}>
              {text}
            </Typography>
          ))}
      </div>
    </Paper>
  );
};

export default IntroductionSection;
