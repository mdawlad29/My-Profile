import { ArrowIcon, LatestIcon } from "@/assets";
import Link from "next/link";

export const LatestArticle = () => {
  return (
    <Link
      href={"/learn"}
      style={{
        background: "rgb(30, 41, 59)",
      }}
      className="hover-card group relative overflow-hidden rounded-3xl border border-gray-700/50 hover:-translate-y-1 duration-300 ease-in-out"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-blue-500/20 blur-2xl transition-all duration-300 group-hover:h-20 group-hover:w-20" />
        <div className="absolute bottom-4 left-4 h-20 w-20 rounded-full bg-indigo-500/15 blur-2xl transition-all duration-300 group-hover:h-24 group-hover:w-24" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200 backdrop-blur-sm">
            <LatestIcon />
            Latest Articles
          </div>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-4">
          <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/30">
            <span className="text-xs font-bold text-blue-200">1</span>
          </div>

          <h3 className="mb-2 text-sm font-bold text-white">
            JavaScript Utility Functions
          </h3>
          <p className="mb-3 text-xs leading-relaxed text-blue-100">
            Master essential JavaScript utilities with practical examples, clean
            implementations...
          </p>

          <div className="flex items-center justify-between">
            <span>September 11, 20225</span>

            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-end">
          <div className="mb-3">
            <h3 className="mb-1 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-xl font-black text-transparent">
              CODE CHRONICLES
            </h3>
            <p className="text-xs text-gray-400">Tech thoughts & tutorials</p>
          </div>
        </div>

        <div className="group/btn flex cursor-pointer items-center text-sm font-semibold text-blue-400">
          <span className="mr-2 transition-colors group-hover/btn:text-blue-300">
            Read articles
          </span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};
