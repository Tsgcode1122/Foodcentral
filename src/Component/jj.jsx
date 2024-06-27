import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Spin, Input as AntdInput } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/reset.css";
import foodcentral3 from "../images/abn.jpg";
import cong from "../images/cong.png";
import newfood from "../images/newfood4.png";
import click from "../images/click.png";
import rush from "../images/rush.png";
import useBounceIn from "../animation/ useBounceIn";
import useZoomInAnimation from "../animation/useZoomInAnimation";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  background: url(${foodcentral3}) no-repeat center center;
  background-size: cover;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: -1;
  } */

  @media screen and (max-width: 320px) {
    /* padding: 0 20px; */
  }
  @media (min-width: 321px) and (max-width: 399px) {
    /* padding: 0 40px; */
  }
  @media (min-width: 400px) and (max-width: 499px) {
    /* padding: 0 50px; */
  }
`;

const Center = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 50px 20px;
  margin: 4rem;
  max-width: 400px;
  backdrop-filter: blur(1px);
  border-radius: 20px;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 320px) {
    padding: 50px 20px;
    margin: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: 2rem;
  }
`;

const FormWrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
  /* border-radius: 20px; */
  background: rgba(0, 0, 0, 0.9);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }
`;

const StyledInput = styled(AntdInput)`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 25px;
  padding: 10px;
  font-size: 1rem;
  & input {
    padding-left: 300px;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ac0000;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #8e2c2c;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const CustomModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(15px);
`;

const CustomModalContent = styled.div`
  /* background: red; */
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  text-align: center;
  padding: 0px;
  position: relative;
  @media screen and (max-width: 320px) {
    width: 95%;
  }
  h2 {
    padding-top: 10px;
    color: #ac0000;
    padding: 5px 20px;
  }
  p {
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }
`;

const CongImage = styled.img`
  max-width: 100%;
  padding: 30px;

  /* position: absolute; */
  /* top: -100px; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  z-index: 1;
`;

const ClickImage = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const ModalStep = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    background-color: #ac0000;
    color: white;
    padding: 10px 20px 20px 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 5px;
  }
  a {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-decoration: none;
    width: 100%;
    margin-top: -18px;
    text-align: center;
    color: black;
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 320px) {
      padding: 8px;
    }
  }
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #ac0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  &:hover {
    background-color: #e5533d;
  }
  @media screen and (max-width: 320px) {
    margin-top: 1px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 10px;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;
const Newbg = styled.div`
  background-color: white;
  padding-top: 90px;
  border-radius: 10px;
  margin-top: -120px;
  @media screen and (max-width: 320px) {
    margin-top: -70px;
    padding-top: 40px;
  }
  h2 {
    @media screen and (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;

const Part = styled.div`
  background: url(${newfood}) no-repeat center center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 30px 30px 10px 10px;
  padding: 15px 20px;
  @media screen and (max-width: 320px) {
    padding: 10px 15px;
  }
  p {
    @media screen and (max-width: 320px) {
      /* font-size: 1.2rem; */
    }
  }
`;

const Optin = () => {
  useBounceIn(".bounce-In");
  useZoomInAnimation(".zoom-in");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://formspree.io/f/xnqkdolz", formData);
      setLoading(false);
      setFormData({ name: "", email: "" });
      showModal();
    } catch (error) {
      console.error("Error submitting form", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Container id="Opt-in">
        <FormWrapper>
          <Center>
            <Title>Get Your FREE Copy Today!</Title>
            <form onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                prefix={<UserOutlined />}
              />
              <StyledInput
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                prefix={<MailOutlined />}
              />
              <SubmitButton type="submit">
                {loading ? <Spin /> : "Yes! I want my FREE Copy"}
              </SubmitButton>
              <StyledParagraph>Download Free ONLY Today!</StyledParagraph>
            </form>
          </Center>
        </FormWrapper>
      </Container>
      <CustomModalBackground isVisible={isModalVisible}>
        <CustomModalContent>
          <CongImage src={cong} className="bounce-In" />
          <Newbg>
            <h2>Don't Close this page or you will lose your FREE Copy!</h2>
            <Part>
              <p>Trying to find the best dishes around you?</p>
              <p>
                Get Fast Food delivery in 30 minutes or receive a free voucher!
              </p>
              <ModalStep>
                <span>STEP 1</span>

                <a href="https://foodxliquorcentral.africa.restaurant/?fbclid=PAZXh0bgNhZW0CMTEAAaZOcZTSG1nOUFoFvQE8LDJMpLNjzbG6XRnkR3Qc2zs9aWrpSqZyLcqv9LQ_aem_ZmFrZWR1bW15MTZieXRlcw">
                  Click Here To Order From Our Finger Licking Variety Menu!{" "}
                  <ClickImage src={click} className="zoom-in" />
                </a>
              </ModalStep>
              <ModalStep>
                <span>STEP 2</span>
                <a>
                  Have Your Delivery on the Way in <>30</> Minutes
                </a>
              </ModalStep>
              <ModalButton onClick={hideModal}>OK</ModalButton>
            </Part>
          </Newbg>
        </CustomModalContent>
      </CustomModalBackground>
    </>
  );
};

export default Optin;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import foodcentral from "../images/ch1.png";
import foodcentral1 from "../images/ch2.png";
import foodcentral2 from "../images/ch3.png";
import foodcentral4 from "../images/ch4.png";
import foodcentral5 from "../images/ch5.png";
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
  /* overflow: hidden; */
  /* position: relative; */
  &::before {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${foodcentral3}) no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: -1; */
  }
  @media screen and (min-width: 800px) {
    display: none !important;
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
  padding-top: 280px;

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
  font-size: 3.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  span {
    color: #ac0000;
    font-style: italic;
    margin-top: -10px;
    /* background-color: red; */
    font-size: 2.5rem;
    z-index: 999;
    /* padding: 5px 7px; */
    border-radius: 20px;
    /* background: linear-gradient(
      90deg,
      #240600 0%,
      #ac0000 33%,
      #bc4b4b 53%,
      #ff1313 75%,
      #ff0000 100%
    ); */
    font-weight: 500;

    /* background-clip: text; */
    /* -webkit-background-clip: text; */
    @media screen and (max-width: 320px) {
      font-size: 1.1rem !important;
      /* margin-top: -25px; */
    }
    @media (min-width: 321px) and (max-width: 399px) {
      /* font-size: 2rem; */
      margin-top: -25px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 2.5rem;
      /* margin-top: -30px; */
    }
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
  font-size: 1.6rem !important;
  margin-top: 10px;
  padding: 0 30px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  text-align: center;
  font-weight: 400;
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
  margin-top: -2rem;
  /* color: black; */
  border-radius: 45px 45px 0 0;
  padding: 0px 0px 0 0px;

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
    @media screen and (max-width: 320px) {
      display: none !important;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      margin-top: -1rem !important;
    }
  }
`;
const Newlay = styled.div`
  border-radius: 45px 45px 0 0;
  padding: 10px 20px 80px 20px;
  background: rgba(0, 0, 0, 0.8);

  span {
    font-size: 2rem;
    color: #ac0000;
    z-index: 999;
    font-style: italic;
    @media screen and (max-width: 320px) {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 1.8rem;
    }
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
  font-size: 1.2rem;
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
  /* @media (min-width: 321px) and (max-width: 399px) {
    margin-top: -1.5rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -1.5rem !important;
  } */
  img {
    max-width: 100%;
    height: 20px;
  }
`;

const Hero = () => {
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
            <Title>Food Central</Title>
            <ListContainer>
              <Newlay>
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

export default Hero;
