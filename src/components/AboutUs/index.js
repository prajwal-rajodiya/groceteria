import Footer from "../Footer";
import Header3 from "../Header3";
import "./style.css";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 9vw;
  margin-bottom: 10vw;
`;
const Aboutus = () => {
  return (
    <div>
      <Header3 />

      <Container>
        <div className="container">
          <h3>About Us</h3>
          <p style={{ fontSize: 15 }}>
            India's most convenient online grocery channel
          </p>
          <p style={{ fontSize: 15 }}>
            Groceteria makes your grocery shopping even simpler. No more hassles
            of sweating it out in crowded markets, grocery shops & supermarkets
            - now shop from the comfort of your home; office or on the move.
          </p>
          <p style={{ fontSize: 15 }}>
            We offer you convenience of shopping everything that you need for
            your home - be it fresh fruits & vegetables, rice, dals, oil,
            packaged food, dairy item, frozen, pet food, household cleaning
            items & personal care products from a single virtual store.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Aboutus;
