"use client";

import { headerItems } from "@/dummy";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed left-1/2 top-4 z-20 w-[95%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 p-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(25,30,45,0.9) 100%)",
        boxShadow:
          "0 10px 30px -5px rgba(0,0,0,0.3), 0 0 20px rgba(96,165,250,0.2)",
      }}
    >
      <div className="relative z-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-4xl text-white capitalize hover:scale-[102%] duration-300 ease-in-out transition-all"
        >
          awlad{" "}
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            - alo
          </span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center space-x-2">
          {headerItems?.map((item) => {
            const isActive =
              pathname === item?.path ||
              (pathname === "/" && item?.path === "/");

            return (
              <li key={item?.id}>
                <Link
                  href={item?.path}
                  className={`group relative inline-block px-3 py-1 text-gray-300 transition duration-300
                     hover:scale-105 capitalize
                        ${
                          isActive
                            ? "active-nav-item font-semibold"
                            : "hover:text-white nav-hover"
                        }`}
                >
                  <span
                    className={`relative z-10 
                    before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                    before:w-full before:bg-gradient-to-r before:from-blue-400 before:to-purple-500
                    before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                    group-hover:before:scale-x-100
                    ${isActive ? "before:scale-x-100" : ""}`}
                  >
                    {item?.label}
                  </span>
                </Link>

                {/* <Link
                  href={item?.path}
                  className={`group relative inline-block px-2 py-2 text-gray-300 transition duration-300
                  after:absolute after:inset-0 after:rounded-md hover:scale-105 capitalize
                  after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:opacity-0 
                  after:transition-all after:duration-500 hover:after:opacity-10
                  ${
                    isActive
                      ? "after:opacity-10 active-nav-item font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  <span
                    className={`relative z-10 
                    before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                    before:w-full before:bg-gradient-to-r before:from-blue-400 before:to-purple-500
                    before:origin-right before:scale-x-0 before:transition-transform before:duration-500
                    group-hover:before:scale-x-100
                    ${isActive ? "before:scale-x-100" : ""}
                    `}
                  >
                    {item?.label}
                  </span>
                </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
