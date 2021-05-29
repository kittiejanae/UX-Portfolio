import React, {
  Suspense,
  lazy,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "../BackToTop/BackToTop";
import Header from "../Header/Header";
import Extra from "../HomeComponents/Extra";
import Footer from "../HomeComponents/Footer/Footer";
import Hero from "../HomeComponents/Hero/Hero/Hero";
import Dropdown from "../Header/Dropdown";
import Aos from "aos";
import Cards from "../HomeComponents/ProjectGallery/Cards";

const Section = lazy(() => import("../HomeComponents/Hero/Section/Section"));

const Home = () => {
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
      <Hero />
      <Suspense fallback={<p>loading...</p>}>
        <Cards />
        {/* <Section /> */}
      </Suspense>
      {/* <Extra /> */}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
