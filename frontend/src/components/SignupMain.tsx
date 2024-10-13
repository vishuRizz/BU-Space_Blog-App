import { SignupInput } from "@vishurizz/medium-blog";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const SignupMain = () => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const validateEmail = (email: string) => {
    if (!email.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Invalid email: must include '@'.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "",
      }));
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "Password must be at least 6 characters long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "",
      }));
    }
  };

  async function SignupRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (errors.emailError || errors.passwordError) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      console.log("control reaches axios call");
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
      const jwt = response.data.jwt;

      if (!jwt) {
        alert("Signup failed");
        return;
      }
      localStorage.setItem("token", "Bearer " + jwt);
      navigate("/blogs");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("This Username already exists");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <StyledWrapper>
          <div className="container">
            <div className="heading">Sign Up</div>

            <form className="form" onSubmit={SignupRequest}>
              <input
                onChange={(e) =>
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  })
                }
                required
                className="input"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    username: e.target.value,
                  });
                  validateEmail(e.target.value);
                }}
                required
                className="input"
                name="username"
                id="username"
                placeholder="Email"
              />
              {errors.emailError && (
                <div className="text-sm text-red-500">{errors.emailError}</div>
              )}

              <input
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                  validatePassword(e.target.value);
                }}
                required
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Password (min 6 char)"
              />
              {/* Display Password Error */}
              {errors.passwordError && (
                <div className="text-sm text-red-500">{errors.passwordError}</div>
              )}

              <button className="login-button" type="submit">
                Sign Up
              </button>
            </form>

            <div>
              <div className="cursor-pointer" onClick={() => navigate("/signin")}>
                Already have an account? Sign In
              </div>
            </div>

            <div className="social-account-container">
              <span className="title">Or Sign up with</span>
              <div className="social-accounts">
                <button className="social-button google"></button>
                <button className="social-button apple"></button>
                <button className="social-button twitter"></button>
              </div>
            </div>

            <span className="agreement">
              <a href="#">Learn user license agreement</a>
            </span>
          </div>
        </StyledWrapper>
      </div>
    </>
  );
};
const StyledWrapper = styled.div`
  .container {
  max-width: 350px;
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 20px;
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(16, 137, 211);
}

.form {
  margin-top: 20px;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 11px;
  color: #0099ff;
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
  margin-top: 25px;
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
}
`;

export default SignupMain;
