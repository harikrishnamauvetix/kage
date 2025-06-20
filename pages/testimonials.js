import React, { useState, useContext } from "react";
import Head from "next/head";

import { DataContext } from "./_app";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  Breadcrumbs,

  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,

} from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid2";

import Header from "@/compoments/Header";
import Footer from "@/compoments/Footer";
import PatientVideos from "@/compoments/Home/PatientVideos";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";
const Testimonials = () => {
  const data = useContext(DataContext);
  return (
    <>
    <Head>
        <title>{data?.testimonialsPage?.metaTitle} </title>
        <meta name="description" content={data?.testimonialsPage?.metadescription} />
        <meta name="keywords" content={data?.testimonialsPage?.keywords} />
      </Head>
      <CanonicalTag/>
      <Header></Header>
     <Breadcrumbsinfo  pagename={"Testimonials"} />
      <Container >
        <Grid
          container
          spacing={2}
          sx={(theme) => ({
            margin: "20px 0",
          })}
        >
          <Stack>
            <Box sx={{ py: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "secondary.main",
                  textAlign: "left",
                }}
              >
                Patient Testimonials
              </Typography>
              <Grid container spacing={2}>
                {data?.Patientvideos?.map((video, index) => (
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
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                          }}
                        />
                      </div>
                      <CardContent
                        sx={{
                          height: "220px", // Ensures equal height for all cards
                        }}
                      >
                        <Typography variant="h6">{video.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {video.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Testimonials;
