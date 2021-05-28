import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ResumePage from "../ResumeComponents/Resume/ResumePage";
import Dropdown from "../Header/Dropdown";
import Aos from "aos";

const Resume = () => {
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
      <ResumePage />
    </div>
  );
};

export default Resume;
