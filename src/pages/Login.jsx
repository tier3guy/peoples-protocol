import React from "react";
import Inputs from "../components/Inputs";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="left">
        <div style={{ width: "80%" }}>
          <h1>Login ,</h1>
          <p>
            <i>
              Welcome back! Please enter your username and password to securely
              access your account and enjoy our services
            </i>
          </p>

          <Inputs placeholder="Enter your Adhar no. here ..." type="number" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Login;
