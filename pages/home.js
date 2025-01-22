import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Header from "../compoments/Header";

import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import websiteJson from "../public/website.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SendIcon from "@mui/icons-material/Send";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

// Import Swiper styles
import "swiper/css";
import Contactinfo from "@/compoments/Home/Contactinfo";
import SpecialityClinics from "@/compoments/Home/SpecialityClinics";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}

          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {websiteJson.bannerImage.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column layout for small screens, row for larger screens
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              padding: 4,
              borderRadius: 2,
              gap: 4,
            }}
          >
            {/* Left Section (Images) */}
            <Box
              sx={{
                flexBasis: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, // Single column on small screens, two columns on larger
                gap: 2,
              }}
            >
              {websiteJson.introImages.map((slide, index) => (
                <Box
                  key={index}
                  component="img"
                  src={slide.image} // Dynamically use the image source from the `slide` object
                  alt={slide.alt || `Slide ${index + 1}`} // Provide a fallback for the alt text
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>

            {/* Right Section (Content) */}
            <Box
              sx={{
                flexBasis: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger
                textAlign: { xs: "center", md: "left" }, // Centered text on small screens
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "secondary.main",
                  mb: 2,
                  position: "relative",
                  // "&::after": {
                  //   content: '""',
                  //   display: "block",
                  //   width: "50px",
                  //   height: "2px",
                  //   backgroundColor: "#9C27B0",
                  //   marginTop: "8px",
                  // },
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              ></Typography>
              <Typography
                sx={{
                  color: "#000",
                  margin: "16px 0",
                }}
              >
                {/* {console.log(websiteJson.home_intro)} */}
                {websiteJson.home_intro[0].description}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  margin: "16px 0",
                }}
              >
                {/* {console.log(websiteJson.home_intro)} */}
                {websiteJson.home_intro[1].description2}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  margin: "16px 0",
                }}
              >
                {/* {console.log(websiteJson.home_intro)} */}
                {websiteJson.home_intro[2].description3}
              </Typography>
              <Link href="/about" passHref>
                <Button
                  variant="contained"
                  color="primary.main"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#fff",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  Read More ➔
                </Button>
              </Link>
            </Box>
          </Box>
        </Stack>

        <SpecialityClinics specialityclinics={websiteJson.services} />
        <Stack sx={{ py: 5, px: 3 }}>
          <Container>
            <Box>
              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                color="secondary"
                textAlign="left"
              >
                Doctors
              </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
              {websiteJson.doctorsList.map((doctor) => (
                <Grid
                  key={doctor.id} // Add a unique key here
                  size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card>
                    <Link
                      href={`/doctors/${doctor.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <CardMedia
                        component="img"
                        height="270"
                        image={`/${doctor.profileImage}`}
                        alt={doctor.name}
                      />
                    </Link>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ height: "180px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {doctor.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {doctor.qualifications}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {doctor.designation}
                        </Typography>
                      </Box>
                      <Link
                        href={`/doctors/${doctor.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        passHref
                      >
                        <Button
                          variant="contained"
                          sx={{ marginTop: "10px", width: "100%" }}
                        >
                          Know More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>
        <div>
          <Box
            id="highlights"
            sx={{
              pt: { xs: 4, sm: 4 },
              pb: { xs: 8, sm: 4 },
              color: "black",
            }}
          >
            <Container
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 3, sm: 6 },
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "60%" },
                  textAlign: { sm: "left", md: "center" },
                }}
              >
                <Typography component="h2" variant="h4" color="secondary.main">
                  Procedures
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {websiteJson?.procedures?.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Stack
                      direction="column"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={(theme) => ({
                        padding: "10px",
                        height: "100%",
                      })}
                    >
                      <Box sx={{ color: "primary.main" }}>
                        <Icon
                          sx={{
                            fontSize: "40px",
                            color: "#1976d2",
                          }}
                        >
                          <MedicalServicesIcon />
                        </Icon>
                      </Box>
                      <Box sx={{ px: 1 }}>
                        <Link
                          href={`/procedures/${item.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          passHref
                        >
                          <Typography
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                          >
                            {item.title}
                          </Typography>
                        </Link>

                        {item.sections?.[0]?.content && (
                          <Typography
                            variant="body1"
                            sx={{ color: "#000", marginBottom: "10px" }}
                          >
                            {item.sections[0].content.length > 100
                              ? `${item.sections[0].content.slice(0, 100)}...`
                              : item.sections[0].content}
                          </Typography>
                        )}
                        <Link
                          href={`/procedures/${item.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          passHref
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "secondary.main",
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
          <Stack sx={{ backgroundColor: "background.default", py: 5 }}>
            <Container>
              <Box sx={{ mb: 6 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  gutterBottom
                  color="secondary"
                  textAlign="left"
                >
                  Patient Videos
                </Typography>
                <Grid container spacing={2}>
                  {websiteJson.Patientvideos.map((video, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Card>
                        <div
                          style={{
                            position: "relative",
                            paddingTop: "56.25%", // 16:9 aspect ratio
                          }}
                        >
                          <iframe
                            src={video.url}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                        <CardContent sx={{
                          
                          height: "350px", // Ensures equal height for all cards
                        }}>
                          <Typography variant="h6">{video.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {video.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Stack>
          <Container>
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
                  {websiteJson.testimonials.map((testimonial) => (
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
                            {testimonial.text}
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
          <Stack sx={{ backgroundColor: "background.default", py: 5 }}>
            <Container>
              {/* Equipments Section */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  gutterBottom
                  color="secondary"
                  textAlign="left"
                >
                  Doctor Videos
                </Typography>
                {/* Doctor Videos Section */}
                <Box>
                  <Grid container spacing={2}>
                    {websiteJson.doctorvideos.map((video, index) => (
                      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card
                          
                        >
                          <div
                            style={{
                              position: "relative",
                              paddingTop: "56.25%", // 16:9 aspect ratio
                            }}
                          >
                            <iframe
                              src={video.url}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <CardContent sx={{
                          
                          height: "300px", // Ensures equal height for all cards
                        }}>
                            <Typography variant="h6">{video.title}</Typography>
                            <Typography variant="body2" color="text.secondary" >
                              {video.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Stack>
        </div>
      </div>
      <Contactinfo />
      <AppointmentForm></AppointmentForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
