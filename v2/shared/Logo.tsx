"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // আরও বেশি rotation effect
  const rotateX = useTransform(y, [-50, 50], [40, -40]);
  const rotateY = useTransform(x, [-50, 50], [-40, 40]);

  const scale = useTransform(
    y,
    [-50, 50],
    [1.05, 0.95] // subtle scale effect along with tilt
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Extra slow, smooth spring
    animate(x, offsetX / 2, { type: "spring", stiffness: 50, damping: 20 });
    animate(y, offsetY / 2, { type: "spring", stiffness: 50, damping: 20 });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 50, damping: 25 });
    animate(y, 0, { type: "spring", stiffness: 50, damping: 25 });
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block cursor-pointer perspective-[1000px]"
    >
      <Link
        href={"/"}
        className="text-4xl text-white capitalize transition-all duration-300 ease-in-out"
      >
        awlad{" "}
        <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          - alo
        </span>
      </Link>
    </motion.div>
  );
};

export default Logo;
