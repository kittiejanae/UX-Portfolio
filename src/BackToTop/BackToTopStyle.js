import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackToTopWrapper = styled(Link)`
  width: 80vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  flex-flow: column;
  text-decoration: none;
  margin-bottom: 4vw;
`;

export const BackToTopImage = styled.img`
  width: auto;
  height: 6vw;
  padding: 0;
  cursor: pointer;
  margin-left: 100%;
  margin-bottom: 0;

  &:hover {
    transform: scale(1.07);
    tranisition: all 0.2 ease-in-out;
  }

  @media screen and (min-width: 786px) {
    width: auto;
    height: 8vw;
  }
`;

export const BackToTopP = styled.p`
  text-decoration: none;
  font-size: 1.5vw;
  line-height: 1.7vw;
  width: 100%;
  text-align: right;
  margin-right: -8vw;
  margin-top: 0;
`;
