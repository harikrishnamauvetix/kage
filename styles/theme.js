import { createTheme } from '@mui/material/styles';
import "@fontsource/open-sans";

const theme = createTheme({
  palette: {
    mode: 'light', // Set to 'dark' if you prefer the dark mode as default
    primary: {
      main: "#007cb0", // Primary color stays the same
    },
    secondary: {
      main: "#e31a47", // Secondary color stays the same
    },
    background: {
      default: "#eee", // Background remains the same for both modes
      paper: "#fff",    // Paper background stays white in both modes
    },
    text: {
      primary: "#000",  // Text color remains black
      secondary: "#000", // Secondary text color remains consistent
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif", // Font remains consistent
 
      body2: {
        color: '#000', // Set global text color for body2 variant
      },
      body1: {
        color: '#000', // Set global text color for body2 variant
      },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff", // Paper component background remains white
        },
        
      },
    },
    // Ensure other components are unaffected by theme mode changes
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
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
 
  },
});

export default theme;
