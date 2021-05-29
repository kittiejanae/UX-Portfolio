import React, { Suspense, lazy } from "react";
import styled from "styled-components";
// import CardItem from "./CardItem";
import { projects } from "../../data/ProjectData";

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2vw;
  margin-bottom: 6vw;

  h2 {
    width: 100%;
    text-align: left;
    margin-left: 16vw;
  }

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 4vw;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0;

  @media screen and (min-width: 768px) {
    flex-flow: row;
  }
`;

const CardsBox = styled.div`
  // position: relative;
  // margin: 50px 0 45px;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: -4vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const CardsItem = styled.ul`
  margin-bottom: 24px;
  width: 100%;
  list-style: none;
`;

const CardItem = lazy(() => import("./CardItem"));

function Cards() {
  return (
    <CardsWrapper>
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        Projects
      </h2>
      <CardsContainer
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        <CardsBox>
          {projects.map((project, index) => (
            <CardsItem key={index}>
              <Suspense fallback={<p>loading...</p>}>
                <CardItem
                  src={project.mainImg}
                  text={project.mainText}
                  label={project.label}
                />
              </Suspense>
            </CardsItem>
          ))}
        </CardsBox>
      </CardsContainer>
    </CardsWrapper>
  );
}

export default React.memo(Cards);
