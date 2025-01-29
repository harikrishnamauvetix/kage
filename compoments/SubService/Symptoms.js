import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Grid from "@mui/material/Grid2";
const Symptoms = ({ symptoms }) => {
  return (
    symptoms && (
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{ margin: "10px 0", color: "secondary.main" }}
          >
            {symptoms.heading}
          </Typography>
        </Grid>
        <Grid container>
          {symptoms.list.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
              <List >
                <ListItem disableGutters>
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
                    <HealthAndSafetyIcon className="p0" />
                  )}
          
                  </ListItemIcon>
                  <ListItemText
                    className="p0"
                    primary={item.heading}
                    secondary={item.description}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  );
};

export default Symptoms;
