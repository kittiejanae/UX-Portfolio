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
`;

export const MockUpImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const MockUpDetails = styled.h2`
  text-align: center;
`;

export const ProjectInfoBox = styled.ul`
  width: 80vw;
  height: 45vw;
  background: rgba(13, 66, 21, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 0;
  margin: 0;
`;

export const SliderDiv = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin-top: -2vw;
  margin-left: 0;
  margin-right: 0;
`;

export const WordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  width: 60%;
  margin-bottom: 2vw;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
`;

export const WordH2 = styled.h2`
  text-align: left;
  color: white;
  margin-bottom: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
`;

export const WordP = styled.p`
  text-align: left;
  color: white;
  margin-bottom: 4vw;
  margin-left: 0;
  margin-right: 0;
`;

export const ImageContent = styled.div`
  width: 15%;
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
  justify-content: space-around;
  align-items: center;
  margin-top: 2vw;
  width: 100%;
`;
