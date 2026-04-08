"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { fadeUpVariant } from "@/lib/animations";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }
          : undefined
      }
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300",
        hover && "cursor-pointer hover:border-primary-300",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-accent-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
