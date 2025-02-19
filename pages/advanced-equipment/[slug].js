import React, { useState } from "react";
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
import websiteJson from "../../public/website.json";
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
import { Padding } from "@mui/icons-material";
import PatientVideos from "@/compoments/Home/PatientVideos";
const Servicespage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [expanded, setExpanded] = useState(false);
  // const doctor="dd"
  console.log(websiteJson);
  // const doctor="dd"
  console.log(websiteJson.services);
  // Fetch doctor details by matching the name from the JSON data
  const servicespage = websiteJson?.services?.find(
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Container>
              <Grid
                container
                spacing={2}
                sx={{
                  width: "100%",
                  position: "relative",
                  margin: "40px 0 10px 0",
                }}
              >
                <Grid size={{ xs: 12, md: 12 }}>
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
                </Grid>
              </Grid>
            </Container>
            <Container>
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
                              textAlign:"justify"
                            }}
                          >
                            {contentItem.heading}
                          </Typography>
                          <Typography variant="body1" gutterBottom sx={{textAlign:"justify"}}>
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
                                <Typography variant="body1" gutterBottom sx={{textAlign:"justify"}}>
                                  {subTopic.description}
                                </Typography>
                                <List>
                                  {subTopic?.listItems?.map((item, lIndex) => (
                                    <ListItem disableGutters key={lIndex} sx={{textAlign:"justify"}}>
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
                                          <ArrowForwardIosIcon />
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
            </Container>
          </Box>
        </Box>
      </Box>
      <PatientVideos patientvideos={websiteJson?.Patientvideos} />

      <Footer></Footer>
    </>
  );
};

export default Servicespage;
