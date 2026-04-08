"use client";

import { motion } from "framer-motion";

export default function GradientOrb({
  className,
  color = "bg-primary-500",
  size = "w-96 h-96",
  delay = 0,
}: {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-[100px] ${color} ${size} ${className}`}
    />
  );
}
