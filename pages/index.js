import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Home from "./home";
import websiteJson from "../public/website.json";
import CanonicalTag from "@/compoments/CanonicalTag";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function index() {
  return (
    <>
      <CanonicalTag
        title={websiteJson?.homepageseo?.metaTitle}
        description={websiteJson?.homepageseo?.metaDescription}
        keywords={websiteJson?.homepageseo?.keywords}
      />
      <Home></Home>
    </>
  );
}
