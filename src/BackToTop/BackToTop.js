import React from "react";
import backToTop from "../images/backToTop.svg";
import { BackToTopImage, BackToTopWrapper } from "./BackToTopStyle";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <BackToTopWrapper to="/" onClick={toggleHome}>
        <BackToTopImage src={backToTop} type="image/svg" />
      </BackToTopWrapper>
    </>
  );
};

export default BackToTop;
