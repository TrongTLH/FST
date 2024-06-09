import React, { useEffect, useState } from "react";
import "./index.scss";
import { WrapperImg, WrapperText } from "./index";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils";
const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = mutation;
  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);
  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };
  const handleOnChangeAddress = (e) => [setAddress(e.target.value)];
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
  };
  return (
    <div className="user-information">
      <img
        className="blur"
        src="https://www.babybio.fr/img/modules/oh_news/news/51_picture.jpg"
        alt="img"
      ></img>
      <div className="container">
        <WrapperText>User information</WrapperText>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            gap: "10px",
          }}
          className="userinfor"
        >
          <p htmlFor="name" className="inputtext">
            Name:
          </p>
          <input
            id="name"
            value={name}
            onChange={handleOnChangeName}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "9px 10px",
              borderRadius: "20px",
            }}
            placeholder="Name..."
            type="text"
          ></input>
          <Button onClick={handleUpdate}>Update</Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            gap: "10px",
          }}
          className="userinfor"
        >
          <p htmlFor="email" className="inputtext">
            Email:
          </p>
          <input
            id="email"
            value={email}
            onChange={handleOnChangeEmail}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "9px 10px",
              borderRadius: "20px",
            }}
            placeholder="Email..."
            type="text"
          ></input>
          <Button onClick={handleUpdate}>Update</Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            gap: "10px",
          }}
          className="userinfor"
        >
          <p htmlFor="address" className="inputtext">
            Address:
          </p>
          <input
            id="address"
            value={address}
            onChange={handleOnChangeAddress}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "9px 10px",
              borderRadius: "20px",
            }}
            placeholder="Address..."
            type="text"
          ></input>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            gap: "10px",
          }}
          className="userinfor"
        >
          <p htmlFor="phone" className="inputtext">
            Phone:
          </p>
          <input
            id="phone"
            value={phone}
            onChange={handleOnChangePhone}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "9px 10px",
              borderRadius: "20px",
            }}
            placeholder="Phone..."
            type="text"
          ></input>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            gap: "10px",
          }}
          className="userinfor"
        >
          <p htmlFor="avatar" className="inputtext">
            Avatar:
          </p>
          <WrapperImg maxCount={1} onChange={handleOnChangeAvatar}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </WrapperImg>

          {avatar && (
            <img
              src={avatar}
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                
              }}
              alt="avatar"
            ></img>
          )}

          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
