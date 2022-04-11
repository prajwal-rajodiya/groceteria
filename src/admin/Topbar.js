import React from "react";
import styled from "styled-components";
import "./topbar.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  font-size: large;
  position: sticky;
  top: 0px;
  box-shadow: 5px 5px 5px gray;
`;

const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;

const TopRight = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const TopbarIcons = styled.div`
  display: flex;
  font-size: 30px;
  margin-top: 5px;
  position: relative;
  margin-right: 10px;
`;

const Topbar = () => {
  const navigate = useNavigate();

  const { firstName } = sessionStorage;

  const logoutUser = () => {
    // remove the logged users details from session storage

    if (firstName === undefined) {
      toast.warning("please login first");
    }

    // sessionStorage.removeItem("id");
    // sessionStorage.removeItem("firstName");
    // sessionStorage.removeItem("lastName");
    // sessionStorage.removeItem("loginStatus");
    sessionStorage.clear();
    // navigate to sign in component
    navigate("/home");
  };

  return (
    <Container id="topbar">
      <TopbarWrapper>
        <TopLeft>
          <Logo>Admin</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIcons>
            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn btn-primary justify-content-center"
              onClick={() => {
                navigate("/adminlogin");
              }}
            >
              Home
            </button>

            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn btn-danger justify-content-center"
              onClick={logoutUser}
            >
              Logout
            </button>
          </TopbarIcons>
        </TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
