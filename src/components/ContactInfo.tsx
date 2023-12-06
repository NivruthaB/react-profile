
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <StyledInfoContainer>
        <StyledRow style={{ display: 'flex', color: 'var(--secondary-text-color)', fontSize: '18px', justifyContent: 'center', width: '900px' }}>Have an interesting opportunity or just want to say hello? Feel free to send a message or reach out!</StyledRow>
      </StyledInfoContainer>
    </ContactInfoContainer>
  );
};

export default ContactInfo;

const StyledInfoContainer = styled.div`
  display: flex;
  margin-top: 40px;
`

export const StyledRow = styled.div`
  display:flex;
  justify-content: center;
  font-size: 18px;
  max-width: 450px;
`

const ContactInfoContainer = styled(motion.div)`
  transform: translateX(-250px);
  transition:0.6s ease-in-out;
  @media (max-width: 1082px) {
    transform: none;
  }

  @media (max-width: 450px) {
    transform: none;
    width: 300px;
  }
`