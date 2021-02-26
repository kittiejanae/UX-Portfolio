import React from "react";
import backToTop from "../images/backTop.svg";
import { BackToTopImage, BackToTopWrapper, BackToTopP } from "./BackToTopStyle";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <BackToTopWrapper to="/" onClick={toggleHome}>
        <BackToTopImage src={backToTop} type="image/svg" />
        <BackToTopP>Back To Top</BackToTopP>
      </BackToTopWrapper>
    </>
  );
};

export default BackToTop;
