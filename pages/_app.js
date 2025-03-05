
import { createContext } from 'react';
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import websiteJson from "../public/website.json";
export const DataContext = createContext(null);

function MyApp({ Component, pageProps, websiteData }) {
  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={websiteData}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </ThemeProvider>
  );
}


MyApp.getInitialProps = async () => {

  const websiteData = websiteJson;

  return { websiteData };}
  export default MyApp;
