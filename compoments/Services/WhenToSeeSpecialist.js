import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
function WhenToSeeSpecialist({ whenToSee }) {
  if (!whenToSee || !whenToSee.heading || !whenToSee.list?.length) {
    return null;
  }

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ margin: "10px 0", color: "secondary.main" }}
      >
        {whenToSee.heading}
      </Typography>
      <Grid container spacing={2}>
        <List disablePadding>
          {whenToSee.list.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 12 }} key={index}>
              <ListItem disablePadding>
                <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
                  <CheckCircleIcon
                    sx={{
                      color: "primary.main",
                      fontSize: 20,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            </Grid>
          ))}
        </List>
      </Grid>
    </Box>
  );
}

export default WhenToSeeSpecialist;
