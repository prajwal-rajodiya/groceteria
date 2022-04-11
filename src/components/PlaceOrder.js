import Footer from "../components/Footer";
import Header3 from "./Header3";
import styled from "styled-components";
import { mobile } from "./responsive.js";
import { useNavigate } from "react-router";

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


const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header3></Header3>
      <Wrapper>
        <Title>Your order has been placed Successfully</Title>
        <Top>
          <TopButton
            onClick={() => {
              navigate("/home");
            }}
          >
            CONTINUE SHOPPING
          </TopButton>
        </Top>
      </Wrapper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  );
};

export default PlaceOrder;
