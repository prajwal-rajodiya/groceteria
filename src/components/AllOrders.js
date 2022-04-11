import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header3 from "./Header3";

import { URL } from "../config";

export default function AllOrders() {
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrders();
  }, []);

  const [allOrders, setAllOrders] = useState([]);
  const customerId = sessionStorage["id"];
  const fetchOrders = () => {
    const url = `${URL}/admin/getAllOrders`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
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
                <th scope="col">Order Id</th>
                <th scope="col">Customer Id</th>
                <th scope="col"> Date [yy-mm-dd]</th>
                <th scope="col"> Status</th>
                <th scope="col"> Amount</th>
                <th scope="col"> Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((item) => {
                if (item.customerId == customerId) {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <th scope="row">{item.customerId}</th>
                      {console.log(item.orderDate.substring(0, 10))}
                      <td>{item.orderDate.substring(0, 10)}</td>
                      <td>{item.orderStatus}</td>
                      <td>{item.totalPrice}</td>
                      <td>
                        <button
                          onClick={() => {
                            navigate("/orderDetail", {
                              state: {
                                orderId: item.id,
                              },
                            });
                          }}
                          className="btn-success"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
