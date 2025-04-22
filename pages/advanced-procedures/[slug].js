import Head from "next/head";
import React, { useState, useContext } from "react";
import websiteJson from "../../public/website.json";
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
import { DataContext } from "../_app";
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
import CanonicalTag from "@/compoments/CanonicalTag";
const Advancedprocedures = ({ advancedprocedures }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [expanded, setExpanded] = useState(false);
  if (!advancedprocedures) {
    return <p>Loading...</p>;
  }
  // console.log(data);

  // console.log(data?.items);

  const renderList = (items, IconComponent) => (
    <List disablePadding sx={{ padding: "0px" }}>
      {items.map((item, idx) => (
        <ListItem key={idx} sx={{ padding: "0px" }}>
          {IconComponent && (
            <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
              <IconComponent color="primary" />
            </ListItemIcon>
          )}
          <ListItemText primary={item} sx={{ padding: "0px" }} />
        </ListItem>
      ))}
    </List>
  );
  if (!advancedprocedures) {
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
      <Head>
        <title>{advancedprocedures?.metaTitle} </title>
        <meta
          name="description"
          content={advancedprocedures?.metaDescription}
        />
      </Head>
      <CanonicalTag/>
      <Header></Header>
      <Breadcrumbsinfo
        service={"Advanced Procedures"}
        pagename={advancedprocedures.title}
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
                  variant="h1"
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  {advancedprocedures.title}
                </Typography>

                <Box mt={2}>
                  <Typography>{advancedprocedures.description}</Typography>
                  <Typography variant="h5" gutterBottom>
                    {advancedprocedures.subtitle}
                  </Typography>
                </Box>
              </Stack>
              {advancedprocedures.sections.map((section, idx) => (
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
                  {section.symptoms &&
                    renderList(section.symptoms, CheckCircle)}
                  {section.steps && (
                    <List disablePadding>
                      {section.steps.map((step, stepIdx) => (
                        <ListItem key={stepIdx} disablePadding>
                          <ListItemIcon sx={{ minWidth: "30px" }}>
                            <CheckCircle sx={{ color: "primary.main" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={step.title}
                            secondary={step.description}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {section.benefits &&
                    renderList(section.benefits, CheckCircle)}

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
                        <Grid size={{ xs: 12, sm: 12, md: 12 }} key={faqIdx}>
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
                  <Typography variant="body1">
                    {
                      advancedprocedures.sections[
                        advancedprocedures.sections.length - 1
                      ].call_to_action
                    }
                  </Typography>
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

export async function getStaticPaths() {
  const data = websiteJson;
  const paths = data.advancedprocedures.map((service) => ({
    params: { slug: service.title.replace(/\s+/g, "-").toLowerCase() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const data = websiteJson;
  const advancedprocedures = data.advancedprocedures.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === params.slug
  );

  if (!advancedprocedures) {
    return { notFound: true };
  }

  return {
    props: { advancedprocedures },
  };
}

export default Advancedprocedures;
