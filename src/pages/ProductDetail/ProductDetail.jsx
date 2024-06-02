import React, { useState } from "react";
import "./index.scss";
import { Button, Col, Row } from "antd";
const ProductDetail = () => {
  const [images, setImages] = useState({
    img1: "https://media.bibomart.net/images/2024/2/2/1/origin/sua-meiji-so-9.jpg",
    img2: "https://media.bibomart.net/images/2024/2/2/2/origin/sua-meiji-so-9.jpg",
    img3: "https://media.bibomart.net/images/2024/2/2/400/origin/sua-meiji-so-9.jpg",
    img4: "https://media.bibomart.net/images/2024/2/2/100/origin/sua-meiji-so-9-noi-dia-nhat-800g.jpg",
    img5: "https://media.bibomart.net/images/2024/2/2/400/origin/sua-meiji-so-9.jpg",
  });
  const [activeImage, setActiveImage] = useState(images.img1);
  return (
    <Row className="productdetail">
      <Col span={12} className="productdetail-left">
        <div className="bigimg">
          <img src={activeImage} alt="img" width={440} height={380}></img>
        </div>
        <div className="productdetailsmall">
          <img
            className="img1"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img1}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img1)}
          ></img>
          <img
            className="img2"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img2}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img2)}
          ></img>
          <img
            className="img3"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img3}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img3)}
          ></img>
          <img
            className="img4"
            style={{ cursor: "pointer", borderRadius: "10px" }}
            src={images.img4}
            alt="img"
            width={100}
            height={100}
            onClick={() => setActiveImage(images.img4)}
          ></img>
        </div>
      </Col>
      <Col span={12} className="productdetail-right">
       
        <h1>Sữa Meiji số 9 nội địa Nhật 800g (1 - 3 tuổi)</h1>
        <p2>MSP: 100023</p2>
        <p3>
          Sữa Meiji số 9 nội địa Nhật 800g phù hợp cho trẻ từ 1 - 3 tuổi, không
          chỉ chứa các chất dinh dưỡng cơ bản như protein, chất béo, carbohydrat
          mà còn có các vitamin và khoáng chất rất khó có được từ sữa bò và thức
          ăn dạng rắn.
        </p3>
        <div className="price">
            <img src="https://bibomart.com.vn/images/product_detail/fire.png" alt="logo" width={24} height={25}></img>
          <p>365.000đ</p>
          <span className="old_price">700.000đ</span>
          <div style={{color: '#fff', background: '#ff4141', padding: '4px 10px', borderRadius: '10px'}}>
            <span>8%</span>
          </div>
        </div>
        <p5>Số lượng còn lại: 46</p5>
        <div className="boxquantity">
          <p1>Quantity: </p1>
          <button>-</button>
          <span>1</span>
          <button>+</button>
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

export default ProductDetail;
