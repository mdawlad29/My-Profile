"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Biography } from "./Biography";

const AboutSection = () => {
  return (
    <>
      <section className="relative mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-gray-400"
        >
          Software Engineer & Creative Developer with a passion for building
          beautiful, functional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="mt-8 flex justify-center"
        >
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 ease-in-out">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
              <PiDownloadSimpleBold className="text-xl" />
            </div>
            Download Resume
          </button>
        </motion.div>
      </section>

      <Biography />
    </>
  );
};

export default AboutSection;
