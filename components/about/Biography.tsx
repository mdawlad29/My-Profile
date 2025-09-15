import Image from "next/image";
import { BsGift } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { RiCheckFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";

export const Biography = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="mb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2">
          <CgFileDocument className="text-xl" />
        </div>

        <h2 className="text-3xl font-bold text-white md:text-4xl">Biography</h2>
        <div className="ml-3 h-[2px] flex-grow rounded-full bg-gradient-to-r from-blue-500/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="h-full lg:col-span-5 group relative rounded-2xl overflow-hidden hover:scale-105 border-2 border-[#645e6e] hover:border-blue-500 duration-500 ease-in-out">
          <Image
            src="/picture.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
          <div
            style={{
              opacity: 1,
              transform: "none",
              boxShadow: "rgba(59, 130, 246, 0) 0px 0px 0px",
            }}
            className="group rounded-3xl border border-blue-500/10 bg-gradient-to-br from-[#1E293B] to-[#1E293B]/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 md:col-span-2 hover:-translate-y-2 ease-in-out overflow-hidden relative"
          >
            <h2 className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              My Story
            </h2>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="leading-relaxed text-gray-300"
              >
                I&apos;m a passionate software engineer with over 4 years of
                experience specializing in frontend development. My journey
                began with a fascination for creating visually appealing
                interfaces that solve real-world problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                className="leading-relaxed text-gray-300"
              >
                I thrive in collaborative environments where creativity meets
                technical expertise. My approach combines clean code principles
                with modern design aesthetics to build immersive digital
                experiences that leave a lasting impression.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                className="leading-relaxed text-gray-300"
              >
                When not coding, you&apos;ll find me exploring new design
                trends, contributing to open-source projects, or photographing
                urban landscapes that inspire my creative approach to
                development.
              </motion.p>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl" />
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-blue-500/10 bg-gradient-to-br from-[#1E293B] to-[#1E293B]/70 p-6 transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 ease-in-out">
            <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
              Skills & Expertise
            </h3>

            <ul className="space-y-3">
              {[...Array(4)]?.map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-gray-300 hover:translate-x-1 duration-700 ease-in-out"
                >
                  <div className="rounded-full bg-blue-500/20 p-1 text-blue-500">
                    <RiCheckFill />
                  </div>

                  {idx === 0
                    ? "Full Stack Development"
                    : idx === 1
                    ? "UI/UX Design"
                    : idx === 2
                    ? "Performance Optimization"
                    : "Animation & Interaction"}
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-br from-[#1E293B] to-[#1E293B]/70 p-6 transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-2 ease-in-out">
            <h3 className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
              At a Glance
            </h3>

            <ul className="space-y-3">
              {[...Array(4)]?.map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-gray-300 hover:translate-x-1 duration-700 ease-in-out"
                >
                  <div className="rounded-full bg-purple-500/20 p-1 text-purple-500">
                    {idx === 0 ? (
                      <IoTimeOutline />
                    ) : idx === 1 ? (
                      <BsGift />
                    ) : idx === 2 ? (
                      <TbWorld />
                    ) : (
                      <FiMessageSquare />
                    )}
                  </div>

                  {idx === 0
                    ? "4+ Years Experience"
                    : idx === 1
                    ? "4 Major Project Delivery"
                    : idx === 2
                    ? "Contribution Champion"
                    : "Webstar of the year"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
