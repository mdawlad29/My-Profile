"use client";
import React from "react";
import Link from "next/link";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        className="bg-[#222222] h-[80vh]"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            style: {
              width: "100%",
              height: "87vh",
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

export default Hero;
