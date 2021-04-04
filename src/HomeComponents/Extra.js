import React from "react";
import DSMarket from "../images/DSMarket.svg";
import JamsMarket from "../images/JamsMarket.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  margin-top: 8vw;

  h1 {
    width: 100%;
    height: 10vw;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 786px) {
      font-size: 2.7vw;
      line-height: 2.9vw;
    }
  }
`;

const WorkRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin-top: -4vw;
`;

const Project = styled(Link)`
  padding: 0;
  width: 16vw;
  height: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;

  img {
    padding: 2vw;
    width: 100%;
    height: auto;
  }
`;

export const Extra = () => {
  return (
    <Section>
      <h1>More of my work</h1>
      <WorkRow>
        <Project to="/DanceSavannah" target="_blank">
          <img src={DSMarket} type="image/svg" alt="Dance Savannah Website" />
        </Project>
        <Project to="/LocalJams" target="_blank">
          <img
            src={JamsMarket}
            type="image/svg"
            alt="Local Jams App Prototype"
          />
        </Project>
      </WorkRow>
    </Section>
  );
};

export default Extra;
