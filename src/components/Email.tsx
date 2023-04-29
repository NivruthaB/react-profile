import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const Email = () => {

    return (
        <>
            <StyledSocialIcons>
                <StyleEmail>nivrutha.balaji@gmail.com</StyleEmail>
            </StyledSocialIcons>
        </>
    );
};

export default Email;

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50px;
  bottom: 10px;
  &:after{
    content: '';
    position: relative;
    left: 18px;
    width:2px;
    height: 120px;
    background-color: var(--secondary-text-color);
    transition: height 0.3s ease-in-out;
  }
`

const StyleEmail = styled(motion.div)`
  transition: 0.2s ease-in;
  color: var(--secondary-text-color);
  font-size: 12px;
  transform: rotate(-90deg);
  position: relative;
  bottom: 130px;
  left: -88px;
  &:hover{
    color: var(--hl-color);
  }
`
