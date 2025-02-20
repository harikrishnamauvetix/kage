import { useRouter } from "next/router";
import React, { useState } from "react";

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
import websiteJson from "../../public/website.json";
import Link from "next/link";
import Header from "@/compoments/Header";
import AppointmentForm from "@/compoments/Bookappointment";
import Footer from "@/compoments/Footer";
import IntroductionSection from "../../compoments/About/intro";
import KimsAchievementsTable from "../../compoments/About/awards";
import SidebarMenu from "@/compoments/SidebarMenu";
import AboutsidebarMenu from "@/compoments/aboutSidebar";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";

const Aboutpage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [expanded, setExpanded] = useState(false);
  // const doctor="dd"
  //console.log(websiteJson);
  // const doctor="dd"
  //console.log(websiteJson.about.subpages);
  //   const about="ddd";
  // Fetch doctor details by matching the name from the JSON data
  //console.log("Slug:", slug);
  const about = websiteJson?.about?.subpages?.find((service) => {
    const sanitizedTitle = service.title
      .replace(/\s+/g, "-")
      .toLowerCase()
      .trim();
    const sanitizedSlug = slug?.toLowerCase()?.trim();

    // console.log("Sanitized Slug:", sanitizedSlug);
    // console.log("Sanitized Service Title:", sanitizedTitle);

    return sanitizedTitle === sanitizedSlug;
  });
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
      <Header></Header>
      <Breadcrumbsinfo
        service={"About Us"}
        pagename={about.title}
      ></Breadcrumbsinfo>

      <Container maxWidth="xl">
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
              <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                {/* <SidebarMenu /> */}
                <AboutsidebarMenu
                  service={websiteJson?.about}
                ></AboutsidebarMenu>
              </Grid>
              <Grid size={{ xs: 12, sm: 9, md: 8 }} sx={{ margin: "20px 0" }}>
                <Stack sx={{ margin: "10px 0" }}>
                  {section?.introduction && (
                    <IntroductionSection section={section?.introduction} />
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
