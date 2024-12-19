import { createTheme } from '@mui/material/styles';
import "@fontsource/open-sans";
const theme = createTheme({
  palette: {
    primary: {
      main: "#007cb0",
    },
    secondary: {
      main: "#e31a47",
    },
    background: {
      default: "#eee", // Background for the entire app
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif", // Correct syntax for font-family
  },
});

export default theme;
