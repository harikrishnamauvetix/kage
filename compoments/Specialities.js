import React from "react";
import { Box, Card, CardContent, Typography, Icon ,Container,Grid2,CardMedia } from "@mui/material";

const services = [
  { id: 1, title: "Pharmacology", description: "Medical competitor research startup to financial", icon: "medication" },
  { id: 2, title: "Orthopedic", description: "Medical competitor research startup to financial", icon: "local_hospital" },
  { id: 3, title: "Hematology", description: "Medical competitor research startup to financial", icon: "favorite" },
  { id: 4, title: "Plastic Surgery", description: "Medical competitor research startup to financial", icon: "face" },
  { id: 5, title: "Neurology", description: "Medical competitor research startup to financial", icon: "psychology" },
  { id: 6, title: "Ophthalmology", description: "Medical competitor research startup to financial", icon: "visibility" },
  { id: 7, title: "Dental Care", description: "Medical competitor research startup to financial", icon: "medical_services" },
  { id: 8, title: "Cardiology", description: "Medical competitor research startup to financial", icon: "favorite_border" },
];

const ServiceGrid = () => (
  <div>
      <Box sx={{ backgroundColor: "background.default", padding: 4 }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, color: "secondary.main" }}>
    Our specialities
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: 4, color: "#555" }}>
      We are privileged to work with hundreds of future-thinking medical professionals.
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 3,
      }}
    >
      {services.map((service) => (
        <Card
          key={service.id}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            backgroundColor: "#fff",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            },
            padding: 2,
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Icon
              sx={{
                fontSize: "40px",
                color: "#1976d2",
                marginBottom: 2,
              }}
            >
              {service.icon}
            </Icon>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1,color:"primary.main" }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
 
  </div>

  
);

export default ServiceGrid;
