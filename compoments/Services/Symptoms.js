import {
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
  Stack
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Grid from "@mui/material/Grid2";
function Symptoms({ symptoms }) {
  if (!symptoms) return null;

  return (
    <>
      {symptoms?.heading && symptoms?.list?.length > 0 && (
        <Stack
          sx={{
            margin: "20px 0",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                color: "secondary.main",
              }}
            >
              {symptoms.heading}
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 12 }}>
              <List
                component="ul"
                disablePadding
                sx={{
                  listStyleType: "disc",
                  marginLeft: "30px",
                }}
              >
                {symptoms.list.map((symptom, index) => (
                  <ListItem
                    component="li"
                    key={index}
                    sx={{
                      padding: "0px",
                      display: "list-item", // ensures that the bullet is shown
                    }}
                  >
                    <ListItemText primary={symptom} sx={{ padding: "0px" }} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Stack>
      )}
    </>
  );
}

export default Symptoms;
