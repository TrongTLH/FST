import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";

const Header = () => {
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
    <div>
      <p className="props" style={{ cursor: "pointer" }} onClick={handleLogout}>
        Logout
      </p>
      <p
        className="props"
        onClick={() => navigate("/profile")}
        style={{ cursor: "pointer" }}
      >
        User information
      </p>
    </div>
  );
  useEffect(() => {
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
  }, [user?.name, user?.avatar]);
  return (
    <div className="header">
      <div className="header_logo">
        <Link to={"/"}>
          <img
            src="https://i.pinimg.com/originals/e9/5b/5d/e95b5da57b8cd19bc932984bde39584b.png"
            width={200}
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
            <Link to={"/signup"}>Create Account</Link>
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

        <li style={{ fontSize: "16px", display: "flex", gap: "5px" }}>
          <Badge count={1} size="small">
            {" "}
            <ShoppingCartOutlined
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
          </Badge>
        </li>
      </nav>
    </div>
  );
};

export default Header;
