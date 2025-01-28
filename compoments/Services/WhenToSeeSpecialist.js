import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid2";
function WhenToSeeSpecialist({ whenToSee }) {
  if (!whenToSee || !whenToSee.heading || !whenToSee.list?.length) {
    return null;
  }

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ margin: "10px 0", color: "secondary.main" }}
      >
        {whenToSee.heading}
      </Typography>
      <Grid container spacing={2}>
        {whenToSee.list.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 12}} key={index}>
            <List sx={{ padding: "0" }}>
              <ListItem sx={{ padding: "0" }}>
                <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
                  <ArrowForwardIosIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ padding: "0" }} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhenToSeeSpecialist;
