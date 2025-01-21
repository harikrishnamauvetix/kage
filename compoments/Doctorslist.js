import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  Grid2,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
  Grid 
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import Link from "next/link";

const DoctorsList = () => {
  return (
    <>
      {websiteJson.doctorsList.map((doctor) => (
        <div key={doctor.id}>
          <Card sx={{ maxWidth: "100%", mx: "auto", height: "500px" }}>
            <Link
              href={`/doctor/${doctor.name.replace(/\s+/g, "-").toLowerCase()}`}
              passHref
            >
              <CardMedia
                component="img"
                height="270"
                image={`/${doctor.profileImage}`}
             
                alt={doctor.name}
              />
            </Link>
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
        </div>
      ))}
    </>
  );
};

export default DoctorsList;
