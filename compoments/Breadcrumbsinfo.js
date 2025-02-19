import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
  Breadcrumbs,
} from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const Breadcrumbsinfo = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Replace with your desired color
      
          borderRadius: "8px",
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px" }}>
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>

            {props?.service && (
              <Link
                underline="hover"
                color="inherit"
                href={`/${props.service.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {props.service}
              </Link>
            )}
            {props?.pagename && (
              <Link
                underline="hover"
                color="text.primary"
                href="#"
                aria-current="page"
              >
                {props?.pagename}
              </Link>
            )}
          </Breadcrumbs>
        </Container>
      </Box>
    </>
  );
};

export default Breadcrumbsinfo;
