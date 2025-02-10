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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Optimings from "@/compoments/Doctors/Optimings";
import PatientVideos from "@/compoments/Home/PatientVideos";
const DoctorDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  // const doctor="dd"
  console.log(slug);
  // Fetch doctor details by matching the name from the JSON data
  const doctor = websiteJson.doctorsList.find(
    (doc) => doc.name.replace(/\s+/g, "-").toLowerCase() === slug
  );

  // Handle case when doctor is not found
  if (!doctor) {
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
              Doctors
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {doctor.name}
            </Link>
          </Breadcrumbs>

          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative", paddingBottom: "50px" }}
          >
            {" "}
            {/* Ensure full width */}
            <Grid size={{ xs: 12, md: 3 }}>
              {/* <Box>
                <CardMedia
                  component="img"
                  height="270"
                  image={doctor.profileImage}
                  alt={doctor.name}
                />
              </Box> */}
            </Grid>
            <Grid size={{ xs: 12, md: 9 }} sx={{ py: "30px" }}>
              <Typography variant="h4">{doctor.name}</Typography>
              <Typography variant="h6">{doctor.designation}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative" }}
          >
            {/* Ensure full width */}
            <Grid size={{ xs: 12, md: 3, lg: 3 }}>
              <Box sx={{ position: "absolute", marginTop: "-200px" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={`/${doctor.profileImage}`}
                  alt={doctor.name}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/appointment")}
                  sx={{ width: "100%", margin: "20px 0" }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 9, lg: 9 }}>
              {/* <Typography variant="h4">{doctor.name}</Typography> */}
              <Typography variant="h6" sx={{ padding: "10px 0" }}>
                {doctor.qualifications}
              </Typography>
              <Typography>
                Registration Number: {doctor.registrationNumber}
              </Typography>
              <Box mt={2}>
                <Stack>
                  <Typography
                    variant="h6"
                    sx={{ padding: "10px 0", color: "primary.main" }}
                  >
                    OP Timings
                  </Typography>
                  <Optimings timing={doctor.opTiming} />
                </Stack>

                <Typography
                  variant="h6"
                  sx={{ padding: "10px 0", color: "primary.main" }}
                >
                  Profile
                </Typography>
                <Typography></Typography>
                <Typography></Typography>
                <Typography
                  variant="h6"
                  sx={{ padding: "10px 0", color: "primary.main" }}
                >
                  Achievements
                </Typography>
                <List disablePadding
                  sx={{
                    listStyleType: "disc", 
                    marginLeft: "30px"
                  }}
                >
                  {Array.isArray(doctor?.achievements) &&
                    doctor.achievements.map((achievement, index) => {
                      // If achievement is an object, it has a category
                      if (
                        typeof achievement === "object" &&
                        achievement.category
                      ) {
                        return (
                          <Box key={index} >
                            <Typography
                              variant="h6"
                              sx={{ padding: "10px 0", color: "secondary.main" }}
                            >
                              {achievement.category}
                            </Typography>
                            <List
                              sx={{
                                listStyleType: "disc", 
                               
                              }}
                              disablePadding
                            >
                              {achievement.details.map((detail, idx) => (
                                <ListItem key={idx} sx={{ display: "list-item", padding: 0 }}>
                                  <ListItemText primary={detail}  disablePadding/>
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        );
                      }
                      // If it's a plain string, render it directly
                      return (
                        <List disablePadding
                          key={index}
                          sx={{
                            listStyleType: "disc",
                          
                          }}
                        >
                          <ListItem sx={{ display: "list-item", padding: 0 }}>
                            <ListItemText primary={achievement} disablePadding />
                          </ListItem>
                        </List>
                      );
                    })}
                </List>
                <Typography
                  variant="h6"
                  sx={{ padding: "10px 0", color: "primary.main" }}
                >
                  Awards
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc", 
                    pl: 1, 
                  }}
                >
                  {doctor?.awards?.map((achievement, index) => (
                    <ListItem key={index} sx={{ display: "list-item", padding: 0 }}>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PatientVideos patientvideos={websiteJson?.Patientvideos} />

      <Footer></Footer>
    </>
  );
};

export default DoctorDetails;
