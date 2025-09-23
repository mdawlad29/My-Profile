import Link from "next/link";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export const Pricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section>
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Transparent{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          Choose the perfect plan that fits your project needs and budget
        </p>

        <div className="flex items-center rounded-full border border-gray-700 p-1">
          <button
            onClick={() => setPlan("monthly")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer duration-300 ease-in-out ${
              plan === "monthly"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setPlan("annual")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer duration-300 ease-in-out ${
              plan === "annual"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "text-gray-400"
            }`}
          >
            Annual (20% off)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-24">
        <div
          className={`overflow-hidden rounded-3xl border border-gray-700/50 group relative bg-[#1E293B]`}
        >
          <div className="flex h-full flex-col p-6 md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-white">Starter</h3>

            <p className="mb-6 text-sm text-gray-400">
              Perfect for small projects and individuals
            </p>

            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="mb-1 ml-2 text-gray-400">/month</span>
              </div>
            </div>

            <div className="mb-8 border-t border-gray-700/50 pt-6">
              <ul className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="flex items-center">
                    <div
                      className={`h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mr-3 flex flex-shrink-0 items-center justify-center`}
                    >
                      <IoCheckmark className="text-lg" />
                    </div>

                    <span className="text-sm text-gray-400">
                      {i === 0
                        ? "1 projects"
                        : i === 1
                        ? "Basic design"
                        : i === 2
                        ? "Responsive layout"
                        : i === 3
                        ? "3 revisions"
                        : "1 month support"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full rounded-xl py-3 font-medium transition-all bg-gray-700/50 text-white hover:bg-gray-700">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-purple-500/50 group relative group bg-[#1E293B]">
          <div className="absolute right-0 top-0">
            <div className="rounded-bl-xl bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-xs font-bold text-white">
              Most Popular
            </div>
          </div>

          <div className="flex h-full flex-col p-6 md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-white">Professional</h3>

            <p className="mb-6 text-sm text-gray-400">
              Ideal for businesses and growing startups
            </p>

            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="mb-1 ml-2 text-gray-400">/month</span>
              </div>
            </div>

            <div className="mb-8 border-t border-gray-700/50 pt-6">
              <ul className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="flex items-center">
                    <div
                      className={`h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 mr-3 flex flex-shrink-0 items-center justify-center`}
                    >
                      <IoCheckmark className="text-lg" />
                    </div>

                    <span className="text-sm text-gray-400">
                      {i === 0
                        ? "3 projects"
                        : i === 1
                        ? "Advanced UI/UX design"
                        : i === 2
                        ? "Performance optimization"
                        : i === 3
                        ? "5 revisions"
                        : i === 4
                        ? "3 months support"
                        : "SEO optimization"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button
                className={`w-full rounded-xl py-3 font-medium transition-all bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/20
                      
                  `}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-700/50 group relative bg-[#1E293B]">
          <div className="flex h-full flex-col p-6 md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-white">Enterprise</h3>

            <p className="mb-6 text-sm text-gray-400">
              For large-scale applications and businesses
            </p>

            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">$399</span>
                <span className="mb-1 ml-2 text-gray-400">/month</span>
              </div>
            </div>

            <div className="mb-8 border-t border-gray-700/50 pt-6">
              <ul className="space-y-3">
                {[...Array(7)].map((_, i) => (
                  <li key={i} className="flex items-center">
                    <div
                      className={`h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 mr-3 flex flex-shrink-0 items-center justify-center`}
                    >
                      <IoCheckmark className="text-lg" />
                    </div>

                    <span className="text-sm text-gray-400">
                      {i === 0
                        ? "Unlimited projects"
                        : i === 1
                        ? "Premium UI/UX design"
                        : i === 2
                        ? "Advanced animations"
                        : i === 3
                        ? "Unlimited revisions"
                        : i === 4
                        ? "12 months support"
                        : i === 5
                        ? "SEO optimization"
                        : i === 6
                        ? "Performance monitoring"
                        : "Priority assistance"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button
                className={`w-full rounded-xl py-3 font-medium transition-all bg-gray-700/50 text-white hover:bg-gray-700`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-16 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between p-8 md:flex-row md:p-12">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ready to start your projects
            </h3>
            <p className="text-gray-300">
              Contact me today for a free consultation and let's create
              something amazing together.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};
