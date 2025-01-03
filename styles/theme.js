import { createTheme } from '@mui/material/styles';
import "@fontsource/open-sans";

const theme = createTheme({
  palette: {
    mode: 'light', // Set to 'dark' if you prefer dark mode as default
    primary: {
      main: "#007cb0", // Primary color stays the same
    },
    secondary: {
      main: "#e31a47", // Secondary color stays the same
    },
    background: {
      default: "#eee", // Light mode background color
      paper: "#fff",    // Paper background stays white in both modes
    },
    text: {
      primary: "#000",  // Primary text color in light mode
      secondary: "#555", // Secondary text color
    },
    // Dark mode adjustments
    darkMode: {
      background: {
        default: "#fff", // Dark mode background color
        paper: "#fff",   // Dark mode paper background
      },
      text: {
        primary: "#007cb0",  // Text color for dark mode
        secondary: "#e31a47", // Secondary text for dark mode
      },
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif", // Font remains consistent
  },

});

export default theme;
