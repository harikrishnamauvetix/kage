import React, { useState,useContext } from "react";
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
import data from "../public/website.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SendIcon from "@mui/icons-material/Send";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { DataContext } from './_app';

// Import Swiper styles
import "swiper/css";
import Contactinfo from "@/compoments/Home/Contactinfo";
import SpecialityClinics from "@/compoments/Home/SpecialityClinics";
import ProceduresList from "@/compoments/Home/ProceduresList";

import DoctorVideos from "@/compoments/Home/DoctorVideos";
import PatientVideos from "@/compoments/Home/PatientVideos";
import DoctorsLists from "../compoments/Doctors/DoctorsLists";
import AboutSection from "@/compoments/Home/AboutSection";
import Services from "@/compoments/Home/Services";
import CourseList from "@/compoments/Home/CourseList";

const Home = () => {
  const data = useContext(DataContext);

  return (
    <Box>
      <Header></Header>
      <Box>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={data.bannerImage.length > 1}
          pagination={{ clickable: true }}

          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {data.bannerImage.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.alt} width={"100%"} />
            </SwiperSlide>
          ))}
        </Swiper>
       
          <AboutSection homeabout={data} />

          <SpecialityClinics
            specialityclinics={data.specialityclinics}
          />

          <DoctorsLists doctorsList={data.doctorsList}></DoctorsLists>
          <ProceduresList
            advancedprocedures={data.advancedprocedures}
          ></ProceduresList>
          <Services services={data.services} />
          <CourseList courselist={data.courseDetails} />
          <Container>
          <PatientVideos patientvideos={data.Patientvideos} />
          </Container>
          <DoctorVideos doctorvideos={data.doctorvideos} />

      </Box>
      <Contactinfo Contactinfo={data.hospitalInfo} />
      {/* <AppointmentForm></AppointmentForm> */}
      <Footer></Footer>
    </Box>
  );
};

export default Home;
