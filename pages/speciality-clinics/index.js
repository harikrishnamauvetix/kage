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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AccessAlarm, Description, CheckCircle } from "@mui/icons-material"; // Import icons of your choice

import { useState, useEffect } from "react";
import websiteJson from "../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarMenu from "@/compoments/SidebarMenu";
import SpecialityClinics from "@/compoments/Home/SpecialityClinics";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";

export default function specialityList() {
  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo service={websiteJson.services.page}  />

      <SpecialityClinics specialityclinics={websiteJson.services} />

      <Footer></Footer>
    </>
  );
}
