"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowIcon } from "@/assets";
import { IoIosCloudOutline, IoIosSearch, IoMdCode } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import { Pricing } from "./Pricing";
import { LuPaintbrush } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { FiZap } from "react-icons/fi";
import { LinkTag } from "@/shared/LinkTag";

const ServiceSection = () => {
  return (
    <>
      <section className="mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-1 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg leading-relaxed text-gray-400 md:text-xl mb-20"
        >
          Comprehensive digital solutions tailored to help your business grow
          and stand out from the competition.
        </motion.p>

        <div className="mb-24">
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            What I{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)]?.map((_, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-gray-700/50"
            >
              <div
                className="flex h-full flex-col p-6"
                style={{
                  background: "rgb(30, 41, 59)",
                }}
              >
                <div
                  className={`h-14 w-14 rounded-2xl ${
                    idx === 0
                      ? "bg-gradient-to-br from-purple-500 to-indigo-500v"
                      : idx === 1
                      ? "bg-gradient-to-br from-blue-500 to-cyan-400"
                      : idx === 2
                      ? "bg-gradient-to-br from-pink-500 to-rose-400"
                      : idx === 3
                      ? "bg-gradient-to-br from-green-500 to-emerald-400"
                      : idx === 4
                      ? "bg-gradient-to-br from-amber-500 to-yellow-400"
                      : "bg-gradient-to-br from-teal-500 to-cyan-400"
                  } mb-6 flex transform items-center justify-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}
                >
                  {idx === 0 ? (
                    <IoMdCode className="text-2xl text-white" />
                  ) : idx === 1 ? (
                    <LuPaintbrush className="text-2xl text-white" />
                  ) : idx === 2 ? (
                    <CiMobile3 className="text-2xl text-white" />
                  ) : idx === 3 ? (
                    <IoIosSearch className="text-2xl text-white" />
                  ) : idx === 4 ? (
                    <FiZap className="text-2xl text-white" />
                  ) : (
                    <IoIosCloudOutline className="text-2xl text-white" />
                  )}
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {idx === 0
                    ? "Web Development"
                    : idx === 1
                    ? "UI/UX Design"
                    : idx === 2
                    ? "Mobile Apps"
                    : idx === 3
                    ? "SEO Optimization"
                    : idx === 4
                    ? "Performance Optimization"
                    : "Cloud Solutions"}
                </h3>

                <p className="mb-6 text-gray-400">
                  {idx === 0
                    ? "Building responsive, fast-loading websites and web applications with modern technologies."
                    : idx === 1
                    ? "Creating intuitive and engaging user experiences that convert visitors into customers."
                    : idx === 2
                    ? "Developing native and cross-platform mobile applications that deliver exceptional experiences."
                    : idx === 3
                    ? "Improving your website's visibility in search engines to drive more organic traffic."
                    : idx === 4
                    ? "Speeding up your website for better user experience and higher conversion rates."
                    : "Setting up and managing your cloud infrastructure for scalability and reliability."}
                </p>

                <div className="mt-auto">
                  <div className="mb-4 border-t border-gray-700/50 pt-4">
                    <h3 className="mb-3 text-sm uppercase text-gray-400">
                      Features
                    </h3>

                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <MdCheck className="mr-2 h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Responsive design
                        </span>
                      </li>
                    </ul>
                  </div>

                  <LinkTag title="Learn More" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default ServiceSection;
