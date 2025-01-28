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
const Procedures = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [expanded, setExpanded] = useState(false);
  // const doctor="dd"
  console.log(websiteJson);
  // const doctor="dd"
  console.log(websiteJson.items);
  // Fetch doctor details by matching the name from the JSON data
  const procedures = websiteJson?.procedures?.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!procedures) {
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
      <Breadcrumbsinfo service={"Procedures"} pagename={procedures.title} />
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
                    {procedures.title}
                  </Typography>

                  <Box mt={2}>
                    <Typography>{procedures.description}</Typography>
                    <Typography variant="h5" gutterBottom>
                      {procedures.subtitle}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Container>
              {procedures.sections.map((section, idx) => (
                <Box key={idx} sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "secondary.main",
                      margin: "10px 0",
                    }}
                  >
                    {section.heading}
                  </Typography>
                  {section.content && Array.isArray(section.content) ? (
                    section.content.map((contentItem, index) => (
                      <Typography
                        key={index}
                        paragraph
                        sx={{ textAlign: "justify" }}
                      >
                        {contentItem}
                      </Typography>
                    ))
                  ) : (
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                      {section.content}
                    </Typography>
                  )}

                  {section.steps && (
                    <List sx={{ padding: "0px" }}>
                      {section.steps.map((step, stepIdx) => (
                        <ListItem key={stepIdx} sx={{ padding: "0px" }}>
                          <ListItemText
                            sx={{ padding: "0px" }}
                            primary={`${step.step}. ${step.title}`}
                            secondary={step.description}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {section.benefits && (
                    <List sx={{ padding: "0px" }}>
                      {section.benefits.map((benefit, benefitIdx) => (
                        <ListItem key={benefitIdx} sx={{ padding: "0px" }}>
                          <ListItemIcon
                            sx={{ padding: "0px", minWidth: "30px" }}
                          >
                            <ArrowForwardIosIcon color="primary" />
                          </ListItemIcon>

                          <ListItemText
                            primary={benefit}
                            sx={{ padding: "0px" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {section.symptoms && (
                    <List sx={{ padding: "0px" }}>
                      {section.symptoms.map((symptom, symptomIdx) => (
                        <ListItem key={symptomIdx} sx={{ padding: "0px" }}>
                          <ListItemIcon
                            sx={{ padding: "0px", minWidth: "30px" }}
                          >
                            <ArrowForwardIosIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={symptom}
                            sx={{ padding: "0px" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {section.recovery && (
                    <Grid container spacing={2}>
                      {section.recovery.map((recoveryStage, recoveryIdx) => (
                        <Grid item xs={12} md={4} size={4} key={recoveryIdx}>
                          <Card
                            sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <CardContent>
                              <Typography
                                variant="h6"
                                sx={{ color: "primary.main" }}
                              >
                                {recoveryStage.stage}
                              </Typography>
                              <Typography>
                                {recoveryStage.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  )}

                  {section.faq && (
                    <Grid container spacing={2}>
                      {section.faq.map((faq, faqIdx) => (
                        <Grid size={{ xs: 12, sm: 12, md: 12   }}  key={faqIdx}>
                          <Accordion
                            expanded={expanded === faqIdx}
                            onChange={handleFaqToggle(faqIdx)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={`panel-${faqIdx}-content`}
                              id={`panel-${faqIdx}-header`}
                            >
                              <ListItemText primary={faq.question} />
                            </AccordionSummary>
                            <AccordionDetails>
                              <ListItemText secondary={faq.answer} />
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {section.content_2 && (
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                      {section.content_2}
                    </Typography>
                  )}
                </Box>
              ))}

              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" gutterBottom>
                  {
                    procedures.sections[procedures.sections.length - 1]
                      .call_to_action
                  }
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Procedures;
