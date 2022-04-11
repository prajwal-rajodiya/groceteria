import axios from "axios";
import { useEffect, useState } from "react";
 
import ShowCart from "./ShowCart";
 
import { URL } from "../config";

const Cart = () => {
  // to store cart details
  const [cartProducts, setCartProducts] = useState([]);

  // taking is from session storage to fetach cart details
  const { id } = sessionStorage;

  // This is method is written to fetch the logged in user details
  const UserCart = () => {
    const url = `${URL}/getCartByUserId/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      setCartProducts(result.data);
    });
  };

  // calling UserCart function

  useEffect(() => {
    UserCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <div className="row">
        <div className="col">
          {/* here we are mapping all cart details into ShowCart componet. Show cart component will display are cart details*/}
          <div class="row">
            {cartProducts.map((product) => {
              return <ShowCart product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
