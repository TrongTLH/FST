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
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="subcarousel"
      >
        <SwiperSlide>
          <img
            style={{ borderRadius: "50px" }}
            src="https://www.hipp.co.uk/fileadmin/_processed_/0/0/csm_202_-_Experts_e14194088d.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "50px" }}
            src="https://www.hipp.co.uk/fileadmin/_processed_/9/0/csm_202_-_Competitions_44ba52606f.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "50px" }}
            src="https://www.hipp.co.uk/fileadmin/_processed_/d/d/csm_198-Discount_fae21b934d.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "50px" }}
            src="https://www.hipp.co.uk/fileadmin/_processed_/e/d/csm_198-Review_ce0ab76880.jpg"
            alt="img"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ borderRadius: "50px" }}
            src="https://www.hipp.co.uk/fileadmin/_processed_/8/3/csm_198-Guides_affd9ee059.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
