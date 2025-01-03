import React from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Box,
  Grid2,
  Button,
  Stack,
  Breadcrumbs,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Rating,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import websiteJson from "../../public/website.json";
import Link from "next/link";
import Header from "@/compoments/Header";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const Procedures = () => {
  const router = useRouter();
  const { slug } = router.query;
  // const doctor="dd"
  console.log(websiteJson);
  // const doctor="dd"
  console.log(websiteJson.items);
  // Fetch doctor details by matching the name from the JSON data
  const procedures = websiteJson.items.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!procedures) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          Doctor not found
        </Typography>
        <Button variant="contained" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Container>
    );
  }

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
          <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px" }}>
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Procedures
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {procedures.title}
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", position: "relative", margin: "40px 0" }}
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
                  alt="Logo"
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "secondary.main",
                  textAlign: "center",
                  padding: "20px 0",
                }}
              >
                {" "}
                {procedures.title}
              </Typography>

              <Box mt={2}>
                <Typography>{procedures.description}</Typography>
                <Typography>
                  Nullam luctus ultricies tortor in tempus. Aenean condimentum,
                  libero eget sodales bibendum, dolor metus sodales felis, vel
                  egestas erat lacus ac sem. Maecenas ornare mauris non finibus
                  dignissim. Etiam gravida vitae sem eu ultrices. Vestibulum
                  eleifend facilisis nisl at rhoncus. Etiam dictum mi vel lectus
                  consequat, vitae eleifend dolor egestas. In gravida imperdiet
                  facilisis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Proin quis ex ac ipsum
                  pretium posuere sit amet non massa. Cras vel dolor luctus,
                  varius neque nec, condimentum ligula. Donec sit amet dictum
                  purus.
                </Typography>
                <Typography>
                  Nullam luctus ultricies tortor in tempus. Aenean condimentum,
                  libero eget sodales bibendum, dolor metus sodales felis, vel
                  egestas erat lacus ac sem. Maecenas ornare mauris non finibus
                  dignissim. Etiam gravida vitae sem eu ultrices. Vestibulum
                  eleifend facilisis nisl at rhoncus. Etiam dictum mi vel lectus
                  consequat, vitae eleifend dolor egestas. In gravida imperdiet
                  facilisis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Proin quis ex ac ipsum
                  pretium posuere sit amet non massa. Cras vel dolor luctus,
                  varius neque nec, condimentum ligula. Donec sit amet dictum
                  purus.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer></Footer>
    </>
  );
};

export default Procedures;
