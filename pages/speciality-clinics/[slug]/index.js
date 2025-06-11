import React, { useState, useEffect ,useContext} from "react";
import websiteJson from "../../../public/website.json";

import { useRouter } from "next/router";
import { Typography, Container, Box, Stack } from "@mui/material";

import Head from "next/head";

import { DataContext } from '../../_app';
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
import CanonicalTag from "@/compoments/CanonicalTag";
import { generateSlug } from "@/compoments/slugify";

export default function ServicePage({specialityclinics}) {
 // console.log(specialityclinics);
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(specialityclinics);

useEffect(() => {
  setService(specialityclinics);
}, [specialityclinics]); 

  //console.log(slug);
  // useEffect(() => {
  //   if (!slug) return;

  //   if (data && data?.specialityclinics) {
  //     const foundSpeciality = data?.specialityclinics.find(
  //       (item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug
  //     );
  //     setService(foundSpeciality);
  //     setLoading(false);
  //   }
  // }, [slug, data]);
  // if (!specialityclinics) {
  //   return <p>Loading...</p>;
  // }
  // States to manage service and loading status





  // If no service is found, show the "Service not found" message
  if (!specialityclinics) {
    return (
      <Container>
        <Typography variant="h6">Service not found.</Typography>
      </Container>
    );
  }

  const content = specialityclinics.content;

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
          <CanonicalTag
        title={specialityclinics?.metaTitle}
        description={specialityclinics?.metaDescription}
        keywords={specialityclinics?.keywords}
      />
    
        {content?.heading && (
          <Grid size={{ xs: 12 }} sx={{ margin: "40px 0 0px 0" }}>
            <Typography
              variant="h1"
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
     <Head>
        <title>{content?.metaTitle} </title>
        <meta name="description" content={content?.metadescription} />
      </Head>
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
                <Grid size={{ xs: 12, sm: 12, md: 12,lg:3,xl:3 }}>
                  <SidebarMenu service={service} slug={slug} />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 ,lg:8,xl:8}}>{serviceContent()}</Grid>
              </>
            ) : (
              <>
               <Grid size={{ xs: 12, sm: 12, md: 12 ,lg: 2 }}></Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 ,lg: 8 }}>
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
                <Grid size={{ xs: 12, sm: 12,md: 12 , lg: 2 }}></Grid>
              </>
            )}
          </Grid>
        </Box>

       
        {/* <PatientVideos patientvideos={data?.Patientvideos} /> */}
      </Container>
      <Container>
      <WhyChooseSection whyChoose={content?.overview?.why_choose} />
      <TakeChargeSection takeCharge={content?.overview?.take_charge} />
      </Container>

      <Footer></Footer>
    </>
  );

  
}

export async function getStaticPaths() {
  const data = websiteJson;
  const paths = data.specialityclinics.map((item) => ({
    params: { slug: generateSlug(item?.title) },
  }));

  return { paths, fallback: false  };
}


export async function getStaticProps({ params }) {
  const data = websiteJson;
  console.log(params);
  const specialityclinics = data.specialityclinics.find(
    (item) => generateSlug(item.title) === params.slug
  );

  if (!specialityclinics) {
    return { notFound: true };
  }

  return {
    props: { specialityclinics },
 
  };
}
