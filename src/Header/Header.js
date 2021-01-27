import React, { useState, useEffect } from "react";
import { HeaderWrapper, HeaderTitle, Line } from "./HeaderStyle";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderWrapper scrollNav={scrollNav}>
      <HeaderTitle to="/" onClick={toggleHome}>
        natassja jordan • ux designer
      </HeaderTitle>
      <Line />
    </HeaderWrapper>
  );
};

export default Header;
