"use client";
import Image from "next/image";
import AboutImg from "../../../public/assets/images/about_image.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="about"
        className="grid md:grid-cols-3 grid-cols-1 gap-3 bg-neutral lg:pt-20 md:pt-16 pt-10"
      >
        <div className="md:col-span-1 border-8 border-secondary">
          <Image
            src={AboutImg}
            alt="About Image"
            width={"0"}
            height={"0"}
            priority
            className="h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 lg:px-10 md:px-6 sm:px-4 px-2 py-3">
          <div>
            <h1 className="md:text-4xl text-2xl italic font-semibold">
              About Me
            </h1>
            <div className="md:w-24 w-16 h-1 bg-secondary md:mt-2 mt-1"></div>
            <div className="lg:space-y-5 space-y-3 lg:pt-14 pt-4">
              <p className="text-justify text-sm font-medium">
                I am Md. Awlad, A frontend web developer. I can do any kind of
                responsive website like portfolio, E-commerce website, PSD to
                HTML, Figma to HTML and customization.
              </p>
              <p className="text-justify text-sm font-medium">
                I have professional experience in JavaScript Framework(React
                JS), React JS wrapper(Next JS), JavaScript library(React JS),
                Frontend toolkit (Tailwind CSS, Material UI, Bootstrap5, CSS3),
                HTML5, JavaScript, ES6, API integration.
              </p>
              {/*----- Personal Info -----*/}
              <div className="flex justify-between flex-wrap items-center lg:pt-5">
                {/*----- Left ------*/}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Name
                    </h4>
                    <h2>:</h2>
                    <h4 className="text-sm">Md Awlad</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Education
                    </h4>
                    <h2>:</h2>
                    <h4 className="text-sm">Diploma in Computer</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Email
                    </h4>
                    <h2>:</h2>
                    <Link
                      href="mailto:mdawladbdinfo@gmail.com"
                      className="text-sm text-primary"
                    >
                      mdawladbdinfo@gmail.com
                    </Link>
                  </div>
                </div>
                {/*----- Right -----*/}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Phone
                    </h4>
                    <h2>:</h2>
                    <Link
                      href={"tel:+880 1725385909"}
                      className="text-sm text-primary"
                    >
                      +880 1725385909
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Address
                    </h4>
                    <h2>:</h2>
                    <Link
                      href="https://www.google.com/maps/place/Dhaka/@23.7810672,90.2548737,11z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu"
                      className="text-sm text-primary"
                    >
                      Dhaka, Bangladesh
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-secondary text-sm font-bold w-20">
                      Hobby
                    </h4>
                    <h2>:</h2>
                    <h4 className="text-sm">Coding, Cricket, Football</h4>
                  </div>
                </div>
              </div>
              {/*----- Button ------*/}
              <div className="flex items-center gap-4 lg:pt-5">
                <button className="bg-primary hover:bg-accent duration-300 ease-in-out font-medium text-neutral text-sm px-8 py-1 rounded-full uppercase">
                  online cv
                </button>
                <Link href={"/Frontend-Web-Developer.pdf"} target="_blank">
                  <button className="bg-primary hover:bg-accent duration-300 ease-in-out font-medium text-neutral text-sm px-4 py-1 rounded-full uppercase">
                    download resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
