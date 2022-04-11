import { useState } from "react";
import AdminAddProduct from "./AddProduct";
import AdminDeleteProduct from "./DeleteProduct";
import AdminModifyProduct from "./ModifyProduct";
 

const AdminManage = () => {
  const [isDeleteProductShown, setIsDeleteProductShown] = useState(false);
  const [isAddProductShown, setIsAddProductShown] = useState(true);
  const [isModifyProductShown, setIsModifyProductShown] = useState(false);

  function manageAction(e) {
    const action = e.target.value;
    if (action == 1) {
      setIsAddProductShown(true);
      setIsModifyProductShown(false);
      setIsDeleteProductShown(false);
    } else if (action == 2) {
      setIsAddProductShown(false);
      setIsModifyProductShown(true);
      setIsDeleteProductShown(false);
    } else if (action == 3) {
      setIsAddProductShown(false);
      setIsModifyProductShown(false);
      setIsDeleteProductShown(true);
    } else {
      setIsAddProductShown(false);
      setIsModifyProductShown(false);
      setIsDeleteProductShown(false);
    }
  }

  return (
    <>
      <div className="container">
        <hr />
        <div className=" d-flex justify-content-center align-items-center">
          <h2 style={{ color: "darkslategray" }}>Select an action : &nbsp;</h2>
          <select
            className="form-select w-25"
            aria-label="Default select example"
            onChange={manageAction}
            defaultValue={1}
          >
            <option value="1">Add New Product</option>
            <option value="2">Modify Existing Product</option>
            <option value="3">Delete a Product</option>
          </select>
        </div>
        <hr />
      </div>
      {isDeleteProductShown && <AdminDeleteProduct />}
      {isAddProductShown && <AdminAddProduct />}
      {isModifyProductShown && <AdminModifyProduct />}
    </>
  );
};

export default AdminManage;
