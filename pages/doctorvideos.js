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
  Grid,
} from "@mui/material";
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
        <Grid2
          container
          spacing={2}
          sx={(theme) => ({
            margin: "20px 0",
          })}
        >
          {websiteJson.testimonials.map((testimonial) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={testimonial.index}>
              <Stack
                direction="column"
               
                spacing={3}
                useFlexGap
           
              >
                <Card>
                  <CardMedia
                    component="iframe"
                    alt="Doctor Video"
                    height="200"
                    src="https://www.youtube.com/embed/video_id" // replace with real video URL
                    title="Doctor's Video"
                  />
                  <CardContent>
                    <Typography variant="h6">Doctor 1</Typography>
                    <Typography variant="body2" color="text.secondary">
                      A brief description of the video or doctor.
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Footer />
    </>
  );
};

export default Doctorvideos;
