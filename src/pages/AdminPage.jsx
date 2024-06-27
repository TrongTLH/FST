import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../utils";
import Header from "../components/Header/Header";
import AdminUser from "../components/AdminUser/AdminUser";
import AdminProduct from "../components/AdminProduct/AdminProduct";

const AdminPage = () => {
  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "product":
        return <AdminProduct />;
      default:
        return <></>;
    }
  };
  const items = [
    getItem("User", "user", <UserOutlined />),
    getItem("Product", "product", <AppstoreOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");
  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };
  console.log("keySelected", keySelected);
  return (
    <>
      <Header isHiddenCart isHiddenSearch />
      <div style={{ display: "flex" }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            marginTop: "2px",
            height: "100vh",
            fontSize: "17px",
            fontWeight: "300",
          }}
          items={items}
          onClick={handleOnClick}
        ></Menu>
        <div style={{ flex: 1, padding: "30px", fontSize: "16px" }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
