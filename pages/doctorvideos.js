import React, { useState, useContext } from "react";

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
      <Stack sx={{ backgroundColor: "background.default", py: 5 }}>
        <Container>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
              }}
            >
              Doctor's Talk's
            </Typography>
            {/* Doctor Videos Section */}
            <Box>
              <Grid container spacing={2}>
                {data?.doctorvideos?.map((video, index) => (
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
                      <CardContent
                        sx={{
                          height: "140px", // Ensures equal height for all cards
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
          </Box>
        </Container>
      </Stack>{" "}
      <Footer />
    </>
  );
};

export default Doctorvideos;
