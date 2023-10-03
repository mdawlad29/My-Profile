"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "service", link: "/service" },
  { name: "skills", link: "/skill" },
  { name: "projects", link: "/project" },
  { name: "resume", link: "/resume" },
  { name: "contact", link: "/contact" },
];

const Header = () => {
  const [expandedMenu, setExpandedMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState<string>("");
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setActiveNav(
            "fixed top-0 left-0 w-full bg-primary lg:shadow-2xl z-30 transform transition-transform duration-700 ease-in-out"
          )
        : setActiveNav("");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#222222",
          height: "80vh",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#fff",
              },
              links: {
                color: "#fff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <div
          className={`${activeNav} text-neutral py-6 lg:px-28 md:px-12 sm:px-8 px-4`}
        >
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
              className="text-xl lg:hidden block cursor-pointer"
            />
          </div>
        </div>
        {/*---- Mobile Menu ----*/}
        <div
          className={`${
            expandedMenu ? "translate-y-0" : "-translate-y-full"
          } bg-primary text-neutral lg:hidden md:px-12 sm:px-8 px-4 py-3 transition-transform duration-500 ease-in-out transform fixed top-0 left-0 w-full z-40 flex justify-between`}
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
            className="text-xl mt-3 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
