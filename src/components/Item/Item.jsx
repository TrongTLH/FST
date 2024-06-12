import React from "react";
import "./Item.scss";
import { Card } from "antd";
import { ShoppingCartOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

const Item = (props) => {
  const { countInStock, description, image, name, price, rating, type, discount, selled } = props;

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
            <strong>{name}</strong>
          </p>
          <p>{description}</p>
          <p>{rating} <span><StarFilled style={{color: 'yellow'}}/></span> <span>Selled {selled || 1000}+</span></p>
          <p className="new_price">{price}$<span>{discount || 5}%</span></p>
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
