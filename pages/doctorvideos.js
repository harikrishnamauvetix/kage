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
const Doctorvideos = () => {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Container>
          <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px 0" }}>
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Doctor Videos
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2} sx={{py: 5}}>
          {websiteJson.Patientvideos.map((video, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card>
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                  }}
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <CardContent>
                  <Typography variant="h6">{video.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Doctorvideos;
