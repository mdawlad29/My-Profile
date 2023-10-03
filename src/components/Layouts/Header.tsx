"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "service", link: "/service" },
    { name: "skills", link: "/skill" },
    { name: "projects", link: "/project" },
    { name: "resume", link: "/resume" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <>
      <div className="bg-primary text-neutral py-6 lg:px-40 md:px-16 sm:px-12 px-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl">Mohammad Awlad</h1>
          <div className="lg:block hidden">
            <ul className="flex items-center gap-6 uppercase">
              {links.map((link) => (
                <li key={link.name} className="">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*---- Menu Icon ---*/}
          <AiOutlineMenu
            onClick={() => setExpandedMenu(true)}
            className="text-xl lg:hidden block"
          />
        </div>
      </div>
      {/*---- Mobile Menu ----*/}
      <div
        className={`${
          expandedMenu ? "translate-y-0" : "-translate-y-full"
        } bg-primary text-neutral lg:hidden md:px-16 sm:px-12 px-4 py-3 transition-transform duration-500 ease-in-out transform fixed top-0 left-0 w-full z-10 flex justify-between`}
      >
        <ul className="uppercase">
          {links.map((link) => (
            <li key={link.name} className="my-2">
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <AiOutlineClose
          onClick={() => setExpandedMenu(false)}
          className="text-xl mt-3"
        />
      </div>
    </>
  );
};

export default Header;
