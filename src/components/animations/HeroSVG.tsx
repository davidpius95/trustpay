"use client";

import { motion } from "framer-motion";

export default function HeroSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto"
    >
      <svg viewBox="0 0 800 800" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0BB5E0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0BB5E0" />
            <stop offset="100%" stopColor="#00C9A7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer rotating ellipse */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <ellipse
            cx="400"
            cy="400"
            rx="320"
            ry="200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            strokeDasharray="12 8"
            opacity="0.5"
          />
          {/* Nodes on outer ellipse */}
          <motion.circle
            cx="720"
            cy="400"
            r="8"
            fill="url(#nodeGrad)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="80"
            cy="400"
            r="6"
            fill="#7AE2FA"
            filter="url(#glow)"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.g>

        {/* Middle rotating ellipse (reverse) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <ellipse
            cx="400"
            cy="400"
            rx="240"
            ry="160"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            opacity="0.4"
            transform="rotate(30 400 400)"
          />
          <motion.circle
            cx="400"
            cy="240"
            r="7"
            fill="#00C9A7"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.circle
            cx="400"
            cy="560"
            r="5"
            fill="#F5A623"
            filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.g>

        {/* Inner rotating circle */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <circle
            cx="400"
            cy="400"
            r="120"
            fill="none"
            stroke="url(#grad3)"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            opacity="0.5"
          />
          <motion.circle
            cx="520"
            cy="400"
            r="5"
            fill="#0BB5E0"
            filter="url(#glow)"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
        </motion.g>

        {/* Connecting lines with dash animation */}
        <motion.line
          x1="400"
          y1="400"
          x2="720"
          y2="400"
          stroke="#0BB5E0"
          strokeWidth="0.5"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: [400, 0, 400] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.2"
        />
        <motion.line
          x1="400"
          y1="400"
          x2="400"
          y2="200"
          stroke="#00C9A7"
          strokeWidth="0.5"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: [200, 0, 200] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          opacity="0.2"
        />
        <motion.line
          x1="400"
          y1="400"
          x2="180"
          y2="520"
          stroke="#7AE2FA"
          strokeWidth="0.5"
          strokeDasharray="300"
          initial={{ strokeDashoffset: 300 }}
          animate={{ strokeDashoffset: [300, 0, 300] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          opacity="0.15"
        />

        {/* Center shield icon */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          {/* Shield shape */}
          <path
            d="M400 340 L440 355 L440 400 C440 430 420 450 400 460 C380 450 360 430 360 400 L360 355 Z"
            fill="url(#nodeGrad)"
            opacity="0.9"
            filter="url(#glow)"
          />
          {/* Checkmark inside shield */}
          <motion.path
            d="M385 395 L395 408 L415 385"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </motion.g>

        {/* Additional floating particles */}
        {[
          { cx: 300, cy: 280, r: 3, delay: 0 },
          { cx: 550, cy: 320, r: 2.5, delay: 1.2 },
          { cx: 250, cy: 450, r: 2, delay: 0.8 },
          { cx: 600, cy: 500, r: 3, delay: 1.5 },
          { cx: 480, cy: 250, r: 2, delay: 0.3 },
          { cx: 320, cy: 550, r: 2.5, delay: 2 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#0BB5E0"
            opacity="0.4"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
