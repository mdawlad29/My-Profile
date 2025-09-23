import { ArrowIcon } from "@/assets";
import Link from "next/link";

interface ICardProps {
  title: string;
  link?: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
  description: string;
}

export const ServiceCard = ({
  icon,
  title,
  link,
  subtitle,
  className,
  description,
}: ICardProps) => {
  return (
    <Link
      href={`${link}`}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-700/40 bg-gray-800/40 p-4 backdrop-blur-sm hover:scale-105 duration-300 ease-in-out"
    >
      {/* Background gradients */}
      <div className={`${className}`}></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 flex items-start justify-between">
          {icon}

          <div className="text-right">
            <span className="rounded-full bg-gray-700/40 px-2 py-0.5 text-xs text-gray-500">
              {subtitle}
            </span>
          </div>
        </div>

        <h3 className="group-hover:ease-in-ou mb-1.5 text-lg font-semibold text-white duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent group-hover:transition-all">
          {title}
        </h3>

        <p className="text-xs leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300 mb-6">
          {description}
        </p>

        <div className="mt-auto flex cursor-pointer items-center gap-1 text-xs font-medium text-purple-400 group-hover:text-purple-300 hover:translate-x-0.5 transition-all duration-300 ease-in-out">
          <span>Learn more</span> <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};
