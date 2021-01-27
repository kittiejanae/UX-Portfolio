import React from "react";
import BackToTop from "../BackToTop/BackToTop";
import Header from "../Header/Header";
import Footer from "../HomeComponents/Footer/Footer";
import Hero from "../HomeComponents/Hero/Hero/Hero";
import Section from "../HomeComponents/Hero/Section/Section";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Section />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
