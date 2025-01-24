import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
} from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SendIcon from "@mui/icons-material/Send";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const SpecialityClinics = (props) => {
  return (
    <>
      <Stack>
        <Box sx={{ backgroundColor: "background.default", padding: 4 }}>
          <Container>
            <Box sx={{ mb: 6 }}>
              <Box>
                <Typography
                  component="h2"
                  variant="h4"
                  gutterBottom
                  color="secondary"
                  textAlign="left"
                  sx={{ mb: 3, mt: 3 }}
                >
                  Patient Testimonials
                </Typography>
              </Box>
              <Box>
                {/* Testimonial Cards */}
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {websiteJson.testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <Card
                        sx={{
                          maxWidth: 345,
                          margin: "0 auto",
                          boxShadow: 3,
                          borderRadius: 2,
                          p: 0,
                        }}
                      >
                        <CardContent
                          sx={{
                            maxWidth: 345,
                            padding: "0px !important",
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
                              <Typography
                                variant="caption"
                                color="textSecondary"
                              >
                                {testimonial.title}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
};

export default SpecialityClinics;
