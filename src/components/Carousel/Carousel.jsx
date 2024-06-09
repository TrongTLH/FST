import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination]}
        className="carousel"
      >
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              position: "absolute",
              zIndex: "10000000",
              fontSize: "47px",
              fontWeight: "330",
              marginTop: "190px",
              marginLeft: "150px",
              color: "#555555",
            }}
          >
            <h1>Organic VN Formulas for a</h1>
            <h2>Healthy Start in Life</h2>
            <p style={{ fontSize: "20px" }}>Bringing Happiness to Every Crib</p>
            <p style={{ fontSize: "20px" }}>Embrace the Joy of Babyhood</p>
            <p style={{ fontSize: "20px" }}>Where Cuteness Overflows</p>
            <div style={{width: '360px', height: '60px', background: '#97A982', display: 'flex', marginTop: '25px', borderRadius: '12px', alignItems: 'center', justifyContent: 'center'}}>
            <h3 style={{color: '#ffff', fontSize: '23px', fontWeight: '600'}}>
              Shop Your Milk Below
            </h3>
            </div>
          </div>
          <img
            // className="blur"
            style={{ position: "relative" }}
            src="https://organicformulashop.com/cdn/shop/files/baby-with-bottle-homepage-header_2450x.jpg?v=1623919002"
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
            // className="blur"
            style={{ position: "relative" }}
            src="https://www.babybio.fr/img/modules/oh_news/news/51_picture.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
