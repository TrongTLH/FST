import React from "react";
import "./HomePage.scss";
import { SearchOutlined } from "@ant-design/icons";
import Item from "../../components/Item/Item";
import { Button, Col, Row } from "antd";
import Carousel from "../../components/Carousel/Carousel";
import SubCarousel from "../../components/SubCarousel/SubCarousel";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="content">
        <div className="container">
          <h1>Top VietNam Brands, Great Prices, High Quality</h1>
          <p>
            <strong>Here at Milk Baby Shop we value every customer</strong>,
            individual or business, and our dedicated team are always keen to
            help your individual needs. Thanks to our long-term close
            relationships with the manufacturers and distributors, we guarantee
            you the best prices, best quality and fast shipping.
          </p>
          <p>
            <strong>We take every order very seriously</strong>, as if we were
            buying for our own children, and every order we send out is done
            swiftly with love and care, always mindful of correct product
            storage (throughout the supply chain), fresh stock and safe packing
            for transit quickly direct to your door.
          </p>
          <p>
            <strong>Green policy</strong>. We try as far as possible to use
            recycled cardboard and environmentally friendly packaging. Even our
            shipping documents are printed on non-bleached recycled paper.
          </p>
        </div>
      </div>

      <Row className="youtube-box">
        <Col span={3}></Col>
        <Col span={9}> <p style={{padding: '0 20px', fontSize: '16px'}}>
            <strong>We are VietName based</strong>. With more than 25 years
            experience in wholesale on Baby Products, we fully understand
            supplying the best quality products and great customer service are
            the keys to long lasting relationships and look forward to serving
            you soon.
          </p></Col>
        <Col span={9}>
          <iframe
            className="youtubevideo"
            src="https://player.vimeo.com/video/955203673?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="milk_lab (1080p)"
          ></iframe>
        </Col>
        <Col span={3}></Col>
      </Row>
    
      <div className="home">
      <div className="subcarousel">
          <SubCarousel />
        </div>
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
        <div className="product_home">
          <p>Choose any products</p>
          <h1>Buy Everything With Us</h1>
        </div>
    
        <div className="product_list">
          <p
            style={{
              fontSize: "23px",
              fontWeight: 400,
              color: "rgba(18, 18, 18, 0.7490196078)",
            }}
          >
            Featured Products
          </p>
          <div className="carousel_product">
            <Item />
          </div>
          <p
            style={{
              fontSize: "23px",
              fontWeight: 400,
              color: "rgba(18, 18, 18, 0.7490196078)",
            }}
          >
            Popular Products
          </p>
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
            borderRadius: "20px",
          }}
          type="primary"
          danger
        >
          <strong className="btnm"> View More</strong>
        </Button>
      </div>

      <div className="home_feedback">
        <div className="container_feedback">
          <Row>
            <Col span={2}></Col>
            <Col span={22}>
              <h1 style={{ padding: "20px 0" }}>Customer Feedback</h1>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col className="box" span={6}>
              <p2>Thanks. Arrived safe.</p2>
              <p>"Package arrived quickly and was well packed"</p>
              <p>Richard R., TX</p>
            </Col>
            <Col span={1}></Col>
            <Col className="box" span={6}>
              <p2>Helpful Customer Service.</p2>
              <p>"Thank you for the quick reply to my questions"</p>
              <p>Maria G., CA</p>
            </Col>
            <Col span={1}></Col>
            <Col className="box" span={6}>
              <p2>Good Service.</p2>
              <p>"Good service and good prices, I will buy again next month"</p>
              <p>Julia T., NY</p>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomePage;
