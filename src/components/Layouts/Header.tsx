"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "#about" },
  { name: "service", link: "#service" },
  { name: "skills", link: "#skill" },
  { name: "projects", link: "#project" },
  { name: "resume", link: "#resume" },
  { name: "contact", link: "#contact" },
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
      windowHeight > 200
        ? setActiveNav(
            "fixed top-0 left-0 w-full bg-primary bg-opacity-70 lg:shadow-2xl z-30 transform transition-transform duration-700 ease-in-out"
          )
        : setActiveNav("");
    }
  };

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
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
            style: {
              width: "100%",
              height: "80vh",
              position: "absolute",
            },
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
                value: "#0866FF",
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
                value: 70,
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

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          }}
          transition={{ delay: 1 }}
          className={`${activeNav} text-neutral py-6 lg:px-28 md:px-12 sm:px-8 px-4`}
        >
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <h1
                className={`uppercase text-xl font-bold ${
                  activeNav ? "text-neutral" : "text-primary"
                }`}
              >
                Mohammad Awlad
              </h1>
            </Link>
            <div className="lg:block hidden">
              <ul className="flex items-center gap-6 uppercase">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className={`${
                      activeNav ? "" : "hover:text-primary"
                    } duration-300 ease-in-out`}
                  >
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
        </motion.div>
        {/*---- Mobile Menu ----*/}
        <div
          className={`${
            expandedMenu ? "translate-y-0" : "-translate-y-full"
          } bg-primary text-neutral lg:hidden md:px-12 sm:px-8 px-4 py-3 transition-transform duration-500 ease-in-out transform fixed top-0 left-0 w-full z-40 flex justify-between`}
        >
          <ul className="uppercase">
            {links.map((link) => (
              <li
                key={link.name}
                className="my-2"
                onClick={() => setExpandedMenu(false)}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <AiOutlineClose
            onClick={() => setExpandedMenu(false)}
            className="text-xl mt-3 cursor-pointer"
          />
        </div>
        {/*---- Hero Details ----*/}
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          className="flex justify-center items-center h-full text-neutral px-4"
        >
          <div className="text-center font-bold md:text-3xl text-2xl">
            <h1>HI !</h1>
            <h2 className="uppercase" style={{ letterSpacing: ".2em" }}>
              {`i'm`} <span className="text-primary">mohammad awlad</span>
            </h2>
            <TypeAnimation
              sequence={["Frontend Web Developer_", 4000, "Freelancer_", 4000]}
              wrapper="span"
              speed={10}
              style={{
                fontSize: "0.5em",
                letterSpacing: ".3em",
                fontWeight: 500,
                display: "inline-block",
              }}
              repeat={Infinity}
            />
            {/*---- Button ----*/}
            <Link href={"#about"} className="block mt-4">
              <button className="border border-neutral rounded-full animate-bounce w-5 h-12 text-3xl text-primary">
                &#129043;
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
