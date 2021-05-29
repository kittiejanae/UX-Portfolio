import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../HomeComponents/About";
import Dropdown from "../Header/Dropdown";
import Header from "../Header/Header";
import Aos from "aos";

const AboutMe = () => {
  const [isOpen, setIsOPen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOPen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <Header toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <About />
    </div>
  );
};

export default AboutMe;
