import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.li`
  // width: 100%;
  // height: 200px;
  display: flex;
  // border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  // @media screen and (min-width: 768px) {
  //   width: auto;
  //   height: 300px;
  // }
`;

const CardLink = styled(Link)`
  // width: 100%;
  text-decoration: none;
  // box-shadow: 0px 6px 20px rgba(56, 125, 255, 0.17);
  // -webkit-filter: drop-shadow(0px 6px 20px rgba(56, 125, 255, 0.17));
  // filter: drop-shadow(0px 6px 20px rgba(56, 125, 255, 0.17);
  // border-radius: 12px;
  // background: blue;
`;

const ImgWrap = styled.figure`
  // position: relative;
  // width: 100%;
  // padding-top: 67%;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 150px;
  display: inline-block;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
`;

const CardImg = styled.img`
  // width: auto;
  height: 100%;
  margin: 0;
  margin-top: 2vw;
  padding: 0;

  @media screen and (min-width: 768px) {
    // width: 150%;
    // height: 100%;
  }
`;
const InfoWrap = styled.div`
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 1rem;
`;

const InfoH4 = styled.h3`
  color: white;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

function CardItem(props) {
  return (
    <CardWrapper
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-once="true"
      data-aos-anchor-placement="center-bottom"
    >
      <CardLink to={props.path}>
        <ImgWrap>
          <CardImg src={props.src} />
        </ImgWrap>
        <InfoWrap>
          <InfoH4>{props.text}</InfoH4>
        </InfoWrap>
      </CardLink>
    </CardWrapper>
  );
}

export default React.memo(CardItem);
