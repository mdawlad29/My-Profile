import { GiAchievement } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2">
          <PiGraduationCap className="text-xl" />
        </div>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Education & Achievements
        </h2>
        <div className="h-[2px] flex-grow rounded-full bg-gradient-to-r from-purple-500/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-1"
        >
          <div className="rounded-3xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-violet-600/10 p-1 backdrop-blur-sm">
            <div className="h-full rounded-[22px] border border-slate-800/50 bg-slate-900/90 p-8 shadow-xl">
              <h3 className="mb-6 flex items-center gap-3 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-2xl font-bold text-transparent">
                <PiGraduationCap className="text-blue-400" />
                Education
              </h3>

              <div>
                {[...Array(3)]?.map((_, idx) => (
                  <div
                    key={idx}
                    className="group relative border-l-2 border-blue-500/40 pb-7 pl-8 last:border-l-0 last:pb-0 hover:translate-x-1 duration-700 ease-in-out"
                  >
                    <div className="absolute -left-[10px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-md shadow-blue-500/20">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>

                    <div className="relative transition-all duration-300 ease-in-out">
                      <div className="absolute -right-5 -top-5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-300">
                        {idx === 0
                          ? "2024-running"
                          : idx === 1
                          ? "2017-2022"
                          : "2012-2017"}
                      </div>

                      <h4 className="mb-2 text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {idx === 0
                          ? "BSc in Computer Science and Engineering"
                          : idx === 1
                          ? "Diploma in Computer Science and Engineering"
                          : "Secondary School Certificate (SSC)"}
                      </h4>

                      <div className="mb-3 flex items-center text-sm text-slate-400">
                        <span className="flex items-center font-medium text-blue-400">
                          {idx === 0
                            ? "Northern University of Bangladesh (NUB)"
                            : idx === 1
                            ? "Bhola Polytechnic Institute (BPI)"
                            : "Banker hat Co-operative High School (BHCHS)"}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-300">
                        {idx === 0
                          ? "Specialized in Human-Computer Interaction and UI/UX Design. Thesis focused on accessibility patterns in mobile interfaces."
                          : idx === 1
                          ? "Completed a Diploma in Computer Science and Engineering, gaining expertise in software development, algorithms, and data structures."
                          : "Strong emphasis on foundational subjects like physics, chemistry, biology, and mathematics, laying the groundwork for future academic and technical pursuits."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-1 h-full"
        >
          <div className="rounded-3xl bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-transparent p-1 h-full">
            <div className="h-full rounded-[22px] bg-[#1E293B] p-8 ">
              <h3 className="mb-6 flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
                <GiAchievement className="text-violet-500" />
                Achievements
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {[...Array(2)]?.map((_, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-purple-500/10 bg-gradient-to-br from-[#1E293B]/60 to-[#1E293B]/80 p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5 hover:scale-[99%] ease-in-out"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {idx === 0
                          ? "Best Frontend Engineer Award"
                          : "Employee of the month Award"}
                      </h3>
                      <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-xs text-purple-400">
                        2024
                      </div>
                    </div>

                    <p className="mb-2 text-sm text-gray-400">Softic OPC</p>

                    <p className="text-sm text-gray-300">
                      {idx === 0
                        ? "Recognized for consistently delivering exceptional frontend solutions, demonstrating technical excellence, creativity, and a strong commitment to user experience. This award highlights my ability to turn complex challenges into intuitive and high-performance web applications."
                        : "Selected as an employee of the month for outstanding performance."}
                    </p>

                    <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-purple-500/10">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
