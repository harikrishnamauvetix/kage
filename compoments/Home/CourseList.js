import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container,
  Box
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import websiteJson from "../../public/website.json";
const CourseList = () => {
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
            Courses
            </Typography>
          </Box>
          <Grid container spacing={3}>
          {websiteJson?.courseDetails.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card>
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
                        margin: "10px 0",
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
