import React from "react";
import styled from "styled-components";
import "./developedBy.css";
import prajwal from "../assets/image/prajwal.jpg";
import prakash from "../assets/image/prakashw.jpg";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Container = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: row;
`;
const Block = styled.div`
  padding: 15px;

  align-items: center;
`;
const Developedby = () => {
  return (
    <div className="wrapper">
     <h1 className="display-4 text-center">
       The Team
     </h1>

      <Container id="container">
        <Block id="block">
          <img className="profile-developer" src={prajwal} alt="pict" />
          <p class="title">Prajwal Rajodiya</p>
          <p className="position"> Backend Developer</p>
          <p>“ In order to be irreplaceable, one must always be different”</p>
          <div className="icons-wrapper">
            <ImFacebook2 className="icons"></ImFacebook2>
            <GrInstagram className="icons"></GrInstagram>
            <FaWhatsappSquare className="icons"></FaWhatsappSquare>
            <SiGmail className="icons"></SiGmail>
          </div>
        </Block>
        <Block id="block">
          <img className="profile-developer" src={prakash} alt="pict" />
          <p class="title">Prakash Wankhade</p>
          <p class="position"> Frontend Developer</p>
          <p>“We don't just build websites, we build websites that SELLS”</p>
          <div className="icons-wrapper">
            <ImFacebook2 className="icons"></ImFacebook2>
            <GrInstagram className="icons"></GrInstagram>
            <FaWhatsappSquare className="icons"></FaWhatsappSquare>
            <SiGmail className="icons"></SiGmail>
          </div>
        </Block>
        <Block>
          <img className="profile-developer" src={prajwal} alt="pict" />
          <p class="title">Marion Dixion</p>
          <p class="position"> CEO & Founder</p>
          <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
        </Block>
        <Block>
          <img className="profile-developer" src={prajwal} alt="pict" />
          <p class="title">Marion Dixion</p>
          <p class="position"> CEO & Founder</p>
          <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
        </Block>
      </Container>
    </div>
  );
};

export default Developedby;
