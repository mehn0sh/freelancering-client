import React from "react";
import { socials } from "./constance";
const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col flex-row-reverse">
          <div className="flex items-center justify-center sm:ml-auto gap-x-8">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70 text-secondary-900">
              Copyright, Mahnoosh Ekrami
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon ">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain bg-black-100 "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
