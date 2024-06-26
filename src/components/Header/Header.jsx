import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Col, Popover, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";

const Header = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await UserService.logoutUser;
    dispatch(resetUser());
  };
  const user = useSelector((state) => state.user);
  const content = (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <p
        className="props"
        style={{ cursor: "pointer", fontSize: "16px" }}
        onClick={handleLogout}
      >
        Logout
      </p>
      <p
        className="props"
        onClick={() => navigate("/profile")}
        style={{ cursor: "pointer", fontSize: "16px", padding: "5px 0" }}
      >
        User information
      </p>
      {user?.isAdmin && (
        <p
          className="props"
          onClick={() => navigate("/system/admin")}
          style={{ cursor: "pointer", fontSize: "16px" }}
        >
          System Management
        </p>
      )}
    </div>
  );
  useEffect(() => {
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
  }, [user?.name, user?.avatar]);
  return (
    <>
      <div
        style={{ width: "100%", height: "44px", background: "#e8b6b5" }}
        className="top_header"
      >
        <Row>
          <Col span={2}></Col>
          <Col
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            span={6}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src="https://icons.veryicon.com/png/128/transport/logistics-multi-color-icon/male-customer-service.png"
              alt="icon"
            ></img>
            <p
              style={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                height: "44px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Dedicated Customer Support
            </p>
          </Col>
          <Col span={2}></Col>
          <Col style={{ display: "flex", gap: "8px" }} span={6}>
            <img
              src="https://static.thenounproject.com/png/194111-200.png"
              alt="icon"
              width={25}
              height={9}
            ></img>
            <p
              style={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                height: "44px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              1000+ Orders Shipped Worldwide
            </p>
          </Col>
          <Col span={3}></Col>
          <Col
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
            span={5}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src="https://cdn-icons-png.freepik.com/512/3440/3440078.png"
              alt="icon"
            ></img>
            <p
              style={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                height: "44px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Trusted VN Seller
            </p>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
      <div className="header">
        <div className="header_logo">
          <Link to={"/"}>
            <img
              src="https://organicformulashop.com/cdn/shop/files/VECTORSTOCK-PROJECT-909-PINK-BACKGROUND_360x.png?v=1623904518"
              width={190}
              alt="logo"
            ></img>
          </Link>
        </div>
        <nav className="header_nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>

          <div className="createaccount">
            <li>
              <Link style={{ color: "#fff" }} to={"/signup"}>
                Create Account
              </Link>
            </li>
          </div>

          {userAvatar ? (
            <img
              style={{
                height: "37px",
                width: "37px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={userAvatar}
              alt="avatar"
            ></img>
          ) : (
            <UserOutlined />
          )}

          {user?.access_token ? (
            <>
              <Popover content={content} trigger="click">
                <div style={{ cursor: "pointer" }}>
                  {userName?.length ? userName : user?.email}
                </div>
              </Popover>
            </>
          ) : (
            <li onClick={handleNavigateLogin}>
              <Link>Sign in</Link>
            </li>
          )}
          {!isHiddenCart && (
            <li style={{ fontSize: "16px", display: "flex", gap: "5px" }}>
              <Badge style={{ background: "#97A982" }} count={1} size="small">
                {" "}
                <ShoppingCartOutlined
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </Badge>
            </li>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
