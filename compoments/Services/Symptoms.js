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
   
  } from "@mui/material";
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid2";
function Symptoms({ symptoms }) {
  if (!symptoms) return null;

  return (
    <>
      {symptoms?.heading &&
        symptoms?.list?.length > 0 && (
          <>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ margin: "10px 0", color: "secondary.main",textAlign:"center" }}
              >
                {symptoms.heading}
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              {symptoms.list.map((symptom, index) => (
                <Grid  size={{ xs: 12, sm: 6, md: 6 }}  key={index}>
                  <List sx={{ padding: "0px" }}>
                    <ListItem sx={{ padding: "0px" }}>
                      <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
                        <ArrowForwardIosIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={symptom} sx={{ padding: "0px" }} />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </>
        )}
    </>
  );
}

export default Symptoms;
