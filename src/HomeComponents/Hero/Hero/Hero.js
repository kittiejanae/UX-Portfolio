import React from "react";
import AboutPhoto from "../../../images/me.png";
import linkedIcon from "../../../images/linkedIcon.svg";
import contactIcon from "../../../images/contactIcon.svg";
import resumeIcon from "../../../images/resumeIcon.svg";
import herovid from "../../../videos/herovid.gif";
import {
  HeroWrapper,
  HeroImage,
  AboutWrapper,
  AboutMe,
  PageIconWrapper,
  IconWrapper,
  PageIcon,
  HeroBg,
  HeroAboutWrapper,
} from "./HeroStyle";
// import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <HeroWrapper
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="1000"
      data-aos-delay="600"
      data-aos-offset="0"
    >
      <HeroBg autoPlay loop muted src={herovid} type="image/gif" />
      <HeroAboutWrapper
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <HeroImage
          src={AboutPhoto}
          type="image/png"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          data-aos-offset="0"
        />
        <AboutWrapper
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          data-aos-delay="880"
          data-aos-offset="0"
        >
          <AboutMe>
            Welcome to my portfolio! I’m a UX Designer with a background in
            Entertainment & Media.
            <br></br>
            <br></br>I have a passion for user-friendly designs, logos,
            wireframing, prototyping and fun, creative problem solving.
            <br></br>
            <br></br>
            Take a look at my work so far!
          </AboutMe>
          <PageIconWrapper>
            <IconWrapper to="/Resume">
              <PageIcon src={resumeIcon} type="image/svg" />
            </IconWrapper>
            <IconWrapper to="/LinkedIn" target="_blank">
              <PageIcon src={linkedIcon} type="image/svg" />
            </IconWrapper>
            <IconWrapper to="/Contact">
              <PageIcon src={contactIcon} type="image/svg" />
            </IconWrapper>
          </PageIconWrapper>
        </AboutWrapper>
      </HeroAboutWrapper>
    </HeroWrapper>
  );
};

export default React.memo(Hero);
