import { useRouter } from "next/router";
import Image from "next/image";
import { DataContext } from "../_app";
import React, { useState, useContext } from "react";
import BlogContent from "@/compoments/Blogs/BlogContent";
import { generateSlug } from "@/compoments/slugify";
import CanonicalTag from "@/compoments/CanonicalTag";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import Grid from "@mui/material/Grid2";
import websiteJson from "../../public/website.json";
import {
  Container,
  Typography,
  Box,
  Grid2,
  Button,
  Stack,
  Breadcrumbs,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Card,
  CardContent,
  Rating,
  Avatar,
  ListItemIcon,
} from "@mui/material";
export default function BlogDetailPage({blogs}) {
  const router = useRouter();
  const { slug } = router.query;
  // if (!blogs) {
  //   return <p>Loading...</p>;
  // }
  // const slug = params.slug.toLowerCase().trim();

  // const blogs = data?.blogs?.find((blog) => {
  //   console.log(blog, "url");
  //   const sanitizedTitle = generateSlug(blog.title);
  //   console.log(sanitizedTitle);
  //   return sanitizedTitle === slug;
  // });

  // console.log(slug);
  // console.log(blogs);
    if (!blogs) {
      return (
        <Container>
          <Typography variant="h4" color="error">
          blogs not found
          </Typography>
          <Button variant="contained" onClick={() => router.push("/")}>
            Go Back to Home
          </Button>
        </Container>
      );
    }

  return (
    <>
      <CanonicalTag
        title={blogs?.metaTitle}
        description={blogs?.metaDescription}
        keywords={blogs?.keywords}
      />
      <Header></Header>
      <Breadcrumbsinfo service={"Blogs"} pagename={blogs.title} />
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  color: "secondary.main",
                  margin: "10px 0",
                }}
              >
                {blogs.title}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary">
                By {blogs.author} | {blogs.date}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "100%" },
                  height: 600,
                  flexShrink: 0,
                  borderRadius: "8px",
                  overflow: "hidden",
                  margin:"10px 0"
                }}
              >
                <Image
                  src={blogs?.blogImage}
                  alt="Best Gastro Hospital In Hyderabad"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </Box>
              <BlogContent content={blogs.content} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}></Grid>
          </Grid>
        </Container>
      </Box>
      {/* <PatientVideos patientvideos={data?.Patientvideos} /> */}

      <Footer></Footer>
    </>
  );
}
export async function getStaticPaths() {
  const data = websiteJson;
  const paths = data.blogs.map((blogs) => ({
    params: { slug:generateSlug(blogs.title) },
  }));

  return { paths, fallback: false  };
}

export async function getStaticProps({ params }) {
  const data = websiteJson;
  const blogs = data.blogs.find(
    (item) => generateSlug(item.title) === params.slug
  );

  if (!blogs) {
    return { notFound: true };
  }

  return {
    props: { blogs },
  };
}
