import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../config";
import AdminModifyProductForm from "./AdminModifyProductForm";
import Topbar from "./Topbar";

const ModifyProduct = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [allProductsFromDb, setAllProductsFromDb] = useState([]);
  const [productFilter, setProductFilter] = useState("");
  const [productToModify, setProductToModify] = useState();
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [totalCategories, setTotalCategories] = useState([]);

  const filterReset = (childData) => {
    setProductFilter("none");
    setShowProductDetails(false);
    document.getElementById("productFilter").options[0].selected = "selected";
  };

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
  }; //end of fetch products

  const displayProductToModify = (id) => {
    console.log(id);
    setShowProductDetails(true);
    setProductToModify(
      allProductsFromDb.find((obj) => {
        return obj.id == id;
      })
    );
    console.log(productToModify);
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <label for="product_type" className="form-label">
              Product Category
            </label>
            <select
              id="productFilter"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setProductFilter(e.target.value);
                if (showProductDetails === true) {
                  setShowProductDetails(false);
                }
              }}
            >
              <option value="none">--none--</option>
              {(totalCategories || []).map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
          </div>
          <div className="col-4">
            <label for="productName" className="form-label">
              Select Product
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                if (e.target.value == "none") {
                  setShowProductDetails(false);
                } else {
                  displayProductToModify(e.target.value);
                }
              }}
            >
              <option value="none" selected>
                --none--
              </option>
              {allProductsFromDb.map(
                (item) => {
                  //brace a start
                  if (item.product_type === productFilter) {
                    return <option value={item.id}>{item.name}</option>;
                  } //end of if statement
                } //end of brace a
              )}
              {/* end of map function and js code */}
            </select>
          </div>
        </div>
        <hr />
        {console.log("filter " + productFilter)}
        {showProductDetails && (
          <AdminModifyProductForm
            prod={productToModify}
            totalCategories={totalCategories}
            filterReset={filterReset}
          />
        )}
      </div>
    </>
  );
};

export default ModifyProduct;
