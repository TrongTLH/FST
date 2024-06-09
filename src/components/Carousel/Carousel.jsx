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
        spaceBetween={10}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
              position: "absolute",
              zIndex: "10000000",
              fontSize: "47px",
              fontWeight: "330",
              marginTop: "190px",
              marginLeft: "480px",
              color: "#555555",
            }}
          >
            <h1>Your Baby's Smile, Our Delight</h1>
            <p style={{ fontSize: "20px" }}>Bringing Happiness to Every Crib</p>
            <p style={{ fontSize: "20px" }}>Embrace the Joy of Babyhood</p>
            <p style={{ fontSize: "20px" }}>Where Cuteness Overflows</p>
          </div>
          <img
            className="blur"
            style={{ position: "relative" }}
            src="https://www.babybio.fr/img/modules/oh_news/news/51_picture.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
              position: "absolute",
              zIndex: "10000000",
              fontSize: "47px",
              fontWeight: "330",
              marginTop: "190px",
              marginLeft: "500px",
              color: "#555555",
            }}
          >
            <h1>Feeding your baby with formula</h1>
            <p style={{ fontSize: "20px" }}>Bringing Happiness to Every Crib</p>
            <p style={{ fontSize: "20px" }}>Embrace the Joy of Babyhood</p>
            <p style={{ fontSize: "20px" }}>Where Cuteness Overflows</p>
          </div>
          <img
            className="blur"
            style={{ position: "relative" }}
            src="https://www.mcclatchy-partners.com/incoming/fevxr3/picture277285963/alternates/LANDSCAPE_1140/Best%20Baby%20Formulas%20lede%20(1).jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
              position: "absolute",
              zIndex: "10000000",
              fontSize: "47px",
              fontWeight: "330",
              marginTop: "190px",
              marginLeft: "750px",
              color: "#555555",
            }}
          >
            <h1>Happy Everyday</h1>
            <p style={{ fontSize: "20px" }}>Bringing Happiness to Every Crib</p>
            <p style={{ fontSize: "20px" }}>Embrace the Joy of Babyhood</p>
            <p style={{ fontSize: "20px" }}>Where Cuteness Overflows</p>
          </div>
          <img
            className="blur"
            style={{ position: "relative" }}
            src="https://emh5334n65w.exactdn.com/wp-content/uploads/2020/08/switch.png?strip=all&lossy=1&ssl=1"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
