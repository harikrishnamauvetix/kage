import Head from "next/head";

import React, { useState, useContext } from "react";
import websiteJson from "../../public/website.json";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Grid from "@mui/material/Grid2";
import { useRouter } from "next/router";
import Header from "@/compoments/Header";
import Footer from "@/compoments/Footer";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
const CourseDetail = ({courseDetails}) => {
  const router = useRouter();
  const { slug } = router.query;
  if (!courseDetails) {
    return <p>Loading...</p>;
  }
  // const doctor="dd"
  // console.log(data);
  // const doctor="dd"
  // console.log(data?.courseDetails);
  // Fetch doctor details by matching the name from the JSON data
  // const courseDetails = data?.courseDetails?.find(
  //   (course) => course.title.replace(/\s+/g, "-").toLowerCase() === slug
  // );
  if (!courseDetails) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          courseDetails not found
        </Typography>
        <Button variant="contained" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Container>
    );
  }
  console.log(courseDetails);
  return (
    <>
      <Head>
        <title>{data?.courseDetails?.metaTitle} </title>
        <meta
          name="description"
          content={data?.courseDetails?.metaDescription}
        />
      </Head>
      <Header />
      <Breadcrumbsinfo service={"Courses"} pagename={courseDetails.title} />
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <Box sx={{ margin: "20px 0" }}>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                {courseDetails.title}
              </Typography>
              {courseDetails.course_description.map((section, idx) => (
                <div key={idx}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      textTransform: "capitalize",
                      margin: "20px 0",
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.listItems ? (
                    <List disablePadding>
                      {section.listItems.map((item, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={
                              <>
                                <Typography
                                  variant="subtitle1"
                                  component="span"
                                  style={{ fontWeight: "bold" }}
                                >
                                  {item.title}:
                                </Typography>
                                <Typography variant="body1" component="span">
                                  {` ${item.description}`}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : section.topics ? (
                    <List disablePadding>
                      {section.topics.map((topic, index) => (
                        <ListItem key={index}>
                          <ListItemIcon
                            sx={{ minWidth: "10px", marginRight: "5px" }}
                          >
                            {topic?.icon ? (
                              <img
                                src={topic.icon}
                                alt="Hospital Icon"
                                width="40"
                                height="40"
                                style={{
                                  borderRadius: "50%",
                                  objectFit: "contain",
                                }}
                              />
                            ) : (
                              <ArrowForwardIosIcon
                                sx={{ color: "secondary.main" }}
                              />
                            )}
                          </ListItemIcon>
                          <ListItemText primary={topic} />
                        </ListItem>
                      ))}
                    </List>
                  ) : section.faculty ? (
                    <Grid container>
                      {section.faculty.map((topic, index) => (
                        <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                          <ListItem>
                            <ListItemIcon
                              sx={{ minWidth: "10px", marginRight: "5px" }}
                            >
                              {topic?.icon ? (
                                <img
                                  src={topic.icon}
                                  alt="Hospital Icon"
                                  width="40"
                                  height="40"
                                  style={{
                                    borderRadius: "50%",
                                    objectFit: "contain",
                                  }}
                                />
                              ) : (
                                <ArrowForwardIosIcon
                                  sx={{ color: "secondary.main" }}
                                />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              primary={topic.name}
                              secondary={topic.designation}
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                  ) : section?.Trainingcontent ? (
                    section?.Trainingcontent?.map((item, idx) => (
                      <List disablePadding key={idx}>
                        <ListItem>
                          <ListItemIcon
                            sx={{ minWidth: "10px", marginRight: "5px" }}
                          >
                            <ArrowForwardIosIcon
                              sx={{ color: "secondary.main" }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItem>

                        {/* Nested List */}
                        <List disablePadding sx={{ paddingLeft: 4 }}>
                          {item.details.map((detail, i) => (
                            <ListItem key={i}>
                              <ListItemIcon
                                sx={{ minWidth: "10px", marginRight: "5px" }}
                              >
                                <ArrowForwardIosIcon
                                  sx={{ color: "secondary.main" }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={detail} />
                            </ListItem>
                          ))}
                        </List>
                      </List>
                    ))
                  ) : (
                    <Typography sx={{ margin: "10px 0", textAlign: "justify" }}>
                      {section.description}
                    </Typography>
                  )}
                </div>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};
export async function getStaticPaths() {
  const data = websiteJson;
  const paths = data.courseDetails.map((service) => ({
    params: { slug: service.title.replace(/\s+/g, "-").toLowerCase() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const data = websiteJson;
  const courseDetails = data.courseDetails.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === params.slug
  );

  if (!courseDetails) {
    return { notFound: true };
  }

  return {
    props: { courseDetails },
  };
}

export default CourseDetail;
