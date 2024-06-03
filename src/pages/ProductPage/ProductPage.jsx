import Item from "../../components/Item/Item";
import React from "react";
import "./index.scss";
import { Col, Row } from "antd";
const ProductPage = () => {
  return (
    <div className="productitem">
      <div className="container">
        <Row className="container_text">
          <Col span={1}></Col>
          <Col span={15}>
            <div>
              <h1>Shop All Products...</h1>
              <p>
                We stock the highest quality baby milk formulas from HiPP,
                Kendamil, Holle, Nannycare and Aptamil
              </p>
              <p>
                Choose from organic, classic and specialist milks, cow and goat,
                stages from birth to toddler.{" "}
              </p>
              <p>We also stock a collection of baby cereal and rice</p>
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
        <div className="container_item">
          <div className="cate1">
            <div className="productitem1">
              <Item />
            </div>
          </div>

          <div className="cate2">
            <div className="productitem1">
              <Item />
            </div>
          </div>

          <div className="cate2">
            <div className="productitem1">
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
