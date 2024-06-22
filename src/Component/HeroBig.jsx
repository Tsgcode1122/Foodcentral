import React, { useEffect, useState } from "react";
import styled from "styled-components";
import foodcentral from "../images/h1.png";
import foodcentral1 from "../images/h2.png";
import foodcentral2 from "../images/h3.png";
import foodcentral4 from "../images/h4.png";
import foodcentral5 from "../images/h5.png";
import foodcentral6 from "../images/res3.png";
import foodcentral3 from "../images/new232.jpg";
import check from "../images/check.png";
import Optin from "./Optin";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const images = [
  foodcentral,
  foodcentral1,
  foodcentral2,
  foodcentral4,
  foodcentral5,
];

const SliderWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;

  margin-bottom: 0 !important;
  overflow: hidden;
  box-shadow:
    rgba(133, 133, 192, 0.25) 0px 13px 27px -5px,
    rgba(159, 157, 157, 0.3) 0px 8px 16px -8px;

  /* border-radius: 0 0 45px 45px; */
  @media screen and (max-width: 320px) {
    height: 120vh;
    overflow: none;
    margin-bottom: 0 !important;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    margin-bottom: 0 !important;
  }
`;
const Container = styled.div`
  /* height: 10vh; */
  width: 100%;
  display: none !important;

  &::before {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
    /* background: url(${foodcentral3}) no-repeat center center; */
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
  @media screen and (min-width: 800px) {
    display: block !important;
  }
  @media (min-width: 321px) and (max-width: 499px) {
  }
`;

const Slide = styled.img`
  width: 100%;

  box-shadow: rgba(137, 33, 33, 0.35) 0px 5px 15px;
  /* border-radius: 0 0 45px 45px; */
  position: absolute;
  /* z-index: 1; */
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  @media screen and (max-width: 320px) {
    /* height: 50vh; */
  }
  @media (min-width: 321px) and (max-width: 499px) {
    /* height: 50vh; */
  }
`;

const OverlayText = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  z-index: 9;
  align-items: center;
  /* padding-top: 80px; */

  @media screen and (max-width: 320px) {
    /* padding: 80px 20px 100vh 20px; */
    padding-top: 180px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding-top: 210px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding-top: 240px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  margin-bottom: -4px !important;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media (min-width: 800px) and (max-width: 1200px) {
    font-size: 3.5rem;
  }

  span {
    color: #ac0000;
    font-style: italic;
    margin-top: 290px !important;
    /* background-color: red; */
    font-size: 2.9rem;
    z-index: 999;

    /* background: linear-gradient(
      90deg,
      #240600 0%,
      #ac0000 33%,
      #bc4b4b 53%,
      #ff1313 75%,
      #ff0000 100%
    ); */
    font-weight: 500;
  }
  @media screen and (max-width: 320px) {
    font-size: 2.6rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem !important;
  margin-top: 10px;
  padding: 0 50px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  text-align: center;

  font-weight: 400;
  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 1.3rem !important;
  }
  @media (min-width: 1001px) and (max-width: 1300px) {
    font-size: 1.3rem !important;
  }
  span {
    /* font-size: 2rem; */
    line-height: 0.8;

    color: #ff6f13;
    @media screen and (max-width: 320px) {
      font-size: 2.5rem;
    }
    @media (min-width: 321px) and (max-width: 499px) {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem !important;
    margin-top: 10px;
    padding: 0 10px;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    font-size: 1.4rem !important;
    margin-top: -0px;
    padding: 0 1px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2.2rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 320px) {
    margin-top: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: 2rem;
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
    background-color: red;
    transform: scale(1.08);
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
  position: relative;
  text-align: center;
  z-index: 99;

  border-radius: 0 70px 70px 0;

  background: url(${foodcentral3}) no-repeat center center;
  background-size: cover;

  color: white;
  @media screen and (max-width: 320px) {
    margin-top: -1rem !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: -1.5rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -1.5rem !important;
  }
`;
const AniLay = styled.div`
  h4 {
    font-size: 1.4rem;
    margin-top: -1rem;
    @media (min-width: 800px) and (max-width: 1000px) {
      font-size: 1.2rem !important;
    }
    @media (min-width: 1001px) and (max-width: 1300px) {
      font-size: 1.2rem !important;
    }
  }
`;
const Newlay = styled.div`
  border-radius: 0 70px 70px 0;
  padding: 50px 100px 50px 40px;
  background: rgba(0, 0, 0, 0.8);
  max-width: 720px;
  @media (min-width: 800px) and (max-width: 1000px) {
    max-width: 530px !important;
    padding: 30px 30px 30px 20px;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    max-width: 650px !important;
    padding: 40px 80px 40px 30px;
  }
  span {
    font-size: 2rem;
    color: #ac0000;
    z-index: 999;
    font-style: italic;
  }
`;
const ListTitle = styled.span`
  font-size: 1.8rem;

  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
    margin-top: -0.5rem;
    margin-bottom: 0rem;
  }
`;

const ListItem = styled.p`
  font-size: 1.4rem;
  margin: 0.8rem 0;
  display: flex;
  gap: 20px;
  text-align: left;
  font-weight: 200;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 1.1rem !important;
  }
  @media (min-width: 1001px) and (max-width: 1300px) {
    font-size: 1.2rem !important;
  }
  img {
    max-width: 100%;
    height: 20px;
  }
`;

const HeroBig = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useBottomToTopSwipe(".bottom-top");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

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
            <ListContainer>
              <Newlay>
                <Title>Food Central</Title>
                <span>Present</span>
                <AniLay className="bottom-top">
                  <Subtitle>
                    5 Must-Have Nigerian Meals & Delicacies You Must Try Out!
                  </Subtitle>
                  <h4>Including:</h4>
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
                    <Button onClick={handleScroll}>
                      Download A FREE Copy!
                    </Button>
                  </ButtonContainer>
                </AniLay>
              </Newlay>
            </ListContainer>
          </OverlayText>
        </SliderWrapper>
      </Container>
    </>
  );
};

export default HeroBig;
