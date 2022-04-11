import axios from "axios";
import React, { useEffect, useState } from "react";

import { URL } from "../config";

import Topbar from "./Topbar";
const DeleteProduct = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [allProductsFromDb, setAllProductsFromDb] = useState([]);
  const [productFilter, setProductFilter] = useState("fruit&Vegetable");
  const [totalCategories, setTotalCategories] = useState([]);
  const fetchProducts = () => {
    const url = `${URL}/products`;

    axios.get(url).then((response) => {
      const result = response.data;
      setAllProductsFromDb(result.data);

      let tempArr = [];

      result.data.map((e) => {
        tempArr.push(e.product_type);
      });
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      setTotalCategories(tempArr);
      const uniqeCategory = tempArr.filter(unique);
      setTotalCategories(uniqeCategory);
    });
  };

  function deleteProduct(deleteId) {
    const url = `${URL}/admin/deleteProduct/${deleteId}`;

    axios.delete(url).then((response) => {
      fetchProducts();
    });
  } //end of deleteProduct function

  return (
    <>
      {" "}
      <Topbar />
      <div className="container table-responsive">
        <label for="productName" className="form-label">
          Product Category
        </label>

        <select
          defaultValue={"fruit&Vegetable"}
          className="form-select w-25"
          aria-label="Default select example"
          onChange={(e) => {
            setProductFilter(e.target.value);
          }}
        >
          {(totalCategories || []).map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>

        <hr />
        {productFilter !== "" && (
          <table class="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Category</th>
                <th scope="col">Item Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allProductsFromDb.map((item) => {
                if (item.product_type == productFilter) {
                  return (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.product_type}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                        >
                          Delete
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
};

export default DeleteProduct;
