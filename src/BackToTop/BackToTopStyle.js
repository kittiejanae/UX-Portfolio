import styled from "styled-components";

export const BackToTopImage = styled.img`
  width: 12%;
  height: 12%;
  position: initial;
  bottom: 0;
  float: right;
  margin-bottom: 16vw;
  padding: 0;

  &:hover {
    transform: scale(1.07);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;
