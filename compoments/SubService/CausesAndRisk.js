// components/SubService/CausesAndRisk.js
import React from "react";
import { Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const CausesAndRisk = ({ causesAndRisk }) => {
  return (
    causesAndRisk && (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
            {causesAndRisk.heading}
          </Typography>
        </Grid>
        {causesAndRisk.list.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <List className="p0">
              <ListItem className="p0">
                <ListItemIcon sx={{ padding: "0px !important", minWidth: "30px" }}>
                  <HealthAndSafetyIcon className="p0" />
                </ListItemIcon>
                <ListItemText className="p0" primary={item.heading} secondary={item.description} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default CausesAndRisk;
