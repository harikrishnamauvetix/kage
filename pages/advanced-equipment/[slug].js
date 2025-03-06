import React, { useState,useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Box,
  Grid2,
  Button,
  Stack,
  Breadcrumbs,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Card,
  CardContent,
  Rating,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DataContext } from '../_app';
import Link from "next/link";
import Header from "@/compoments/Header";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import { CheckCircle, Padding } from "@mui/icons-material";
import PatientVideos from "@/compoments/Home/PatientVideos";
const Servicespage = () => {
  console.log("sss")
   const data = useContext(DataContext);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const [expanded, setExpanded] = useState(false);
  if (!router.isReady || !data) {
    return <p>Loading...</p>;
  }
  // const doctor="dd"
  console.log(data);
  // const doctor="dd"
  console.log(data?.services);
  // Fetch doctor details by matching the name from the JSON data
  const servicespage = data?.services?.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!servicespage) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          Doctor not found
        </Typography>
        <Button variant="contained" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Container>
    );
  }
  const handleFaqToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo
        service={"Advanced Equipment"}
        pagename={servicespage.title}
      />
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
              <Stack
                sx={{
                  width: "100%",
                  position: "relative",
                  margin: "40px 0 10px 0",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  {servicespage.title}
                </Typography>

                <Box mt={2}>
                  <Typography>{servicespage.description}</Typography>
                  <Typography variant="h5" gutterBottom>
                    {servicespage.subtitle}
                  </Typography>
                </Box>
              </Stack>
              {servicespage?.content?.map((service, index) => (
                <Box key={index} sx={{ marginBottom: 3 }}>
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "secondary.main",
                        margin: "10px 0",
                      }}
                    >
                      {service.title}
                    </Typography>
                    {servicespage.content &&
                      servicespage.content.map((contentItem, cIndex) => (
                        <div key={cIndex}>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                              color: "secondary.main",
                              margin: "10px 0",
                              textAlign: "justify",
                            }}
                          >
                            {contentItem.heading}
                          </Typography>
                          <Typography
                            variant="body1"
                            gutterBottom
                            sx={{ textAlign: "justify" }}
                          >
                            {contentItem.description}
                          </Typography>
                          {/* {console.log( contentItem.subTopics)} */}
                          {contentItem.subTopics &&
                            contentItem?.subTopics.map((subTopic, sIndex) => (
                              <div key={sIndex}>
                                <Typography
                                  variant="h5"
                                  gutterBottom
                                  sx={{
                                    color: "secondary.main",
                                    margin: "10px 0",
                                  }}
                                >
                                  {subTopic.title}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  gutterBottom
                                  sx={{ textAlign: "justify" }}
                                >
                                  {subTopic.description}
                                </Typography>
                                <List disablePadding>
                                  {subTopic?.listItems?.map((item, lIndex) => (
                                    <ListItem
                                      disablePadding
                                      key={lIndex}
                                      sx={{ textAlign: "justify" }}
                                    >
                                      <ListItemIcon
                                        sx={{
                                          minWidth: "30px",
                                          marginRight: "10px",
                                        }}
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
                                          <CheckCircle
                                            sx={{ color: "primary.main" }}
                                          />
                                        )}
                                      </ListItemIcon>

                                      {typeof item === "object" ? (
                                        <ListItemText
                                          primary={item.title}
                                          secondary={item.description}
                                        />
                                      ) : (
                                        <ListItemText primary={item} />
                                      )}
                                    </ListItem>
                                  ))}
                                </List>
                              </div>
                            ))}
                        </div>
                      ))}
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
          </Grid>
        </Container>
      </Box>
      {/* <PatientVideos patientvideos={data?.Patientvideos} /> */}

      <Footer></Footer>
    </>
  );
};
export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug, 
    },
  };
}
export default Servicespage;
