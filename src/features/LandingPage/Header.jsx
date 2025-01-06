import React, { useEffect, useState } from "react";
import { Link as LinkNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Button from "../../ui/Button";
import useAuthorize from "../authentication/useAuthoriza";
import UseUser from "../authentication/UseUser";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const {isLoading,isAuthenticated,isAuthorized,user,isVerified }=useAuthorize()
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavLink = ({ title, scrollName }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={scrollName}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-secondary-900 uppercase transition-colors duration-500 cursor-pointer hover:text-primary-400 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ${
        hasScrolled && "py-2 bg-secondary-0 backdrop-blur-[8px]"
      } `}
    >
      <div className="container lg:px-36 flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/public/favicon.ico" width={70} height={30} alt="logo" />
        </a>
        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-secondary-100  max-lg:opacity-0  ${
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          }`}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 sidebar-before  max-lg:overflow-hidden max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12 ">
                <li className="nav-li ">
                  <NavLink title={"فرصت ها"} scrollName="features" />
                  <div className="dot" />
                  <NavLink title="اشتراک" scrollName="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    }
                  >
                    <img
                      src="/public/favicon.ico"
                      width={50}
                      height={30}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="سوالات متداول" scrollName="faq" />
                  <div className="dot" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2  rotate-90">
            <img
              src="/images/bg-outlines.svg"
              width={960}
              height={380}
              alt="outline"
              className="relative z-2"
            />
            <img
              src="/images/bg-outlines-fill.png"
              width={960}
              height={380}
              alt="outline"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>
        { !isLoading && isVerified ? (
          <div className="flex gap-x-10 mx-[10px] mt-3">
            <LinkNavigate to={`/${(user.role).toLowerCase()}/dashboard`}>
            <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-14">
                <img
                  src={"/images/user.png"}
                  alt={""}
                  className="size-10 object-contain z-20"
                />
              </div>
            </LinkNavigate>
          </div>
        ) : (
          <LinkNavigate
            to={"/auth"}
            className=" mr-3 ml-3 -mt-2 text-nowrap base-bold text-secondary-900 uppercase transition-colors duration-500 cursor-pointer hover:text-primary-400 max-lg:my-4 "
          >
            ورود | ثبت نام
          </LinkNavigate>
        )}{" "}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
