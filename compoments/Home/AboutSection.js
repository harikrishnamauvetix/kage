import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid2";

const AboutSection = ({ homeabout }) => {
    
  return (
    <Grid
      container
      spacing={4}
      alignItems={"center"}
      sx={{ background: "#fff", padding: 4, borderRadius: 2 } }
    >
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        {homeabout?.about_images?.map((slide, index) => (
          <Box
            key={index}
            component="img"
            src={slide.image}
            alt={slide.alt || `Slide ${index + 1}`}
            sx={{ width: "100%", borderRadius: 2 }}
          />
        ))}
      </Grid>

      <Grid
        size={{ xs: 12, sm: 6, md: 6 }}
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "secondary.main",
            mb: 2,
            position: "relative",
          }}
        >
         KAGE - KIMS Advanced Gastroenterlogy & Endoscopy
        </Typography>
        {homeabout?.home_intro.map((item, index) => (
          <Typography key={index} sx={{ color: "#000", margin: "16px 0" ,textAlign:"justify"}}>
            {item.description}
          </Typography>
        ))}
        <Link href="/about" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              backgroundColor: "#fff",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff",
              },
            }}
          >
            Read More ➔
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
