import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./admin.css";
import { URL } from "../config";
import Topbar from "./Topbar";
const AddProduct = () => {
  const [product_type, setProduct_Type] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [qty, setQty] = useState();
  const [totalCategories, setTotalCategories] = useState([]);
  const [allProductsFromDb, setAllProductsFromDb] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
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

  function addNewProduct(e) {
    e.preventDefault(); //default action of button is submit form which refreshes the page, this line prevents it

    if (
      product_type === "none" ||
      product_type === "" ||
      name.length === 0 ||
      description.length === 0 ||
      image.length === 0 ||
      price.length === 0 ||
      discount.length === 0 ||
      qty.length === 0
    ) {
      toast.warning("All fields are compulsory");
    } else {
      const body = {
        product_type,
        name,
        description,
        image,
        price,
        discount,
        qty,
      };

      const url = `${URL}/admin/addProduct`;
      axios
        .post(url, body)
        .then((response) => {
          const inputs = Array.from(
            document.getElementsByClassName("form-control")
          );
          inputs.map((e) => {
            e.value = "";
          });
        })
        .then(fetchProducts());
    }
  }

  return (
    <>
      <Topbar />
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="productName" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                if (e.target.value == "new") {
                  var y = document.getElementById("hiddenNewCat");
                  y.className = "mb-3";
                } else {
                  y = document.getElementById("hiddenNewCat");
                  y.className += " hiddenNewCat";
                  setProduct_Type(e.target.value);
                }
              }}
            >
              <option value="none" selected>
                --none--
              </option>
              <option value="new">new Category</option>
              {(totalCategories || []).map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
          </div>
          <div className="mb-3 hiddenNewCat" id="hiddenNewCat">
            <label for="product_type" className="form-label">
              Product Category
            </label>
            <input
              type="text"
              className="form-control"
              id="product_type"
              aria-describedby=""
              onChange={(e) => {
                setProduct_Type(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              aria-describedby=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="productDescription" className="form-label">
              Description
            </label>
            <textarea
              rows="4"
              className="form-control"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="productImage" className="form-label">
              Product Image Link
            </label>
            <input
              type="text"
              className="form-control"
              id="productImage"
              aria-describedby=""
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              aria-describedby=""
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="productDiscount" className="form-label">
              Discount
            </label>
            <input
              type="number"
              className="form-control"
              id="productDiscount"
              aria-describedby=""
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="productQuantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              aria-describedby=""
              onChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              addNewProduct(e);
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
