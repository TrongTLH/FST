import React from "react";
import "./Item.scss";
import { Card } from "antd";
import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
    id,
  } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/productDetail/${id}`);
  };
  return (
    <Card
      onClick={() => handleDetailsProduct(id)}
      className="card"
      hoverable
      style={{
        width: 300,
      }}
    >
      <img style={{ borderRadius: "50%" }} alt="img" src={image} />

      <p style={{justifyContent: 'center', display: 'flex',padding: '5px 0'}}>
        <strong>{name}</strong>
      </p>

      {/* <p>{description}</p> */}

      <p style={{justifyContent: 'center', display: 'flex'}}>
        {rating}{" "}
        <span>
          <StarFilled style={{ color: "yellow" }} />
        </span>{" "}
        <span>| Selled {selled || 1000}+</span>
      </p>

      <p style={{justifyContent: 'center', display: 'flex', padding: '5px 0', gap: '10px'}} className="new_price">
        {price.toLocaleString()}đ{" "}
        <span style={{ color: "red" }}> -{discount || 5}%</span>
      </p>

      <div style={{justifyContent: 'center', display: 'flex'}} className="cart_box">
        <ShoppingCartOutlined className="carticon" />
        <span>Add To Cart</span>
      </div>
    </Card>
  );
};

export default Item;
