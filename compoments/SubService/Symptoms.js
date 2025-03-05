import React, { useState,useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Grid from "@mui/material/Grid2";
const Symptoms = ({ symptoms }) => {
  return (
    symptoms && (
      <Stack sx={{ margin: "10px 0" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "secondary.main" }}>
              {symptoms.heading}
            </Typography>
          </Grid>
          <Grid container>
            {symptoms.list.map((item, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                <List
                  component="ul"
                  disablePadding
                  sx={{
                    listStyleType: "disc !important" ,
                    marginLeft: "30px",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemText
                      className="p0"
                      primary={item.heading}
                      secondary={item.description}
                      primaryTypographyProps={{ sx: { color: "primary.main" } }}
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Stack>
    )
  );
};

export default Symptoms;
