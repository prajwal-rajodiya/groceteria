import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Header3 from "./Header3";

import { URL } from "../config";

export default function OrderDetails() {
  const { state } = useLocation();

  const { orderId } = state;
  useEffect(() => {
    fetchOrders();
  }, []);

  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = () => {
    // const { id } = sessionStorage
    // const customerId = id
    // const body = {
    //   customerId,
    //   orderId
    // }

    const url = `${URL}/getOrderDetailsById/${orderId}`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result.data);
      setAllOrders(result.data);
    });
  };

  return (
    <>
      <Header3></Header3>
      <div className="container table-responsive">
        <h1 className="display-3 text-center">All Orders</h1>
        {allOrders !== "" && (
          <table class="table table-hover">
            <thead className="table-dark">
              <tr>
                {" "}
                <th scope="col"> Product Name</th>
                <th scope="col"> Quantity </th>
                <th scope="col"> Amount</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
