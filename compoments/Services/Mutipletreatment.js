import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
const Mutipletreatment = ({ treatmentContent }) => {
  return (
    treatmentContent && (
      <Grid container>
        <Grid size={{ xs: 12 }} className="p0">
          <Typography
            variant="h6"
            sx={{ color: "secondary.main" }}
          >
            {treatmentContent.heading}
          </Typography>
        </Grid>

        <Grid container>
          {treatmentContent.treatments_list.map((treatment, index) => (
            <Box key={index} sx={{ marginBottom: 3 }}>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Typography variant="h6" sx={{fontWeight:"bold"}}>{treatment.type}</Typography>
                </Grid>
              </Grid>

              <List disablePadding>
                {treatment.steps.map((step, stepIndex) => (
                  <Box key={stepIndex}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{minWidth:"30px"}}>
                        <CheckCircleIcon
                          sx={{
                            color: "primary.main",
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>

                      <ListItemText
                        primary={step.title}
                        secondary={step.description}
                        primaryTypographyProps={{ sx: { color: "primary.main" } }}
                      />
                    </ListItem>
                  </Box>
                ))}
              </List>
            </Box>
          ))}
        </Grid>
      </Grid>
    )
  );
};

export default Mutipletreatment;
