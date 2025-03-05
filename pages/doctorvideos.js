import React, { useState,useContext } from "react";

import { DataContext } from './_app';
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
  const data = useContext(DataContext);
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo pagename={"Doctor's Talk's"} />
      <DoctorVideos doctorvideos={data.doctorvideos} />
      <Footer />
    </>
  );
};

export default Doctorvideos;
