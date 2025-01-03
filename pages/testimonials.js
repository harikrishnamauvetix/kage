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
const Testimonials = () => {
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
              Patient Testimonials
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>
      <Container>
        <Grid2 container spacing={2}  sx={(theme) => ({
                margin:"20px 0"
                })}>
          {websiteJson.testimonials.map((testimonial) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={testimonial.index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={(theme) => ({
                  color: "#fff",
                  p: 3,
                  height: "100%",
                })}
              >
                <CardContent
                  sx={{
                    padding: "0px 0 !important",
                   
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 1, lineHeight: 1.6, p: 1 }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    precision={0.5}
                    readOnly
                    sx={{
                      p: 1,
                      color: "primary.main",
                    }}
                  />

                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      lineHeight: 1.6,
                      p: 1,
                      backgroundColor: "secondary.main",
                      color: "#fff",
                    }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        border: "2px solid #ff5722",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: "#fff" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Footer />
    </>
  );
};

export default Testimonials;
