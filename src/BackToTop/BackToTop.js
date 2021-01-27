import React from "react";
import backToTop from "../images/backToTop.svg";
import { BackToTopImage } from "./BackToTopStyle";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <BackToTopImage
        src={backToTop}
        type="image/svg"
        to="/"
        onClick={toggleHome}
      />
    </>
  );
};

export default BackToTop;
