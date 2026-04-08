"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-500">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? "text-primary-200" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
