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
          {websiteJson.doctorsList.map((doctor, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{ margin:"20px 0" }}
              >
                <div key={doctor.id}>
                  <Card sx={{ maxWidth: "100%", mx: "auto", height: "480px" }}>
                    <Link href={`/doctors/${doctor.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`} passHref>
                      <CardMedia
                        component="img"
                        height="270"
                        image={`/${doctor.profileImage}`}
                        alt={doctor.name}
                      />
                    </Link>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.qualifications}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.designation}
                      </Typography>
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{ marginTop: "10px" }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Doctors;
