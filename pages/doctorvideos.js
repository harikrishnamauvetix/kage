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
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Header from "@/compoments/Header";
import Footer from "@/compoments/Footer";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import DoctorVideos from "@/compoments/Home/DoctorVideos";
const Doctorvideos = () => {
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo service={"Doctor's Talk's"} />
      <DoctorVideos doctorvideos={websiteJson.doctorvideos} />
      <Footer />
    </>
  );
};

export default Doctorvideos;
