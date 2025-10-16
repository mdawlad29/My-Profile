"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { headerItems } from "@/dummy";
import { usePathname } from "next/navigation";

const MobileHeader = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {collapsed && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setCollapsed(false)}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-24 !z-[9999] w-[95%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/60 p-6 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5"
          >
            <ul className="flex flex-col space-y-2 mb-14">
              {headerItems?.map((item, i) => {
                const isActive =
                  pathname === item?.path ||
                  (pathname === "/" && item?.path === "/");

                return (
                  <motion.li
                    key={item?.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                  >
                    <Link
                      href={item?.path}
                      onClick={() => setCollapsed(false)}
                      className={`rounded-xl p-4 transition flex items-center gap-3 font-medium capitalize relative ${
                        isActive
                          ? "font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 text-white"
                          : "text-gray-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-blue-500 to-purple-500" />
                      )}

                      <div
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-purple-500"
                            : "group-hover:bg-blue-400 transition-colors duration-300 ease-in-out bg-gray-500"
                        }`}
                      />
                      {item?.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-center text-xs text-gray-400">
                Tap anywhere outside to close
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileHeader;
