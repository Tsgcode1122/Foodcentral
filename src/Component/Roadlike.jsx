import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import foodcentral from "../images/Subject 8.png";
import foodcentral1 from "../images/Subject 9.png";
import foodcentral2 from "../images/Subject 10.png";
import foodcentral4 from "../images/Subject 11.png";
import foodcentral5 from "../images/Subject 12.png";

const images = [
  foodcentral,
  foodcentral1,
  foodcentral2,
  foodcentral4,
  foodcentral5,
];

const Roadlike = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Image src={images[index]} alt="current" />
    </Container>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 1; }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f0f0f0;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  animation: ${spin} 3s infinite;
`;

export default Roadlike;
