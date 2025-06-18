
import Head from "next/head";

import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../_app";
import Footer from "@/compoments/Footer";
import Header from "@/compoments/Header";

import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";

import CanonicalTag from "@/compoments/CanonicalTag";
import BlogsList from "@/compoments/Blogs/BlogsList";

export default function Blogs() {
  const data = useContext(DataContext);

  return (
    <>

    <CanonicalTag
        title={data?.advancedequipementPage?.metaTitle}
        description={data?.advancedequipementPage?.metaDescription}
        keywords={data?.advancedequipementPage?.keywords}
      />
      <Header></Header>
     <Breadcrumbsinfo  pagename={"Blogs"} />
      <BlogsList blogs={data?.blogs} />

      <Footer></Footer>
    </>
  );
}
