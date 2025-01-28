import React from "react";

import websiteJson from "../public/website.json";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  Breadcrumbs,
  Grid2,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Header from "@/compoments/Header";
import Footer from "@/compoments/Footer";
import PatientVideos from "@/compoments/Home/PatientVideos";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
const Testimonials = () => {
  return (
    <>
      <Header></Header>
   <Breadcrumbsinfo  services={"Testimonials"}/>
      <Container>
        <Grid2
          container
          spacing={2}
          sx={(theme) => ({
            margin: "20px 0",
          })}
        >
          <PatientVideos patientvideos={websiteJson.Patientvideos} />
        </Grid2>
      </Container>
      <Footer />
    </>
  );
};

export default Testimonials;
