import axios from "axios";
import React, { useEffect, useState } from "react";
 
import { URL } from "../config";
import Topbar from "./Topbar";
export default function AllUserList() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = () => {
    const url = `${URL}/admin/getAllUsers`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setAllUsers(result.data);
    });
  };

  return (
    <> <Topbar />
      <div className="container table-responsive">
        <h1 className="display-3 text-center">All Users</h1>
        {allUsers !== "" && (
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">firstName</th>
                <th scope="col"> lastName</th>
                <th scope="col"> gender</th>
                <th scope="col"> mobile</th>
                <th scope="col"> email</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>

                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
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
