import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import menu from "../images/fingerprint.svg";

const NavLink = css`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1vw;
  margin-bottom: 0vw;
  cursor: pointer;
  text-decoration: none;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;

  &:hover {
    transform: scale(1.05);
    border-bottom: 1px solid;
    color: #0d4215;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vw;
`;

export const HeaderBox = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  width: 100%;
`;

export const HeaderTitle = styled(Link)`
  text-align: left;
  width: 100%;
  text-decoration: none;
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.055em;
  text-transform: lowercase;
  margin-top: 2.3vw;
  margin-bottom: 2.3vw;
  margin-left: 2.3vw;
  color: #0d4215;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    text-align: right;
    font-size: 28px;
    line-height: 33px;
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 0vw;
    padding-bottom: 0vw;
    width: 70%;
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

export const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${menu});
    background-size: contain;
    cursor: pointer;
    position: absolute;
    top: 22px;
    right: 4vw;
    transform: translate(-50%, 25%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
