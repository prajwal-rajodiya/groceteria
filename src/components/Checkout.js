import styled from "styled-components";
import { useEffect, useState } from "react";
import emailJs from "emailjs-com";
import Footer from "../components/Footer";

import { mobile } from "./responsive.js";
import Header3 from "./Header3";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

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
  height: 100%;
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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Checkout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [userAddress, setUserAddress] = useState([]);

  const navigate = useNavigate();
  let subTotal = 0;

  // taking is from session storage to fetach cart details
  const { id } = sessionStorage;

  const GetAddress = () => {
    const url = `${URL}/getAddressByUserId/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      if (result.data == undefined) {
        toast.error("Plz add Address in profile section..");
      } else {
        setUserAddress(result.data);
      }
    });
  };

  var userAdd = userAddress;

  sessionStorage.setItem("userAddress", JSON.stringify(userAdd));
  // console.log(userAdd.houseNo)

  // This is method is written to fetch the logged in user details
  const UserCart = () => {
    const url = `${URL}/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;

      //set cart details
      setCartProducts(result.data);

      // console.log(cartProducts)
      // console.log(result)

      // console.log("result cart.........." + result.data)
    });
  };

  const [totalProductsPrice, setTotalProductsPrice] = useState(0);

  let totalProductsPriceAll = 0;

  const [counter, setCounter] = useState(0);
  // incrementer to increase or decrease the product quantity
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToOrders = () => {
    console.log("add to orders 2");
    //adding details in orders table

    //id bigint primary key auto_increment, customerid bigint, orderdate varchar(100),
    //orderstatus varchar(10), totalprice double,
    let orderDate = new Date().toISOString().slice(0, 19).replace("T", " ");

    console.log(orderDate);
    const totalPrice = JSON.parse(sessionStorage.getItem("subTotal"));
    const customerId = id;

    const body = {
      customerId,
      totalPrice,
    };

    const url2 = `${URL}/addToOrders`;

    axios.post(url2, body).then((response) => {
      const result = response.data;
      addToOrderDetails();
    });
  };

  const addToOrderDetails = () => {
    console.log("order details 3");
    var cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
    //adding details in orderdetails table
    //id bigint, orderid bigint, productid bigint, quantity bigint, amount bigint,

    cartProducts.map((element) => {
      const productId = element.productId;
      const quantity = element.unitQuantity;
      const amount = element.totalPrice;
      const customerId = sessionStorage.getItem("id");
      const OrdersDetailsbody = {
        productId,
        quantity,
        amount,
        customerId,
      };

      const url3 = `${URL}/addToOrderDetails`;

      axios
        .post(url3, OrdersDetailsbody)
        .then((response) => {
          console.log("add to orders details");
          console.log(response);
        })
        .then(() => {
          const customerId = sessionStorage.getItem("id");
          const url5 = `${URL}/getOrderById`;
          axios
            .get(url5, { params: { customerId: customerId } })
            .then((response) => {
              console.log(response.data);
              //setorderDetail(response.data);
              sessionStorage.setItem(
                "orderDetail",
                JSON.stringify(response.data)
              );
            });

          const customerName = sessionStorage
            .getItem("firstName")
            .concat(" ", sessionStorage.getItem("lastName"));

          const orderDetail = JSON.parse(sessionStorage.getItem("orderDetail"));

          //const orderDate = orderDetail.data.orderDate.substring(0, 10);
          const email = sessionStorage.getItem("email");
          var templateParams = {
            customerName: customerName,
            to_email: email,
            orderDate: orderDetail.data.orderDate,
            totalPrice: orderDetail.data.totalPrice,
            orderId: orderDetail.data.id,
          };
          console.log("Template Data");
          console.log(templateParams);
          emailJs
            .send(
              "service_lavkcgm",
              "template_2msz07c",
              templateParams,
              "XaPZukiM-w7EhdCSt"
            )
            .then((resp) => {
              console.log(resp);
            });
        });
    });
  };
  // this is logic for 1. cart empty 2. adding details in order table 3. adding details in orderDetails table 4. and navigating to placeorder component
  const updateCartOrderDeatails = () => {
    console.log("cart empty 1");
    // cart empty
    const url1 = `${URL}/deleteCartByCustomerId/${id}`;
    axios.delete(url1).then((response) => {
      addToOrders();
    });

    navigate("/placeOrder");
  };

  // calling UserCart function

  useEffect(() => {
    UserCart();
  }, []);

  useEffect(() => {
    GetAddress();
  }, []);

  return (
    <Container>
      <Header3></Header3>
      <Wrapper>
        <Title>Order Summary</Title>
        <Top>
          <TopButton
            onClick={() => {
              navigate("/home");
            }}
          >
            CONTINUE SHOPPING
          </TopButton>

          {/* <TopButton type="filled" onClick={()=>{
            navigate("/checkout")
          }} >CHECKOUT NOW</TopButton>  */}
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
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {subTotal}</SummaryItemPrice>
            </SummaryItem>

            {/* <SummaryTitle>Payment Method</SummaryTitle>
            
            <SummaryItem>
              <SummaryItemText>Cash On Delivery(COD)</SummaryItemText>
            </SummaryItem> */}

            <SummaryTitle>Payment Method</SummaryTitle>
            <hr class="my-4"></hr>

            <div class="my-3">
              <div class="form-check">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  defaultChecked
                />
                <label>Cash On Delivery (COD)</label>
              </div>
            </div>

            <h2 className="display-6">Select Delivery Address</h2>
            <hr class="my-4"></hr>

            <div class="my-3">
              <div class="form-check">
                <input
                  id="address1"
                  name="deliveryaddress1"
                  type="radio"
                  defaultChecked
                  class="form-check-input"
                />
                <label>
                  {userAdd.houseNo},{userAdd.apartment},{userAdd.area},
                  {userAdd.city},{userAdd.pincode}
                </label>
              </div>
              <hr class="my-4"></hr>
              <br />
              <div class="form-check">
                <input
                  id="invoice"
                  name="emailinvoice"
                  type="radio"
                  defaultChecked
                  class="form-check-input"
                />
                <label>Email Invoice</label>
              </div>
            </div>

            <Button
              onClick={() => {
                updateCartOrderDeatails();
              }}
            >
              Place Order
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Checkout;
