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

function HealthRisks({ healthrisks }) {
  if (!healthrisks) return null;

  return (
    <>
      {healthrisks.heading && healthrisks.content?.length > 0 && (
        <>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ margin: "10px 0", color: "secondary.main" }}
            >
              {healthrisks.heading}
            </Typography>
          </Grid>

          <Grid container spacing={3}>
            {healthrisks.list.map((risk, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {risk.condition}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "justify" }}>
                      {risk.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}

export default HealthRisks;
