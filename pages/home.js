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
import DoctorsLists from "../compoments/Doctors/DoctorsLists";
import AboutSection from "@/compoments/Home/AboutSection";

const Home = () => {
  return (
    <Box>
      <Header></Header>
      <Box>
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
              <img src={slide.image} alt={slide.alt} width={"100%"} />
            </SwiperSlide>
          ))}
        </Swiper>
        <AboutSection homeabout={websiteJson} />

        <SpecialityClinics specialityclinics={websiteJson.services} />

        <DoctorsLists doctorsList={websiteJson.doctorsList}></DoctorsLists>
        <ProceduresList procedures={websiteJson.procedures}></ProceduresList>
        <PatientVideos patientvideos={websiteJson.Patientvideos} />
        <DoctorVideos doctorvideos={websiteJson.doctorvideos} />
      </Box>
      <Contactinfo />
      {/* <AppointmentForm></AppointmentForm> */}
      <Footer></Footer>
    </Box>
  );
};

export default Home;
