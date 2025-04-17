import React, { useState,useContext ,useEffect} from "react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation"; 

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
import { DataContext } from '../_app';
import Header from "@/compoments/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import SidebarMenu from "@/compoments/SidebarMenu";
import AboutsidebarMenu from "@/compoments/aboutSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";
const About = () => {
  const data = useContext(DataContext);
  const router = useRouter();

  const [service, setService] = useState({});
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (data?.about) {
      setService(data.about);
      setSlug(data.about.page || "");
    }
  }, [data]);

  if (!data) {
    return <Typography variant="h6">Loading...</Typography>;
  }
  return (
    <>
     <Head>
        <title>{data?.about?.metaTitle} </title>
        <meta name="description" content={data?.about?.metaDescription} />
      </Head>
      <CanonicalTag/>
      <Header></Header>
     <Breadcrumbsinfo 
        service={"About Us"}
        pagename={service?.slug}
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
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}>
              {/* <SidebarMenu service={service} slug={""} /> */}
              <AboutsidebarMenu
                service={service}
                slug={slug}
              ></AboutsidebarMenu>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
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
                  {data?.about.subHeading}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "justify" }}
                >
                  {data?.about.Description}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "justify", margin: "10px 0" }}
              >
                {data?.about.specialtyClinics.description}
              </Typography>
              <Grid container spacing={4} justifyContent={"center"}>
                {data?.about.specialtyClinics.list.map(
                  (clinic, index) => (
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
                      key={index}

                    >
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
                  {data?.about.stateOfTheArtEndoscopyUnit.heading}
                </Typography>
                <List disablePadding>
                  {data?.about.stateOfTheArtEndoscopyUnit.Details.map(
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
                {data?.about.centerOfExcellence.heading}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                {data?.about.centerOfExcellence.description}
              </Typography>
              <List disablePadding>
                {data?.about.centerOfExcellence.Certifications.map(
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
                {data?.about.Mission}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  margin: "10px 0",
                  color: "secondary.main",
                  textAlign: "justify",
                }}
              >
                {data?.about.Tagline}
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
