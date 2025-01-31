import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
function TreatmentOptions({ treatments }) {
  if (!treatments?.heading || !treatments?.steps?.length) return null;

  return (
    <>
      <Typography
        variant="h5"
        sx={{ margin: "10px 0", color: "secondary.main" }}
      >
        {treatments?.heading}
      </Typography>
      <Grid container spacing={2}>
        {treatments?.steps?.map((step, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
            <List>
              <ListItem sx={{ padding: "0px" }}>
                <ListItemIcon>
                  {step?.icon ? (
                    <img
                      src={step.icon}
                      alt="Hospital Icon"
                      width="40"
                      height="40"
                      style={{
                        borderRadius: "50%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <ArrowForwardIosIcon fontSize="large" color="primary" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={step.title}
                  secondary={step.description}
                />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TreatmentOptions;
