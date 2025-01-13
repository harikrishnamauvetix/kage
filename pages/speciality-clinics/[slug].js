import React from "react";
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
  Divider,
  Card,
  CardContent,
  Rating,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Header from "@/compoments/Header";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import websiteJson from "../../public/website.json";
const Speciality = () => {
  const router = useRouter();
  const { slug } = router.query;
  // const doctor="dd"
  // console.log(websiteJson);
  // const doctor="dd"

  // Fetch doctor details by matching the name from the JSON data
  const speciality = websiteJson.services.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
  );
  // console.log(speciality.ibd_clinic);

  return (
    <>
      <Header />

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
              Services
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {speciality?.title}
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
            <Grid item xs={12}>
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
                {speciality?.ibd_clinic.heading}
              </Typography>

              <Box mt={2}>
                <Typography>{speciality?.ibd_clinic.overview}</Typography>
                <Typography variant="h5" gutterBottom>
                  {speciality?.ibd_clinic.subtext}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          {speciality?.ibd_clinic.sections.map((section, idx) => (
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
                    <Grid item xs={12} md={4} key={recoveryIdx}>
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
                <List>
                  {section.faq.map((faq, faqIdx) => (
                    <ListItem key={faqIdx}>
                      <ListItemText
                        primary={faq.question}
                        secondary={faq.answer}
                      />
                    </ListItem>
                  ))}
                </List>
              )}

              {section.content_2 && (
                <Typography paragraph>{section.content_2}</Typography>
              )}
            </Box>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              {speciality?.ibd_clinic.call_to_action}
            </Typography>
         </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Speciality;
