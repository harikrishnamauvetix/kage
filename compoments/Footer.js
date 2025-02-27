import React from "react";
import { Box, Typography, Link, Container, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import websiteJson from "../public/website.json";
import AppointmentForm from "./Bookappointment";
import Grid from "@mui/material/Grid2";
export default function Footer() {
  return (
    <>
      <AppointmentForm />
      <Box
        sx={{
          backgroundColor: "primary.main",
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
                  src="https://kage.co.in/assets/img/KAGE.jpg"
                  alt={websiteJson.footer.companyInfo.logoAlt}
                  sx={{ height: 50 }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {websiteJson.footer.companyInfo.description}
              </Typography>
            </Grid>

            {/* Column 2: Links */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                {websiteJson.footer.quickLinks.title}
              </Typography>
              {websiteJson.footer.quickLinks.links.map((link, index) => (
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
              <Typography variant="h6" gutterBottom>
                {websiteJson.footer.socialMedia.title}
              </Typography>
              <Box>
                {websiteJson.footer.socialMedia.links.map((social, index) => (
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
              <Typography variant="h6" gutterBottom>
                Speciality Clinics
              </Typography>
              {websiteJson?.specialityclinics?.map((service) => (
                <Grid item xs={12} sm={6} md={6} key={service.title}>
                  <Link
                    href={`/speciality-clinics/${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    underline="hover"
                    color="#fff"
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {service.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom>
              Advanced Equipments & Diagnosis
              </Typography>
              {websiteJson?.services?.map((service) => (
                <Grid item xs={12} sm={6} md={6} key={service.title}>
                  <Link
                    href={`/service/${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    underline="hover"
                    color="#fff"
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {service.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom>
              Advanced Procedures
              </Typography>
              {websiteJson?.advancedprocedures?.map((procedure) => (
                <Grid item xs={12} sm={6} md={6} key={procedure.title}>
                  <Link
                    href={`/advanced-procedures/${procedure.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    underline="hover"
                    color="#fff"
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
            <Typography variant="body2">
              {websiteJson.footer.footerBottom.text}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
