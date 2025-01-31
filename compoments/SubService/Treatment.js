
import React from "react";
import {  Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid2";
const Treatment = ({ treatment }) => {
  return (
    treatment && (
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}className="p0">
          <Typography variant="h5" sx={{ margin: "10px 0", color: "secondary.main" }}>
            {treatment.heading}
          </Typography>
        </Grid>
        <Grid container>
          {treatment.list.map((item, index) => (
            <Grid ize={{ xs: 12, sm: 12, md: 6 }} key={index} className="p0">
              <List className="p0">
                <ListItem className="p0">
                  <ListItemIcon
                    sx={{ marginRight: "10px", minWidth: "30px" }}
                  >
                     {item?.icon ? (
                    <img
                      src={item.icon}
                      alt="Hospital Icon"
                      width="40"
                      height="40"
                      style={{
                        borderRadius: "50%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <ArrowForwardIosIcon className="p0" />
                  )}
          
                  </ListItemIcon>
                  <ListItemText className="p0" primary={item.heading} secondary={item.description} />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  );
};

export default Treatment;
