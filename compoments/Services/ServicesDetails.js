import { Typography, List, ListItem, ListItemText,Box,ListItemIcon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ServicesInfo({ servicesinfo }) {
  const services = servicesinfo?.services || [];
  // console.log(servicesinfo);
  if (!services.length) return null;

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", color: "secondary.main" }}
      >
        {servicesinfo.heading}
      </Typography>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={12} key={index}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "10px", color: "primary.main" }}
            >
              {service.heading}
            </Typography>
            <List sx={{ padding: "0" }}>
              {service.list.map((item, idx) => (
                <ListItem key={idx} sx={{ padding: "0" }}>
                     <ListItemIcon sx={{ padding: "0px", minWidth: "30px" }}>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                  <ListItemText sx={{ padding: "0" }} primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesInfo;
