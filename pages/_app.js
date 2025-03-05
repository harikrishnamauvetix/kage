import { createContext, useState, useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import websiteJson from "../public/website.json";

export const DataContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [websiteData, setWebsiteData] = useState(null);

  useEffect(() => {
    setWebsiteData(websiteJson); 
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={websiteData}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
