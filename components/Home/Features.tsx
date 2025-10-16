import {
  ArrowIcon,
  CloudIcon,
  CodeIconTwo,
  FeatureIcon,
  PaymentIcon,
  StoreIcon,
} from "@/assets";
import Link from "next/link";

export const Features = () => {
  return (
    <Link
      href={"/work"}
      style={{
        background: "rgb(30, 41, 59)",
      }}
      className="hover-card group relative overflow-hidden rounded-3xl border border-gray-700/50 hover:-translate-y-1 duration-300 ease-in-out"
    >
      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-x-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-200 backdrop-blur-sm">
            <FeatureIcon />
            Featured works
          </div>

          <div className="rounded-md bg-gray-800/50 px-2 py-1 text-xs text-gray-400">
            Enterprise Grade
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/30 to-blue-600/30 p-3">
            <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-emerald-400" />
            <h3 className="mb-1 text-xs font-semibold text-white">
              Scalable SaaS
            </h3>
            <p className="mb-2 text-xs text-indigo-200">
              React • GraphQL • AWS • Firebase
            </p>

            <div className="flex h-8 w-full items-center justify-center gap-2 rounded-md bg-indigo-400/20">
              <CloudIcon />
              <CodeIconTwo />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 p-3">
            <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-yellow-400" />

            <h3 className="mb-1 text-xs font-semibold text-white">
              Digital Storefront
            </h3>
            <p className="mb-2 text-xs text-purple-200">
              Next.js • Node.js • Stripe • TypeScript
            </p>

            <div className="flex h-8 w-full items-center justify-center gap-2 rounded-md bg-purple-400/20">
              <StoreIcon />
              <PaymentIcon />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {[...Array(4)]?.map((item, idx: number) => (
            <div
              key={idx}
              className="rounded-md border border-indigo-500/30 bg-indigo-500/20 px-2 py-1 text-xs text-indigo-200"
            >
              {idx === 0
                ? "React"
                : idx === 1
                ? "Angular"
                : idx === 2
                ? "Node.js"
                : "TypeScript"}
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col justify-end">
          <div className="mb-3">
            <h3 className="mb-1 bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-xl font-black text-transparent">
              PORTFOLIO
            </h3>
            <p className="text-xs text-gray-400">
              Innovative solutions that drive impact
            </p>
          </div>
        </div>

        <div className="group/btn flex cursor-pointer items-center text-sm font-semibold text-indigo-400">
          <span className="mr-2 transition-colors group-hover/btn:text-indigo-300">
            View projects
          </span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};
