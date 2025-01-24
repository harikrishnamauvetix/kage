// components/Breadcrumb.js
import { Breadcrumbs, Link, Container, Box } from "@mui/material";

export default function Breadcrumb({ currentService }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "20px" }}>
          <Link underline="hover" color="inherit" href="/home">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Speciality Clinics
          </Link>
          {currentService && (
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {currentService.heading}
            </Link>
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  );
}

// components/SidebarMenu.js
import { List, ListItem, ListItemText } from "@mui/material";

export default function SidebarMenu({ service, slug }) {
  return (
    <List>
      {/* Add your sidebar menu items here, potentially using data from the 'service' prop */}
      <ListItem button component="a" href={`/services/${slug}`}>
        <ListItemText primary={service?.title} />
      </ListItem>
      {/* ... more list items */}
    </List>
  );
}

// components/OverviewSection.js



// pages/services/[slug].js
import { useRouter } from "next/router";
import { Typography, Container, Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import Breadcrumb from "@/compoments/Breadcrumb";
import SidebarMenu from "@/compoments/SidebarMenu";
import OverviewSection from "@/compoments/OverviewSection";


export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    if (websiteJson && websiteJson.services) {
      const foundSpeciality = websiteJson.services.find(
        (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
      );
      setService(foundSpeciality);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!service) {
    return (
      <Container>
        <Typography variant="h6">Service not found.</Typography>
      </Container>
    );
  }

  const content = service.content;

  if (!content) {
    return (
      <Container>
        <Typography variant="h6">
          Content not available for this service.
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Breadcrumb currentService={content} />
      <Container>
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
              width: "80%",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <SidebarMenu service={service} slug={slug} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 9 }}>
                {/* Heading Section */}
                {content?.heading && (
                  <Grid item xs={12} sx={{ margin: "40px 0" }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      {content.heading}
                    </Typography>
                    {content?.subtext && (
                      <Typography variant="h6">{content.subtext}</Typography>
                    )}
                    {content?.location && (
                      <Typography variant="body1" color="textSecondary">
                        {content.location}
                      </Typography>
                    )}
                  </Grid>
                )}

                <OverviewSection content={content?.overview} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}