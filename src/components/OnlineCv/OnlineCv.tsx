"use client";
import React from "react";
import picture from "../../../public/assets/images/awlad.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import CvLiIcon from "../Shared/CvLiIcon";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import { Projects } from "@/Data/ProjectsData";

const Details = ({
  position,
  company,
  companyLink,
  time,
  desc,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  desc: string;
}) => {
  const ref = React.useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 ml-14 flex flex-col">
      <CvLiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize text-accent font-semibold md:text-xl text-lg">
          {position}
        </h3>
        <Link
          href={companyLink}
          target="_blank"
          className="capitalize text-primary font-bold flex items-center gap-2"
        >
          {company} <BiLinkExternal className="text-primary" />
        </Link>
        <p className="capitalize text-sm">{time}</p>
        <p className="text-justify text-sm pt-2">{desc}</p>
      </motion.div>
    </li>
  );
};

const OnlineCv = () => {
  const router = useRouter();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div
        onCopy={(event) => event.preventDefault()}
        className="lg:py-20 md:py-16 py-10"
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/*---- Personal Info ----*/}
          <div className="lg:col-span-1 border border-gray-200 rounded-md p-4">
            <div className="text-center">
              <Image
                src={picture}
                alt="Awlad"
                width={"0"}
                height={"0"}
                priority
                className="w-20 h-20 rounded-full object-cover border-2 border-secondary mx-auto"
              />
              <h1 className="text-xl font-semibold text-primary mt-2">
                MD. AWLAD
              </h1>
              <p className="text-sm">@Frontend Web Developer</p>
              <div className="mt-2">
                <Link href={"https://github.com/mdawlad29"} target="_blank">
                  <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral text-sm px-3 py-1 rounded-md uppercase">
                    follow us
                  </button>
                </Link>
                <Link href={"https://github.com/mdawlad29"} target="_blank">
                  <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral text-sm px-3 py-1 rounded-md uppercase mx-4">
                    message
                  </button>
                </Link>
              </div>
            </div>
            {/*---- Description ----*/}
            <div className="mt-8">
              <h1 className="uppercase italic text-xl font-semibold text-accent">
                About Me
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-justify text-sm font-medium">
                  I am Md. Awlad, A frontend web developer. I can do any kind of
                  responsive website like portfolio, E-commerce website, PSD to
                  HTML, Figma to HTML and customization.
                </p>
                <p className="text-justify text-sm font-medium">
                  I have professional experience in JavaScript Framework(React
                  JS), React JS wrapper(Next JS), JavaScript library(React JS),
                  Frontend toolkit (Tailwind CSS, Material UI, Bootstrap5,
                  CSS3), HTML5, JavaScript, ES6, API integration.
                </p>
              </div>
            </div>
            {/*--- Personal Detail ----*/}
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <h4 className="text-accent text-sm font-bold w-20">
                  Full Name
                </h4>
                <h2>:</h2>
                <h4 className="text-sm">Md. Awlad</h4>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-accent text-sm font-bold w-20">Phone</h4>
                <h2>:</h2>
                <Link
                  href={"tel:+880 1725385909"}
                  className="text-sm text-primary"
                >
                  +880 1725385909
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-accent text-sm font-bold w-20">Email</h4>
                <h2>:</h2>
                <Link
                  href="mailto:mdawladbdinfo@gmail.com"
                  className="text-sm text-primary"
                >
                  mdawladbdinfo@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-accent text-sm font-bold w-20">Address</h4>
                <h2>:</h2>
                <Link
                  href="https://www.google.com/maps/place/Dhaka/@23.7810672,90.2548737,11z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu"
                  target="_blank"
                  className="text-sm text-primary"
                >
                  Dhaka, Bangladesh
                </Link>
              </div>
            </div>
          </div>
          {/*----- Experience ------*/}
          <div className="lg:col-span-2 border border-gray-200 rounded-md p-4 space-y-8">
            {/*--- CV Button ---*/}
            <div className="flex justify-end">
              <Link
                href={"/Frontend-Web-Developer.pdf"}
                download={true}
                target="_blank"
              >
                <button className="bg-accent hover:bg-primary duration-300 ease-in-out font-medium text-neutral text-sm px-5 py-2 rounded-md uppercase flex items-center gap-2">
                  Download cv <BiLinkExternal />
                </button>
              </Link>
            </div>
            <h1 className="uppercase italic text-xl font-semibold text-accent">
              experience
            </h1>
            {/*---- Experience Info ----*/}
            <div ref={ref} className="relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-4 top-1 w-1 h-full bg-accent origin-top"
              />
              <ul className="w-full">
                <Details
                  position="Front-end Developer"
                  company="Marhaba Limited"
                  companyLink="https://marhaba.com.bd/"
                  time="Jun 2023 - present"
                  desc="As a frontend developer, I play pivotal role in crafting immersive digital experiences. My responsive encompass designing and building responsive, user-friendly website that meet clients objectives and engage their target audiences effectively. I utilize a range of technologies, including HTML, CSS JavaScript and web development frameworks (ReactJs, NextJS) to bring web designs to life."
                />
                <Details
                  position="React Developer"
                  company="Nexis Limited"
                  companyLink="https://www.nexisltd.com/"
                  time="May 2022 - May 2023"
                  desc="Understanding of the web development process from inception to deployment, understanding of industry trends and the newest programming languages and the technical skills. Responsible for developing new user-facing, features, determining the structure and design of web pages, building reusable codes, optimizing page loading times and using a variety of markup languages to create the web pages."
                />
              </ul>
            </div>
            {/*----- Projects ------*/}
            <div>
              <h1 className="uppercase italic text-xl font-semibold text-accent">
                projects
              </h1>
              {/* <div className="lg:w-full md:w-full w-[500px] border border-red-600">
                <div className="overflow-x-scroll">
                  <div className="flex justify-between items-center">
                    <h2>Project Name</h2>
                    <h2>Core Language</h2>
                    <h2>Project Link</h2>
                  </div>
                  {Projects?.map((project: any) => (
                    <div
                      key={project?.id}
                      className="flex justify-between items-center space-y-3"
                    >
                      <h2>{project?.name}</h2>
                      <h2>{project?.language}</h2>
                      <Link href={project?.link}>
                        <button className="bg-accent hover:bg-primary duration-300 ease-in-out text-neutral text-sm px-5 py-2 rounded-md">
                          Click Here
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="flex flex-wrap -mx-4 mt-4">
                <div className="w-full px-4">
                  <div className="max-w-full overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="bg-primary text-center">
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            ID
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Project Name
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Core Language
                          </th>
                          <th className="w-1/6 min-w-[160px] text-base font-semibold text-neutral py-2 px-3 border-l border-transparent">
                            Project Link
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Projects?.map((project: any) => (
                          <tr key={project?.id}>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              {project?.id}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200 capitalize">
                              {project?.name}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              {project?.language}
                            </td>
                            <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-gray-200">
                              <button
                                onClick={() => router.push(project?.link)}
                                disabled={project?.link === "" ? true : false}
                                className={`${
                                  project?.link === ""
                                    ? "bg-gray-300 text-accent text-sm px-5 py-2 rounded-md"
                                    : "bg-accent hover:bg-primary duration-300 ease-in-out text-neutral text-sm px-5 py-2 rounded-md"
                                }`}
                              >
                                Click Here
                              </button>
                              <Link href={project?.link}></Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCv;
