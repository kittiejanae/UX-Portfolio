import React from "react";
import AboutPhoto from "../../../images/me.png";
import linkedIcon from "../../../images/linkedIcon.svg";
import contactIcon from "../../../images/contactIcon.svg";
import resumeIcon from "../../../images/resumeIcon.svg";
import herovid from "../../../videos/herovid.mp4";
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

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBg autoPlay loop muted src={herovid} type="video/mp4" />
      <HeroAboutWrapper>
        <HeroImage src={AboutPhoto} type="image/png" />
        <AboutWrapper>
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

export default Hero;
