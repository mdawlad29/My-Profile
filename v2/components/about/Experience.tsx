import { ExperienceIcon } from "@/assets";

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
