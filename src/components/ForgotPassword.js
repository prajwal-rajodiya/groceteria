import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";
import "./forgotpassword.css";
import path from "../assets/svg/forgot-pass.svg";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(sessionStorage.email);
  const verifyEmail = () => {
    if (email.length === 0) {
      toast.warning("Enter Email !!");
    } else {
      const body = {
        email,
      };
      sessionStorage.setItem("email", `${email}`);
      const url = `${URL}/user/generate-otp`;

      axios.post(url, body).then((response) => {
        if (response.status === 200) {
          toast.success("Otp is sent ! plz check your mail");
          navigate("/otp-verification");
        } else {
          toast.error("plz enter valid email!");
        }
      });
    }
  };
  return (
    <div>
      <div id="wrapper" className="row">
        <div id="imagediv" className="col">
          <img src={path} alt="forgot" />
        </div>
        <div className="col">
          <div id="form-field" className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-dark" onClick={verifyEmail}>
                Send Otp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
