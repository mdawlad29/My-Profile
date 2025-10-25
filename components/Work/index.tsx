"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/assets";
import { LuCircleUserRound } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";
import { allProjects } from "@/dummy";

const WorkSection = () => {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-1 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        My{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Work
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="text-lg leading-relaxed text-gray-400 md:text-xl mb-20"
      >
        A collection of projects that showcase my passion for creating
        intuitive, visually appealing digital experiences with focus on
        performance and usability.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allProjects?.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            key={i}
            className="group cursor-pointer"
          >
            <div className="relative h-full overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item?.image ?? "/default-fallback-image.png"}
                  alt="Project 1"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex translate-y-4 transform items-center justify-between transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      <Link
                        href={item?.link}
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
                      >
                        <RiExternalLinkLine className="text-2xl" />
                      </Link>
                    </div>

                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md">
                      Creation Time: {item?.creationDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative">
                <div className="mb-3 flex flex-wrap gap-2">
                  {Array.isArray(item?.language)
                    ? item.language.map((lang, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-blue-400/30 bg-blue-400/10 px-2 py-1 text-xs text-blue-300 backdrop-blur-sm"
                        >
                          {lang}
                        </span>
                      ))
                    : null}
                </div>

                <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {item?.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati numquam est, dolorum sed nobis rerum neque explicabo
                  eos cupiditate illum.
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center capitalize gap-1 transition-transform group-hover:translate-x-1">
                    <LuCircleUserRound />
                    <span>{item?.author}</span>
                  </div>

                  <Link
                    target="_blank"
                    href={item?.link}
                    className="flex items-center text-blue-400 transition-transform group-hover:translate-x-1"
                  >
                    <span className="mr-1">View Details</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="jsx-198108c9caea4706 mt-20 text-center fade-in-up">
        <h3 className="jsx-198108c9caea4706 mb-4 text-2xl font-bold text-white md:text-3xl">
          Interested in working together?
        </h3>
        <p className="jsx-198108c9caea4706 mx-auto mb-8 max-w-2xl text-gray-300">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be <br className="md:block hidden" /> part of your
          vision.
        </p>

        <div className="jsx-198108c9caea4706 flex flex-wrap justify-center gap-4">
          <Link
            href={"/contact"}
            className="jsx-198108c9caea4706 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Contact me
          </Link>
          <Link
            href={""}
            className="jsx-198108c9caea4706 flex items-center gap-2 rounded-full border border-blue-400/30 bg-transparent px-6 py-3 text-blue-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-blue-400/10"
          >
            Browser More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
