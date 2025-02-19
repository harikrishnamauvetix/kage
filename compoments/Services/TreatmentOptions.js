import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
function TreatmentOptions({ treatments }) {
  if (!treatments?.heading || !treatments?.steps?.length) return null;

  return (
    <Stack sx={{margin:"10px 0"}}>
      <Typography
        variant="h6"
        sx={{  color: "secondary.main" }}
      >
        {treatments?.heading}
      </Typography>
      <Grid container spacing={2}>
        {treatments?.steps?.map((step, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
            <List
              disablePadding
              sx={{
                listStyleType: "disc",
                marginLeft: "30px",
              }}
            >
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "50px" }}>
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
                    <CheckCircleIcon
                      color="primary"
                      sx={{ minWidth: "30px" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={step.title}
                  secondary={
                    step.description || (step.list ? step.list.join("\n") : "")
                  }
                  primaryTypographyProps={{ sx: { color: "primary.main" } }}
                  secondaryTypographyProps={{ sx: { whiteSpace: "pre-line" } }} // Ensures proper line breaks
                />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default TreatmentOptions;
