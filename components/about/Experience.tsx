import { ExperienceIcon } from "@/assets";
import { IoMdCode } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { LuLightbulb, LuRocket } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { FiZap } from "react-icons/fi";
import Link from "next/link";

export const Experience = () => {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-5 gap-4 md:grid-cols-10">
        <div className="col-span-5">
          <div
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              boxShadow: "rgba(59, 130, 246, 0) 0px 0px 0px",
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
            className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-8 backdrop-blur-lg transition-all duration-500 hover:![box-shadow:rgba(59,130,246,0.15)_0px_0px_20px_0px] hover:!border-[rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 mb-8 flex items-start">
              <div className="mr-4 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-3 shadow-lg shadow-blue-500/20">
                <ExperienceIcon />
              </div>

              <div>
                <h2 className="mb-1 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-3xl font-bold text-transparent">
                  Experience
                </h2>
                <p className="font-light text-gray-400">Professional Journey</p>
              </div>
            </div>

            <div className="relative z-10 space-y-10 pl-10 group">
              <div className="absolute bottom-0 left-0 top-4">
                <div
                  className="absolute left-0 top-0 h-full w-6 -translate-x-3 
                  bg-gradient-to-b from-blue-600/20 to-violet-600/20 blur-md"
                />

                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="falling-bullet"
                    style={{
                      animationDelay: `${index * 1.2}s`,
                    }}
                  />
                ))}

                <div
                  className="absolute left-0 h-full w-px 
                  bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
                >
                  <div className="absolute left-0 h-full w-px bg-white blur-sm" />
                </div>

                <div
                  className="absolute left-0 h-24 w-2 
                  bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-md"
                />
              </div>

              <div className="group relative transition-transform hover:translate-x-1 duration-500 ease-in-out">
                <div className="absolute -left-12 top-1 flex items-center justify-center">
                  <div
                    className="absolute h-px w-6 bg-gradient-to-r from-transparent to-blue-500"
                    style={{
                      right: "100%",
                      width: "8px",
                    }}
                  >
                    <div className="absolute right-0 top-0 h-px w-full bg-white/50 blur-sm" />
                  </div>

                  <div className="relative h-5 w-5 rounded-full border border-white/20 bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30">
                    <div className="absolute inset-1 rounded-full bg-white/20 blur-sm" />

                    <div
                      className="absolute -inset-2 rounded-full bg-blue-500/20 blur-md"
                      style={{
                        transform: "scale(1.1)",
                      }}
                    />

                    <div className="absolute inset-1.5 rounded-full bg-white" />
                  </div>
                </div>

                <h2 className="mb-1 text-xl font-semibold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-500 group-hover:bg-clip-text">
                  Senior Software Engineer
                </h2>

                <div className="mb-2 flex items-center text-sm text-gray-400">
                  <span className="cursor-pointer font-medium text-blue-400 transition-colors hover:text-blue-300">
                    DocTime & Media365 Ltd.
                  </span>

                  <span className="mx-2 text-gray-500">•</span>
                  <span className="font-light text-gray-500">
                    2025 - Present
                  </span>
                </div>

                <p className="font-light text-gray-300">
                  As a Frontend Engineer, I actively contribute to cutting-edge
                  web development projects. I specialize in crafting seamless
                  user experiences through my expertise in UI design,
                  cross-browser compatibility, and performance optimization.
                  I&apos;m an engaged team collaborator, adept at swiftly
                  adapting to evolving technologies for the success of our
                  projects.
                </p>

                <div className="mt-6">
                  <h3 className="mb-3 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-lg font-medium text-transparent">
                    Key Contributions:
                  </h3>

                  <div className="space-y-4">
                    {[...Array(6)]?.map((_, idx) => (
                      <div
                        key={idx}
                        style={{
                          opacity: 1,
                          transform: "none",
                          borderLeftColor: "rgba(59, 130, 246, 0.3)",
                        }}
                        className="border-l border-blue-500/30 pl-4 transition-all duration-300 hover:border-blue-500/50"
                      >
                        <h4 className="font-medium text-blue-300">
                          {idx === 0
                            ? "Team Coordination"
                            : idx === 1
                            ? "Strategic Planning"
                            : idx === 2
                            ? "Project Estimation"
                            : idx === 3
                            ? "Technology Migration"
                            : idx === 4
                            ? "Releases"
                            : "Cutting-edge Upkeep"}
                        </h4>
                        <p className="mt-1 text-sm text-gray-400">
                          {idx === 0
                            ? "Efficiently coordinated tasks with the QA team and UI/UX designer, ensuring the seamless translation of higher-level product manager instructions into actionable tasks."
                            : idx === 1
                            ? "Orchestrated weekly meetings with the Project Manager to align with organizational goals and objectives, ensuring efficient project progression."
                            : idx === 2
                            ? "Proficiently used project estimation methodologies, leveraging a combination of historical data analysis, expert judgment, and industry-standard techniques to accurately forecast project timelines."
                            : idx === 3
                            ? "Efficiently coordinated tasks for the migration of Nuxt2 projects to Nuxt3 and Nitro servers."
                            : idx === 4
                            ? "Performed product releases via GitHub Actions for development, UAT, and production servers."
                            : "Streamlined Node environment migration from version 14 LTS to version 18 LTS for higher performance and security."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[...Array(7)].map((_, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10"
                    >
                      {idx === 0
                        ? "React.js"
                        : idx === 1
                        ? "Next.js"
                        : idx === 2
                        ? "Angular"
                        : idx === 3
                        ? "Vue.js"
                        : idx === 4
                        ? "JavaScript"
                        : idx === 5
                        ? "UI Design"
                        : "GitHub Actions"}
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Link
                    href="/Awlad_resume.pdf"
                    download
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-8 py-3.5 backdrop-blur-md transition-all duration-300 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)",
                      boxShadow: "rgba(79, 70, 229, 0.2) 0px 10px 30px -5px",
                    }}
                  >
                    <div
                      style={{
                        background:
                          "conic-gradient(rgb(79,70,229) 0%, rgb(139,92,246) 25%, rgb(79,70,229) 50%, rgb(139,92,246) 75%, rgb(79,70,229) 100%)",
                        padding: "1.5px",
                      }}
                      className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <div className="h-full w-full rounded-full bg-slate-900/80 backdrop-blur-md" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-file-text text-white"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                      </div>

                      <span className="text-base font-medium text-white">
                        Check out my Resume !!!
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "rgba(139, 92, 246, 0) 0px 0px 0px",
            }}
            className="relative h-full overflow-hidden rounded-3xl border border-white/10 p-8 backdrop-blur-lg transition-all duration-500 hover:![box-shadow:rgba(139,92,246,0.15)_0px_0px_20px_0px] hover:!border-[rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 mb-8 flex items-start">
              <div className="mr-4 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-3 shadow-lg shadow-blue-500/20">
                <LuRocket className="text-2xl" />
              </div>

              <div>
                <h2 className="mb-1 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-3xl font-bold text-transparent">
                  Ambition
                </h2>
                <p className="font-light text-gray-400">Future aspirations</p>
              </div>
            </div>

            <p className="mb-6 font-light leading-relaxed text-gray-300">
              My ambition is to revolutionize how people interact with digital
              interfaces by creating seamless, intuitive experiences that bridge
              the gap between technology and human emotion.
            </p>
            <p className="mb-6 font-light leading-relaxed text-gray-300">
              I aim to build platforms that not only solve problems but do so
              with elegance and accessibility, ensuring technology serves
              everyone regardless of their background.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[...Array(8)].map((_, idx) => {
                const colors = [
                  "bg-pink-500/20 group-hover:bg-pink-500/30",
                  "bg-blue-500/20 group-hover:bg-blue-500/30",
                  "bg-amber-500/20 group-hover:bg-amber-500/30",
                  "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                  "bg-indigo-500/20 group-hover:bg-indigo-500/30",
                  "bg-teal-500/20 group-hover:bg-teal-500/30",
                  "bg-orange-500/20 group-hover:bg-orange-500/30",
                  "bg-purple-500/20 group-hover:bg-purple-500/30",
                ];

                return (
                  <div
                    key={idx}
                    className="group flex cursor-pointer items-start rounded-2xl border border-transparent p-4 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/5 hover:translate-x-1 duration-500 ease-in-out"
                  >
                    <div
                      className={`flex-shrink-0 p-2 mr-3 mt-1 rounded-lg transition-colors ${colors[idx]}`}
                    >
                      {idx === 0 ? (
                        <MdFavoriteBorder />
                      ) : idx === 1 ? (
                        <IoBookOutline />
                      ) : idx === 2 ? (
                        <FiZap />
                      ) : idx === 3 ? (
                        <TbWorld />
                      ) : idx === 4 ? (
                        <IoMdCode />
                      ) : idx === 5 ? (
                        <FaUserGroup />
                      ) : idx === 6 ? (
                        <LuLightbulb />
                      ) : (
                        <CiTrophy />
                      )}
                    </div>

                    <div>
                      <h3 className="mb-1 font-medium text-white transition-all duration-300 group-hover:bg-clip-text">
                        {idx === 0
                          ? "Personal Growth"
                          : idx === 1
                          ? "Knowledge Sharing"
                          : idx === 2
                          ? "Innovation Leadership"
                          : idx === 3
                          ? "Global Impact"
                          : idx === 4
                          ? "Technical Excellence"
                          : idx === 5
                          ? "Community Building"
                          : idx === 6
                          ? "Create Problem Solving"
                          : "Industry Recognition"}
                      </h3>

                      <p className="text-sm font-light text-gray-400">
                        {idx === 0
                          ? "Continuous learning and mastery of emerging technologies"
                          : idx === 1
                          ? "Mentoring others and contributing to developer communities"
                          : idx === 2
                          ? "Creating products that redefine digital experiences"
                          : idx === 3
                          ? "Developing solutions that positively affect users worldwide"
                          : idx === 4
                          ? "Pushing the boundaries of what's possible with code"
                          : idx === 5
                          ? "Creating inclusive spaces for technological collaboration"
                          : idx === 6
                          ? "Finding elegant solutions to complex technical challenges"
                          : "Becoming a respected authority in frontend development"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
