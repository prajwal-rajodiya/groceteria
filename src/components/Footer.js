import { Link } from "react-router-dom";
import "./Footer.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Email,
  Facebook,
  Instagram,
  MobileFriendly,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
  margin-top: 4em;
  padding: 1em;
  background-color: #131a22;
  justify-content: space-between;
  align-items: stretch;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  margin-right: 2em;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  const [loginStatus, setLoginStatus] = useState();

  useEffect(() => {
    setLoginStatus(sessionStorage.getItem("loginStatus"));
  }, []);
  return (
    <Container>
      <Left>
        <div>
          <h5>Most Popular Categories</h5>
          <Link to="" className="link1">
            Fruits & Vegetables
          </Link>
          <br />
          <Link to="" className="link1">
            Staples
          </Link>
          <br />
          <Link to="" className="link1">
            Dairy & Bakery
          </Link>
          <br />
          <Link to="" className="link1">
            Eggs & Meat
          </Link>
          <br />
          <br />
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </div>
      </Left>
      <Center>
        <div>
          <h5>Customer Services</h5>
          <Link to="/aboutus" className="link1">
            About Us
          </Link>
          <br />
          <Link to="/faq" className="link1">
            FAQs
          </Link>
          <br />
          <Link to="/termsandconditions" className="link1">
            Terms & Conditions
          </Link>
          <br />
        </div>
      </Center>
      <Right>
        <div>
          <h5>Contact Us</h5>
          <div>
            WhatsApp: 8109246315{" "}
            <span color="green">
              <WhatsApp />
            </span>
            <br />
            Call Us : 1800920920{" "}
            <span color="green">
              <MobileFriendly />
            </span>
            <br />
            Email :{" "}
            <a className="link1" href="mailto:groceteria.service@gmail.com">
              groceteria.service@gmail.com
            </a>{" "}
            <span color="green">
              <Email />
            </span>
            <div>
              <Link to="/developeby" className="link1">
                Developed By
              </Link>
            </div>
            {loginStatus == 1 && (
              <div>
                <Link to="/feedback" className="link1">
                  feedback
                </Link>
              </div>
            )}
          </div>
        </div>
      </Right>
    </Container>
  );
};

export default Footer;
