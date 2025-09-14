import { motion } from "framer-motion";
import { IoMdCode } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { SkillCard } from "@/shared/cards/SkillCard";
import { IoLayersOutline, IoSettingsOutline } from "react-icons/io5";

export const TechnicalSkills = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 flex items-center gap-3"
      >
        <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 p-2">
          <IoMdCode className="text-xl" />
        </div>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Technical Skills
        </h2>
        <div className="ml-3 h-[2px] flex-grow rounded-full bg-gradient-to-r from-emerald-500/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          style={{
            opacity: 1,
            transform: "none",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-xl hover:-translate-y-2 duration-500 ease-in-out"
        >
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl hidden group-hover:block duration-700 ease-in-out" />

          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 shadow-lg">
              <MdOutlineColorLens className="text-xl" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r text-2xl font-bold from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Frontend
              </h3>
              <p className="text-sm text-gray-400">6 Technologies</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <SkillCard
              title="React.Js"
              bulletColor="bg-blue-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Next.Js"
              bulletColor="bg-gray-700"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Vue.Js"
              bulletColor="bg-green-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Angular"
              bulletColor="bg-[#DE3641]"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="TypeScript.Js"
              bulletColor="bg-blue-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="JavaScript.Js"
              bulletColor="bg-yellow-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
          </div>
        </motion.div>

        {/* Styling */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          style={{
            opacity: 1,
            transform: "none",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-xl hover:-translate-y-2 duration-500 ease-in-out"
        >
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl hidden group-hover:block duration-700 ease-in-out" />

          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 shadow-lg">
              <IoLayersOutline className="text-xl" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r text-2xl font-bold from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Styling & Design
              </h3>
              <p className="text-sm text-gray-400">6 Technologies</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <SkillCard
              title="Tailwind CSS"
              bulletColor="bg-cyan-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="SCSS/Sass"
              bulletColor="bg-pink-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="CSS3"
              bulletColor="bg-blue-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Framer Motion"
              bulletColor="bg-purple-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="UI/UX Design"
              bulletColor="bg-indigo-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Responsive Design"
              bulletColor="bg-green-600"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          style={{
            opacity: 1,
            transform: "none",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-xl hover:-translate-y-2 duration-500 ease-in-out"
        >
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl hidden group-hover:block duration-700 ease-in-out" />

          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-3 shadow-lg">
              <IoSettingsOutline className="text-xl" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r text-2xl font-bold from-orange-500 to-red-500 bg-clip-text text-transparent">
                Tools & Platform
              </h3>
              <p className="text-sm text-gray-400">5 Technologies</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <SkillCard
              title="Git & GitHub"
              bulletColor="bg-gray-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="GitHub Actions"
              bulletColor="bg-gray-700"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Webpack/Vite"
              bulletColor="bg-cyan-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="AWS/Vercel"
              bulletColor="bg-orange-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Node.Js"
              bulletColor="bg-green-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
          </div>
        </motion.div>

        {/* Performance & Testing */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
          style={{
            opacity: 1,
            transform: "none",
            boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-xl hover:-translate-y-2 duration-500 ease-in-out"
        >
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl hidden group-hover:block duration-700 ease-in-out" />

          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 shadow-lg">
              <IoLayersOutline className="text-xl" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r text-2xl font-bold from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Performance & Testing
              </h3>
              <p className="text-sm text-gray-400">6 Technologies</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <SkillCard
              title="Web Performance"
              bulletColor="bg-green-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="PWA Development"
              bulletColor="bg-purple-600"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="SEO Optimization"
              bulletColor="bg-yellow-600"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Cross-browser Testing"
              bulletColor="bg-red-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Accessibility (a11y)"
              bulletColor="bg-indigo-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
            <SkillCard
              title="Code Quality"
              bulletColor="bg-teal-500"
              lineColor="bg-gradient-to-r from-white/20 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      <section className="border-gradient-to-r mt-12 rounded-3xl border bg-gradient-to-br from-slate-800/30 to-purple-500/20 p-8 backdrop-blur-xl">
        <div className="text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            Technology Stack
          </h2>

          <p className="mx-auto max-w-2xl text-gray-300">
            As a Senior Software Engineer, I work with a comprehensive range of
            modern technologies to build scalable, performant, and user-centric
            web applications. My expertise spans across the entire frontend
            ecosystem, from core technologies to advanced tooling and
            optimization techniques.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[...Array(10)]?.map((_, idx) => (
              <span
                key={idx}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm"
              >
                {idx === 0
                  ? "React"
                  : idx === 1
                  ? "Next.js"
                  : idx === 2
                  ? "Angular"
                  : idx === 3
                  ? "Vue.js"
                  : idx === 4
                  ? "Tailwind CSS"
                  : idx === 5
                  ? "TypeScript"
                  : idx === 6
                  ? "Node.js"
                  : idx === 7
                  ? "GraphQL"
                  : idx === 8
                  ? "Framer Motion"
                  : idx === 9
                  ? "PostGressQL"
                  : "Express.js"}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
