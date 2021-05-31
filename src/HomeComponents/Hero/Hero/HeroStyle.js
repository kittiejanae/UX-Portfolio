import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroWrapper = styled.div`
  height: 40vh;
  max-height: 800px;
  position: relative;
  width: 100%;
  // max-width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  // margin-top: 2vw;
  // top: 0;
  // left: 0;
  // background: blue;

  @media screen and (min-width: 768px) {
    height: 60vh;
    max-height: 1000px;
    width: 100%;
  }
`;

export const HeroBg = styled.img`
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

export const HeroAboutWrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: row-reverse;
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

export const HeroImage = styled.img`
  width: 40%;
  margin-right: 2vw;
  margin-left: 2vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);

  @media screen and (min-width: 786px) {
    transition: 0.8s all ease;
    width: 25%;
    height: auto;
  }
`;

export const AboutWrapper = styled.div`
  width: 55%;
  height: 90%;
  margin-left: 2vw;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 786px) {
    width: 55%;
    height: 90%;
  }
`;

export const AboutMe = styled.p`
  width: 100%;
  font-size: 12px;
  line-height: 14px;
  height: 80%;
  color: black;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const PageIconWrapper = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    width: 18vw;
    height: 10vw;
    justify-content: center;
  }
`;

export const IconWrapper = styled(Link)`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    width: 100%;
    height: 100%;
  }
`;

export const PageIcon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.09);
    transition: 0.8s all ease;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    width: 100%;
    height: 100%;
  }
`;
