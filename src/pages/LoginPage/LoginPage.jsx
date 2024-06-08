import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
const LoginPage = () => {
  const navigate = useNavigate();
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isSuccess } = mutation;
  console.log("mutation", mutation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleNavigateRegister = () => {
    navigate("/signup");
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (isSuccess && data?.status !== "ERR") {
      navigate("/");
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);
  const handleDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  const handleLogin = () => {
    mutation.mutate({
      email,
      password,
    });
  };
  const navigateThroughGoogle = useNavigate();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log("credential", credential);
        console.log("user", user);
        navigateThroughGoogle("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-screen flex items-start">
      <div className=" relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn your ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get atractive offers from the community
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://britishbabyshop.com/cdn/shop/files/mother_and_baby_background_2000x.jpg?v=1660757367"
          alt="img"
        ></img>
      </div>
      <div className="w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20  justify-between items-center">
        <Link to={"/"}>
          {" "}
          <h1 className="text-xl max-w-[500px] text-[#060606] font-semibold cursor-pointer">
            Back To Home
          </h1>
        </Link>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome back! Please enter your detail.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              value={email}
              onChange={handleOnChangeEmail}
              type="email"
              placeholder="Email"
              className="w-full py-2 my-2 bg-transparent text-black  border-b border-black outline-none focus: outline-none"
            />
            <input
              value={password}
              onChange={handleOnChangePassword}
              type="password"
              placeholder="Password"
              className="w-full py-2 my-2 bg-transparent text-black  border-b border-black outline-none focus: outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2"></input>
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot password?
            </p>
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <div className="w-full flex flex-col my-4">
            <button
              disabled={!email.length || !password.length}
              onClick={handleLogin}
              className="w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer "
            >
              Login
            </button>

            <button
              onClick={handleNavigateRegister}
              className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Register
            </button>
          </div>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="absolute text-2xl text-black/80 bg-white">Or</p>
          </div>
          <button
            onClick={handleLoginGoogle}
            className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
          >
            <img
              className="h-6 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="img"
            ></img>
            Sign in with google
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont have an account?{" "}
            <span
              onClick={handleNavigateRegister}
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
