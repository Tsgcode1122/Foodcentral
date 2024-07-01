import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import foodcentral from "../images/Subject 8.png";
import foodcentral1 from "../images/Subject 9.png";
import foodcentral2 from "../images/Subject 10.png";
import foodcentral4 from "../images/Subject 11.png";
import foodcentral5 from "../images/Subject 12.png";
import foodcentral3 from "../images/new232.jpg";
import check from "../images/checked.png";
import line from "../images/lineb.png";
import Navbar from "./Navbar";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";

const images = [
  foodcentral,
  foodcentral1,
  foodcentral2,
  foodcentral4,
  foodcentral5,
];

const slowSpin = keyframes`
  0% { transform: rotate(0deg) scale(1);opacity: 1; }
  25% { transform: rotate(10deg) scale(1.01);opacity: 0.5; }
  50% { transform: rotate(3deg) scale(1.08); opacity: 0.8;}
  75% { transform: rotate(1deg) scale(1.01);opacity: 0.5; }
  100% { transform: rotate(0deg) scale(1);  opacity: 0.8;}
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100vh;
  background: url(${foodcentral3}) no-repeat center center;
  background-size: cover;
  overflow: hidden !important;
  color: black;

  position: relative;
  text-align: center;
`;

const Circle2 = styled.div`
  width: 300px;
  background-color: #ff6f13;
  height: 300px;
  position: absolute;
  margin-top: -12rem;
  margin-left: -7.3rem;
  z-index: 1;
  border-radius: 50%;
  @media screen and (max-width: 320px) {
    width: 200px;
    height: 200px;
    margin-top: -6rem;
    margin-left: -7.3rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: -16rem;
    margin-left: -7.2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 300px;
    height: 300px;
    margin-top: -13.1rem;
    margin-left: -7.3rem;
  }
`;

const MainCircle = styled.div`
  display: flex;
  justify-content: start;
`;
const Circle = styled.div`
  background-color: #ac0000;
  height: 280px;
  transform: rotate(-40deg);
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  z-index: 10;
  margin-top: -5rem;
  margin-right: -8rem;
  border-radius: 130px 0 0 130px;
  @media screen and (max-width: 320px) {
    height: 130px;
    transform: rotate(-40deg);
    width: 300px;
    margin-top: -0.5rem;
    margin-right: -5rem;
    border-radius: 70px 0 0 70px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    height: 190px;
    width: 300px;
    margin-top: -2rem;
    margin-right: -6rem;
    border-radius: 70px 0 0 70px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    height: 200px;
    width: 320px;
    margin-top: -2rem;
    margin-right: -6rem;
    border-radius: 70px 0 0 70px;
  }
`;

const MainCircle2 = styled.div`
  display: flex;
  justify-content: end;
`;

const SlideContainer = styled.div`
  width: 300px;
  z-index: 100;
  margin-top: 1rem;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 8px;
  background-color: #f7f6f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 320px) {
    width: 220px;
    margin-top: 2rem;
    height: 220px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 320px;
    margin-top: 2.5rem;
    height: 320px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: 3rem;
    width: 350px;
    height: 350px;
  }
`;

const Slide = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  transition: transform 1s ease-in-out;
  @media screen and (max-width: 320px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 330px;

    height: 330px;
  }
  &.spin {
    animation: ${slowSpin} 1s linear;
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 0.1;
  color: #f7f6f6;
  /* color: #ac0000; */
  /* text-shadow:
    -3px -3px 0 #f7f6f6,
    3px -3px 0 #f7f6f6,
    -3px 3px 0 #f7f6f6,
    3px 3px 0 #f7f6f6,
    -3px 0px 0 #f7f6f6,
    3px 0px 0 #f7f6f6,
    0px -3px 0 #f7f6f6,
    0px 3px 0 #f7f6f6,
    -2px -2px 0 #ac0000,
    2px -2px 0 #ff6f13,
    -6px 3px 9px #ac0000,
    6px 2px 0 #ff6f13,
    -6px 0px 0 #ff6f13,
    6px 0px 9px #ff6f13,
    0px -6px 0 #ff6f13,
    0px 2px 0 #ff6f13; */
  text-shadow:
    -3px -3px 0 #ac0000,
    3px -3px 0 #ac0000,
    -3px 3px 0 #ac0000,
    3px 3px 0 #ac0000,
    -3px 0px 0 #ac0000,
    3px 0px 0 #f7f6f6,
    0px -3px 0 #ac0000,
    0px 3px 0 #ac0000,
    -2px -2px 0 #ac0000,
    2px -2px 0 #ff6f13,
    -6px 3px 9px #ac0000,
    6px 2px 0 #ff6f13,
    -6px 0px 0 #ff6f13,
    6px 0px 9px #ff6f13,
    0px -6px 0 #ff6f13,
    0px 2px 0 #ff6f13;

  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.2rem;
  }
`;

const Subtitles = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: 320px) {
    font-size: 1rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.5rem;
    padding-top: 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.3rem;
  }
`;

const ButtonContainer = styled.div`
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
    font-size: 0.8rem;
  }
`;
const OverlayText = styled.div`
  color: red;
  background-size: cover;
  border-radius: 70px 70px 0 0;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  z-index: 10;
  margin-top: -35px;
  background: rgba(254, 254, 254, 0.9);
  @media screen and (max-width: 320px) {
    border-radius: 40px 40px 0 0;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 50px 50px 0 0;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 50px 50px 0 0;
  }
`;
const BgO = styled.div`
  background: rgba(254, 254, 254, 0.9);
`;
const ListContainer = styled.div`
  color: black;
  z-index: 999;
  padding-top: 60px;
  @media screen and (max-width: 320px) {
    padding-top: 60px;
    margin-top: -0.6rem !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: -1.5rem !important;
    padding-top: 80px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -1.5rem !important;
    padding-top: 100px;
  }
`;

const AniLay = styled.div`
  h4 {
    font-size: 1.4rem;
    margin-top: -1rem;
    @media screen and (max-width: 320px) {
      font-size: 0.8rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 1.1rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 1.2rem;
    }
  }
`;

const Newlay = styled.div`
  padding: 10px 20px 250px 20px;
  gap: 10px;
  @media screen and (max-width: 320px) {
    padding: 5px 10px 200px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px 15px 200px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px 15px 200px 15px;
  }
  span {
    font-size: 2rem;
    color: #ac0000;
    z-index: 999;
    margin-top: 10.1rem;
    background-size: cover;
    transform: rotate(-40deg);
    font-style: italic;
    @media screen and (max-width: 320px) {
      font-size: 1.1rem;
      margin: 0.1rem 0;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 1.4rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
    }
  }
`;

const ListItem = styled.p`
  display: flex;
  text-align: left !important;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 320px) {
    gap: 10px;
    font-size: 12px;
    margin-top: -1px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 10px;
    font-size: 14px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }

  img {
    max-width: 100%;
    height: 20px;
    @media (min-width: 321px) and (max-width: 399px) {
      height: 16px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 16px;
    }
  }
`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useBottomToTopSwipe(".bottom-top");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSpinning(false);
      }, 3000);
    }, 6000);

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
        <BgO>
          <MainCircle2>
            <Circle></Circle>
          </MainCircle2>
          <SliderWrapper>
            <SlideContainer>
              <Slide
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className={isSpinning ? "spin" : ""}
              />
            </SlideContainer>
            <OverlayText>
              <ListContainer className="bottom-top">
                <Title>Food Central</Title>
                <Newlay>
                  <span>Present</span>
                  <AniLay>
                    <Subtitles>
                      5 Must-Have Nigerian Meals & Delicacies You Must Try Out!
                    </Subtitles>
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
          <MainCircle>
            <Circle2 />
          </MainCircle>
        </BgO>
      </Container>
    </>
  );
};

export default Hero;
