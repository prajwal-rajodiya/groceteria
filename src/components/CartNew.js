 
import styled from "styled-components";
import { useEffect, useState } from "react";
import "./ShowProduct.css";
import Footer from "../components/Footer";

import { mobile } from "./responsive.js";
import Header3 from "./Header3";
import { useNavigate } from "react-router";
import axios from "axios";
 
 
import CartProduct from "./CartProduct";
import { URL } from "../config";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

 

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

 

const CartNew = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const navigate = useNavigate();
  let subTotal = 0;

  // taking is from session storage to fetach cart details
  const { id } = sessionStorage;

  // This is method is written to fetch the logged in user details
  const UserCart = () => {
    const url = `${URL}/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;

      //set cart details
      setCartProducts(result.data);

      sessionStorage.setItem("cartProducts", JSON.stringify(result.data));
      console.log(result);

      console.log("result cart.........." + result.data);
    });
  };

  // calling UserCart function

  useEffect(() => {
    UserCart();
  }, []);

 
  return (
    <Container>
      <Header3></Header3>
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <button
            className="button-62"
            onClick={() => {
              navigate("/home");
            }}
          >
            CONTINUE SHOPPING
          </button>

          <TopButton
            type="filled"
            onClick={() => {
              sessionStorage.setItem("subTotal", JSON.stringify(subTotal));
              navigate("/checkout");
            }}
          >
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartProducts.map((product) => {
              subTotal = subTotal + product.totalPrice;

              return <CartProduct product={product} />;
            })}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {subTotal}</SummaryItemPrice>
            </SummaryItem>
            <TopButton
              type="filled"
              onClick={() => {
                sessionStorage.setItem("subTotal", JSON.stringify(subTotal));
                navigate("/checkout");
              }}
            >
              CHECKOUT NOW
            </TopButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartNew;
