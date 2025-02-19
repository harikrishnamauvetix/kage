import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
import { CheckCircleRounded } from "@mui/icons-material";
const Treatment = ({ treatment }) => {
  return (
    treatment && (
      <Stack sx={{ margin: "10px 0" }}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12 }} className="p0">
            <Typography variant="h6" sx={{ color: "secondary.main" }}>
              {treatment.heading}
            </Typography>
          </Grid>
          <Grid container>
            {treatment.list.map((item, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemIcon  sx={{color:"primary.main" ,minWidth:"30px"}}>
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
                        <CheckCircleRounded  />
                      )}
                    </ListItemIcon>
                    <ListItemText 
                    
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

export default Treatment;
