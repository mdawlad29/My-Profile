"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CodeIcon,
  DesignIcon,
  MobileIcon,
  SeoIcon,
  ServiceIcon,
} from "@/assets";
import Link from "next/link";
import { PiArrowBendUpRightThin } from "react-icons/pi";
import { ServiceCard } from "@/shared/cards/ServiceCard";
import Image from "next/image";

const HomeSection = () => {
  return (
    <motion.section>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        Creating{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          digital experiences
        </span>{" "}
        <br className="md:block hidden" />
        that inspire
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        className="text-lg leading-relaxed text-gray-400 md:text-xl mb-6"
      >
        Software engineer and UI/UX enthusiast specializing in creating engaging
        digital <br className="md:block hidden" /> interfaces that combine
        functionality with beautiful design.
      </motion.p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="group relative rounded-2xl overflow-hidden cursor-pointer lg:h-full h-[500px]">
          {/* Profile Image with zoom on hover */}
          <Image
            src="/picture.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Let's Connect Text */}
          <div className="absolute top-4 left-4 z-20 flex opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            <div className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1.5 text-white shadow-lg transition-transform duration-300 hover:scale-110 text-[13px]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
              Let&apos;s Connect
            </div>
          </div>

          {/* SOFTWARE ENGINEER Badge Vertical + Slide */}
          <div className="absolute top-64 -right-[8rem] group-hover:-right-[9.3rem] z-10 rounded-xl group-hover:rounded-b-none bg-gradient-to-b from-blue-600 to-purple-600 px-4 py-3 opacity-100 shadow-xl backdrop-blur-lg transition-all duration-500 ease-in-out group-hover:opacity-100 tracking-wider transform -rotate-90 origin-top-left">
            <h2 className="text-lg font-medium uppercase text-white text-[13px]">
              SOFTWARE ENGINEER
            </h2>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 left-0 z-10 w-full p-6">
            <div className="space-y-4 flex flex-col gap-3 text-sm text-gray-300">
              <div>
                <span>Dhaka, Bangladesh</span>
              </div>

              <h2 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                ABOUT
              </h2>

              <p className="leading-relaxed text-gray-300">
                Biography & Abilities - Passionate about creating digital <br />
                solutions that make a meaningful impact.
              </p>

              <div className="group/link flex cursor-pointer items-center gap-2 text-sm text-blue-400">
                <Link href={""}>View full profile</Link>
                <PiArrowBendUpRightThin />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `
          repeating-linear-gradient(0deg, rgba(122,122,122,0.15) 0 1px, transparent 1px 40px),
          repeating-linear-gradient(90deg, rgba(122,122,122,0.15) 0 1px, transparent 1px 40px)
        `,
            backgroundSize: "40px 40px",
            padding: "24px",
            border: "1px solid rgba(122, 122, 122, 0.15)",
            borderRadius: "16px",
            transition: "background-image 0.3s ease",
          }}
        >
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur-sm">
                <ServiceIcon />
                Services
              </div>
            </div>

            <h2 className="mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              What I Offer
            </h2>
            <p className="text-sm text-gray-400 mb-5">
              Professional services to bring your digital vision to life
            </p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
              <ServiceCard
                link=""
                icon={<CodeIcon />}
                subtitle="Development"
                title="Web Development"
                description="Build responsive, high-performance websites with modern frameworks"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
              />
              <ServiceCard
                link=""
                icon={<DesignIcon />}
                subtitle="Design"
                title="UI/UX Design"
                description="Create intuitive interfaces with focus on user experience"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15"
              />
              <ServiceCard
                link=""
                icon={<MobileIcon />}
                subtitle="Mobile"
                title="Mobile Apps"
                description="Develop cross-platform mobile applications with native feel"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15"
              />
              <ServiceCard
                link=""
                icon={<SeoIcon />}
                subtitle="Marketing"
                title="SEO Optimization"
                description="Improve visibility and search ranking with proven strategies"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15"
              />
            </div>

            <div className="text-center">
              <Link
                href={""}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/20"
              >
                View All Services <PiArrowBendUpRightThin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
