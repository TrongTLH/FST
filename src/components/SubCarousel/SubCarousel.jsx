import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SubCarousel({ numberOfSlice }) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="subcarousel"
      >
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-aptamil-profutura-uc-so-3-900gr-new-1y.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-bot-abbott-grow-3-g-powervani-900g.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/2/origin/sua-bot-abbott-grow-3-g-powervani-900g.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-meiji-so-9.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/3/origin/sua-bot-abbott-grow-3-g-powervani-900g.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-bot-aptamil-advanced-anh-so-3-800g.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
