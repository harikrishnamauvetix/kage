
import Link from 'next/link';
import { Box, Typography, Button, Container } from '@mui/material';

const Custom404 = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
  The page you are looking for might have been removed or doesn&rsquo;t exist.
</Typography>
      <Box mt={4}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go Back to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Custom404;
