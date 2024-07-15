import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/logocentral.png";
const Moving = () => {
  const [saleData, setSaleData] = useState({
    startDate: "2024-07-15T00:00:00",
    endDate: "2024-07-20T00:00:00",
    enabled: true,
  });

  const calculateTimeLeft = () => {
    const startDate = new Date(saleData.startDate);
    const endDate = new Date(saleData.endDate);
    const difference = endDate - new Date();
    let timeLeftObj = {};

    if (difference > 0) {
      timeLeftObj = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeftObj;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <StyledNavbar>
      <LogoNav>
        <img src={Logo} alt="Food Central Logo" />
      </LogoNav>
      <ContentContainer>
        <Content>
          Get 25% off your first order! Limited to the first 20 customers. Hurry
          now!!!
        </Content>
      </ContentContainer>
    </StyledNavbar>
  );
};

// Styled components
const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  overflow: hidden;
  z-index: 999 !important;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const LogoNav = styled.div`
  display: flex;
  align-items: center;
  z-index: 999;
  padding: 10px;

  background: white !important;
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

const ContentContainer = styled.div`
  white-space: nowrap;
  padding: 10px 0;

  animation: moveLeft 30s linear infinite;
  @keyframes moveLeft {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Content = styled.div`
  font-size: 16px;

  color: red;
  padding-left: 10px;
`;

export default Moving;
