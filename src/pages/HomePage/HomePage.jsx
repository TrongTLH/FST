import React from "react";
import "./HomePage.scss";
import { SearchOutlined } from "@ant-design/icons";
import Item from "../../components/Item/Item";
import { Button } from "antd";
import Carousel from "../../components/Carousel/Carousel";
import SubCarousel from "../../components/SubCarousel/SubCarousel";

const HomePage = () => {
  return (
    <>
      <Carousel />

      <div className="home">
        <div className="home_top">
          <p>
            Search Your One From{" "}
            <span className="thoudsand">
              <strong>Thoudsand</strong>{" "}
            </span>
            Of
          </p>
          <span> Products</span>
        </div>

        <div className="home_search">
          <input type="text" placeholder="Search your product..."></input>
          <span>
            <SearchOutlined className="icon" />
          </span>
        </div>
        <div className="slogan">
          <p>We have the largest collection of products</p>
        </div>
        <div className="subcarousel">
          <SubCarousel />
        </div>
        <div className="product_home">
          <p>Choose any products</p>
          <h1>Buy Everything With Us</h1>
        </div>

        <div className="product_list">
          <div className="carousel_product">
            <Item />
          </div>
          <div className="carousel_product">
            <Item />
          </div>
          <div className="carousel_product">
            <Item />
          </div>
        </div>
        <Button
          style={{
            fontSize: "17px",
            padding: "20px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="primary"
          danger
        >
          <strong className="btnm"> View More</strong>
        </Button>
      </div>
    </>
  );
};

export default HomePage;
