import React, { useState,useContext } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
  Box,
  Button,
  Item,
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
  Breadcrumbs,
  Grid2,
  Stack,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AccessAlarm, Description, CheckCircle } from "@mui/icons-material"; // Import icons of your choice


import { DataContext } from '../_app';
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarMenu from "@/compoments/SidebarMenu";
import SpecialityClinics from "@/compoments/Home/SpecialityClinics";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";

export default function SpecialityList() {
     const data = useContext(DataContext);
  
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo pagename={"Speciality Clinics At KAGE"}  />

      <SpecialityClinics specialityclinics={data?.specialityclinics} />

      <Footer></Footer>
    </>
  );
}
