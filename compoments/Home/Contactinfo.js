import React from "react";
import { Box, Typography, Paper, Container ,ListItem,List} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid2";
const Contactinfo = () => {
  return (
    <>
      <Container>
        <Box sx={{ py: 5 }}>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              position: "relative",
            }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                component="img"
                src="https://picsum.photos/seed/picsum/800/400" // Replace with actual image path
                alt="KIMS Cuddles"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Paper
                elevation={3}
                sx={{
                  padding: "60px 30px",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  borderRadius: "8px",
                  marginLeft: "-80px",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                 Kage
                </Typography>
                <List>
                  <ListItem>
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Address:
                      </Typography>
                      <Typography>
                        KIMS Cuddles (KIMS Hospitals Campus) Near RTA Office,
                        Kondapur, Hyderabad.
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Contact Number:
                      </Typography>
                      <Typography>040 4488 5333</Typography>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <CalendarMonthIcon sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Appointment Number:
                      </Typography>
                      <Typography>040 4488 5333</Typography>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <EmailIcon sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email:
                      </Typography>
                      <Typography>hello@kimscuddles.com</Typography>
                    </Box>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contactinfo;
