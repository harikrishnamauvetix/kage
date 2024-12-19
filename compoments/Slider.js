// components/Navbar.js
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 import websiteJson from '../public/website.json'
// Import Swiper styles
import 'swiper/css';

const Homebanner = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
console.log(websiteJson)
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
 
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
   {websiteJson.bannerimage.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    
  </Swiper>
  );
};

export default Homebanner;
