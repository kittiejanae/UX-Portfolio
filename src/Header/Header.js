import React, { useState, useEffect } from "react";
import {
  HeaderWrapper,
  HeaderBox,
  HeaderTitle,
  MenuBars,
  NavMenu,
  NavMenuLinks,
} from "./HeaderStyle";
import { animateScroll as scroll } from "react-scroll";
import "aos/dist/aos.css";
import { menuData } from "../data/MenuData";

const Header = ({ toggle }) => {
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
      <HeaderBox>
        <HeaderTitle to="/" onClick={toggleHome}>
          natassja jordan • ux designer
        </HeaderTitle>
        <MenuBars
          onClick={toggle}
          data-aos="zoom-out"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
        />

        <NavMenu
          data-aos="zoom-out"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
        >
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </HeaderBox>
      {/* <Line /> */}
    </HeaderWrapper>
  );
};

export default Header;
