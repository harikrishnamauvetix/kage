import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function ServicesInfo({ servicesinfo }) {
  const services = servicesinfo?.services || [];
  if (!services.length) return null;

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "secondary.main" }}>
        {servicesinfo.heading}
      </Typography>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={12} key={index}>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              {service.heading}
            </Typography>
            <List disablePadding>
              {service.list.map((item, idx) => (
                <ListItem key={idx} sx={{padding:"0px 0px 0px 16px"}}>
                  {/* Replace icon with a disc bullet */}
                  <ListItemIcon
                    sx={{
                      minWidth: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box component="span" sx={{ color: 'text.primary' ,fontSize: "1.2rem", lineHeight: 1 }}>
                      &#8226;
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary={item} />
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
