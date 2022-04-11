import axios from "axios";
import React, { useEffect, useState } from "react";
 
import { URL } from "../config";
import Topbar from "./Topbar";
export default function AllOrders() {
  useEffect(() => {
    fetchOrders();
  }, []);

  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = () => {
    const url = `${URL}/admin/getAllOrders`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setAllOrders(result.data);
    });
  };

  return (
    <> <Topbar />
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
              </tr>
            </thead>
            <tbody>
              {allOrders.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <th scope="row">{item.customerId}</th>
                    {console.log(item.orderDate.substring(0, 10))}
                    <td>{item.orderDate.substring(0, 10)}</td>
                    <td>{item.orderStatus}</td>
                    <td>{item.totalPrice}</td>
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
