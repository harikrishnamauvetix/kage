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
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const SpecialityClinics = (props) => {
  return (
    <>
      <Stack>
        <Box sx={{ backgroundColor: "background.default", padding: 4 }}>
          <Container>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
              }}
            >
              Speciality Clinics at KAGE
            </Typography>

            <Box>
              <Grid container spacing={2} justifyContent="center">
                {props.specialityclinics?.map((service) => (
                  <Grid size={{ xs: 12, sm: 4, md: 4 }} key={service.id}>
                    <Card
                      sx={{
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                        },
                        padding: 2,
                        marginBottom: 1,
                      }}
                    >
                      <CardContent sx={{ padding: "0px !important" }}>
                        <Box
                          sx={{
                            border: "1px solid #eee",
                            borderRadius: "8px",
                            padding: "2px",
                            display: "inline-block",
                          }}
                        >
                          <Image
                            src={service.icon}
                            alt="Doctor Profile"
                            width={60}
                            height={60}
                            quality={100}
                          />
                        </Box>

                        <Link
                          href={`/speciality-clinics/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          passHref
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              color: "primary.main",
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Link>

                        {service.content?.overview?.content[0] && (
                          <Typography variant="body1" paragraph>
                            {service.content.overview.content[0].length > 80
                              ? `${service.content.overview.content[0].slice(
                                  0,
                                  80
                                )}...`
                              : service.content.overview.content[0]}
                          </Typography>
                        )}
                        <Link
                          href={`/speciality-clinics/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          passHref
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "secondary.main",
                              marginTop:"15px"
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
};

export default SpecialityClinics;
