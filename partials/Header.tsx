"use client";

import { headerItems } from "@/dummy";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/shared/Logo";

export const Header = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <nav
        className="fixed left-1/2 top-4 !z-[99999] w-[95%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(25,30,45,0.9) 100%)",
          boxShadow:
            "0 10px 30px -5px rgba(0,0,0,0.3), 0 0 20px rgba(96,165,250,0.2)",
        }}
      >
        <div className="relative !z-[99999] flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <ul className="flex items-center space-x-2">
            {headerItems?.map((item) => {
              const isActive =
                pathname === item?.path ||
                (pathname === "/" && item?.path === "/");

              return (
                <li key={item?.id} className="md:block hidden">
                  <Link
                    href={item?.path}
                    className={`group relative inline-block px-3 py-2 text-gray-300 transition duration-300
                  after:absolute after:inset-0 after:rounded-md hover:scale-105 capitalize
                  after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:opacity-0 
                  after:transition-all after:duration-500 hover:after:opacity-10
                  ${
                    isActive
                      ? "after:opacity-10 font-semibold"
                      : "hover:text-white"
                  }`}
                  >
                    <span
                      className={`relative z-10 
                    before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                    before:w-full before:bg-gradient-to-r before:from-blue-400 before:to-purple-500
                    before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                    group-hover:before:scale-x-100
                    ${isActive ? "before:scale-x-100" : ""}
                    `}
                    >
                      {item?.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden block">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="relative !z-[99999] flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
            >
              {/* Top Line */}
              <motion.span
                animate={collapsed ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 w-6 bg-white rounded"
              />
              {/* Middle Line */}
              <motion.span
                animate={collapsed ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-6 bg-white rounded my-1"
              />
              {/* Bottom Line */}
              <motion.span
                animate={
                  collapsed ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="block h-0.5 w-6 bg-white rounded"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileHeader collapsed={collapsed} setCollapsed={setCollapsed} />
    </>
  );
};
