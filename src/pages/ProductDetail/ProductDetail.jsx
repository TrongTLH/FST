import React from "react";
import ProductDetailsComponent from "../../components/ProductDetaislComponent/ProductDetailsComponent";
import { useNavigate, useParams } from "react-router-dom";
import { MinusOutlined, RightOutlined } from "@ant-design/icons";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ padding: "10px 25px", fontSize: "13px" }}>
        <h5>
          <span style={{cursor: 'pointer'}} onClick={() => navigate("/")}>
            <strong> Home Page </strong>
          </span>{" "}
          <RightOutlined /> Product Details
        </h5>
      </div>
      <div style={{ padding: "0 120px", background: "#f7f4f0" }}>
        <ProductDetailsComponent idProduct={id} />
      </div>
    </div>
  );
};

export default ProductDetail;
