"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function ScrollReveal({
  children,
  variants = fadeUpVariant,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as Record<string, unknown>)?.transition as object),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
