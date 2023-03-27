// Internal Imports
import { useState } from "react";
import { Input, ErrorMessage, Loader, PrimaryButton } from "../components";

// Contexts
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [adharNumber, setAdharNumber] = useState("");
  const { loading, setLoading } = useAuthContext();

  const getOTPFunction = () => {
    if (!adharNumber) {
      setError("Aadhar Number cannot be empty.");
      return;
    } else if (adharNumber.length !== 12) {
      setError("Enter a valid Aadhar Number.");
      return;
    }
    setLoading(true);
    setInfo("Please wait we are working on your request.");
    setError("");
  };

  return (
    <div className="login-page-container">
      <div className="left">
        <div style={{ width: "80%" }}>
          <h1>Login ,</h1>
          <p>
            <i>
              Welcome back! Please enter your Aadhar Number and verify it using
              the OTP to securely access your account and enjoy our services
            </i>
          </p>

          <div className="login-page-input-container">
            <Input
              placeholder="Enter your Adhar no. here ..."
              type="number"
              value={adharNumber}
              onChange={setAdharNumber}
            />
            <div className="center justify-between">
              <PrimaryButton
                label={"Get OTP"}
                onClick={getOTPFunction}
                style={{
                  padding: "15px",
                  cursor: "pointer",
                }}
              />
              {loading && <Loader size={30} />}
            </div>
          </div>

          {error && <ErrorMessage message={error} />}
          {info && (
            <ErrorMessage message={info} style={{ color: "var(--warning)" }} />
          )}
        </div>

        <p style={{ color: "var(--gray)" }}>People's Protocol version 1.0.0</p>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Login;
