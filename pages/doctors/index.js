import React, { useState,useContext } from "react";
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
import { DataContext } from '../_app';
import Link from "next/link";
import DoctorsLists from "../../compoments/Doctors/DoctorsLists";
import SendIcon from "@mui/icons-material/Send";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";

const Doctors = () => {
     const data = useContext(DataContext);
  
  return (
    <>
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
