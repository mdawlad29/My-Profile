import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { PiArrowBendUpRightThin } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

type BubbleStyle = {
  left: string;
  animationDuration: string;
  animationDelay: string;
  width: string;
  height: string;
  background: string;
};

export const LetsContent = () => {
  const [bubbles, setBubbles] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    const colors = ["#7e22ce", "#be185d", "#1d4ed8", "#53eafd", "#eab308"];
    const generated = Array.from({ length: 14 }, () => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 6}s`,
      width: `${8 + Math.random() * 10}px`,
      height: `${8 + Math.random() * 10}px`,
      background: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBubbles(generated);
  }, []);

  return (
    <Link
      href={"/contact"}
      className="hover-card group relative overflow-hidden rounded-3xl border border-gray-700/50 hover:-translate-y-1 duration-300 ease-in-out"
      style={{ background: "#1e293b" }}
    >
      {/* 🔵 Bubble background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((style, i) => (
          <span key={i} className="bubble" style={style} />
        ))}
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-x-2 rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
            <FiMessageSquare />
            Let&apos;s Connect
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-emerald-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="text-xs font-medium text-emerald-300">
              Available
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-center">
            <div className="text-lg font-bold text-white">4+</div>
            <div className="text-xs text-purple-300">Years Exp</div>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-center">
            <div className="text-lg font-bold text-white">30</div>
            <div className="text-xs text-purple-300">Solutions</div>
          </div>
          <div className="rounded-xl border border-pink-500/20 bg-pink-500/10 p-3 text-center">
            <div className="text-lg font-bold text-white">100%</div>
            <div className="text-xs text-purple-300">On Time</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-3 rounded-lg bg-gray-800/30 transition-colors duration-200 hover:bg-gray-800/50">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
              <TbWorld />
            </div>
            <span className="text-xs font-medium text-gray-300">
              Global remote expertise
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-gray-800/30 transition-colors duration-200 hover:bg-gray-800/50">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
              <IoTimeOutline />
            </div>
            <span className="text-xs font-medium text-gray-300">
              Rapid deployment ready
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mb-3">
          <h3 className="mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-black text-transparent">
            Collaborate
          </h3>
          <p className="text-xs text-gray-400">
            Transform your vision into reality
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2.5 text-xs text-gray-200 transition-all duration-200 hover:from-purple-500/30 hover:to-pink-500/30">
            <span className="mr-2 transition-colors group-hover/btn:text-indigo-300">
              Start projects
            </span>
          </div>
          <div className="group/arrow flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <PiArrowBendUpRightThin />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -50px;
          border-radius: 50%;
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-120px) translateX(40px) scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-300px) translateX(80px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </Link>
  );
};
