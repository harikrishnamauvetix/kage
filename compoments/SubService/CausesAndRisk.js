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
const CausesAndRisk = ({ causesAndRisk = {} }) => {
  const { heading, list, description } = causesAndRisk;

  return (
    causesAndRisk && (
      <Grid container >
        {heading && (
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Typography variant="h5" sx={{ color: "secondary.main" }}>
              {heading}
            </Typography>
          </Grid>
        )}
        {list?.map((item, index) => (
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: "30px",marginRight:"10px" }}>
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
                    <HealthAndSafetyIcon />
                  )}
          
                
              </ListItemIcon>
              <ListItemText
                primary={item.heading}
                secondary={item.description}
              />
            </ListItem>
          </List>
        ))}
        {description && (
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {description}
          </Typography>
        )}
      </Grid>
    )
  );
};

export default CausesAndRisk;
