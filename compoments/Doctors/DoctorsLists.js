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
import Link from "next/link";
import Grid from "@mui/material/Grid2";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const DoctorsList = (props) => {
  const truncateByWords = (text, wordLimit = 50) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <>
      <Stack sx={{ py: 5, px: 3 }}>
        <Container>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
              }}
            >
              Expert Team Of Doctors
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {props?.doctorsList?.map((doctor) => (
              <Grid
                key={doctor.id} // Add a unique key here
                size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card>
                  <Link
                    href={`/doctors/${doctor.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    passHref
                  >
                    <CardMedia
                      component="img"
                      height="270"
                      image={`/${doctor.profileImage}`}
                      alt={doctor.name}
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ height: "180px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                          color: "primary.main",
                          height: "60px", // Fixed height for consistency
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, // Limit to 2 lines
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {doctor.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {truncateByWords(doctor.qualifications, 50)}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {truncateByWords(doctor.designation, 50)}
                      </Typography>
                    </Box>

                    <Link
                      href={`/doctors/${doctor.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: "10px",
                          width: "100%",
                          backgroundColor: "secondary.main",
                        }}
                      >
                        Know More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default DoctorsList;
