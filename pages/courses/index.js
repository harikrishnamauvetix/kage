import React, { useState,useContext } from "react";
import Head from "next/head";
import websiteJson from "../../public/website.json";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { DataContext } from '../_app';
import CourseList from "@/compoments/Home/CourseList";
import Image from "next/image";
import Link from "next/link";
import Header from "@/compoments/Header";
import Footer from "@/compoments/Footer";
import Breadcrumbsinfo from "@/compoments/Breadcrumbsinfo";
import CanonicalTag from "@/compoments/CanonicalTag";
const CourseListPage = (props) => {
     const data = useContext(DataContext);
  return (
    <>

    <CanonicalTag
        title={websiteJson?.coursePage?.metaTitle}
        description={websiteJson?.coursePage?.metaDescription}
        keywords={websiteJson?.coursePage?.keywords}
      />
      <Header />
     <Breadcrumbsinfo  service={"Courses"} />

        <CourseList courseList={props.courselist}  sx={{ margin:"30px 0"}}/>
     
      <Footer />
    </>
  );
};

export default CourseListPage;
