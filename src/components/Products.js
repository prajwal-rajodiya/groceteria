import ShowProduct from "./ShowProduct";
import "./Slider.css";
import "./Products.css";
import { useNavigate } from "react-router";
import "./ShowProduct.css";
import { URL } from "../config";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
 
const Products = () => {
  // every category has seperate array so we can seperate all the products taken from database and put then thses array categories
  const [fruitVegProducts, setFruitVegProducts] = useState([]);
  const [stapleProducts, setStapleProducts] = useState([]);
  const [dairyBackeryProducts, setDairyBackeryProducts] = useState([]);
  const [eggMeatProducts, setEggMeatProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // These counter are to check only 4 products of each categories should be displayed on home page
  let fvCounter = 0;
  let sCounter = 0;
  let dbCounter = 0;
  let emCounter = 0;

  const navigate = useNavigate();

  const AllProducts = () => {
    // to fecth all products
    const url = `${URL}/products`;

    axios.get(url).then((response) => {
      // fetched all products and stored within result
      const result = response.data;

      //sessionStorage["allProducts"] = result
      sessionStorage.setItem("allProducts", JSON.stringify(result.data));
      // all the products are seperated accounding to thier categoery and push them within thier arraylist (eg. product_type staple into stapleProducts)
      result.data.map((element) => {
        // console.log("..................." + element.product_type)
        if (element.product_type === "staple") {
          stapleProducts.push(element);
          //setStapleProducts(element)
        } else if (element.product_type == "fruit&Vegetable") {
          fruitVegProducts.push(element);
        } else if (element.product_type == "dairy&bakery") {
          dairyBackeryProducts.push(element);
        } else if (element.product_type == "egg&meat") {
          eggMeatProducts.push(element);
        }
      });

      setProducts(result.data);
    });
  };
  // called method here using useEffect
  useEffect(() => {
    AllProducts();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="d-flex align-items-center">
          <div className="p-2">
            <h1>Fruits And Vegetable</h1>
          </div>
          {/* here on click of show more button im sending all the fruits and vegetable products ProductCategeory Component to display only fruits and Vegetable . We have used state to send data withing navigate function*/}
          <div className="p-2 ms-auto">
            <button
              onClick={() => {
                navigate("/productCategory", {
                  state: {
                    productCategory: fruitVegProducts,
                    title: "Fruits And Vegetables",
                  },
                });
              }}
              className="btn btn-dark"
            >
              show more
            </button>
          </div>
        </div>
        <hr />
        {/* here on home page we are displaying only 4 products of of particlar category*/}
        <div class="row">
          {fruitVegProducts.map((product) => {
            if (fvCounter < 4) {
              fvCounter = fvCounter + 1;
              return <ShowProduct product={product} />;
            }
          })}
        </div>

        <div className="d-flex align-items-center">
          <div className="p-2">
            <h1>Dairy and Backery</h1>
          </div>
          <div className="p-2 ms-auto">
            <button
              onClick={() => {
                navigate("/productCategory", {
                  state: {
                    productCategory: dairyBackeryProducts,
                    title: "Dairy and Backery",
                  },
                });
              }}
              className="btn btn-dark"
            >
              show more
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          {dairyBackeryProducts.map((product) => {
            if (dbCounter < 4) {
              dbCounter = dbCounter + 1;
              return <ShowProduct product={product} />;
            }
          })}
        </div>
        <div className="d-flex align-items-center">
          <div className="p-2">
            <h1>Staples</h1>
          </div>
          <div className="p-2 ms-auto">
            <button
              onClick={() => {
                navigate("/productCategory", {
                  state: { productCategory: stapleProducts, title: "Staples" },
                });
              }}
              className="btn btn-dark"
            >
              show more
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          {stapleProducts.map((product) => {
            if (sCounter < 4) {
              sCounter = sCounter + 1;
              return <ShowProduct product={product} />;
            }
          })}
        </div>
        <div className="d-flex align-items-center">
          <div className="p-2">
            <h1>Eggs And Meat</h1>
          </div>
          <div className="p-2 ms-auto">
            <button
              onClick={() => {
                navigate("/productCategory", {
                  state: {
                    productCategory: eggMeatProducts,
                    title: "Eggs And Meat",
                  },
                });
              }}
              className="btn btn-dark"
            >
              show more
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          {eggMeatProducts.map((product) => {
            if (emCounter < 4) {
              emCounter = emCounter + 1;
              return <ShowProduct product={product} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
