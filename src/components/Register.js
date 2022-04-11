import { Link } from "react-router-dom";
import path from "../assets/svg/signup.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./register.css";
import React from "react";
import Header3 from "./Header3";
import Footer from "./Footer";
import { URL } from "../config";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = () => {
    if (firstName.length === 0) {
      toast.warning("Enter firstname !");
    } else if (lastName.length === 0) {
      toast.warning("Enter LastName !");
    } else if (email.length === 0) {
      toast.warning("Enter email !");
    } else if (password.length === 0) {
      toast.warning("Enter password !");
    } else if (mobile.length === 0 || mobile.length > 10) {
      toast.warning("Invalid Phone number(enter without country code)");
    } else if (confirmPassword.length === 0) {
      toast.warning("Enter confirm password !");
    } else if (confirmPassword !== password) {
      toast.warning("Password Doesn't matched !");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        mobile,
      };
      sessionStorage.setItem("body", JSON.stringify(body));

      const url = `${URL}/user/signup`;
      axios.post(url, body).then((response) => {
        if (response.status === 200) {
          toast.success("Signed Up Successfully :) ");
          navigate("/login");
        } else {
          toast.error(response.data);
        }
      });
    }
  };
  return (
    <div>
      <Header3 />
      <div className="row my-4 sign-up-wrapper">
        <div
          className="col"
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <img src={path} alt="signup" style={{ width: "100%" }} />
        </div>

        <div className="col">
          <div className="form-field">
            <div className="form" style={{ marginTop: "10%" }}>
              <div className="mb-3">
                <label htmlFor="FirstName" className="label-control">
                  FirstName
                </label>
                <input
                  type="text"
                  id="FirstName"
                  className="form-control"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="LastName" className="label-control">
                  LastName
                </label>
                <input
                  type="text"
                  id="LastName"
                  className="form-control"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="FirstName" className="label-control">
                  Phone
                </label>
                <input
                  type="text"
                  id="Phone"
                  className="form-control"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="label-control">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="label-control">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ConfirmPassword" className="label-control">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="ConfirmPassword"
                  className="form-control"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              Already have account ? <Link to="/login">signin here</Link>
              <div>
                <button className="btn btn-dark" onClick={submitHandler}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
