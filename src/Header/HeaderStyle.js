import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled(Link)`
  text-align: center;
  width: 100%;
  text-decoration: none;
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.055em;
  text-transform: lowercase;
  margin-top: 2vw;
  margin-bottom: 2vw;
  color: #0d4215;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    text-align: right;
    font-size: 36px;
    line-height: 43px;
  }

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  background: #0d4215;
  height: 3px;
  width: 100%;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);
`;
