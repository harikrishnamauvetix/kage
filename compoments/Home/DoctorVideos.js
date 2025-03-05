import React, { useState,useContext } from "react";
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
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Link from "next/link";
const DoctorVideos = (props) => {
  return (
    <>
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
                {props?.doctorvideos?.map((video, index) => (
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
      </Stack>
    </>
  );
};

export default DoctorVideos;
