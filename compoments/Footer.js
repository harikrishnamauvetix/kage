import React, { useContext } from "react";
import { Box, Typography, Link, Container, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { DataContext } from "../pages/_app";
import AppointmentForm from "./Bookappointment";
import Grid from "@mui/material/Grid2";
import { generateSlug } from "./slugify";
export default function Footer() {
  const data = useContext(DataContext);
  return (
    <>
      {/* <AppointmentForm /> */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "white",
          paddingTop: 4,
          paddingBottom: 2,
          position: "relative",
          bottom: 0,
          width: "100%",
          zIndex: "1",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            {/* Column 1: Company Info */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{ display: "block", alignItems: "center", gap: 1 }}>
                <Box
                  component="img"
                  src={data?.hospitalInfo?.companylogo}
                  alt="Best Gastro Hospital In Hyderabad"
                  sx={{ height: 50 }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {data?.footer.companyInfo.description}
              </Typography>
            </Grid>

            {/* Column 2: Links */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                {data?.footer.quickLinks.title}
              </Typography>
              {data?.footer.quickLinks.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="inherit"
                  display="block"
                  underline="none"
                >
                  {link.text}
                </Link>
              ))}
            </Grid>

            {/* Column 3: Social Media */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                {data?.footer.socialMedia.title}
              </Typography>
              <Box>
                {data?.footer.socialMedia.links.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.platform === "Facebook" && <Facebook />}
                    {social.platform === "Twitter" && <Twitter />}
                    {social.platform === "Instagram" && <Instagram />}
                    {social.platform === "LinkedIn" && <LinkedIn />}
                    {social.platform === "youtube" && <YouTube />}
                  </IconButton>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                Speciality Clinics
              </Typography>
              {data?.specialityclinics?.map((service) => (
                <Grid item xs={12} sm={6} md={6} key={service.title}>
                  <Link
                    href={`/speciality-clinics/${generateSlug(service?.title)}`}
                      passHref
                    underline="none"
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {service.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                Advanced Equipments & Diagnosis
              </Typography>
              {data?.services?.map((service) => (
                <Grid item xs={12} sm={6} md={6} key={service.title}>
                  <Link
                    href={`/advanced-equipment/${generateSlug(service?.title)}`}
                    passHref
                      underline="none"
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {service.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                Advanced Procedures
              </Typography>
              {data?.advancedprocedures?.map((procedure) => (
                <Grid item xs={12} sm={6} md={6} key={procedure.title}>
                  <Link
                    href={`/advanced-procedures/${generateSlug(procedure.title)}`}
                      passHref
                        underline="none"
                   
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {procedure.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Footer Bottom */}
          <Box sx={{ marginTop: 4, textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {data?.footer.footerBottom.text}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 10,
        zIndex: 999999999999,
      }}
    >
      <IconButton
        href={`tel:${data?.hospitalInfo?.kimsPhonenumber}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "secondary.main",
          color: "#fff",
          width: 60,
          height: 60,
          borderRadius: "50%",
          boxShadow: 3,
          '&:hover': {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <PhoneIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
    </>
  );
}
