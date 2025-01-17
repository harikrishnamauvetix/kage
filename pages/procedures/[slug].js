import React ,{ useState }from "react";
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

import "swiper/css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const Procedures = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [expanded, setExpanded] = useState(false); 
  // const doctor="dd"
  console.log(websiteJson);
  // const doctor="dd"
  console.log(websiteJson.items);
  // Fetch doctor details by matching the name from the JSON data
  const procedures = websiteJson.items.find(
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
  }
  return (
    <>
      <Header></Header>

      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Container>
          <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px" }}>
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Procedures
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {procedures.title}
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative", margin: "40px 0" }}
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
                  alt="Logo"
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "secondary.main",
                  textAlign: "center",
                  padding: "20px 0",
                }}
              >
                {" "}
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
              <Typography variant="h4" gutterBottom>
                {section.heading}
              </Typography>
              {section.content && (
                <Typography paragraph>{section.content}</Typography>
              )}

              {section.steps && (
                <List>
                  {section.steps.map((step, stepIdx) => (
                    <ListItem key={stepIdx}>
                      <ListItemText
                        primary={`${step.step}. ${step.title}`}
                        secondary={step.description}
                      />
                    </ListItem>
                  ))}
                </List>
              )}

              {section.benefits && (
                <List>
                  {section.benefits.map((benefit, benefitIdx) => (
                    <ListItem key={benefitIdx}>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              )}

              {section.symptoms && (
                <List>
                  {section.symptoms.map((symptom, symptomIdx) => (
                    <ListItem key={symptomIdx}>
                      <ListItemText primary={symptom} />
                    </ListItem>
                  ))}
                </List>
              )}

              {section.recovery && (
                <Grid container spacing={2}>
                  {section.recovery.map((recoveryStage, recoveryIdx) => (
                    <Grid item xs={12} md={4} size={4} key={recoveryIdx}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">
                            {recoveryStage.stage}
                          </Typography>
                          <Typography>{recoveryStage.description}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}

              {section.faq && (
                <Grid container spacing={2}>
                  {section.faq.map((faq, faqIdx) => (
                    <Grid item xs={12} sm={6} size={6} key={faqIdx}>
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
                <Typography paragraph>{section.content_2}</Typography>
              )}
            </Box>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              {
                procedures.sections[procedures.sections.length - 1]
                  .call_to_action
              }
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer></Footer>
    </>
  );
};

export default Procedures;
