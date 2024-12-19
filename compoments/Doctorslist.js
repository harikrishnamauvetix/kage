import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Stack,
  Container,
  Box,
  Grid
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import SendIcon from "@mui/icons-material/Send";
import websiteJson from "../public/website.json";

const DoctorsList = () => {
  return (
    <Stack sx={{backgroundColor: "background.default" , py: 5, px: 3,}}>
      <Container>
      <Box>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          color="secondary"
          textAlign="left"
        >
          Doctors
        </Typography>
      </Box>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        //   style={{ padding: "20px" }}
      >
        {websiteJson.doctorsList.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <Card sx={{ maxWidth: "100%", mx: "auto", height: "350px" }}>
              <CardMedia
                component="img"
                height="140"
                image={doctor.profileImage}
                alt={doctor.name}
              />
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
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>

    </Stack>
  );
};

export default DoctorsList;
