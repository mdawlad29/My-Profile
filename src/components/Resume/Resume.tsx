"use client";
import Link from "next/link";
import React from "react";
import { motion, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
const LiIcon = dynamic(() => import("../Shared/LiIcon"), {
  ssr: false,
});
const Educations = dynamic(() => import("../Educations/Educations"), {
  ssr: false,
});

const Details = ({
  position,
  company,
  companyLink,
  time,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
}) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="space-y-2"
      >
        <h3 className="capitalize font-semibold md:text-xl text-lg">{position}</h3>
        <Link
          href={companyLink}
          target="_blank"
          className="capitalize text-primary font-bold"
        >
          {company}
        </Link>
        <p className="capitalize text-sm">{time}</p>
      </motion.div>
    </li>
  );
};

const Resume = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div
        onCopy={(event) => event.preventDefault()}
        id="resume"
        className="lg:pt-20 md:pt-16 pt-10"
      >
        <h1 className="text-center md:text-4xl text-2xl italic font-semibold md:mb-12 mb-4">
          My Resume
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div ref={ref} className="relative">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-1 w-1 h-full bg-accent origin-top"
            />
            <ul className="w-full">
              <Details
                position="Front-end Developer (full time)"
                company="Marhaba Limited"
                companyLink="https://marhaba.com.bd/"
                time="Jun 2023 - present"
              />
              <Details
                position="React Developer (full time)"
                company="Nexis Limited"
                companyLink="https://www.nexisltd.com/"
                time="May 2022 - May 2023"
              />
            </ul>
          </div>
          {/*---- Educations -----*/}
          <div>
            <Educations />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
