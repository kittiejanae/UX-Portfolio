import React, { useState } from "react";
import { Accordion } from "../data/AccordionData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import aboutImg from "../images/aboutimg.png";
import resumevid1 from "../videos/resumevid1.gif";

const BannerWrapper = styled.div`
  height: 40vh;
  max-height: 800px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
  background: blue;

  @media screen and (min-width: 768px) {
    height: 30vh;
    max-height: 1000px;
  }
`;

const BannerBg = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media screen and (min-width: 768px) {
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0;
  margin: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 100%;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 0;
  }
`;
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 80vh;
  background: white;
  width: 60vw;
  margin-top: 0vw;
  margin-left: 0;
  margin-right: 0;
`;

const AsH2 = styled.h2`
  // position: absolute;
  // top: 15%;
  text-align: center;
  // margin-left: 2vw;
  line-height: 0;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    // top: 12%;
    // margin-left: 1vw;
  }
`;

const AsH3 = styled.h3`
  // position: absolute;
  // top: 19%;
  text-align: center;
  // margin-left: 2vw;
  color: black;
  line-height: 0;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    // top: 18%;
    // margin-left: 1vw;
  }
`;

const Container = styled.div`
  color: black;
  position: absolute;
  top: 15%;
  border-radius: 12px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  margin-left: 2vw;
  margin-right: 2vw;
  color: black;

  span {
    margin-left: 2vw;
  }

  h4 {
    color: black;
  }
`;

const Answer = styled.p`
  text-align: left;
  margin: 2vw;
  font-size: 12px;
  color: black;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    font-size: 16px;
  }
`;

const AccordionText = styled.div`
  color: black;
`;

const AboutImg = styled.img`
  width: auto;
  height: 70vw;
  margin-right: 0.2%;
  margin-top: -24vw;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    height: 70%;
    margin-top: 0vw;
  }
`;

const About = () => {
  const [clicked, setClicked] = useState(false);

  const accordionToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <BannerWrapper
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <BannerBg autoPlay loop muted src={resumevid1} type="image/gif" />
        <Wrapper
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <AsH2>About Me</AsH2>
          <AsH3>mini interview session</AsH3>
        </Wrapper>
      </BannerWrapper>
      <AboutSection
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="700"
        data-aos-anchor-placement="center-bottom"
      >
        <AboutImg src={aboutImg} />
        <IconContext.Provider value={{ color: "#0d4215", size: "20px" }}>
          <AccordionSection>
            <Container>
              {Accordion.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => accordionToggle(index)} key={index}>
                      <h4>{item.question}</h4>
                      <span>
                        {clicked === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <AccordionText>
                        <Answer>{item.answer}</Answer>
                      </AccordionText>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      </AboutSection>
    </>
  );
};

export default About;
