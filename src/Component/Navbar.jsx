import React from "react";
import styled from "styled-components";
import Logo from "../images/logocentral.png";

const LogoNav = styled.div`
  display: flex;
  align-items: center;
  z-index: 999;
  padding: 10px;
  background: transparent !important;
  position: absolute;
  img {
    width: 120px;
    height: auto;
  }
  @media screen and (min-width: 800px) {
    padding-left: 2rem;
  }
  @media screen and (min-width: 980px) {
    padding-left: 6rem;
  }
`;

const Navbar = () => {
  return (
    <LogoNav>
      <img src={Logo} alt="Food Central Logo" />
    </LogoNav>
  );
};

export default Navbar;
