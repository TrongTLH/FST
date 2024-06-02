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
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-meiji-so-9.jpg"
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
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-meiji-so-0-noi-dia-nhat-800g.jpg"
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
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-xo-kid-vani-800g.jpg"
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
            src="https://media.bibomart.net/images/2024/2/2/1/origin/sua-meiji-growing-up-formula-800g-12-36m.jpg"
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
