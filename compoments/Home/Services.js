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
import Image from "next/image";
import Link from "next/link";
const Services = (props) => {
  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },

          color: "black",
        }}
      >
        <Container>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
                textAlign: "left",
              }}
            >
              Advanced Equipments & Diagnosis
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {props?.services?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                    <Link
                      href={`/advanced-equipment/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
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
                        {item.title}
                      </Typography>
                    </Link>
                    {item.content &&
                      item.content.map((contentItem, cIndex) => (
                        <div key={cIndex}>
                          <Typography
                            variant="body1"
                            gutterBottom
                            sx={{ textAlign: "justify" }}
                          >
                            {/* {contentItem?.description} */}
                            {contentItem?.description.length > 100
                              ? `${contentItem?.description.slice(0, 100)}...`
                              : contentItem?.description}
                          </Typography>
                        </div>
                      ))}

                    <Link
                      href={`/advanced-equipment/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "secondary.main",
                          marginTop: "15px",
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
        </Container>
      </Box>
    </>
  );
};

export default Services;
