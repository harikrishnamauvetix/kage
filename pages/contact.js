import React, { useState,useContext } from "react";
import { Box, Card, Typography, Icon, Container } from "@mui/material";
import Head from "next/head";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "../compoments/Header";
import Grid from "@mui/material/Grid2";
import AppointmentForm from "@/compoments/Bookappointment";
import { DataContext } from './_app';
import Footer from "@/compoments/Footer";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";
const ContactUs = () => {
   const data = useContext(DataContext);
  return (
    <>
  
      <CanonicalTag
        title={data?.contactPage?.metaTitle}
        description={data?.contactPage?.metaDescription}
        keywords={data?.contactPage?.keywords}
      />
    
      <Header />
     <Breadcrumbsinfo   pagename={"Contact"}  />
      <Container>
    
        <Box sx={{ margin: "30px 0" }}>
          <Grid container spacing={3} justifyContent="center">
            {/* Address */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  padding: 3,
                  textAlign: "center",
                  boxShadow: 0,
                  backgroundColor: "#F8FAFC",
                  height:"220px"
                }}
              >
                <Icon
                  component={LocationOnIcon}
                  sx={{ fontSize: 40, color: "#5A67D8" }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.hospitalInfo?.address}
                </Typography>
              </Card>
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  padding: 3,
                  textAlign: "center",
                  boxShadow: 0,
                  backgroundColor: "#F8FAFC",
                    height:"220px"
                }}
              >
                <Icon
                  component={EmailIcon}
                  sx={{ fontSize: 40, color: "#5A67D8" }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.hospitalInfo?.emailid}
                </Typography>
              </Card>
            </Grid>

            {/* Phone */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  padding: 3,
                  textAlign: "center",
                  boxShadow: 0,
                  backgroundColor: "#F8FAFC",
                    height:"220px"
                }}
              >
                <Icon
                  component={PhoneIcon}
                  sx={{ fontSize: 40, color: "#5A67D8" }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.hospitalInfo?.kimsPhonenumber}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: 4,
              overflow: "hidden",
            }}
          >
            {console.log(data?.hospitalInfo)}
            {data?.hospitalInfo?.map?.iframelink ? (
              <iframe
                src={data?.hospitalInfo.map.iframelink}
                width="100%"
                height="400px"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            ) : (
              <img
                src="https://via.placeholder.com/600x400?text=Map+Not+Available"
                alt="Map Not Available"
                width="100%"
                height="400px"
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
