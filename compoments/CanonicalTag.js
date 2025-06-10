import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DataContext } from "../pages/_app";
const CanonicalTag = (props) => {
  const data = useContext(DataContext);
  const router = useRouter();
  const baseUrl = "https://www.kimskage.com";

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="zgswpdICchqaSXfJFzQURHEgwoN4N251UTb3Eu1NguE"
        />
        <link
          rel="canonical"
          href={`${baseUrl}${router.asPath === "/" ? "" : router.asPath}`}
        />
         <title>{props?.title?.trim() ? props.title : "Best Gastro Hospital In Hyderabad | KAGE At KIMS Hospitals | Gastrology Department At KIMS"  } </title>
        <meta
          name="description"
          content={ props?.description?.trim() ? props.description : "Get expert care for your digestive health at KAGE - KIMS Advanced Gastroenterology & Endoscopy in Hyderabad. Our team of specialists offers advanced endoscopy, colonoscopy, and liver disease management. Contact us for an appointment"}
        />
        <meta name="keywords" content={props?.keywords?.trim() ? props.keywords: "gastro hospital Hyderabad, gastroenterology hospital Hyderabad, liver clinic Hyderabad, endoscopy center Hyderabad, GI hospital Hyderabad, digestive diseases hospital Hyderabad"} />
      </Head>
    </>
  );
};

export default CanonicalTag;
