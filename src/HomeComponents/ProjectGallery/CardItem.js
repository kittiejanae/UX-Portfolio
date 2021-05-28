import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.li`
  width: 100%;
  height: 200px;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  padding: 2vw;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    height: 300px;
  }
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
`;

const CardImg = styled.img`
  width: 40%;
  height: 30%;
  margin: 0;
  margin-top: 2vw;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 150%;
    height: 100%;
  }
`;
const InfoWrap = styled.div``;
const InfoH4 = styled.h3`
  padding-top: 0px;
  padding-bottom: 2vw;
  color: white;
  font-size: 2.5vw;
  line-height: 2.7vw;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 2vw;
    line-height: 2.2vw;
  }
`;

function CardItem(props) {
  return (
    <CardWrapper>
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

export default CardItem;
