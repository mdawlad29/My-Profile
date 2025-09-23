import { ArrowIcon } from "@/assets";
import Link from "next/link";

export const LinkTag = ({ title }: { title: string }) => {
  return (
    <div className="w-full group">
      <Link
        href={""}
        className="group-hover:translate-x-2 duration-300 ease-in-out flex gap-1 cursor-pointer items-center text-sm text-blue-400"
      >
        {title}
        <ArrowIcon />
      </Link>
    </div>
  );
};
