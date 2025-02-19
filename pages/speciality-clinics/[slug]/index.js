import { useRouter } from "next/router";
import { Typography, Container, Box, Stack } from "@mui/material";

import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";

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
import Faq from "@/compoments/Services/Faq";

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  // States to manage service and loading status
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    if (websiteJson && websiteJson.specialityclinics) {
      const foundSpeciality = websiteJson.specialityclinics.find(
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

  const serviceContent = () => {
    return (
      <>
        {content?.heading && (
          <Grid size={{ xs: 12 }} sx={{ margin: "40px 0 0px 0" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              {content.heading}
            </Typography>
            {content?.subtext && (
              <Typography
                variant="body1"
                sx={{ textAlign: "justify",margin:"0px" }}
                paragraph
              >
                {content.subtext}
              </Typography>
            )}
          </Grid>
        )}

        <Grid container spacing={2}>
          <OverviewSection overview={content?.overview} />

          {content?.overview?.overview2?.heading &&
            content?.overview?.overview2?.content?.length > 0 && (
              <Grid size={{ xs: 12 }}>
                <Typography variant="h6" sx={{ color: "secondary.main" }}>
                  {content?.overview?.overview2?.heading}
                </Typography>
                {content?.overview?.overview2?.content.map((text, index) => (
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "justify" , margin:"0px"}}
                    paragraph
                    key={index}
                  >
                    {text}
                  </Typography>
                ))}
              </Grid>
            )}
        </Grid>
        <Stack sx={{ justifyContent: "center" }}>
          <Keyservices keyservicesContent={content?.overview?.key_services} />

          <Symptoms symptoms={content?.overview?.symptoms} />
          <HealthRisks healthrisks={content?.overview?.health_risks} />
          <DiagnosedSection diagnosed={content?.overview?.diagnosed} />
          <Conditions conditions={content?.overview?.conditions} />
          <ServicesDetails servicesinfo={content?.overview?.services_details} />
          <TreatmentOptions treatments={content?.overview?.treatments} />
          <WhenToSeeSpecialist
            whenToSee={content?.overview?.when_to_see_specialist}
          />
          <Mutipletreatment
            treatmentContent={content?.overview?.treatments_mutiple}
          />
          <Faq faq={content?.overview?.faqs} />
        </Stack>

        {/* <Faqstabcompoment Faqstabcompoment={content?.overview?.faqs}/> */}
      </>
    );
  };

  return (
    <>
      <Header></Header>
      <Breadcrumbsinfo
        service={"Speciality Clinics"}
        pagename={content.heading}
      />

      <Container maxWidth="xl">
        <Box>
          <Grid container>
            {service?.subpages?.length > 0 ? (
              <>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <SidebarMenu service={service} slug={slug} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>{serviceContent()}</Grid>
              </>
            ) : (
              <>
               <Grid size={{ xs: 12, sm: 6, md: 2 }}></Grid>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      alignItems: "center", // Horizontally center the content
                      justifyContent: "center", // Vertically center the content
                    }}
                  >
                    <Stack>{serviceContent()}</Stack>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 2 }}></Grid>
              </>
            )}
          </Grid>
        </Box>

       
        {/* <PatientVideos patientvideos={websiteJson?.Patientvideos} /> */}
      </Container>
      <Container>
      <WhyChooseSection whyChoose={content?.overview?.why_choose} />
      <TakeChargeSection takeCharge={content?.overview?.take_charge} />
      </Container>

      <Footer></Footer>
    </>
  );
}
