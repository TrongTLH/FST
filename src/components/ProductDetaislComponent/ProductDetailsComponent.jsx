/* eslint-disable no-const-assign */
import { Button, Col, Image, InputNumber, Rate, Row } from "antd";
import React, { useState } from "react";
import "./index.scss";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const ProductDetailsComponent = ({ idProduct }) => {
  const user = useSelector((state) => state.user);
  console.log("user", user);
  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
    console.log("id", id);
  };

  const { data: productDetails } = useQuery({
    queryKey: ["products", idProduct],
    queryFn: fetchGetDetailsProduct,
    enabled: !!idProduct,
  });
  console.log("productDetails", productDetails);

  const [images, setImages] = useState({
    img1: "https://m.media-amazon.com/images/I/51e2J4D4nML._AC_SL1500_.jpg",
    img2: "https://m.media-amazon.com/images/I/71vxphurosL._AC_SL1500_.jpg",
    img3: "https://m.media-amazon.com/images/I/61eWt9xxjuL._AC_SL1500_.jpg",
    img4: "https://m.media-amazon.com/images/I/61tswZFbzoL._AC_SL1500_.jpg",
    img5: "https://media.bibomart.net/images/2024/2/2/400/origin/sua-meiji-so-9.jpg",
  });
  const [activeImage, setActiveImage] = useState(productDetails?.image);

  const [numProduct, setNumProduct] = useState(1);
  const handleOnChange = (value) => {
    setNumProduct(Number(value));
  };
  const handleChangeCount = (type) => {
    console.log("type", type);
    if (type === "increase") {
      setNumProduct(numProduct + 1);
    } else if (type === "decrease" && numProduct > 1) {
      setNumProduct(numProduct - 1);
    }
  };

  return (
    <Row className="productdetail">
      <Col span={12} className="productdetail-left">
        <div className="bigimg">
          <Image
            style={{ borderRadius: "50%" }}
            src={productDetails?.image}
            alt="img"
            width={440}
            height={380}
          ></Image>
        </div>

        <div className="productdetailsmall">
          <Image
            className="img1"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images?.img1}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images?.img1)}
          ></Image>
          <Image
            className="img2"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img2}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img2)}
          ></Image>
          <Image
            className="img3"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img3}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img3)}
          ></Image>
          <Image
            className="img4"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img4}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img4)}
          ></Image>
        </div>
      </Col>
      <Col span={12} className="productdetail-right">
        <h1>{productDetails?.name}</h1>
        <h7 style={{ color: "#071f60", fontWeight: "500", fontSize: "17px" }}>
          800g | {productDetails?.type}
        </h7>
        <p2>MSP: {productDetails?.createdAt}</p2>
        <p3>{productDetails?.description}</p3>
        <div>
          <Rate
            allowHalf
            defaultValue={productDetails?.rating}
            value={productDetails?.rating}
          />
          <p8> | Selled 1000+</p8>
        </div>
        <div className="price">
          <img
            src="https://bibomart.com.vn/images/product_detail/fire.png"
            alt="logo"
            width={24}
            height={25}
          ></img>
          <p>{productDetails?.price.toLocaleString()}</p>
          <span className="old_price">700.000đ</span>
          <div
            style={{
              color: "#fff",
              background: "#ff4141",
              padding: "4px 10px",
              borderRadius: "10px",
            }}
          >
            <span>-8%</span>
          </div>
        </div>
        <p5>Số lượng còn lại: {productDetails?.countInStock}</p5>
        <div className="boxquantity">
          <p1>Quantity: </p1>

          <button onClick={() => handleChangeCount("decrease")}>
            <MinusOutlined />
          </button>
          <InputNumber
            size="small"
            defaultValue={1}
            value={numProduct}
            onChange={handleOnChange}
          />
          <button onClick={() => handleChangeCount("increase")}>
            <PlusOutlined />
          </button>
        </div>

        <div>
          <p9>
            Delivery to{" "}
            <strong style={{ textDecoration: "underline" }}>
              {user?.address}
            </strong>
            <span> - </span>
            <strong style={{ color: "rgb(23, 202, 246)", cursor: "pointer" }}>
              Change Address
            </strong>
          </p9>
        </div>

        <div className="btn">
          <Button
            style={{
              outline: "none",
              fontWeight: "700",
              fontSize: "15px",
              background: "#ff4141",
              color: "#fff",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              padding: "20px 20px",
            }}
          >
            Add To Cart
          </Button>
          <Button
            style={{
              outline: "none",
              fontWeight: "700",
              fontSize: "15px",
              background: "#efefef",
              color: "#000",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              padding: "20px 20px",
            }}
          >
            Buy Now
          </Button>
          <div style={{ cursor: "pointer" }} className="love">
            <img
              src="https://bibomart.com.vn/images/web_app/ic_like.svg"
              alt=""
            ></img>
            <span>Love</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
