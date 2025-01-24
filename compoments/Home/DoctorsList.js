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
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const DoctorsList = (props) => {
  return (
    <>
      <Stack sx={{ py: 5, px: 3, }} >
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
            <Grid container spacing={3} justifyContent="center">
              {props.doctorsList.map((doctor) => (
                <Grid
                  key={doctor.id} // Add a unique key here
                  size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
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
                        <Typography gutterBottom variant="h5" component="div">
                          {doctor.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {doctor.qualifications}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {doctor.designation}
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
                          sx={{ marginTop: "10px", width: "100%" }}
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
