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
const FellowShipProgram = (props) => {
  return (
    <>
      <Box
       
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          backgroundColor: "background.default",
          color: "black",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
              textAlign: { sm: "left", md: "center" },
            }}
          >
            <Typography component="h2" variant="h4" color="secondary.main">
            Fellow Ship Program
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {props?.advancedprocedures?.map((item, index) => (
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
                        src={item?.icon}
                        alt="Fellow Ship Program"
                        width={60}
                        height={60}
                      />
                    </Icon>
                  </Box>
                  <Box sx={{ px: 1 }}>
                    <Link
                      href={`/advanced-procedures/${item.title
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
                          height: "60px", 
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>

                    {item.sections?.[0]?.content &&
                    Array.isArray(item.sections[0].content) ? (
                      <Typography
                        key={0}
                        variant="body1"
                        sx={{ color: "#000", marginBottom: "10px" }}
                      >
                        {item.sections[0].content[0].length > 100
                          ? `${item.sections[0].content[0].slice(0, 100)}...`
                          : item.sections[0].content[0]}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: "#000", marginBottom: "10px" }}
                      >
                        {item.sections?.[0]?.content}
                      </Typography>
                    )}

                    <Link
                      href={`/advanced-procedures/${item.title
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

export default FellowShipProgram;
