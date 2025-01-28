import React from "react";
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
  Rating ,
  Avatar 
} from "@mui/material";
import websiteJson from "../../public/website.json";
import Link from "next/link";
import DoctorsList from "@/compoments/Doctors/Doctorslist";
import SendIcon from "@mui/icons-material/Send";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";



const Doctors = () => {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
          padding: "10px",
          borderRadius: "8px",
          marginBottom:"30px"
        }}
      >
        <Container>
          <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px", }}>
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
           
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
            Doctors
            </Link>
          </Breadcrumbs>

       
        </Container>
      </Box>
      <Container>
        <Grid2 container spacing={2}>
     
        <DoctorsList doctorsList={websiteJson.doctorsList}/>

        </Grid2>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Doctors;
