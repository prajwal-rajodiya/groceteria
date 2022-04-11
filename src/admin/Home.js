import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

import "./home.css";
import {
  FcLike,
  FcAutomotive,
  FcTodoList,
  FcPlus,
  FcRemoveImage,
  FcFullTrash,
} from "react-icons/fc";

import { URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";

const Block = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 250px;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 3px gray;
`;

const Home = () => {
  const [orderCounts, setOrderCounts] = useState();
  const [userCounts, setUserCounts] = useState();
  useEffect(() => {
    orderCount();
  }, []);
  useEffect(() => {
    userCount();
  }, []);

  const orderCount = () => {
    const url = `${URL}/getOrderCount`;
    axios.get(url).then((response) => {
      setOrderCounts(response.data.data);
      console.log(response.data.data);
    });
  };
  const userCount = () => {
    const url = `${URL}/user/getUserCount`;
    axios.get(url).then((response) => {
      setUserCounts(response.data.data);
      console.log(response.data.data);
    });
  };
  const navigate = useNavigate();

  var products = [];
  products = JSON.parse(sessionStorage.getItem("allProducts"));

  const totalCategories = new Set();
  products.map((e) => {
    totalCategories.add(e.product_type);
  });

  return (
    <>
      <div className="sidebar-container">
        <div className="row">
          <h1 className="display-5">manage customers</h1>
          <div class="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/allUsers");
              }}
            >
              <FcLike style={{ fontSize: "42px" }}></FcLike>
              <h3 className="header">Happy Customers</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="expense clickable-block"
              onClick={() => {
                navigate("/userManage");
              }}
            >
              <FcRemoveImage
                style={{ fontSize: "45px", color: "green" }}
              ></FcRemoveImage>
              <h3 className="header">remove user</h3>
            </Block>
          </div>

          <hr />
          <h1 className="display-5">Product</h1>
          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="revenue clickable-block"
              onClick={() => {
                navigate("/addProduct");
              }}
            >
              <FcPlus style={{ fontSize: "45px", color: "green" }}></FcPlus>
              <h3 className="header">Add Product</h3>
            </Block>
          </div>

          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="revenue clickable-block"
              onClick={() => {
                navigate("/deleteProduct");
              }}
            >
              <FcFullTrash
                style={{ fontSize: "45px", color: "green" }}
              ></FcFullTrash>
              <h3 className="header">Delete Product</h3>
            </Block>
          </div>
          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="revenue clickable-block"
              onClick={() => {
                navigate("/modifyProduct");
              }}
            >
              <FcAutomotive
                style={{ fontSize: "45px", color: "green" }}
              ></FcAutomotive>
              <h3 className="header">Modify product</h3>
            </Block>
          </div>
          <hr />
          <h1 className="display-5">Orders</h1>
          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="revenue clickable-block"
              onClick={() => {
                navigate("/allOrders");
              }}
            >
              <FcTodoList
                style={{ fontSize: "45px", color: "green" }}
              ></FcTodoList>
              <h3 className="header">Total Orders</h3>

              <h4 className="block-title">{orderCounts} </h4>
            </Block>
          </div>
          <hr />
          <h1 className="display-5">message</h1>
          <div className="col-sm-6 col-lg-4 col-md-3">
            <Block
              className="revenue clickable-block"
              onClick={() => {
                navigate("/feedbackList");
              }}
            >
              <FcTodoList
                style={{ fontSize: "45px", color: "green" }}
              ></FcTodoList>
              <h3 className="header">Feedback</h3>

              <h4 className="block-title">{orderCounts} </h4>
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
