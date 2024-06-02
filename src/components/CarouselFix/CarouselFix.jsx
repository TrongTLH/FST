import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function CarouselFixed() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="carouselfixed">
        <SwiperSlide>
          <img
            src="https://britishbabyshop.com/cdn/shop/files/mother_and_baby_background_2000x.jpg?v=1660757367"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
