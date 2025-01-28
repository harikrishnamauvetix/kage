import { useRouter } from "next/router";
import { Typography, Container, Box } from "@mui/material";

import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarMenu from "@/compoments/SidebarMenu";
import Grid from "@mui/material/Grid2";
import Mutipletreatment from "@/compoments/Services/Mutipletreatment";
import Keyservices from "@/compoments/Services/Keyservices";
import OverviewSection from "@/compoments/Services/OverviewSection";
import Symptoms from "@/compoments/Services/Symptoms";
import HealthRisks from "@/compoments/Services/HealthRisks";
import Conditions from "@/compoments/Services/Conditions";
import TreatmentOptions from "@/compoments/Services/TreatmentOptions";
import WhenToSeeSpecialist from "@/compoments/Services/WhenToSeeSpecialist";
import TakeChargeSection from "@/compoments/Services/TakeChargeSection";
import DiagnosedSection from "@/compoments/Services/DiagnosedSection";
import WhyChooseSection from "@/compoments/Services/WhyChooseUs";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import ServicesDetails from "@/compoments/Services/ServicesDetails";
import PatientVideos from "@/compoments/Home/PatientVideos";

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  // States to manage service and loading status
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
  }, [slug, websiteJson]);

  // Show loading until the data is ready
  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  // If no service is found, show the "Service not found" message
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
      <Header></Header>
      <Breadcrumbsinfo
        service={"Speciality Clinics"}
        pagename={content.heading}
      />

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
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <SidebarMenu service={service} slug={slug} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                {content?.heading && (
                  <Grid item xs={12} sx={{ margin: "40px 0 10px 0" }}>
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
                  </Grid>
                )}
                <Grid container spacing={2}>
                  <OverviewSection
                    overview={content?.overview}
                  ></OverviewSection>
                  {content?.overview?.overview2?.heading &&
                    content?.overview?.overview2?.content?.length > 0 && (
                      <>
                        <Grid item xs={12} md={12}>
                          <Typography
                            variant="h5"
                            sx={{ margin: "10px 0", color: "secondary.main" }}
                          >
                            {content?.overview?.overview2?.heading}
                          </Typography>
                          {content?.overview?.overview2?.content.map(
                            (text, index) => (
                              <Typography
                                variant="body1"
                                sx={{ textAlign: "justify" }}
                                paragraph
                                key={index}
                              >
                                {text}
                              </Typography>
                            )
                          )}
                        </Grid>
                      </>
                    )}

                  <Keyservices
                    keyservicesContent={content?.overview?.key_services}
                  />
                  <Symptoms symptoms={content?.overview?.symptoms} />
                  <HealthRisks healthrisks={content?.overview?.health_risks} />
                  <DiagnosedSection diagnosed={content?.overview?.diagnosed} />

                  <Conditions conditions={content?.overview?.conditions} />
                  <ServicesDetails servicesinfo={content?.overview?.services_details}/>
                 
                  <TreatmentOptions
                    treatments={content?.overview?.treatments}
                  />
                  <WhenToSeeSpecialist
                    whenToSee={content?.overview?.when_to_see_specialist}
                  />

                  <Mutipletreatment
                    treatmentContent={content?.overview?.treatments_mutiple}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <WhyChooseSection whyChoose={content?.overview?.why_choose} />
        <TakeChargeSection takeCharge={content?.overview?.take_charge} />
        <PatientVideos  patientvideos={websiteJson?.Patientvideos}/>
        {/* <Faqstabcompoment Faqstabcompoment={content?.overview?.faqs}/> */}
      </Container>

      <Footer></Footer>
    </>
  );
}
