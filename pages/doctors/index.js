import React, { useState, useContext } from "react";
import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  Grid2,
  Button,
  Stack,
  Breadcrumbs,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Rating,
  Avatar,
} from "@mui/material";
import { DataContext } from "../_app";
import Link from "next/link";
import DoctorsLists from "../../compoments/Doctors/DoctorsLists";
import SendIcon from "@mui/icons-material/Send";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";

const Doctors = () => {
  const data = useContext(DataContext);

  return (
    <>
    
 
      <CanonicalTag
        title={data?.doctorsPage?.metaTitle}
        description={data?.doctorsPage?.metaDescription}
        keywords={data?.doctorsPage?.keywords}
      />
      <Header></Header>
      <Breadcrumbsinfo service={"Doctors"}></Breadcrumbsinfo>
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <DoctorsLists doctorsList={data?.doctorsList} />
        </Grid2>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Doctors;
