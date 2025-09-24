"use client";

import React from "react";
import { motion } from "framer-motion";
import { LinkTag } from "@/shared/LinkTag";
import { MdDateRange } from "react-icons/md";
import { IoBookOutline, IoTimeOutline } from "react-icons/io5";
import { GoTag, GoZap } from "react-icons/go";
import { IoIosCode, IoIosSearch } from "react-icons/io";
import { articles, categoryItem } from "@/dummy";

const LearnSection = () => {
  const [activeCategory, setActiveCategory] = React.useState(
    categoryItem[0].value
  );

  const handleActiveCategory = (params: string) => {
    setActiveCategory(params);
  };

  // Filtered Articles
  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-1 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        Code{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Chronicles
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="text-lg leading-relaxed text-gray-400 md:text-xl"
      >
        Deep dives into web development, tutorials, and insights about modern
        JavaScript, React, and beyond.
      </motion.p>

      {/* Features Row */}
      <div className="mt-6 flex flex-wrap items-center gap-6 text-sm  mb-20">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-400">
            {idx === 0 ? (
              <IoBookOutline className="text-lg" />
            ) : idx === 1 ? (
              <IoIosCode className="text-lg" />
            ) : (
              <GoZap className="text-lg" />
            )}
            {idx === 0
              ? " Articles"
              : idx === 1
              ? "Practical Examples"
              : "Copy & Paste Ready"}
          </div>
        ))}
      </div>

      {/* Search + Categories */}
      <div className="mb-12 space-y-4">
        <form className="relative max-w-md">
          <IoIosSearch className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 text-2xl" />
          <input
            type="text"
            placeholder="Search articles...."
            className="w-full rounded-xl border border-gray-700 bg-slate-800/50 py-3 pl-12 pr-4 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </form>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-sm font-medium text-gray-400">
              Categories
            </h3>

            <div className="flex flex-wrap gap-2">
              {categoryItem?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleActiveCategory(item?.value)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition  hover:bg-slate-800 hover:text-gray-300 capitalize ${
                    item?.value === activeCategory
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-slate-800/50 text-gray-400"
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Count */}
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"} found
        </h3>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-700/50 transition-all duration-1000 ease-in-out"
          >
            <div
              className="flex h-full flex-col"
              style={{
                background: "rgb(30, 41, 59)",
              }}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 capitalize">
                    {article.category}
                  </span>
                  <span className="rounded-full border px-2 py-1 text-xs font-medium bg-green-500/10 text-green-400 border-green-500/20">
                    {article.difficulty}
                  </span>
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {article.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
                  {article.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1">
                  {article.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1 rounded-md bg-gray-700/30 px-2 py-1 text-xs text-gray-300"
                    >
                      <GoTag /> {tag}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <MdDateRange />
                      <span>{article.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <IoTimeOutline /> <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                    <LinkTag title="Read more" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearnSection;
