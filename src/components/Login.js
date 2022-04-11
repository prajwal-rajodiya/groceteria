import { Link } from "react-router-dom";
import path from "../assets/svg/login.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import React from "react";
// import jwt_decode from "jwt-decode";
import Footer from "./Footer";
import { URL } from "../config";
import Header3 from "./Header3";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setDecodedUser] = useState({});
  const Forgotpassword = () => {
    navigate("/forgot-password");
  };
  const submitHandler = () => {
    if (email.length === 0) {
      toast.warning("please enter email");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make login api call

      const url = `${URL}/user/login`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;

        if (result["status"] === "success") {
          // get the data sent by server
          // sessionStorage["token"] = result["data"];
          // var decoded = jwt_decode(result["data"]);
          // console.log(decoded.user);
          //setDecodedUser(decoded.user);
          const { id, firstName, lastName, role, email } = result["data"];
          // jwt_decode(token);
          // persist the logged in user's information for future use
          sessionStorage["id"] = id;
          sessionStorage["firstName"] = firstName;
          sessionStorage["lastName"] = lastName;
          sessionStorage["email"] = email;
          sessionStorage["role"] = role;
          sessionStorage["loginStatus"] = 1;
          // console.log(decoded.user.role);

          // navigate to home component
          if (role === `customer`) {
            navigate("/home");
          } else if (role === `admin`) {
            navigate("/adminlogin");
          }
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };
  return (
    <div>
      <Header3 />
      <div
        className="row my-4 sign-in-wrapper"
        style={{ marginBottom: "60px" }}
      >
        <div
          className="col"
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <img
            src={path}
            alt="signin"
            style={{ width: "80%", marginTop: "15%" }}
          />
        </div>

        <div className="col">
          <div className="form-field">
            <div className="form" style={{ marginTop: "20%" }}>
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
              Don't have an account? <Link to="/register">Register here</Link>
              <div style={{ marginTop: "20px", paddingLeft: "15px" }}>
                <button className="btn btn-dark" onClick={submitHandler}>
                  Login
                </button>

                <button
                  style={{ marginLeft: "20px" }}
                  className="btn btn-dark"
                  onClick={Forgotpassword}
                >
                  Forgot Password
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
export default Login;
