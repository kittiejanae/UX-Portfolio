import React from "react";
import backToTop from "../images/fingerprint.svg";
import { BackToTopImage, BackToTopWrapper, BackToTopP } from "./BackToTopStyle";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <BackToTopWrapper
        to="/"
        onClick={toggleHome}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-delay="600"
        data-aos-offset="0"
      >
        <BackToTopImage src={backToTop} type="image/svg" />
        <BackToTopP>Back To Top</BackToTopP>
      </BackToTopWrapper>
    </>
  );
};

export default BackToTop;
