import Item from "../../components/Item/Item";
import React from "react";
import "./index.scss";
const ProductPage = () => {
  return (
    <div className="productitem">
      <div className="cate1">
        <p className="p1">
          {" "}
          <strong>Milk for kids below 5 years old</strong>
        </p>
        <div className="productitem1">
          <Item />
        </div>
      </div>

      <div className="cate2">
        <p className="p1">
          {" "}
          <strong>Milk for kids above 5 years old</strong>
        </p>
        <div className="productitem1">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
