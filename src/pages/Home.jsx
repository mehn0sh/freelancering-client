import React from "react";
import Faq from "../features/LandingPage/Faq";
import Features from "../features/LandingPage/Features";
import Footer from "../features/LandingPage/Footer";
import Header from "../features/LandingPage/Header";
import HeroSection from "../features/LandingPage/HeroSection";
import Pricing from "../features/LandingPage/Pricing";

const Home = () => {
  return (
    <div className=" min-h-screen h-full bg-secondary-0 ">
      <Header />
      <HeroSection/>
      <Features/>
      <Pricing/>
      {/* <Faq/> */}
      <Footer/>
    </div>
  );
};

export default Home;
