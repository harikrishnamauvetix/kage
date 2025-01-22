import { useRouter } from "next/router";
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
  Breadcrumbs,
  Grid2,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AccessAlarm, Description, CheckCircle } from "@mui/icons-material"; // Import icons of your choice

import { useState, useEffect } from "react";
import websiteJson from "../../../public/website.json";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarMenu from "@/compoments/SidebarMenu";

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
  const Mutipletreatment = ({ treatmentContent }) => {
    return (
      treatmentContent && (
        <Grid container>
          {/* Treatment Heading */}
          <Grid item xs={12} className="p0">
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {treatmentContent.heading}
            </Typography>
          </Grid>

          <Grid container>
            {treatmentContent.treatments_list.map((treatment, index) => (
              <Box key={index} sx={{ marginBottom: 3 }}>
                {/* Treatment Type in Single Row */}
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6">{treatment.type}</Typography>
                  </Grid>
                </Grid>

                {/* Treatment Steps */}
                <List>
                  {treatment.steps.map((step, stepIndex) => (
                    <Box key={stepIndex}>
                      <ListItem>
                        <ListItemIcon>
                          {/* Example of an icon for each step */}
                          <CheckCircle />
                        </ListItemIcon>

                        <ListItemText
                          primary={step.title}
                          secondary={step.description}
                        />
                      </ListItem>

                      {/* Divider between steps */}
                    </Box>
                  ))}
                </List>
              </Box>
            ))}
          </Grid>
        </Grid>
      )
    );
  };
  const Keyservices = ({ keyservicesContent }) => {
    return (
      keyservicesContent && (
        <Box sx={{ padding: 4 }}>
          <Typography
            variant="h5"
            sx={{ margin: "10px 0", color: "secondary.main" }}
          >
            {keyservicesContent.heading}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {keyservicesContent.list.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3}>
                  <CardContent>
                    <Box
                      component="img"
                      src="https://assets.kimscuddles.com/production/docs/Kims_cuddles_home_page_banners_10_1720786743.jpg"
                      alt="Logo"
                      width={"100%"}
                    />
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )
    );
  };

  return (
    <>
      <Header></Header>

      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
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
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              {content.heading}
            </Link>
          </Breadcrumbs>
        </Container>
      </Box>
      <Container>
        <Grid container>
          
          <Grid item xs={12} md={3}>
          <SidebarMenu  service={service} slug={slug}/>
       
          </Grid>
          <Grid item xs={12} md={9}>
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
            <Grid container spacing={2}>
              {/* Overview Section */}

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
                          <Typography variant="body1" paragraph key={index}>
                            {text}
                          </Typography>
                        )
                      )}
                    </Grid>
                  </>
                )}
              {content?.overview?.heading &&
                content?.overview?.content?.length > 0 && (
                  <>
                    <Grid item xs={12} md={12}>
                      <Typography
                        variant="h5"
                        sx={{ margin: "10px 0", color: "secondary.main" }}
                      >
                        {content?.overview?.heading}
                      </Typography>
                      {content?.overview?.content.map((text, index) => (
                        <Typography variant="body1" paragraph key={index}>
                          {text}
                        </Typography>
                      ))}
                    </Grid>
                  </>
                )}
              <Keyservices
                keyservicesContent={content?.overview?.key_services}
              />
              {content?.overview?.symptoms?.heading &&
                content?.overview?.symptoms?.list?.length > 0 && (
                  <>
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        sx={{ margin: "10px 0", color: "secondary.main" }}
                      >
                        {content.overview.symptoms.heading}
                      </Typography>
                    </Grid>
                    <Grid container spacing={2}>
                      {content?.overview?.symptoms.list.map(
                        (symptom, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <List sx={{ padding: "0px" }}>
                              <ListItem sx={{ padding: "0px" }}>
                                <ListItemIcon
                                  sx={{ padding: "0px", minWidth: "30px" }}
                                >
                                  <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                  primary={symptom}
                                  sx={{ padding: "0px" }}
                                />
                              </ListItem>
                            </List>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </>
                )}
              {content?.overview?.health_risks?.heading &&
                content?.overview?.health_risks?.list?.length > 0 && (
                  <>
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        sx={{ margin: "10px 0", color: "secondary.main" }}
                      >
                        {content.overview.health_risks.heading}
                      </Typography>
                    </Grid>

                    <Grid container spacing={3}>
                      {content.overview.health_risks.list.map((risk, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card
                            sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <CardContent>
                              <Typography
                                variant="h6"
                                color="primary"
                                gutterBottom
                              >
                                {risk.condition}
                              </Typography>
                              <Typography variant="body1">
                                {risk.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}

              {/* Conditions Section */}
              {content?.overview?.conditions?.heading &&
                content?.overview?.conditions?.lists?.length > 0 && (
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant="h5"
                      sx={{ margin: "10px 0", color: "secondary.main" }}
                    >
                      {content?.overview?.conditions?.heading}
                    </Typography>
                    <Grid container spacing={2}>
                      {content?.overview?.conditions.lists.map(
                        (condition, index) => (
                          <Grid item xs={12} sm={6} md={6} key={index}>
                            <List sx={{ padding: "0" }}>
                              <ListItem sx={{ padding: "0" }}>
                                <ListItemText
                                  sx={{ padding: "0" }}
                                  primary={condition.title || ""}
                                  secondary={condition.description}
                                />
                              </ListItem>
                            </List>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Grid>
                )}
              {/* {content?.overview?.treatments &&
            content?.overview?.treatments.heading && (
              <>
               <Typography
                  variant="h5"
                  sx={{ margin: "10px 0", color: "secondary.main" }}
                >
                  {content?.overview?.treatments?.heading}
                </Typography>
              <Grid item xs={12} md={12}>
                <List>
                  {content?.overview?.treatments?.lists?.map(
                    (treatment, index) => (
                      <ListItem key={index}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {treatment.option}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {treatment.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </ListItem>
                    )
                  )}
                </List>
                </Grid>
              </>
            )} */}

              {/* Diagnosed Section */}
              {content?.overview?.diagnosed &&
                content?.overview?.diagnosed.heading && (
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant="h5"
                      sx={{ margin: "10px 0", color: "secondary.main" }}
                    >
                      {content?.overview?.diagnosed.heading}
                    </Typography>
                    {content?.overview?.diagnosed.description && (
                      <Typography variant="body1" paragraph>
                        {content?.overview?.diagnosed.description}
                      </Typography>
                    )}

                    {/* Procedures */}
                    {content?.overview?.diagnosed.procedures?.heading && (
                      <>
                        <Typography
                          variant="h5"
                          sx={{ margin: "10px 0", color: "secondary.main" }}
                        ></Typography>
                        <Grid container spacing={2}>
                          {content?.overview?.diagnosed.procedures.steps?.map(
                            (step, index) => (
                              <Grid item xs={12} sm={4} key={index}>
                                <List>
                                  <ListItem>
                                    <ListItemIcon>
                                      <MedicalServicesIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={step.title}
                                      secondary={step.description}
                                    />
                                  </ListItem>
                                </List>
                              </Grid>
                            )
                          )}
                        </Grid>
                      </>
                    )}

                    {/* Treatment Options */}
                  </Grid>
                )}
              <Mutipletreatment
                treatmentContent={content?.overview?.treatments_mutiple}
              />

              {content?.overview?.treatments && (
                <>
                  <Typography
                    variant="h5"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {content?.overview?.treatments.heading}
                  </Typography>
                  <Grid container spacing={2}>
                    {content?.overview?.treatments.steps?.map((step, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <MedicalServicesIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={step.title}
                              secondary={step.description}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}

              {/* Why Choose Section */}
              {content?.overview?.why_choose?.heading &&
                content?.overview?.why_choose?.steps?.length > 0 && (
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      sx={{ margin: "10px 0", color: "secondary.main" }}
                    >
                      {content?.overview?.why_choose.heading}
                    </Typography>
                    <Grid container spacing={2}>
                      {content?.overview?.why_choose.steps.map(
                        (step, index) => (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                          
                              <CardContent>
                                <Typography variant="h6">
                                  {step.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  {step.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Grid>
                )}

              {content?.overview?.when_to_see_specialist && (
                <Box sx={{ padding: 3, borderRadius: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {content?.overview?.when_to_see_specialist.heading}
                  </Typography>
                  <Grid container spacing={2}>
                    {content?.overview?.when_to_see_specialist.list.map(
                      (item, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <List sx={{ padding: "0" }}>
                            <ListItem sx={{ padding: "0" }}>
                              <ListItemText
                                primary={item}
                                sx={{ padding: "0" }}
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              )}

              {content?.overview?.take_charge && (
                <Box sx={{ padding: 3, borderRadius: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ margin: "10px 0", color: "secondary.main" }}
                  >
                    {content?.overview?.take_charge?.heading}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {content?.overview?.take_charge?.description}
                  </Typography>
                  {content?.overview?.take_charge?.action && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => alert("Consultation Scheduled")}
                    >
                      {content?.overview?.take_charge?.action}
                    </Button>
                  )}
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* <Faqstabcompoment Faqstabcompoment={content?.overview?.faqs}/> */}
      </Container>

      <Footer></Footer>
    </>
  );
}
