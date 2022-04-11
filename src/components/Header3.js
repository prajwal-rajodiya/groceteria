import "./Header3.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { SearchRounded } from "@material-ui/icons";

import { useEffect, useState } from "react";

const Header3 = () => {
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [totalCategories, setTotalCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  },[]);
  //change
  let loginRegister;

  const { firstName, loginStatus } = sessionStorage;
  var allProductsToSearch = JSON.parse(sessionStorage.getItem("allProducts"));
  if (firstName !== undefined) {
    loginRegister = `Hello, ${firstName}`;
  } else {
    loginRegister = "Login/Register";
  }

  async function setProducts() {
    setAllProducts(JSON.parse(sessionStorage.getItem("allProducts")));
  }

  function fetchCategories() {
    let tempArr = [];

    allProducts.map((e) => {
      tempArr.push(e.product_type);
    });
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    setTotalCategories(tempArr);
    const uniqeCategory = tempArr.filter(unique);
    setTotalCategories(uniqeCategory);
  }

  const logoutUser = () => {
    // remove the logged users details from session storage

    if (firstName === undefined) {
      toast.warning("please login first");
    }

    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("loginStatus");
    sessionStorage.removeItem("email");
    // navigate to sign in component
    navigate("/home");
  };

  function myFunction() {
    var x = document.getElementsByClassName("xyz");
    for (var i = 0; i < x.length; i++) {
      if (x[i].className === "p-2 xyz") {
        x[i].className += " responsive";
      } else {
        x[i].className = "p-2 xyz";
      }
    }

    var y = document.getElementById("myNavBar");
    if (y.className === "d-flex d-flex1") {
      y.className += " flex-column";
    } else {
      y.className = "d-flex d-flex1";
    }

    var z = document.getElementById("more-less");
    if (z.innerText === "Show More") {
      z.innerText = "Show Less";
    } else {
      z.innerText = "Show More";
    }
  }

  function SearchProducts() {
    var searchMatchList = [];

    allProductsToSearch.map((element) => {
      if (element.name.toUpperCase().includes(userSearch.toUpperCase())) {
        searchMatchList.push(element);
      }
    });
    // searchMatchList.map((element) => {
    //   console.log(element)
    // })
    navigate("/productCategory", {
      state: {
        productCategory: searchMatchList,
        title: "Search Product  ",
      },
    });
  }

  return (
    <>
      <div id="myNavBar" className="d-flex d-flex1">
        <div className="p-2 exclude">
          <button
            type="button"
            className="profile-button3 dropdown-toggle"
            id="dropDownProfileButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {loginStatus == 1 && (
            <ul
              id="inner-ul"
              className="dropdown-menu dropdown-menu3"
              aria-labelledby="dropDownProfileButton"
            >
              <li className="inner-li">
                <Link
                  to="/profile"
                  className="list-group-item list-group-item3 list-group-item-action"
                >
                  Profile
                </Link>
              </li>
              <li className="inner-li">
                <button
                  onClick={() => {
                    navigate("/allOrders");
                  }}
                  className="list-group-item list-group-item3 list-group-item-action"
                >
                  Orders
                </button>
              </li>
              <li className="inner-li">
                <button
                  onClick={logoutUser}
                  className="list-group-item list-group-item3 list-group-item-action"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="home-button3"
          >
            Groceteria
          </button>
        </div>

        <div className="p-2 xyz">
          <input
            type="text"
            className="search-box3"
            placeholder="Search for products"
            onKeyDown={(e) => {
              setUserSearch(e.target.value);
              if (e.key === "Enter") {
                SearchProducts();
              }
            }}
          />
          <SearchRounded
            onClick={SearchProducts}
            style={{ color: "white" }}
          ></SearchRounded>
        </div>

        <div className="p-2 xyz">
          <button
            id="category-button3"
            className="category-button3 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              setProducts().then(fetchCategories());
            }}
          >
            Categories
          </button>
          <ul
            id="category-ul"
            className="dropdown-menu category-dropdown-menu3"
            aria-labelledby="category-button3"
          >
            {totalCategories.map((item) => {
              return (
                <li className="inner-li">
                  <Link
                    to="/home"
                    className="list-group-item category-list-group-item3 list-group-item-action"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {loginStatus == 1 && (
          <div className="p-2 xyz">
            <button
              onClick={() => {
                navigate("/cartNew");
              }}
              id="cartButton3"
              className="cartButton3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              MyCart
            </button>
          </div>
        )}

        <div className="p-2 xyz">
          <button
            onClick={() => {
              if (loginStatus != 1) {
                navigate("/login");
              }
            }}
            id="loginButton3"
            className="loginButton3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            {loginRegister}
          </button>
        </div>

        <div className="p-2 exclude">
          <button id="more-less" className="icon" onClick={myFunction}>
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default Header3;
