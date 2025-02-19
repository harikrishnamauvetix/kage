import { Typography,  } from "@mui/material";
import Grid from "@mui/material/Grid2";
function OverviewSection({ overview }) {
  if (!overview) return null;

  return (
    <>
      {overview.heading && overview.content?.length > 0 && (
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{  color: "secondary.main" }}
          >
            {overview.heading}
          </Typography>
          {overview.content.map((text, index) => (
            <Typography key={index} variant="body1" sx={{ textAlign: "justify" }} paragraph>
              {text}
            </Typography>
          ))}
        </Grid>
      )}
    </>
  );
}

export default OverviewSection;
