import aboutMeImg from "../assets/images/nivrutha-balaji.jpg";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";


const personalDescription = 'I am a web developer with over 4.5 years of experience. I initially started my work experience with developing web APIs using .NET and then started to experiment with front-end technologies. I stayed here because I found this part of the web world more interesting!'
const skillsList1 = ['React', 'Angular', 'JavaScript (ES6+)'];
const skillsList2 = ['TypeScript', 'HTML', 'CSS'];
const AboutMe = () => {
  const checkWindowSize = (width) => {
    if (width <= 992) {
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
    <AboutMeContainer>
      <StyledImage
        whileHover={{ scale: 1.1 }}
        animate={isSmall === false ? { x: '50%' } : { x: '0%' }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
      >
        <img src={aboutMeImg} alt={'Nivrutha Balaji'} />
      </StyledImage>
      <AboutMeContent
        initial={{ x: 120 }}
        animate={isSmall === false ? { x: '10%' } : { x: '0%' }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
      >
        <TitleContainer >
          <h4>Hello, nice to meet you!</h4>
          <h5>I build things for the web.</h5>
          <StyledDescriptionContainer>
            <StyledDescription>{personalDescription}</StyledDescription>
            <div>Some technologies I have worked with:</div>
            <StyledList>
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                <span>
                  {skillsList1.map((skill) => {
                    return (
                      <div key={skill}>{skill}</div>
                    )
                  })}
                </span>
                <span style={{ marginLeft: '80px' }}>
                  {skillsList2.map((skill) => {
                    return (
                      <div key={skill}>{skill}</div>
                    )
                  })}
                </span>
              </span>
            </StyledList>
          </StyledDescriptionContainer>
        </TitleContainer>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 35%;
  margin-top: 40px;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`

const AboutMeContent = styled(motion.div)`
  margin-left: 150px;
  display: flex;
  justify-content: center;
  margin-right: 100px;
  font-size: 18px;
  color: #9f9f9f;
  width: 45vw;
  @media (max-width: 992px) {
    margin-left: 0;
    align-items: center;
    margin-right: 0;
  }
`

const StyledDescriptionContainer = styled.div`
  font-size: 20px;
`

const StyledList = styled.ul`
  margin-top: 10px;
  margin-left: 30px;
  font-family: 'Source Code Pro',monospace;
  font-size: 18px;
`

const StyledDescription = styled.div`
  margin-bottom: 12px;
`

export const Circle = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 50%;
	height: 7px;
	width: 7px;
	border: 1px solid var(--hl-color);
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing);
  img {
  height: 350px;
  z-index: 50;
  border-radius: 6px;
  border: 1px solid var(--grey);
}
@media (min-width: 992px) {
  img {
    height: 330px;
    z-index: 50;
    border-radius: 0;
    padding: 6px;
  }
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

const TitleContainer = styled.div`
  padding: 10px;

 h4 {
  color: var(--hl-color);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
  @media (max-width: 992px) {
    display:flex;
    justify-content: center;
  }
}

 h5 {
  color: var(--text-color);
  font-size: 20px;
  margin-bottom: 15px;
  @media (max-width: 992px) {
    display:flex;
    justify-content: center;
  }
}
`
