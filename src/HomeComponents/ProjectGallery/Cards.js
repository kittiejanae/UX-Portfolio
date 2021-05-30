import React, { Suspense, lazy } from "react";
import styled from "styled-components";
// import CardItem from "./CardItem";
import { projects } from "../../data/ProjectData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2vw;
  margin-bottom: 8vw;

  h2 {
    width: 100%;
    text-align: left;
    margin-left: 16vw;
  }

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 6vw;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  // height: 100%;
  // margin: 0;
  // padding: 10rem 0;

  // @media screen and (min-width: 768px) {
  //   flex-flow: row;
  // }
`;

const CardsBox = styled.div`
  // position: relative;
  margin-top: 4vw;
  margin-bottom: 4vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  height: 400px;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    // flex-direction: row;
    // width: 100%;
  }

  .swiper-container {
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: white;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: #0d4215;
    border: 0.5px solid #0d4215;
    border-radius: 8px;

    &:hover {
      background: #0d4215;
      color: white;
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  .swiper-slide {
    padding: 0;
    // margin-left: 8vw;
    width: 100%;
  }
`;

const CardsItem = styled.ul`
  // margin-top: 24px;
  width: 300px;
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
      <CardsContainer>
        <CardsBox>
          <Swiper spaceBetween={50} slidesPerView={1} navigation>
            {projects.map((project, index) => (
              <CardsItem key={index}>
                <Suspense fallback={<p>loading...</p>}>
                  <SwiperSlide key={index}>
                    <CardItem
                      src={project.mainImg}
                      text={project.mainText}
                      label={project.label}
                    />
                  </SwiperSlide>
                </Suspense>
              </CardsItem>
            ))}
          </Swiper>
        </CardsBox>
      </CardsContainer>
    </CardsWrapper>
  );
}

export default React.memo(Cards);
