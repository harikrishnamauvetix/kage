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
  },
  typography: {
    fontFamily: "Open Sans, sans-serif", // Font remains consistent
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff', // Adjust for dark mode
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff", // Button text color remains white
          backgroundColor: "#007cb0", // Button background remains the same
          '&:hover': {
            backgroundColor: "#005b75", // Button hover state color remains the same
          },
        },
      },
    },
  },
});

export default theme;
