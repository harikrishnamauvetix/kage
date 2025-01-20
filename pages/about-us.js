import React from "react";

import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import websiteJson from "../public/website.json";
import Header from "../compoments/Header";

import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
const About = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Stack sx={{ margin: "30px 0" }}>
          <Typography variant="h6" gutterBottom  sx={{ margin: "10px 0", color: "secondary.main" }}>
            {websiteJson.about.subHeading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {websiteJson.about.Description}
          </Typography>
        </Stack>

        <Typography
          variant="body1"
        
          sx={{ margin: "10px 0", color: "secondary.main" }}>
        
          {websiteJson.about.specialtyClinics.description}
        </Typography>
        <Grid container spacing={4}>
          {websiteJson.about.specialtyClinics.list.map((clinic, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {clinic.heading}
                </Typography>
                <Typography variant="body1">{clinic.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ margin: "30px 0" }}>
          <Typography variant="h5" align="center"   sx={{ margin: "10px 0", color: "secondary.main" }}>
            {websiteJson.about.stateOfTheArtEndoscopyUnit.heading}
          </Typography>
          <List>
            {websiteJson.about.stateOfTheArtEndoscopyUnit.Details.map(
              (detail, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={detail} />
                </ListItem>
              )
            )}
          </List>
        </Stack>
    

        {/* Center of Excellence Section */}
        <Typography variant="h5"    sx={{ margin: "10px 0", color: "secondary.main" }}>
          {websiteJson.about.centerOfExcellence.heading}
        </Typography>
        <Typography variant="body1"  paragraph>
          {websiteJson.about.centerOfExcellence.description}
        </Typography>
        <List> 
          {websiteJson.about.centerOfExcellence.Certifications.map(
            (cert, index) => (
              <ListItem key={index} disableGutters>
              <ListItemText primary={cert} />
            </ListItem>
            )
          )}
        </List>

        {/* Mission and Tagline */}
        <Typography variant="h5"    sx={{ margin: "10px 0", color: "secondary.main" }}>
          Mission
        </Typography>
        <Typography variant="body1"  paragraph>
          {websiteJson.about.Mission}
        </Typography>

        <Typography variant="h6"   sx={{ margin: "10px 0", color: "secondary.main" }}>
          {websiteJson.about.Tagline}
        </Typography>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default About;
