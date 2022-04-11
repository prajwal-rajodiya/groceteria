import { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "./responsive.js";

import React from "react";
import { URL } from "../config.js";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const CartProduct = (props) => {
  const { product } = props;
  const [counter, setCounter] = useState(product.unitQuantity);

  let productId = product.productId;
  let unitQuantity = product.unitQuantity;
  let customerId = product.customerId;

  const incrementCounter = () => {
    setCounter(counter + 1);
    unitQuantity = counter + 1;
    const body = { productId, unitQuantity, customerId };
    const url = `${URL}/updateProductCounter`;

    axios.patch(url, body).then((response) => {});

    window.location.reload(false);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      unitQuantity = counter - 1;

      const body = { productId, unitQuantity, customerId };
      const url = `${URL}/updateProductCounter`;

      axios.patch(url, body).then((response) => {});
    }
    window.location.reload(false);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Product>
        <ProductDetail>
          <Image src={product.image} />
          <Details>
            <ProductName>
              <b>Product:</b> {product.productName}
            </ProductName>
            <ProductId>
              <b>ID:</b> {product.productId}
            </ProductId>
            <ProductColor color="black" />
            <ProductSize>
              <b>Quantity:</b> {product.unitQuantity}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add onClick={incrementCounter}> </Add>
            <ProductAmount>{counter}</ProductAmount>
            <Remove onClick={decrementCounter} />
          </ProductAmountContainer>
          <ProductPrice>Rs. {product.totalPrice}</ProductPrice>
        </PriceDetail>
      </Product>
      <hr />
    </div>
  );
};

export default CartProduct;
