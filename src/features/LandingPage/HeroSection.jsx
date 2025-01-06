import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden ">
      <Element name="hero">
        <div className="container lg:px-36  max-lg:px-5">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="mb-7 text-primary-600 font-semibold ">
              بـرای فریـلنسـرهـا
            </div>
            <h1 className="mb-6 text-5xl font-black text-secondary-700 leading-[100px]  max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-relaxed">
              انجام پروژه از هـر مکـان <br />و هـر زمـان
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-secondary-700 text-balance max-md:text-pretty">
              ما با سابقه ترین پلتفرم فریلنسری ایران هستیم به خانواده ما
              بپیوندید
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">شروع کنید</Button>
            </LinkScroll>
          </div>
          <div className="absolute lg:-top-32 top-28 right-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_re">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default HeroSection;
