"use client";

import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";

export const SocialConnect = () => {
  return (
    <div
      style={{ background: "rgb(30, 41, 59)" }}
      className="fixed right-0 -translate-y-1/2 top-1/2 border border-gray-700/50 w-10 hover:scale-110 ease-in-out duration-500"
    >
      <SocialItems
        icon={<FaLinkedin />}
        url={"https://www.linkedin.com/in/mdawlad/"}
      />

      <SocialItems
        icon={<FaSquareWhatsapp />}
        url={"https://wa.me/01518456520"}
        className="hover:!bg-green-600 !text-green-600"
      />

      <SocialItems
        icon={<FaFacebookSquare />}
        url={"https://www.facebook.com/awlads/"}
        className="hover:!bg-blue-600 !text-blue-600"
      />

      <SocialItems
        url="https://www.facebook.com/messages/t/809693231541889"
        icon={<SiMessenger />}
        className="hover:!bg-indigo-600 !text-indigo-600"
      />
    </div>
  );
};

const SocialItems = ({
  url,
  icon,
  className = "",
}: {
  url: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={url}
      passHref
      target="_blank"
      className={`flex justify-center items-center text-[24px] duration-300 ease-in-out hover:!text-white hover:bg-blue-700 text-blue-700 w-full py-2 border-b border-gray-700/50 last:border-b-0 ${className}`}
    >
      {icon}
    </Link>
  );
};
