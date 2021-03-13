import React, { Suspense, lazy } from "react";
import BackToTop from "../BackToTop/BackToTop";
import Header from "../Header/Header";
import Footer from "../HomeComponents/Footer/Footer";
import Hero from "../HomeComponents/Hero/Hero/Hero";

const Section = lazy(() => import("../HomeComponents/Hero/Section/Section"));

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Suspense fallback={<p>loading...</p>}>
        <Section />
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
