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

// Import Swiper styles
import "swiper/css";
import Contactinfo from "@/compoments/Home/Contactinfo";
import SpecialityClinics from "@/compoments/Home/SpecialityClinics";
import ProceduresList from "@/compoments/Home/ProceduresList";

import DoctorVideos from "@/compoments/Home/DoctorVideos";
import PatientVideos from "@/compoments/Home/PatientVideos";
import DoctorsList from "@/compoments/Doctors/Doctorslist";

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

        <DoctorsList doctorsList={websiteJson.doctorsList}></DoctorsList>
        <ProceduresList procedures={websiteJson.procedures}></ProceduresList>
        <PatientVideos patientvideos={websiteJson.Patientvideos} />
        <DoctorVideos doctorvideos={websiteJson.doctorvideos} />
      </div>
      <Contactinfo />
      <AppointmentForm></AppointmentForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
