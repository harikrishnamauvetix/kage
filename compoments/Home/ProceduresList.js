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
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Link from "next/link";
const ProceduresList = (props) => {
  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          backgroundColor: "background.default",
          color: "black",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
              textAlign: { sm: "left", md: "center" },
            }}
          >
            <Typography component="h2" variant="h4" color="secondary.main">
              Procedures
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {props?.procedures?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={(theme) => ({
                    padding: "10px",
                    height: "100%",
                  })}
                >
                  <Box sx={{ color: "primary.main" }}>
                    <Icon
                      sx={{
                        fontSize: "40px",
                        color: "#1976d2",
                      }}
                    >
                      <MedicalServicesIcon />
                    </Icon>
                  </Box>
                  <Box sx={{ px: 1 }}>
                    <Link
                      href={`/procedures/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                      >
                        {item.title}
                      </Typography>
                    </Link>

                    {item.sections?.[0]?.content && (
                      <Typography
                        variant="body1"
                        sx={{ color: "#000", marginBottom: "10px" }}
                      >
                        {item.sections[0].content.length > 100
                          ? `${item.sections[0].content.slice(0, 100)}...`
                          : item.sections[0].content}
                      </Typography>
                    )}
                    <Link
                      href={`/procedures/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "secondary.main",
                        }}
                      >
                        Read more
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProceduresList;
