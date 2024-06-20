import React, { useEffect, useState } from "react";
import styled from "styled-components";
import foodcentral from "../images/res.png";
import foodcentral1 from "../images/res2.png";
import foodcentral2 from "../images/res3.png";
import foodcentral3 from "../images/bsd.jpg";
import check from "../images/check.png";
import Optin from "./Optin";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const images = [foodcentral, foodcentral1, foodcentral2];

const SliderWrapper = styled.div`
  position: relative;
  height: 55vh;
  overflow: hidden;
  box-shadow:
    rgba(133, 133, 192, 0.25) 0px 13px 27px -5px,
    rgba(159, 157, 157, 0.3) 0px 8px 16px -8px;
  margin: auto;
  border-radius: 0 0 45px 45px;
  @media screen and (max-width: 320px) {
    height: 50vh;
  }
  @media (min-width: 321px) and (max-width: 499px) {
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${foodcentral3}) no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
  @media screen and (max-width: 320px) {
    /* height: 65vh; */
  }
  @media (min-width: 321px) and (max-width: 499px) {
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 55vh;
  box-shadow: rgba(137, 33, 33, 0.35) 0px 5px 15px;
  border-radius: 0 0 45px 45px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  @media screen and (max-width: 320px) {
    height: 50vh;
  }
  @media (min-width: 321px) and (max-width: 499px) {
  }
`;

const OverlayText = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  z-index: 9;
  padding: 120px 20px 100vh 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0 0 45px 45px;
  @media screen and (max-width: 320px) {
    padding: 80px 20px 100vh 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 110px 10px 100vh 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 120px 10px 100vh 10px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  span {
    color: #ff6f13;
    font-style: italic;
    margin-top: -40px;
    font-size: 3rem;
    font-weight: 500;
    @media screen and (max-width: 320px) {
      font-size: 2rem;
      margin-top: -25px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 2rem;
      margin-top: -25px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 2.5rem;
      margin-top: -30px;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 2.6rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: -10px;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  span {
    font-size: 3rem;
    line-height: 0.8;
    font-weight: bold;
    color: #ff6f13;
    @media screen and (max-width: 320px) {
      font-size: 2.5rem;
    }
    @media (min-width: 321px) and (max-width: 499px) {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    margin-top: -1px;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    font-size: 1.2rem;
    margin-top: -1px;
  }
`;

const Break = styled.span`
  width: 100%;
  font-weight: 600 !important;
  font-size: 1.5rem !important;
  @media screen and (max-width: 320px) {
    font-size: 1.2rem !important;
    margin-top: -1px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 320px) {
    margin-top: 0.6rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  /* position: absolute; */
  font-size: 1.2rem;
  color: white;
  background-color: #ac0000;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #ff6f13;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 320px) {
    padding: 7px 12px;
    font-size: 1rem;
  }
`;
const ListContainer = styled.div`
  padding: 105% 20px 50px 20px;
  position: relative;
  text-align: center;
  /* z-index: -1; */
  margin: -100% 0 !important;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  @media screen and (max-width: 320px) {
    margin: -100% 0 !important;
  }
`;

const ListTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    margin-top: -0.5rem;
    margin-bottom: 0rem;
  }
`;

const ListItem = styled.p`
  font-size: 1.2rem;
  margin: 0.8rem 0;
  display: flex;
  gap: 20px;
  text-align: left;
  font-weight: 300;
  font-family: "Source Serif 4", serif;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  img {
    max-width: 100%;
    height: 20px;
  }
`;

const NewHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useBottomToTopSwipe(".bottom-top");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const optinElement = document.getElementById("Opt-in");
    if (optinElement) {
      optinElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container>
        <Navbar />
        <SliderWrapper>
          {images.map((image, index) => (
            <Slide
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              isVisible={index === currentIndex}
            />
          ))}
          <OverlayText>
            <Title>
              Food Central
              <span>Present</span>
            </Title>
            <Subtitle>
              <span>5</span> Must-Have Nigerian Meals & Delicacies
              <Break> You Must Try Out!</Break>
            </Subtitle>
          </OverlayText>
        </SliderWrapper>
        <ListContainer className="bottom-top">
          <ListTitle>Including:</ListTitle>
          <ListItem>
            <img src={check} alt="Check" />
            The Most Savory Nigerian Foods You Won't Be Able to Resist
          </ListItem>
          <ListItem>
            <img src={check} alt="Check" />
            The Top 5 Recommended Nigerian Dishes by Food Critics
          </ListItem>
          <ListItem>
            <img src={check} alt="Check" />
            Everything You Need to Know About Nigerian Cuisine
          </ListItem>
          <ButtonContainer>
            <Button onClick={handleScroll}>Download A FREE Copy!</Button>
          </ButtonContainer>
        </ListContainer>
      </Container>
      <div id="Opt-in">
        <Optin />
      </div>
      <Footer />
    </>
  );
};

export default NewHero;
