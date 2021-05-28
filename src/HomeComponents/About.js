import React, { useState } from "react";
import { Accordion } from "../data/AccordionData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import aboutImg from "../images/aboutimg.png";

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1vw;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 4vw;
  }
`;
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 120vh;
  background: white;
  width: 60vw;
  margin-top: -2vw;
  margin-left: 0;
  margin-right: 0;
`;

const AsH2 = styled.h2`
  position: absolute;
  top: 19%;
  text-align: right;
  margin-left: 2vw;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    top: 12%;
    margin-left: 1vw;
  }
`;

const AsH3 = styled.h3`
  position: absolute;
  top: 22%;
  text-align: right;
  margin-left: 2vw;
  color: black;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    top: 18%;
    margin-left: 1vw;
  }
`;

const Container = styled.div`
  color: black;
  position: absolute;
  top: 25%;
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
    <AboutSection
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-delay="300"
      data-aos-anchor-placement="center-bottom"
    >
      <AboutImg src={aboutImg} />
      <IconContext.Provider value={{ color: "#0d4215", size: "20px" }}>
        <AccordionSection>
          <AsH2>About Me</AsH2>
          <AsH3>mini interview session</AsH3>
          <Container>
            {Accordion.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => accordionToggle(index)} key={index}>
                    <h4>{item.question}</h4>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
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
  );
};

export default About;
