import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Grid from "@mui/material/Grid2";
function DiagnosedSection({ diagnosed }) {
  if (!diagnosed || !diagnosed.heading) {
    return null;
  }

  return (
    <Grid item xs={12} md={12}>
      {/* Diagnosed Heading */}
      <Typography
        variant="h5"
        sx={{ margin: "10px 0", color: "secondary.main" }}
      >
        {diagnosed.heading}
      </Typography>

      {/* Diagnosed Description */}
      {diagnosed.description && (
        <Typography variant="body1" sx={{ textAlign: "justify" }} paragraph>
          {diagnosed.description}
        </Typography>
      )}

      {/* Procedures */}
      {diagnosed.procedures?.heading && (
        <>
          <Typography
            variant="h5"
            sx={{ margin: "10px 0", color: "secondary.main" }}
          >
            {diagnosed.procedures.heading}
          </Typography>
          <Grid container spacing={2}>
            {diagnosed.procedures.steps?.map((step, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      {step?.icon ? (
                        <img
                          src={step.icon}
                          alt="Hospital Icon"
                          width="40"
                          height="40"
                          style={{
                            borderRadius: "50%",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <MedicalServicesIcon fontSize="large" color="primary" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={step.title}
                      secondary={step.description}
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default DiagnosedSection;
