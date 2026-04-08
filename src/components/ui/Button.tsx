"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent-green text-white hover:bg-accent-green-dark shadow-lg shadow-accent-green/25",
  secondary:
    "border-2 border-primary-400 text-primary-300 hover:bg-primary-400/10",
  ghost:
    "text-primary-400 hover:text-primary-300 underline-offset-4 hover:underline",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-sm tracking-wide transition-all duration-300",
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
