import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Spin, Input as AntdInput } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/reset.css";
import foodcentral3 from "../images/bsd.jpg";
import cong from "../images/cong.png";
import click from "../images/click.png";
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 70px;
  min-height: 100vh;
  position: relative;
  background: url(${foodcentral3}) no-repeat center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9); /* Dark overlay */
    /* z-index: -1; */
  }

  @media screen and (max-width: 320px) {
    padding: 0 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 50px;
  }
`;

const Center = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 50px 20px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 320px) {
    padding: 50px 20px;
  }
`;

const FormWrapper = styled.div`
  text-align: center;
  width: 100%;
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
  /* background: white; */
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 90%;
  overflow-y: auto; /* Enable vertical scrolling */
  text-align: center;
  padding: 20px;
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
    font-family: "Source Serif 4", serif;
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
    font-family: "Source Serif 4", serif;
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
    font-family: "Source Serif 4", serif;
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
  background-color: white;
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
              <p>We deliver the best dishes around in 30 minutes!</p>
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
