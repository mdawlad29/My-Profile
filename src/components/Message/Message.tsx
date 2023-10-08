import Link from "next/link";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

const Message = () => {
  return (
    <>
      <Link href={"https://www.messenger.com/t/100078916504555"}>
        <div className="w-12 h-12 fixed md:right-5 right-3 md:bottom-12 bottom-8 bg-primary text-neutral rounded-full shadow-2xl hover:scale-105 duration-500 ease-in-out flex justify-center items-center">
          <BiMessageRoundedDots className="text-3xl" />
        </div>
      </Link>
    </>
  );
};

export default Message;
