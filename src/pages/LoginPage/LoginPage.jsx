import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
              type="email"
              placeholder="Email"
              className="w-full py-2 my-2 bg-transparent text-black  border-b border-black outline-none focus: outline-none"
            />
            <input
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
          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer ">
              Login
            </button>
            <Link to={"/signup"}>
            <button className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button></Link>
          </div>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="absolute text-2xl text-black/80 bg-white">Or</p>
          </div>
          <button className="w-full text-[#060606] font-semibold my-2 bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
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
            <Link to={"/signup"}>
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign up for free
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
