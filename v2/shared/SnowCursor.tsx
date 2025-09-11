"use client";

import { useEffect, useRef } from "react";

const SnowCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const snowColors = ["#3b82f6", "#8b5cf6", "#6366f1"];

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Generate snowflake less often to reduce density
      if (now - lastTime < 120) return; // subtle frequency
      lastTime = now;

      if (!containerRef.current) return;

      const flake = document.createElement("div");

      // Use your original size logic
      const size =
        Math.random() > 0.5 ? 12 + Math.random() * 6 : 18 + Math.random() * 10;

      const color = snowColors[Math.floor(Math.random() * snowColors.length)];

      flake.style.position = "fixed";
      flake.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
      flake.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;
      flake.style.backgroundColor = color;
      flake.style.borderRadius = "50%";
      flake.style.pointerEvents = "none";
      flake.style.boxShadow = `0 0 ${size / 2}px ${color}`;
      flake.style.opacity = `${0.5 + Math.random() * 0.3}`;
      flake.style.transition = `all ${1.5 + Math.random() * 0.5}s ease-out`;

      containerRef.current.appendChild(flake);

      // Animate subtle float
      requestAnimationFrame(() => {
        flake.style.top = `${e.clientY - (15 + Math.random() * 10)}px`;
        flake.style.opacity = "0";
      });

      // Remove after animation
      setTimeout(() => {
        if (containerRef.current && flake.parentNode === containerRef.current) {
          containerRef.current.removeChild(flake);
        }
      }, 2200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} />;
};

export default SnowCursor;
