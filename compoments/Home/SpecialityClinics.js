import React, { useState, useContext } from "react";
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
import { generateSlug } from "../slugify";
const SpecialityClinics = (props) => {
  return (
    <>
      <Stack>
        <Box sx={{ backgroundColor: "background.default", padding: 4 }}>
          <Container>
            <Typography
              variant="h2"
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
                  <Grid
                    size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
                    key={service.id}
                  >
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
                        <Image
                          src={service.icon}
                          alt="Best Gastro Hospital In Hyderabad"
                          width={60}
                          height={60}
                          quality={100}
                        />

                        <Link
                          href={`/speciality-clinics/${generateSlug(
                            service.title
                          )}`}
                          passHref
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              color: "primary.main",
                              height: "55px",
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

                        <Button
                          href={`/speciality-clinics/${generateSlug(
                            service.title
                          )}`}
                          variant="contained"
                          component={Link}
                          sx={{
                            backgroundColor: "secondary.main",
                            marginTop: "15px",
                          }}
                        >
                          Read more
                        </Button>
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
