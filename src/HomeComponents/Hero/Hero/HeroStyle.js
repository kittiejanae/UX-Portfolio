import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroWrapper = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
  top: 0;
  left: 0;
`;

export const HeroBg = styled.video`
  margin: 0;
  padding: 0;
  width: 80vw;
  height: 38vw;
  -o-object-fit: cover;
  object-fit: cover;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const HeroAboutWrapper = styled.div`
  width: 78%;
  height: 32vw;
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
  width: 32vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);

  @media screen and (min-width: 786px) {
    transition: 0.8s all ease;
    width: 32vw;
    height: auto;
  }
`;

export const AboutWrapper = styled.div`
  width: 40vw;
  height: 32vw;
  margin-right: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutMe = styled.p`
  width: 100%;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    font-size: 1.5vw;
    line-height: 1.7vw;
  }
`;

export const PageIconWrapper = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    width: 25vw;
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
