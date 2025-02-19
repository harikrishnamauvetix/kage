import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import websiteJson from "../../public/website.json";
import Header from "@/compoments/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import SidebarMenu from "@/compoments/SidebarMenu";
import AboutsidebarMenu from "@/compoments/aboutSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
const About = () => {
  const [service, setService] = useState(websiteJson?.about);
  const [slug, setslug] = useState(websiteJson?.about.page);
  //  slug
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo
        service={"About Us"}
        pagename={service.slug}
      ></Breadcrumbsinfo>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              {/* <SidebarMenu service={service} slug={""} /> */}
              <AboutsidebarMenu
                service={service}
                slug={slug}
              ></AboutsidebarMenu>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 8 }}>
              <Stack sx={{ margin: "10px 0" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    margin: "10px 0",
                    color: "secondary.main",
                    textAlign: "left",
                  }}
                >
                  {websiteJson.about.subHeading}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "justify" }}
                >
                  {websiteJson.about.Description}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "justify", margin: "10px 0" }}
              >
                {websiteJson.about.specialtyClinics.description}
              </Typography>
              <Grid container spacing={4}>
                {websiteJson.about.specialtyClinics.list.map(
                  (clinic, index) => (
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                      <Paper
                        elevation={3}
                        sx={{
                          padding: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            color: "primary.main",

                            alignItems: "start",
                            minHeight: "65px",
                            display: "flex",
                          }}
                        >
                          {clinic.heading}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            flexGrow: 1,
                            minHeight: "80px",
                          }}
                        >
                          {clinic.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  )
                )}
              </Grid>
              <Stack sx={{ margin: "30px 0" }}>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ margin: "10px 0", color: "secondary.main" }}
                >
                  {websiteJson.about.stateOfTheArtEndoscopyUnit.heading}
                </Typography>
                <List disablePadding>
                  {websiteJson.about.stateOfTheArtEndoscopyUnit.Details.map(
                    (detail, index) => (
                      <ListItem key={index} disablePadding>
                        <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "primary.main",
                              fontSize: 20,
                            }}
                          />
                          <ListItemText primary={detail} />
                        </Box>
                      </ListItem>
                    )
                  )}
                </List>
              </Stack>

              {/* Center of Excellence Section */}
              <Typography
                variant="h6"
                sx={{
                  margin: "10px 0",
                  color: "primary.main",
                  textAlign: "left",
                }}
              >
                {websiteJson.about.centerOfExcellence.heading}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                {websiteJson.about.centerOfExcellence.description}
              </Typography>
              <List disablePadding>
                {websiteJson.about.centerOfExcellence.Certifications.map(
                  (cert, index) => (
                    <ListItem key={index} disablePadding>
                      <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                        <CheckCircleIcon
                          sx={{
                            color: "primary.main",
                            fontSize: 20,
                          }}
                        />
                        <ListItemText primary={cert} />
                      </Box>
                    </ListItem>
                  )
                )}
              </List>

              {/* Mission and Tagline */}
              <Typography
                variant="h5"
                sx={{ margin: "10px 0", color: "secondary.main" }}
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                {websiteJson.about.Mission}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  margin: "10px 0",
                  color: "secondary.main",
                  textAlign: "justify",
                }}
              >
                {websiteJson.about.Tagline}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default About;
