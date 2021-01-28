import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackToTopWrapper = styled(Link)`
  width: 80vw;
  height: 6vw;
  position: relative;
  display: flex;
  align-items: center;
`;

export const BackToTopImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  cursor: pointer;
  margin-left: 80%;
  margin-bottom: 4vw;

  &:hover {
    transform: scale(1.07);
    tranisition: all 0.2 ease-in-out;
  }

  @media screen and (min-width: 786px) {
    width: 100%;
    height: 100%;
  }
`;
