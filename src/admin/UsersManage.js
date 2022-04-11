import axios from "axios";
import React, { useEffect, useState } from "react";
 
import { URL } from "../config";
 
import Topbar from "./Topbar";
export default function UsersManage() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = () => {
    const url = `${URL}/admin/getAllUsers`;
    console.log(url);
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setAllUsers(result.data);
    });
  };
  function deleteUser(deleteId) {
    const url = `${URL}/admin/deleteUser/${deleteId}`;
    axios.delete(url).then((response) => {
      fetchUsers();
    });
  }
  return (
    <>
      <Topbar />
      <div className="container table-responsive">
        <h1 className="display-3 text-center">All Users</h1>
        {allUsers !== "" && (
          <table class="table table-hover">
            <thead className="table-dark">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">firstName</th>
                <th scope="col"> lastName</th>
                <th scope="col"> gender</th>
                <th scope="col"> mobile</th>
                <th scope="col"> email</th>
                <th scope="col"> Action</th>
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
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
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
