import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionWrapper = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;
  padding: 0;

  @media screen and (min-width: 786px) {
    flex-direction: row;
    margin-top: 7vw;
  }
`;

export const SectionWrapper2 = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;

  @media screen and (min-width: 786px) {
    flex-direction: row-reverse;
  }
`;

export const SectionWrapper3 = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;

  @media screen and (min-width: 786px) {
    flex-direction: row;
  }
`;

export const SectionWrapper4 = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4vw;

  @media screen and (min-width: 786px) {
    flex-direction: row-reverse;
  }
`;

export const MockUpImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
`;

export const MockupImage = styled.img`
  height: auto;
  width: 50%;
  margin: 2vw;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (min-width: 786px) {
    margin: 0.5vw;
  }
`;

export const MockUpDetails = styled.h2`
  text-align: center;

  @media screen and (min-width: 786px) {
    font-size: 2.4vw;
    line-height: 2.6vw;
  }
`;

export const ProjectInfoBox = styled.ul`
  width: 80vw;
  height: 50vw;
  background: rgba(13, 66, 21, 0.6);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // backdrop-filter: blur(4px);
  // -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 786px) {
    width: 60vw;
    height: 30vw;
  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin-top: 4vw;
  margin-left: 4vw;
  margin-right: 0;
  margin-bottom: 6vw;

  @media screen and (min-width: 786px) {
    width: 80%;
    height: 28vw;
    margin-top: 0;
    margin-bottom: 2vw;
    margin-right: 2vw;
  }
`;

export const WordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  width: 45%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 2vw;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const WordContent2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: right;
  width: 45%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: 2vw;
  margin-right: 0;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const WordH2 = styled.h2`
  text-align: left;
  color: white;
  margin-bottom: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
`;

export const WordP = styled.p`
  text-align: left;
  color: white;
  margin-bottom: 3vw;
  margin-left: 0;
  margin-right: 0;
  margin-top: 1vw;
  width: 100%;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    font-size: 1.5vw;
    line-height: 1.7vw;
  }
`;
export const WordH2Alt = styled.h2`
  text-align: right;
  color: white;
  margin-bottom: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
`;

export const WordPAlt = styled.p`
  text-align: right;
  color: white;
  margin-bottom: 3vw;
  margin-left: 0;
  margin-right: 0;
  margin-top: 1vw;
  width: 100%;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    font-size: 1.5vw;
    line-height: 1.7vw;
  }
`;

export const ImageContent = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
`;

export const SectionImage = styled.img`
  margin-left: 0;
  margin-right: 0;
`;

export const WireFrameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center
  align-items: center;
  margin-top: 2vw;
  width: 100%;
`;
