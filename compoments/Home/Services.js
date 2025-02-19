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
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={(theme) => ({
                    padding: "10px",
                    height: "100%",
                  })}
                >
                  <Box sx={{ color: "primary.main" }}>
                    <Icon
                      sx={{
                        fontSize: "60px",
                        color: "#1976d2",
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt="Doctor Profile"
                        width={60}
                        height={60}
                      />
                    </Icon>
                  </Box>
                  <Box sx={{ px: 1 }}>
                    <Link
                      href={`/services/${item.title
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
                      href={`/services/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "secondary.main",
                          margin: "10px 0",
                        }}
                      >
                        Read more
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
