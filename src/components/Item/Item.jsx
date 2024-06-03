import React from "react";
import "./Item.scss";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Item = () => {
  return (
    <>
      <Card
        className="card"
        hoverable
        style={{
          width: 220,
        }}
        cover={
          <img
            alt="img"
            src="https://britishbabyshop.com/cdn/shop/files/HippOrganic1.jpg?v=1656210873"
          />
        }
      >
        <div className="descard">
          <p>
            <strong>Meiji</strong>
          </p>
          <p>Sữa Meiji...</p>
          <p className="new_price">
            368.000đ <span className="old_price">390.000đ</span>
          </p>
          <div className="cart_box">
            <ShoppingCartOutlined className="carticon" />
            <span>Add To Cart</span>
          </div>
        </div>
      </Card>

      <Card
        className="card"
        hoverable
        style={{
          width: 220,
        }}
        cover={
          <img
            alt="img"
            src="https://britishbabyshop.com/cdn/shop/files/Holle-Goat-stage1-First-Infant-milk-formula-570x.png?v=1692699911"
          />
        }
      >
        <div className="descard">
          <p>
            <strong>Meiji</strong>
          </p>
          <p>Sữa Meiji...</p>
          <p className="new_price">
            368.000đ <span className="old_price">390.000đ</span>
          </p>
          <div className="cart_box">
            <ShoppingCartOutlined className="carticon" />
            <span>Add To Cart</span>
          </div>
        </div>
      </Card>

      <Card
        className="card"
        hoverable
        style={{
          width: 220,
        }}
        cover={
          <img
            alt="img"
            src="https://britishbabyshop.com/cdn/shop/files/Kendamil-Goat-stage1-First-Infant-milk-600x-wh.png?v=1706134474"
          />
        }
      >
        <div className="descard">
          <p>
            <strong>Imperial Kid XO</strong>
          </p>
          <p>Sữa Imperial...</p>
          <p className="new_price">
            465.000đ <span className="old_price">910.000đ</span>
          </p>
          <div className="cart_box">
            <ShoppingCartOutlined className="carticon" />
            <span>Add To Cart</span>
          </div>
        </div>
      </Card>

      <Card
        className="card"
        hoverable
        style={{
          width: 220,
        }}
        cover={
          <img
            alt="img"
            src="https://britishbabyshop.com/cdn/shop/products/Aptamil-Organic-Stage-2-Follow-On-Milk-Formula-800g_360x.png?v=1668336619"
          />
        }
      >
        <div className="descard">
          <p>
            <strong>Meiji Formula</strong>
          </p>
          <p>Sữa Meiji Growing...</p>
          <p className="new_price">
            665.000đ <span className="old_price">910.000đ</span>
          </p>
          <div className="cart_box">
            <ShoppingCartOutlined className="carticon" />
            <span>Add To Cart</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Item;
