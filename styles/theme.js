import { createTheme } from "@mui/material/styles";
import "@fontsource/open-sans";

const theme = createTheme({
  palette: {
    mode: "light", // Set to 'dark' if you prefer the dark mode as default
    primary: {
      main: "#007cb0", // Primary color stays the same
    },
    secondary: {
      main: "#e31a47", // Secondary color stays the same
    },
    background: {
      default: "#eee", // Background remains the same for both modes
      paper: "#fff", // Paper background stays white in both modes
    },
    text: {
      primary: "#000", // Text color remains black
      secondary: "#000", // Secondary text color remains consistent
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif", // Font remains consistent
    h4: {
      fontSize: "1.5rem", // Set your desired font size here
    },
    h1: {
      fontSize: "1.5rem", // Set your desired font size here
    },
    h2: {
      fontSize: "1.5rem", // Set your desired font size here
    },
    body2: {
      color: "#000",
      padding: "0px",
      marginBottom: "0px !important",
    },
    body1: {
      color: "#000",
      padding: "5px 0",
      marginBottom: "0px !important",
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
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginLeft:"0px"
        },
        primary: {
          fontSize: "1rem", // Adjust as needed
          fontWeight: "500",
          lineHeight: "1.5",
          textAlign: "left",
          fontFamily: "Open Sans, sans-serif", // Font remains consistent

          // color:"#007cb0"
        },
        secondary: {
          fontSize: "1rem", // Adjust as needed
          lineHeight: "1.5",
          textAlign: "left",
          fontFamily: "Open Sans, sans-serif", // Font remains consistent
        },
      },
    },
    // Ensure other components are unaffected by theme mode changes
    MuiButton: {
      styleOverrides: {
        root: {
          // maxWidth: "auto !important",
          color: "#fff", // Button text color remains white
          backgroundColor: "#007cb0", // Button background remains the same
          "&:hover": {
            backgroundColor: "#005b75", // Button hover state color remains the same
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding:"5px !important",
          '&:last-child': {
            padding: 0,
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
