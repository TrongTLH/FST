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
            src="https://britishbabyshop.com/cdn/shop/files/Kendamil-Goat-stage1-First-Infant-milk-formula-620x620_360x.png?v=1692384009"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://britishbabyshop.com/cdn/shop/products/Kendamil-berry-porridge-600x600_360x.png?v=1664919947"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://britishbabyshop.com/cdn/shop/files/Kendamil-Classic-Stage3-Toddler-milk-615x_360x.png?v=1688538232"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://britishbabyshop.com/cdn/shop/products/Kendamil-creamy-porridge-600x600_360x.png?v=1664920203"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://britishbabyshop.com/cdn/shop/products/Kendamil-cauliflower-broccoli-tomato-bake-600x600_360x.png?v=1664920050"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
