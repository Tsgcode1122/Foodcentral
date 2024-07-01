import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Spin, Input as AntdInput } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/reset.css";
import foodcentral3 from "../images/abn.jpg";
import cong from "../images/cong.png";
import newfood from "../images/tbg.png";
import click from "../images/click.png";
import rush from "../images/rush.png";
import biker from "../images/biker.png";
import useBounceIn from "../animation/ useBounceIn";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import HeroMoving from "./HeroMoving";

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
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
  /* background-size: cover; */

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
  background: white;
  min-height: 500px;
  overflow: hidden;
  margin: 4rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  max-width: 400px;
  z-index: 999;
  border-radius: 20px;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 320px) {
    min-height: 100px !important;
    max-width: 300px;
    margin: 1.5rem !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: 1.5rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: 2rem !important;
  }
`;

const FormWrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    height: 100vh;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
  padding: 20px;
  background-color: #ac0000;
  border-radius: 20px 20px 20px 20px;
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px 10px 10px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.5rem;
  }
`;
const Circle = styled.div`
  width: 300px;
  background-color: #ffc4a0;
  height: 300px;
  position: absolute;
  margin-top: -7rem;
  margin-left: -7rem;
  border-radius: 50%;
  @media screen and (max-width: 320px) {
    width: 200px;

    height: 200px;

    margin-top: -4rem;
    margin-left: -7rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -9rem;
    margin-left: -8rem;
  }
`;
const Circle2 = styled.div`
  width: 300px;
  background-color: #ac0000;
  height: 300px;

  position: absolute;

  margin-top: -10rem;
  margin-right: -7rem;
  border-radius: 50%;
  @media screen and (max-width: 320px) {
    width: 200px;

    height: 200px;

    margin-top: -8rem;
    margin-right: -5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: -10rem;
    margin-right: -10rem;
  }
`;
const MainCircle = styled.div`
  display: flex;

  justify-content: end;
`;
const NewBackground = styled.div`
  border-right: 5px solid #ac0000;
  border-left: 5px solid #ac0000;

  border-radius: 60px 10px 60px 10px;
  padding: 0.3rem;
  span {
    background-color: #ac0000;
    padding: 1rem;
    border-radius: 60px 10px 60px 10px;
    color: white;
    display: flex;
  }

  img {
    max-width: 100%;
    height: 60px;
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
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
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
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 100%;
  overflow-y: auto;
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
  height: 150px;
  z-index: 1;
`;

const ClickImage = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const ModalStep = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    background-color: #ac0000;
    color: white;
    padding: 10px;
    border-radius: 15px 0 0 15px;
    text-align: center;
    font-weight: 400;

    font-family: "Montserrat", sans-serif;
    /* margin-bottom: 5px; */
  }
  a {
    background-color: white;
    border-radius: 0 15px 15px 0;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-decoration: none;
    width: 100%;
    /* margin-top: -18px; */
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
  color: #ff6f13;
  margin-top: 10px;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
const Biker = styled.img`
  max-width: 100%;
  height: 150px;
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
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        <Circle></Circle>
        <FormWrapper>
          <Center>
            <Title>Get Your FREE Copy Today!</Title>
            <Form>
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
            </Form>
            <HeroMoving />
          </Center>
        </FormWrapper>
        <MainCircle>
          <Circle2></Circle2>
        </MainCircle>
      </Container>
      <CustomModalBackground isVisible={isModalVisible}>
        <CustomModalContent>
          <CongImage src={cong} className="bounce-In" />
          <Newbg>
            <h2>Don't Close this page or you will lose your FREE Copy!</h2>
            <Part>
              <p>Trying to find the best dishes around you?</p>
              <NewBackground>
                <span>
                  Get Fast Food Delivery in 30 minutes or receive a free
                  voucher!
                  <img src={rush} />
                </span>
              </NewBackground>
              <Biker src={biker}></Biker>
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
