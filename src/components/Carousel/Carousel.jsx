import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";


export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://www.babybio.fr/img/modules/oh_news/news/51_picture.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.mcclatchy-partners.com/incoming/fevxr3/picture277285963/alternates/LANDSCAPE_1140/Best%20Baby%20Formulas%20lede%20(1).jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emh5334n65w.exactdn.com/wp-content/uploads/2020/08/switch.png?strip=all&lossy=1&ssl=1"
            alt="img"
          ></img>
        </SwiperSlide>

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
