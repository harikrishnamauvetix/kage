import React, { useState,useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid2";

import { DataContext } from '../../pages/_app';
const CourseList = () => {
         const data = useContext(DataContext);
  
  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          backgroundColor: "background.default",
          color: "black",
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: { sm: "left", md: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
              }}
            >
              Academics @ KAGE
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent={"center"}>
            {data?.courseDetails.map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
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
                  <CardContent>
                    <Typography variant="h5" sx={{ color: "primary.main" }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {course.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
                      {course.duration}
                    </Typography>
                    <Link
                      href={`/courses/${course.title
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

export default CourseList;
