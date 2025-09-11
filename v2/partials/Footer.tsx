import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col items-center justify-between text-sm opacity-70 md:flex-row mx-auto w-full max-w-6xl mb-8">
      <div>© 2025 Awlad Hossain Alo. All rights reserved.</div>
      <div className="flex gap-6 items-center  md:mt-0 mt-4">
        <LinkTag text="linkedin" link="https://www.linkedin.com/in/mdawlad/" />
        <LinkTag text="GitHub" link="https://github.com/mdawlad29" />
        <LinkTag text="Facebook" link="https://facebook.com/awlads" />
      </div>
    </footer>
  );
};

const LinkTag = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:text-white transition-colors font-medium duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};
