import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Header from "../compoments/Header";
import Slider from "../compoments/Slider";
import Highlights from "@/compoments/Highlights";
import Specialities from "@/compoments/Specialities";
import Intro from "@/compoments/Intro";
import AboutUs from "@/compoments/About";
import DoctorsList from "@/compoments/Doctorslist";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
      <Slider></Slider>

<Intro></Intro>
<Specialities></Specialities>
<AboutUs></AboutUs>
<DoctorsList></DoctorsList>
<Highlights></Highlights>

      </div>

<AppointmentForm></AppointmentForm>
<Footer></Footer>
   


      
    </div>
  );
};

export default Home;
