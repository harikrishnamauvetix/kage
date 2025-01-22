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
  Rating ,
  Avatar 
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
            <Grid size={{ xs: 12, md: 3, lg:3 }}>
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
            <Grid size={{ xs: 12, md: 9 ,lg:9}}>
              {/* <Typography variant="h4">{doctor.name}</Typography> */}
              <Typography variant="h6" sx={{ padding: "10px 0" }}>
                {doctor.qualifications}
              </Typography>
              <Typography>
                Registration Number: {doctor.registrationNumber}
              </Typography>
              <Box mt={2}>
                <Typography variant="h6">Profile</Typography>
                <Typography>
                
                </Typography>
                <Typography>
                 
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ padding: "10px 0", color: "primary.main" }}
                >
                  Achievements
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc", // Add bullet points
                    pl: 1, // Padding for the bullets to align properly
                  }}
                >
                  {doctor?.achievements?.map((achievement, index) => (
                    <ListItem key={index}  sx={{ display: "list-item", py: 0 }}>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
                <Typography
                  variant="h6"
                  sx={{ padding: "10px 0", color: "primary.main" }}
                >
                  Awards
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc", // Add bullet points
                    pl: 1, // Padding for the bullets to align properly
                  }}
                >
                  {doctor?.awards?.map((achievement, index) => (
                    <ListItem key={index}  sx={{ display: "list-item", py: 0 }}>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>

      <Container>
            {/* Patient Testimonials Section */}
            <Box sx={{ mb: 6 }}>
              <Box>
                <Typography
                  component="h2"
                  variant="h4"
                  gutterBottom
                  color="secondary"
                  textAlign="left"
                  sx={{ mb: 3, mt: 3 }}
                >
                  Patient Testimonials
                </Typography>
              </Box>
              <Box>
                {/* Title Section */}

                {/* Testimonial Cards */}
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {doctor.patientTestimonials?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <Card
                        sx={{
                          maxWidth: 345,
                          margin: "0 auto",
                          boxShadow: 3,
                          borderRadius: 2,
                          p: 0,
                        }}
                      >
                        <CardContent
                          sx={{
                            maxWidth: 345,
                            padding: "0px !important",
                          }}
                        >
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ mb: 1, lineHeight: 1.6, p: 1 }}
                          >
                            {testimonial.testimonial}
                          </Typography>
                          <Rating
                            value={testimonial.rating}
                            precision={0.5}
                            readOnly
                            sx={{
                              p: 1,
                              color: "primary.main",
                            }}
                          />

                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              lineHeight: 1.6,
                              p: 1,
                              backgroundColor: "secondary.main",
                              color: "#fff",
                            }}
                          >
                            <Avatar
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              sx={{
                                width: 56,
                                height: 56,
                                border: "2px solid #ff5722",
                                mr: 2,
                              }}
                            />
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "#fff" }}
                              >
                                {testimonial.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                              >
                                {testimonial.title}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Container>
      </Box>

      <Footer></Footer>
    </>
  );
};

export default DoctorDetails;
