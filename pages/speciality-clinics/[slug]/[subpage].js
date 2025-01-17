import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import {
  Grid,
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
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CheckIcon from "@mui/icons-material/Check"; // Icon for advantages

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
    const foundService = websiteJson.services.find(
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
  const Symptoms = ({ symptoms }) => {
    return (
      symptoms && (
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {symptoms.heading}
            </Typography>
          </Grid>
          {symptoms.list.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <List className="p0">
                <ListItem className="p0">
                  <ListItemIcon
                    sx={{ padding: "0px !important", minWidth: "30px" }}
                  >
                    <HealthAndSafetyIcon className="p0" />
                  </ListItemIcon>
                  <ListItemText
                    className="p0"
                    primary={item.heading}
                    secondary={item.description}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      )
    );
  };
  const CausesAndRisk = ({ causesAndRisk }) => {
    return (
      causesAndRisk && (
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {causesAndRisk.heading}
            </Typography>
          </Grid>
          {causesAndRisk.list.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <List className="p0">
                <ListItem className="p0">
                  <ListItemIcon
                    sx={{ padding: "0px !important", minWidth: "30px" }}
                  >
                    <HealthAndSafetyIcon className="p0" />
                  </ListItemIcon>
                  <ListItemText
                    className="p0"
                    primary={item.heading}
                    secondary={item.description}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      )
    );
  };

  const Complications = ({ complications }) => {
    return (
      complications && (
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {complications.heading}
            </Typography>
          </Grid>
          {complications.list.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <List className="p0">
                <ListItem className="p0">
                  <ListItemIcon
                    sx={{ padding: "0px !important", minWidth: "30px" }}
                  >
                    <HealthAndSafetyIcon className="p0" />
                  </ListItemIcon>
                  <ListItemText
                    className="p0"
                    primary={item.heading}
                    secondary={item.description}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      )
    );
  };
  const Diagnosis = ({ diagnosis, introduction }) => {
    return (
      diagnosis && (
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {diagnosis.heading}
            </Typography>
            <Typography variant="body1">{introduction?.description}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={
                introduction?.image ||
                "https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
              }
              alt="Introduction Image"
              width="100%"
            />
          </Grid>
        </Grid>
      )
    );
  };

  return (
    <>
      <Header></Header>
      <Container>
        {subService?.title && (
          <Grid item xs={12} sx={{ margin: "40px 0" }}>
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
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ margin: "10px 0", color: "secondary.main" }}
              >
                {subService.sections.introduction?.heading}
              </Typography>
              <Typography variant="body1">
                {subService.sections.introduction?.description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={
                  subService.sections.introduction?.image ||
                  "https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
                }
                alt="Introduction Image"
                width="100%"
              />
            </Grid>
          </Grid>
        )}

        {subServicelist?.map((item) => {
          // Access the service information for each item in subServicelist (e.g., "Acute_Pancreatitis")
          const serviceInfo = subService?.sections?.services_info[item];

          if (serviceInfo) {
            return (
              <div key={item}>
                {serviceInfo?.heading && (
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="h5"
                        sx={{ margin: "10px 0", color: "secondary.main" }}
                      >
                        {serviceInfo?.heading}
                      </Typography>
                      <Typography variant="body1">
                        {serviceInfo?.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        component="img"
                        src={
                          subService.sections.introduction?.image ||
                          "https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
                        }
                        alt="Introduction Image"
                        width="100%"
                      />
                    </Grid>
                  </Grid>
                )}
                <Symptoms symptoms={serviceInfo?.Symptoms} />
                <CausesAndRisk causesAndRisk={serviceInfo?.Causes_and_Risk} />
                <Complications complications={serviceInfo?.Complications} />
              </div>
            );
          }
          return null;
        })}

        <Symptoms symptoms={subService?.sections?.Symptoms} />
        <CausesAndRisk causesAndRisk={subService?.sections?.Causes_and_Risk} />
        <Complications complications={subService?.sections?.Complications} />
        {subService?.sections?.conditions && (
          <>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {subService?.sections?.conditions.heading}
            </Typography>
            <List>
              {subService?.sections?.conditions?.list?.map((constext, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <MedicalServicesIcon /> {/* Icon for conditions */}
                  </ListItemIcon>
                  <Typography variant="body1">{constext}</Typography>
                 
                </ListItem>
              ))}
            </List>
          </>
        )}
        {subService?.sections?.procedure && (
          <>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {subService?.sections?.procedure.heading}{" "}
            </Typography>
            <Typography variant="body1">
              {subService?.sections?.procedure.description}
            </Typography>
          </>
        )}
        {subService?.sections?.advantages && (
          <>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {subService?.sections?.advantages?.heading}
            </Typography>
            <List>
              {subService?.sections?.advantages.list.map((advantage, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon /> {/* Icon for advantages */}
                  </ListItemIcon>
                  <Typography variant="body1">{advantage}</Typography>
                </ListItem>
              ))}
            </List>
          </>
        )}
        <Diagnosis
          diagnosis={subService?.sections?.Diagnosis}
          introduction={subService?.sections?.introduction}
        />

        {subService?.sections?.Treatment && (
          <Grid container>
            <Grid item xs={12} className="p0">
              <Typography
                variant="h5"
                sx={{ margin: "10px 0", color: "secondary.main" }}
              >
                {subService.sections.Treatment.heading}
              </Typography>
            </Grid>
            <Grid container>
              {subService.sections.Treatment.list.map((item, index) => (
                <Grid item xs={12} md={4} key={index} className="p0">
                  <List className="p0">
                    <ListItem className="p0">
                      <ListItemIcon
                        sx={{ padding: "0px !important", minWidth: "30px" }}
                      >
                        <HealthAndSafetyIcon className="p0" />
                      </ListItemIcon>
                      <ListItemText
                        className="p0"
                        primary={item.heading}
                        secondary={item.description}
                      />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}

        {subService?.sections?.Why_to_choose && (
          <Grid container spacing={2} sx={{ margin: "30px 0" }}>
            <Grid item xs={12} className="p0">
              <Typography
                variant="h5"
                sx={{ margin: "10px 0", color: "secondary.main" }}
              >
                {subService.sections.Why_to_choose?.heading}
              </Typography>
            </Grid>
            {subService.sections.Why_to_choose?.list?.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} spacing={2}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt={item.heading}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Footer></Footer>
    </>
  );
}
