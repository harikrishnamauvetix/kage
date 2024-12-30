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
import websiteJson from "../../public/website.json";
import Link from "next/link";

const Doctors = () => {
  return (
    <Container>
      {websiteJson.doctorsList.map((doctor) => (
        <div key={doctor.id}>
          <Card sx={{ maxWidth: "100%", mx: "auto", height: "500px" }}>
            <Link
              href={`doctor.id}`}
              passHref
            >
              <CardMedia
                component="img"
                height="270"
                image={doctor.profileImage}
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
    </Container>
  );
};

export default Doctors;
