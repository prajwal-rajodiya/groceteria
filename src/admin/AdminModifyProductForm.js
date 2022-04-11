import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "./admin.css";
import { URL } from "../config";
 
function AdminModifyProductForm(props) {
  console.log("Import : " + props.prod.product_type);
  const [id, setId] = useState(props.prod.id);
  const [product_type, setProduct_Type] = useState(props.prod.product_type);
  const [name, setName] = useState(props.prod.name);
  const [description, setDescription] = useState(props.prod.description);
  const [image, setImage] = useState(props.prod.image);
  const [price, setPrice] = useState(props.prod.price);
  const [discount, setDiscount] = useState(props.prod.discount);
  const [qty, setQty] = useState(props.prod.qty);

  function modifyProduct(e) {
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
        id,
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
          const result = response.data;
          console.log(result);
         
        })
        .then(props.filterReset("none"));
    }
  }

  return (
    <> 
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="productId" className="form-label">
              Product Id
            </label>
            <input
              type="number"
              className="form-control"
              id="productId"
              aria-describedby=""
              defaultValue={props.prod.id}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="productName" className="form-label">
              Product Category
            </label>
            <select
              className="form-select w-25"
              aria-label="Default select example"
              defaultValue={props.prod.product_type}
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
              <option value="new">Change Category</option>
              <option value="" selected>
                {props.prod.product_type}
              </option>

              {(props.totalCategories || []).map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
          </div>
          <div className="mb-3 hiddenNewCat" id="hiddenNewCat">
            <label for="product_type" className="form-label">
              New Product Category
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
              defaultValue={props.prod.name}
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
              defaultValue={props.prod.description}
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
              defaultValue={props.prod.image}
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
              defaultValue={props.prod.price}
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
              defaultValue={props.prod.discount}
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
              defaultValue={props.prod.qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              modifyProduct(e);
            }}
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminModifyProductForm;
