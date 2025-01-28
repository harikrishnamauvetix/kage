import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
  Box,
  Button,
  Item,
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
  Breadcrumbs,
  Grid2,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid2";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
const Keyservices = ({ keyservicesContent }) => {
  return (
    keyservicesContent && (
      <Box>
        <Typography
          variant="h5"
          sx={{ margin: "10px 0", color: "secondary.main" }}
        >
          {keyservicesContent.heading}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {keyservicesContent?.list?.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            {keyservicesContent?.keyServiceslist?.map((symptom, index) => (
              <List sx={{ padding: "0px" }} key={index}>
                <ListItem sx={{ padding: "0px" }}>
                  <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
                    <ArrowForwardIosIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={symptom} sx={{ padding: "0px" }} />
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default Keyservices;
