import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
  Box,
  Button,
  Item,
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
  CardActionArea,
  Breadcrumbs,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SidebarMenu from "@/compoments/SidebarMenu";
import Symptoms from "@/compoments/SubService/Symptoms";
import CausesAndRisk from "@/compoments/SubService/CausesAndRisk";
import Complications from "@/compoments/SubService/Complications";
import Diagnosis from "@/compoments/SubService/Diagnosis";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import Treatment from "@/compoments/SubService/Treatment";
import WhyToChoose from "@/compoments/SubService/WhyToChoose";
import SubServiceListItems from "@/compoments/SubService/SubServiceListItems";
import PatientVideos from "@/compoments/Home/PatientVideos";
import Faq from "@/compoments/Services/Faq";

export default function SubServicePage() {
  const router = useRouter();
  const { slug, subpage } = router.query;
  console.log(slug, subpage);
  const [service, setService] = useState(null);
  const [subService, setSubService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subServicelist, setSubServiceList] = useState(null);

  useEffect(() => {
    if (!slug || !subpage) {
      console.log("Slug or subpage is missing");
      return;
    }

    // Normalize both slug and page to ensure they match despite different formats
    const normalizedSlug = slug.replace(/-/g, " "); // Replace dashes with spaces
    const normalizedSubpage = subpage.replace(/-/g, " "); // Normalize subpage as well

    // Find the service based on the normalized slug
    const foundService = websiteJson.specialityclinics.find(
      (s) => s.page.toLowerCase() === normalizedSlug.toLowerCase()
    );
    // console.log("Found Service:", foundService);
    // console.log("websiteJson", websiteJson.services);
    // console.log("slug", normalizedSlug);
    // console.log("subpage", normalizedSubpage);
    if (!foundService) {
      setService(null);
      setLoading(false);
      return;
    }

    // Find the subpage based on the normalized subpage
    const foundSubService = foundService.subpages.find(
      (sub) => sub.page.toLowerCase() === normalizedSubpage.toLowerCase()
    );
    console.log("Found SubService:", foundSubService);

    if (foundSubService) {
      setService(foundService);
      setSubService(foundSubService);
      setSubServiceList(foundSubService.sections.listof_sub_sub_services);
    } else {
      setSubService(null);
    }

    setLoading(false);
  }, [slug, subpage]);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  // If service or subservice is not found
  if (!service) {
    return (
      <Container>
        <Typography variant="h6">Service not found.</Typography>
      </Container>
    );
  }

  if (!subService) {
    return (
      <Container>
        <Typography variant="h6">Sub-service not found.</Typography>
      </Container>
    );
  }

  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo
        service={"Speciality Clinics"}
        pagename={subService?.title}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 3 }}>
              <SidebarMenu
                service={service}
                slug={slug}
                subService={subService}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 8 }}>
              {subService?.title && (
                <Grid item xs={12} sx={{ margin: "40px 0 0px 0" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {subService?.title}
                  </Typography>
                </Grid>
              )}
             
              {subService.sections && subService.sections.introduction && (
                <Grid container>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Typography
                      variant="h6"
                      sx={{ margin: "10px 0", color: "secondary.main" }}
                    >
                      {subService.sections.introduction?.heading}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "justify" }}>
                      {subService.sections.introduction?.description}
                    </Typography>
                  </Grid>
                </Grid>
              )}
                {subServicelist?.map((item) => {
                const serviceInfo = subService?.sections?.services_info[item];

                if (serviceInfo) {
                  return (
                    <div key={item}>
                      {serviceInfo?.heading && (
                        <Grid container>
                          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                margin: "10px 0",
                                color: "secondary.main",
                              }}
                            >
                              {serviceInfo?.heading}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ textAlign: "justify" }}
                            >
                              {serviceInfo?.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                      <Symptoms symptoms={serviceInfo?.Symptoms} />
                      <CausesAndRisk
                        causesAndRisk={serviceInfo?.Causes_and_Risk}
                      />
                      <Complications
                        complications={serviceInfo?.Complications}
                      />
                    </div>
                  );
                }
                return null;
              })}
              <Symptoms symptoms={subService?.sections?.Symptoms} />
              <CausesAndRisk
                causesAndRisk={subService?.sections?.Causes_and_Risk}
              />
              <Complications
                complications={subService?.sections?.Complications}
              />

              {subService?.sections?.conditions && (
                <>
                  <Typography
                    variant="h6"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {subService?.sections?.conditions?.heading}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                    {subService?.sections?.conditions?.description}
                  </Typography>
                  <SubServiceListItems
                    servicelist={subService?.sections?.conditions?.list}
                  />
                </>
              )}

              {subService?.sections?.procedure && (
                <>
                  <Typography
                    variant="h6"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {subService?.sections?.procedure.heading}{" "}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "justify" }}>
                    {subService?.sections?.procedure.description}
                  </Typography>
                </>
              )}
              {subService?.sections?.advantages && (
                <>
                  <Typography
                    variant="h6"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {subService?.sections?.advantages?.heading}
                  </Typography>
                  <List>
                    {subService?.sections?.advantages && (
                      <SubServiceListItems
                        servicelist={subService?.sections?.advantages?.list}
                      />
                    )}
                  </List>
                </>
              )}
              <Diagnosis
                diagnosis={subService?.sections?.Diagnosis}
                introduction={subService?.sections?.introduction}
              />
              <Treatment treatment={subService?.sections?.Treatment} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 1 }}></Grid>
          </Grid>
        </Box>
        <Stack>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6, md: 10 }}>
            
            </Grid>
          </Grid>
        </Stack>

        <WhyToChoose whytochoose={subService?.sections?.Why_to_choose}  />
        {/* <PatientVideos patientvideos={websiteJson?.Patientvideos} /> */}
      </Container>

      <Footer></Footer>
    </>
  );
}
