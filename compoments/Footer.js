import React from 'react';
import { Box, Typography, Grid, Link, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Example social icons

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        paddingTop: 4,
        paddingBottom: 2,
        position: 'relative',
        bottom: 0,
        width: '100%',
        zIndex: '1',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Column 1: Company Info */}
          <Grid item xs={12} sm={4}>
          <Box sx={{ display: "block", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src="https://kage.co.in/assets/img/KAGE.jpg"
              alt="Logo"
              sx={{ height: 50 }}
            />
          </Box>
            <Typography variant="body2">Welcome to KIMS Hospitals, your trusted destination for Endoscopic Treatment for Weight Loss in Hyderabad. We specialize in using cutting-edge techniques such as the Endo Stitch & Double Channel Olympus Endoscope to help you achieve your weight loss goals.     </Typography>
          </Grid>

          {/* Column 2: Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" underline="none">
              About Us
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Services
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Contact
            </Link>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} KAGE. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
