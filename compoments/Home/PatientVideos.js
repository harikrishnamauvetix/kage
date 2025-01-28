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
} from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
const PatientVideos = (props) => {
    console.log(props);
  return (
    <>
         <Stack>
          <Container>
            <Box sx={{ py:6}}>
              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                color="secondary"
                textAlign="left"
              >
                Patient Videos
              </Typography>
              <Grid container spacing={2}>
                {props.patientvideos.map((video, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Card>
                      <div
                        style={{
                          position: "relative",
                          paddingTop: "56.25%", // 16:9 aspect ratio
                        }}
                      >
                        <iframe
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <CardContent
                        sx={{
                          height: "220px", // Ensures equal height for all cards
                        }}
                      >
                        <Typography variant="h6">{video.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {video.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Stack>
    </>
  );
};

export default PatientVideos;
