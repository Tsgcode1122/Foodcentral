import React from "react";
import styled from "styled-components";
import foodcentral3 from "../images/fobg.jpg";
import {
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

const FooterContainer = styled.footer`
  background: url(${foodcentral3}) no-repeat center center;
  background-size: cover;
  color: white;

  text-align: center;
`;
const Container = styled.footer`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const IconLink = styled.a`
  color: white;
  margin: 0 15px;
  font-size: 1.5rem;

  &:hover {
    color: #ff6347;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <IconsRow>
          <IconLink
            href="https://www.instagram.com/foodcentral_ng?igsh=MWdybmlwcHJnZmkzbw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />
          </IconLink>
          <IconLink href="https://wa.me/+2348169804932">
            <WhatsAppOutlined />
          </IconLink>
          <IconLink href="tel:+2348169804932">
            <PhoneOutlined />
          </IconLink>
        </IconsRow>
        <CopyrightText>
          <CopyrightOutlined /> 2024 All rights reserved.
        </CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
