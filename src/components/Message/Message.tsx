import Link from "next/link";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

const Message = () => {
  return (
    <>
      <Link href={"https://www.messenger.com/t/100078916504555"}>
        <div className="w-12 h-12 flex justify-center items-center fixed right-5 bottom-14 bg-primary text-neutral rounded-full shadow-2xl hover:scale-105 duration-500 ease-in-out">
          <BiMessageRoundedDots className="text-3xl" />
        </div>
      </Link>
    </>
  );
};

export default Message;
