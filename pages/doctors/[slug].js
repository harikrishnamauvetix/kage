import React, { useState, useContext } from "react";
import websiteJson from "../../public/website.json";
import Head from "next/head";
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
import { DataContext } from "../_app";
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
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";
import { generateSlug } from "@/compoments/slugify";
const DoctorDetails = ({ doctor }) => {
  //  const data = useContext(DataContext);

  const router = useRouter();
  const { slug } = router.query;
  // const doctor="dd"
  // console.log(slug);
  // Fetch doctor details by matching the name from the JSON data
  // const doctor = data?.doctorsList.find(
  //   (doc) => doc.name.replace(/\s+/g, "-").toLowerCase() === slug
  // );

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
  
      <CanonicalTag
        title={doctor?.metaTitle}
        description={doctor?.metaDescription}
        keywords={doctor?.keywords}
      />
      <Header></Header>
      <Breadcrumbsinfo
        service={"Doctors"}
        pagename={doctor.name}
      ></Breadcrumbsinfo>
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative", paddingBottom: "20px" }}
          >
            {" "}
            {/* Ensure full width */}
            <Grid size={{ xs: 12, md: 12, lg: 3, xl: 3 }}>
              {/* <Box>
                <CardMedia
                  component="img"
                  height="270"
                  image={doctor.profileImage}
                  alt={doctor.name}
                />
              </Box> */}
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 9, xl: 9 }} sx={{ py: "40px" }}>
              <Typography variant="h1">{doctor.name}</Typography>
              <Typography variant="h2">{doctor.designation}</Typography>
              <Typography variant="h6">{doctor.qualifications}</Typography>
              <Typography>
                Registration Number: {doctor.registrationNumber}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative" }}
          >
            {/* Ensure full width */}
            <Grid size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
              <Box
                sx={{
                  position: { xs: "relative", lg: "absolute" },
                  marginTop: { xs: "20px", lg: "-220px" },
                  alignItems: { xs: "start" },
                  justifyItems: { xs: "center" },
                  alignContent: { xs: "center" },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={`/${doctor.profileImage}`}
                  alt="Best Gastro Hospital In Hyderabad"
                  sx={{
                    width: {
                      xs: "auto",
                      sm: "auto",
                      md: "100%",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/appointment")}
                  sx={{
                    width: {
                      xs: "auto",
                      sm: "100%",
                      md: "100%",
                    },

                    margin: "20px 0",
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 8, xl: 8 }}>
              {/* <Typography variant="h4">{doctor.name}</Typography> */}

              <Box>
                {doctor?.opTiming && (
                  <Stack sx={{ margin: "20px 0" }}>
                    <Typography
                      variant="h6"
                      sx={{ padding: "5px 0", color: "primary.main" }}
                    >
                      OP Timings
                    </Typography>
                    <Optimings
                      timing={doctor.opTiming}
                      sx={{ padding: "10px 0" }}
                    />
                  </Stack>
                )}

                {doctor?.profile && (
                  <Stack sx={{ margin: "20px 0" }}>
                    <Typography
                      variant="h6"
                      sx={{ padding: "5px 0", color: "primary.main" }}
                    >
                      Profile
                    </Typography>
                    {doctor.profile.map((profile, index) => (
                      <Typography
                        variant="body1"
                        sx={{ textAlign: "justify", margin: "3px 0" }}
                        key={index}
                      >
                        {profile}
                      </Typography>
                    ))}
                  </Stack>
                )}
                  {doctor?.expertise && (
                  <Stack sx={{ margin: "20px 0" }}>
                    {Array.isArray(doctor.expertise) &&
                      doctor.expertise.map((expertise, index) => (
                        <Box key={index}>
                          {expertise.category && (
                            <Typography
                              variant="h6"
                              sx={{
                                padding: "10px 0",
                                color: "primary.main",
                              }}
                            >
                              {expertise.category}
                            </Typography>
                          )}

                          {/* If top-level details exist */}
                          {Array.isArray(expertise.details) && (
                            <List
                              disablePadding
                              sx={{
                                listStyleType: "disc",
                                marginLeft: "30px",
                              }}
                            >
                              {expertise.details.map((detail, idx) => (
                                <ListItem
                                  key={idx}
                                  sx={{ display: "list-item", padding: 0 }}
                                >
                                  <ListItemText primary={detail} />
                                </ListItem>
                              ))}
                            </List>
                          )}

                          {/* Handle subcategories */}
                          {Array.isArray(expertise.subcategories) &&
                            expertise.subcategories.map((sub, subIdx) => (
                              <Box key={subIdx} sx={{ marginLeft: "20px" }}>
                                {sub.subcategory && (
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      padding: "8px 0",
                                      color: "secondary.main",
                                    }}
                                  >
                                    {sub.subcategory}
                                  </Typography>
                                )}
                                <List
                                  disablePadding
                                  sx={{
                                    listStyleType: "disc",
                                    marginLeft: "30px",
                                  }}
                                >
                                  {Array.isArray(sub.details) &&
                                    sub.details.map((item, itemIdx) => (
                                      <ListItem
                                        key={itemIdx}
                                        sx={{
                                          display: "list-item",
                                          padding: 0,
                                        }}
                                      >
                                        <ListItemText primary={item} />
                                      </ListItem>
                                    ))}
                                </List>
                              </Box>
                            ))}
                        </Box>
                      ))}
                  </Stack>
                )}
                {doctor?.publications && (
                  <Stack sx={{ margin: "20px 0" }}>
                    <Typography
                      variant="h6"
                      sx={{ padding: "5px 0", color: "primary.main" }}
                    >
                      Publications & Research Papers
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: "disc",
                        marginLeft: "30px",
                      }}
                    >
                      {Array.isArray(doctor?.publications) &&
                        doctor.publications.map((publications, index) => {
                          return (
                            <List
                              disablePadding
                              key={index}
                              sx={{
                                listStyleType: "disc",
                              }}
                            >
                              <ListItem
                                sx={{ display: "list-item", padding: 0 }}
                              >
                                <ListItemText primary={publications} />
                              </ListItem>
                            </List>
                          );
                        })}
                    </List>
                  </Stack>
                )}
              

                {doctor?.achievements && (
                  <Stack sx={{ margin: "20px 0" }}>
                    <Typography
                      variant="h6"
                      sx={{ padding: "5px 0", color: "primary.main" }}
                    >
                      Achievements
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: "disc",
                        marginLeft: "30px",
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
                              <Box key={index}>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    padding: "10px 0",
                                    color: "secondary.main",
                                  }}
                                >
                                  {achievement.category}
                                </Typography>
                                <List
                                  disablePadding
                                  sx={{
                                    listStyleType: "disc",
                                  }}
                                >
                                  {achievement.details.map((detail, idx) => (
                                    <ListItem
                                      key={idx}
                                      sx={{ display: "list-item", padding: 0 }}
                                    >
                                      <ListItemText primary={detail} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                            );
                          }
                          // If it's a plain string, render it directly
                          return (
                            <List
                              disablePadding
                              key={index}
                              sx={{
                                listStyleType: "disc",
                              }}
                            >
                              <ListItem
                                sx={{ display: "list-item", padding: 0 }}
                              >
                                <ListItemText primary={achievement} />
                              </ListItem>
                            </List>
                          );
                        })}
                    </List>
                  </Stack>
                )}
                {doctor?.awards && (
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{ padding: "5px 0", color: "primary.main" }}
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
                        <ListItem
                          key={index}
                          sx={{ display: "list-item", padding: 0 }}
                        >
                          <ListItemText primary={achievement} />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                )}
              </Box>
            </Grid>
          </Grid>

          {/* <PatientVideos patientvideos={data?.Patientvideos} /> */}
        </Container>
      </Box>

      <Footer></Footer>
    </>
  );
};
export async function getStaticPaths() {
  const data = websiteJson;
  const paths = data.doctorsList.map((doc) => ({
    params: { slug: generateSlug(doc?.name) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = websiteJson;
  console.log(params);
  const doctor = data.doctorsList.find(
    (doc) => generateSlug(doc.name) === params.slug
  );

  if (!doctor) {
    return { notFound: true };
  }

  return {
    props: { doctor },
  };
}
export default DoctorDetails;
