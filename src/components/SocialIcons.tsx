import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
const SocialIcons = ({ isContact }) => {
  const checkWindowSize = (width) => {
    if (width <= 1082) {
      return true;
    }
    return false;
  }
  let width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  let isWidthSmall = checkWindowSize(width);
  const [isSmall, setIsSmall] = useState(isWidthSmall);
  window.onresize = () => {
    width = window.innerWidth || document.documentElement.clientWidth ||
      document.body.clientWidth;
    const isWidthSmall = checkWindowSize(width);
    setIsSmall(isWidthSmall);
  }
  return (
    <>
      <StyledSocialIcons $isContact={isContact}
        animate={isSmall !== true ? isContact === true ?
          {
            opacity: [0.8, 0.5, 0.2, 0, 0, 0, 0, 0, 1],
            transform: ['rotate(-90deg)'],
            right: ['50px', '50px', '50px', '50px', '1020px', '1020px', '1020px', '1020px', '1020px'],
            bottom: ['10px', '10px', '10px', '10px', '250px', '250px', '250px', '250px', '250px'],
          }
          :
          {
            transform: ['rotate(0deg)']
          } : { opacity: 1 }
        }
        transition={
          { delay: isContact === true ? 1 : 0, ease: "easeInOut", duration: isContact === true ? 2 : 1 }
        }
      >
        <StyleIconLink href="https://github.com/NivruthaB" $isContact={isContact}
          animate={isSmall !== true ? isContact === true ?
            { opacity: [0.5, 0, 0, 0, 0, 0, 1], transform: ['rotate(90deg)'] }
            :
            { opacity: [0, 0, 0, 0, 0, 0, 1], transform: 'rotate(0deg)' } : { opacity: 1 }
          }
          transition={{
            delay: 1,
            ease: "easeInOut", duration: 1
          }}
        >
          <i className="fa-brands fa-github" aria-hidden="true" title="Nivrutha Balaji's GitHub Profile"></i>
        </StyleIconLink>
        <StyleIconLink href="https://www.linkedin.com/in/nivrutha-balaji-1a85b4134/" $isContact={isContact}
          animate={isSmall !== true ? isContact === true ?
            { opacity: [0.5, 0, 0, 0, 0, 0, 1], transform: ['rotate(90deg)'] }
            :
            { opacity: [0, 0, 0, 0, 0, 0, 1], transform: 'rotate(0deg)' } : { opacity: 1 }}
          transition={{
            delay: 1.5,
            ease: "easeInOut", duration: 1
          }}
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true" title="Nivrutha Balaji's LinkedIn Profile"></i>
        </StyleIconLink>
        <StyleIconLink href="https://twitter.com/NivruthaBalaji" $isContact={isContact}
          animate={isSmall !== true ? isContact === true ?
            { opacity: [0.5, 0, 0, 0, 0, 0, 1], transform: ['rotate(90deg)'] }
            :
            { opacity: [0, 0, 0, 0, 0, 0, 1], transform: 'rotate(0deg)' } : { opacity: 1 }}
          transition={{
            delay: 2,
            ease: "easeInOut", duration: 1
          }}
        >
          <i className="fa-brands fa-twitter" aria-hidden="true" title="Nivrutha Balaji's Twitter Profile"></i>
        </StyleIconLink>
      </StyledSocialIcons >
    </>
  );
};

export default SocialIcons;

const StyledSocialIcons = styled(motion.div) <any>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 50px;
  bottom: 10px;
  align-items: flex-start;
  &:after{
    content: '';
    position: relative;
    left: ${(props) => props.$isContact ? '24px' : '18px'};
    width:2px;
    height: ${(props) => props.$isContact ? '0px' : '150px'};
    background-color: var(--secondary-text-color);
    transition: height 1s ease-in-out;
    transition-delay: 0.6s;
    @media (max-width: 1082px) {
      height: 2px;
      width: 30px;
      position: unset;
      transition: none;
    }
  }

  @media (max-width: 1082px) {
    flex-direction: row;
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    position: unset;
    &:before{
      content: '';
      background-color: var(--secondary-text-color);
      transition: height 1s ease-in-out;
      height: 2px;
      width: 30px;
      position: unset;
    }
  }
`

const StyleIconLink = styled(motion.a) <any>`
  text-decoration: none;
  padding: 10px;
  transition: 0.2s ease-in;
  color: var(--secondary-text-color);
  font-size: ${(props) => props.$isContact ? '32px' : '22px'};
  &:hover{
    color: var(--hl-color);
    scale: 1.2;
  }
`
