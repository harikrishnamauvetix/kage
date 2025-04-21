import { useParams, useRouter } from "next/navigation"; 
import Head from "next/head";
import React, { useState,useContext } from "react";

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
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DataContext } from '../_app';

import Link from "next/link";
import Header from "@/compoments/Header";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import IntroductionSection from "../../compoments/About/intro";
import KimsAchievementsTable from "../../compoments/About/awards";
import SidebarMenu from "@/compoments/SidebarMenu";
import AboutsidebarMenu from "@/compoments/aboutSidebar";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";

const Aboutpage = () => {
  const [expanded, setExpanded] = useState(false);
  const data = useContext(DataContext);
  const router = useRouter();
  // const { slug } = router.query;
  const params = useParams();
  if (!params?.slug || !data) {
    return <p>Loading...</p>;
  }

  const slug = params.slug.toLowerCase().trim();

  const about = data?.about?.subpages?.find((service) => {
    const sanitizedTitle = service.title.replace(/\s+/g, "-").toLowerCase().trim();
    return sanitizedTitle === slug;
  });
  
  // const about = data?.about?.subpages?.find((service) => {
  //   const sanitizedTitle = service.title
  //     .replace(/\s+/g, "-")
  //     .toLowerCase()
  //     .trim();
  //   const sanitizedSlug = slug?.toLowerCase()?.trim();

    // console.log("Sanitized Slug:", sanitizedSlug);
    // console.log("Sanitized Service Title:", sanitizedTitle);

  //   return sanitizedTitle === sanitizedSlug;
  // });
  const section = about?.sections;
  //  console.log(section);
  if (!about) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          about not found
        </Typography>
        <Button variant="contained" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <>
     <Head>
      <title>{about?.metaTitle} </title>
      <meta name="description" content={about?.metadescription} />
     
    </Head>
    <CanonicalTag/>
      <Header></Header>
     <Breadcrumbsinfo  sx={{ paddingTop:  { xs: "89px", sm:"100px",md: "220px" } }}
        service={"About Us"}
        pagename={about.title}
      ></Breadcrumbsinfo>

      <Container maxWidth="xl"  >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}>
                {/* <SidebarMenu /> */}
                <AboutsidebarMenu
                  service={data?.about}
                ></AboutsidebarMenu>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
                sx={{ margin: "20px 0" }}
              >
                <Stack sx={{ margin: "10px 0" }}>
                  {section?.introduction && (
                    <IntroductionSection section={section?.introduction} />
                  )}
                  {section?.button && (
                    <Link
                      href={`${section?.button.btnUrl}`}
                      passHref
                      target="_blank"
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "secondary.main",
                        }}
                      >
                        {section?.button.label}
                      </Button>
                    </Link>
                  )}
                  {section?.AwardsAccreditation && (
                    <KimsAchievementsTable
                      section={section?.AwardsAccreditation}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default Aboutpage;
