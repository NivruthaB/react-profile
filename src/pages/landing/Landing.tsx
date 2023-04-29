import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../assets/images/nivrutha-balaji.jpg";
import React from "react";
import styled from "styled-components";
interface ILandingProps {
  name: string
}
const Landing = ({ name }: ILandingProps) => {
  return (
    <LandingPageContainer >
      <NameContainer >
        <StyledName>
          {name}
        </StyledName>
        <StyledTypeWriterContainer>
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter
                .typeString("I'm a web developer")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString("designer")
                .pauseFor(1500)
                .start();
            }}
          />
        </StyledTypeWriterContainer>
      </NameContainer>
      <StyledImageContainer className="image-container">
        <StyledMotionImage
          className="landingImage"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.7, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ opacity: 0.8, scale: 0.9 }}
          src={landingImage}
          alt="Nivrutha Balaji"
        />
      </StyledImageContainer>
    </LandingPageContainer>
  );
};


export default Landing;

const StyledTypeWriterContainer = styled.div`
  left: 50%;
  top: 70%;
  position: absolute;
  color: var(--hl-color);
  font-weight: 800;
  margin-top: -100px;
  padding-bottom: 28px;
  font-size: 40px;
  @media(max-width: 1082px){
    position: unset;
    margin-top: 5px;
    padding-bottom: 0;
  }
`;

const StyledName = styled(motion.div)`
  left: 50%;
  top: 55%;
  font-size: 70px;
  position: absolute;
  color: var(--text-color);
  font-weight: 800;
  margin-top: -100px;
  padding-bottom: 28px;
  opacity: 0.8;
  text-align: center;
  @media(max-width: 1082px){
    position: unset;
    margin-top: 100px;
  }
  @media(max-width: 490px){
    font-size: 50px;
    position: unset;
    margin-top: 100px;
  }
`;

const StyledMotionImage = styled(motion.img)`
  position: absolute;
  bottom: 5%;
  right: 60%;
  opacity: 0.3;
  mix-blend-mode: lighten;
  height: 80%;
  @media(max-width: 1082px){
    position: unset;
    width: 80%;
  }
`

const LandingPageContainer = styled.div`
`


const StyledImageContainer = styled.div`
  @media(max-width: 1082px){
    display: flex;
    justify-content: center;
  } 
`

const NameContainer = styled.div`
  @media(max-width: 1082px){
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  } 
  @media(max-width: 490px){
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  } 
`
