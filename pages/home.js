import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  Grid2,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
  Grid,
} from "@mui/material";
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

const Home = () => {
  return (
    <div >
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

        <Stack>
          <Box sx={{ backgroundColor: "background.default", padding: 4 }}>
            <Container>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "secondary.main",
                }}
              >
                Speciality Clinics at KAGE
              </Typography>
              {/* <Typography variant="body1" sx={{ marginBottom: 4, color: "#555" }}>
              We are privileged to work with hundreds of future-thinking medical
              professionals.
            </Typography> */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: 3,
                }}
              >
                {websiteJson.services.map((service) => (
                  <Card
                    key={service.id}
                    sx={{
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
                      padding: 2,
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Icon
                        sx={{
                          fontSize: "40px",
                          color: "#1976d2",
                          marginBottom: 2,
                        }}
                      >
                        {service.icon}
                      </Icon>
                      <Link
                        href={`/speciality-clinics/${service.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        passHref
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: 1,
                            color: "primary.main",
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Link>

                      {/* <Typography variant="body2" sx={{ color: "#555" }}>
                      {service.description}
                    </Typography> */}
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Container>
          </Box>
        </Stack>
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
            <Grid container spacing={3}>
              {websiteJson.doctorsList.slice(0, 8).map((doctor) => (
                <Grid item xs={12} sm={6} md={3} key={doctor.id}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "auto", // Auto height on mobile
                      maxWidth: "100%",
                      mx: "auto",
                      "@media (min-width: 768px)": {
                        height: "100%", // Equal height on desktop
                      },
                    }}
                  >
                    <Link
                      href={`/doctors/${doctor.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <CardMedia
                        component="img"
                        height="270"
                        image={doctor.profileImage}
                        alt={doctor.name}
                      />
                    </Link>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.qualifications}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.designation}
                      </Typography>
                      <Link
                        href={`/doctors/${doctor.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        passHref
                      >
                        <Button variant="contained" sx={{ marginTop: "10px" }}>
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
              <Grid2 container spacing={2}>
                {websiteJson?.procedures?.map((item, index) => (
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Stack
                      direction="column"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={(theme) => ({
                        color: "#fff",

                        height: "100%",
                      })}
                    >
                      <Box sx={{ color: "primary.main" }}>
                        <Link href={``} passHref>
                          <CardMedia
                            component="img"
                            height="270"
                            image={item.icon}
                          />
                        </Link>
                      </Box>
                      <Box sx={{ p: 2 }}>
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

                        {/* <Typography variant="body2" sx={{ color: "black" }}>
                          {item.description}
                        </Typography> */}
                      </Box>
                    </Stack>
                  </Grid2>
                ))}
              </Grid2>
            </Container>
          </Box>
          <Stack sx={{ backgroundColor: "background.default", py: 5, px: 3 }}>
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
                  Patient Videos
                </Typography>
                {/* Doctor Videos Section */}
                <Box>
                  <Grid container spacing={4}>
                    {/* Sample Doctor Video 1 */}
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Doctor Video"
                          height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Doctor's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Patient 1</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video .
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Sample Patient  Video 2 */}
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Patient  Video"
                        height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Patient 's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Patient 2</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Patient  Video"
                         height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Patient 's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Patient 2</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video .
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    {/* Add more Doctor videos as needed */}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Stack>
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
          <Stack sx={{ backgroundColor: "background.default", py: 5, px: 3 }}>
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
                  <Grid container spacing={4}>
                    {/* Sample Doctor Video 1 */}
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Doctor Video"
                          height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Doctor's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Doctor 1</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video or doctor.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    {/* Sample Doctor Video 2 */}
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Doctor Video"
                            height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Doctor's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Doctor 2</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video or doctor.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                      <Card>
                        <CardMedia
                          component="iframe"
                          alt="Doctor Video"
                           height="400"
                          src="https://www.youtube.com/embed/video_id" // replace with real video URL
                          title="Doctor's Video"
                        />
                        <CardContent>
                          <Typography variant="h6">Doctor 2</Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description of the video or doctor.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    {/* Add more Doctor videos as needed */}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Stack>
        </div>
      </div>
      <AppointmentForm></AppointmentForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
