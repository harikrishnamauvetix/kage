import { createContext, useState, useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import websiteJson from "../public/website.json";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../compoments/createEmotionCache"; 
export const DataContext = createContext(null);


const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const [websiteData, setWebsiteData] = useState(null);

  useEffect(() => {
    setWebsiteData(websiteJson);
  }, []);

  return (
    <CacheProvider value={emotionCache}> 
      <ThemeProvider theme={theme}>
        <DataContext.Provider value={websiteData}>
          <Component {...pageProps} />
        </DataContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
