import React, { useState,useContext } from "react";
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
const CourseListPage = (props) => {
  return (
    <>
      <Header />
     <Breadcrumbsinfo  service={"Courses"} />

        <CourseList courseList={props.courselist}  sx={{ margin:"30px 0"}}/>
     
      <Footer />
    </>
  );
};

export default CourseListPage;
