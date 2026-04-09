"use client";

import { motion } from "framer-motion";

/* ── currency data with flag stripe colors ── */
const currencies = [
  // Outer orbit
  { symbol: "₦", code: "NGN", flag: ["#008751", "#FFFFFF", "#008751"], angle: 0 },
  { symbol: "KSh", code: "KES", flag: ["#000000", "#BB0000", "#006600"], angle: 60 },
  { symbol: "R", code: "ZAR", flag: ["#007749", "#FFB81C", "#DE3831"], angle: 120 },
  { symbol: "₵", code: "GHS", flag: ["#CF0921", "#FCD116", "#006B3F"], angle: 180 },
  { symbol: "E£", code: "EGP", flag: ["#CE1126", "#FFFFFF", "#000000"], angle: 240 },
  { symbol: "CFA", code: "XOF", flag: ["#009E49", "#FCD116", "#CE1126"], angle: 300 },
  // Inner orbit
  { symbol: "$", code: "USD", flag: ["#3C3B6E", "#FFFFFF", "#B22234"], angle: 30, inner: true },
  { symbol: "£", code: "GBP", flag: ["#012169", "#FFFFFF", "#C8102E"], angle: 110, inner: true },
  { symbol: "€", code: "EUR", flag: ["#003399", "#FFCC00", "#003399"], angle: 190, inner: true },
  { symbol: "TSh", code: "TZS", flag: ["#1EB53A", "#FCD116", "#00A3DD"], angle: 270, inner: true },
  { symbol: "USh", code: "UGX", flag: ["#000000", "#FCDC04", "#D90000"], angle: 350, inner: true },
  { symbol: "د.م", code: "MAD", flag: ["#C1272D", "#006233", "#C1272D"], angle: 150, inner: true },
];

function getOrbitPos(angle: number, rx: number, ry: number, cx = 450, cy = 450) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
}

export default function HeroSVG() {
  const outerRx = 340, outerRy = 200;
  const innerRx = 250, innerRy = 140;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full max-w-xl mx-auto"
    >
      <svg viewBox="0 0 900 900" className="w-full h-full">
        <defs>
          <linearGradient id="globeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#0BB5E0" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#076B8F" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#032B44" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="globeShine" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#0BB5E0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#032B44" floodOpacity="0.35" />
          </filter>
          <clipPath id="globeClip">
            <circle cx="450" cy="450" r="148" />
          </clipPath>
        </defs>

        {/* ── SIGNAL RINGS ── */}
        {[0, 1.8, 3.6].map((delay, i) => (
          <motion.circle
            key={`sig-${i}`}
            cx="450" cy="450"
            fill="none" stroke="#0BB5E0" strokeWidth="0.6"
            animate={{ r: [155, 380], opacity: [0.25, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* ── ORBIT RINGS ── */}
        {/* Outer orbit */}
        <motion.g style={{ transformOrigin: "450px 450px" }} animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={outerRx} ry={outerRy}
            fill="none" stroke="url(#orbitGrad1)" strokeWidth="1" strokeDasharray="8 6" opacity="0.45"
            transform="rotate(-15 450 450)" />
        </motion.g>
        {/* Inner orbit */}
        <motion.g style={{ transformOrigin: "450px 450px" }} animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={innerRx} ry={innerRy}
            fill="none" stroke="url(#orbitGrad2)" strokeWidth="0.8" strokeDasharray="5 8" opacity="0.35"
            transform="rotate(20 450 450)" />
        </motion.g>

        {/* ── CONNECTOR LINES + PARTICLES ── */}
        {currencies.map((c, i) => {
          const { x, y } = getOrbitPos(
            c.angle - 15 * (c.inner ? -1 : 1),
            c.inner ? innerRx : outerRx,
            c.inner ? innerRy : outerRy
          );
          return (
            <g key={`conn-${i}`}>
              <motion.line x1="450" y1="450" x2={x} y2={y}
                stroke="url(#connGrad)" strokeWidth="0.6" strokeDasharray="300"
                animate={{ strokeDashoffset: [300, 0, 0, 300], opacity: [0, 0.35, 0.35, 0] }}
                transition={{ duration: 6, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle r="2.5" fill="#00C9A7" filter="url(#glow)"
                animate={{ cx: [450, x], cy: [450, y], opacity: [0, 0.9, 0.9, 0] }}
                transition={{ duration: 2, delay: i * 0.7, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
              />
            </g>
          );
        })}

        {/* ── GLOBE ── */}
        <motion.g animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}>
          {/* Shadow */}
          <ellipse cx="450" cy="615" rx="90" ry="12" fill="#032B44" opacity="0.15" />
          {/* Sphere */}
          <circle cx="450" cy="450" r="148" fill="url(#globeGrad)" filter="url(#shadow)" />
          <circle cx="450" cy="450" r="148" fill="url(#globeShine)" />

          {/* Grid */}
          <g clipPath="url(#globeClip)" opacity="0.2">
            {[-90, -50, -20, 20, 50, 90].map(lat => (
              <ellipse key={`lat${lat}`} cx="450" cy={450 + lat} rx={148 * Math.cos((lat * Math.PI) / 180)} ry="6"
                fill="none" stroke="#7AE2FA" strokeWidth="0.6" />
            ))}
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "450px 450px" }}>
              {[0, 30, 60, 90, 120, 150].map(lon => (
                <ellipse key={`lon${lon}`} cx="450" cy="450"
                  rx={18 + Math.abs(Math.sin((lon * Math.PI) / 180)) * 130} ry="148"
                  fill="none" stroke="#7AE2FA" strokeWidth="0.5"
                  transform={`rotate(${lon} 450 450)`} />
              ))}
            </motion.g>

            {/* Africa */}
            <motion.g animate={{ x: [0, -4, 0, 4, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <path d="M458 375 L468 368 L476 374 L480 385 L484 398 L488 415 L486 435 L490 450 L488 465 L483 480 L476 494 L468 504 L460 512 L453 516 L447 512 L441 502 L437 490 L434 476 L432 462 L430 448 L432 434 L435 418 L440 402 L445 388 L450 378 Z"
                fill="#00C9A7" opacity="0.3" />
              <ellipse cx="496" cy="494" rx="5" ry="11" fill="#00C9A7" opacity="0.2"
                transform="rotate(-15 496 494)" />
            </motion.g>
          </g>

          {/* Rim */}
          <circle cx="450" cy="450" r="148" fill="none" stroke="#7AE2FA" strokeWidth="1.2" opacity="0.3" />
          {/* Specular */}
          <ellipse cx="415" cy="405" rx="50" ry="70" fill="white" opacity="0.035" />
        </motion.g>

        {/* ── ROTATING CURRENCY NODES ── */}

        {/* Outer orbit currencies */}
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
          {currencies.filter(c => !c.inner).map((c) => {
            const pos = getOrbitPos(c.angle, outerRx, outerRy);
            return (
              <g key={c.code} transform={`translate(${pos.x}, ${pos.y})`}>
                <motion.g animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0px 0px" }}>
                  {/* Node background */}
                  <circle r="34" fill="#0A1628" stroke="#0BB5E0" strokeWidth="1.2" opacity="0.95" />
                  {/* Flag stripes */}
                  <clipPath id={`flag-${c.code}`}><circle r="34" /></clipPath>
                  <g clipPath={`url(#flag-${c.code})`}>
                    <rect x="-34" y="-34" width="68" height="23" fill={c.flag[0]} opacity="0.35" />
                    <rect x="-34" y="-11" width="68" height="22" fill={c.flag[1]} opacity="0.35" />
                    <rect x="-34" y="11" width="68" height="23" fill={c.flag[2]} opacity="0.35" />
                  </g>
                  {/* Currency symbol */}
                  <text textAnchor="middle" dy="-2" fill="white" fontSize="16" fontWeight="700"
                    fontFamily="Inter, sans-serif">{c.symbol}</text>
                  {/* Code label */}
                  <text textAnchor="middle" dy="14" fill="#7AE2FA" fontSize="8" fontWeight="600"
                    fontFamily="Inter, sans-serif">{c.code}</text>
                  {/* Glow ring */}
                  <circle r="34" fill="none" stroke="#0BB5E0" strokeWidth="0.5" opacity="0.4" />
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* Inner orbit currencies (counter-rotating) */}
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {currencies.filter(c => c.inner).map((c) => {
            const pos = getOrbitPos(c.angle, innerRx, innerRy);
            return (
              <g key={c.code} transform={`translate(${pos.x}, ${pos.y})`}>
                <motion.g animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0px 0px" }}>
                  {/* Node background */}
                  <circle r="28" fill="#0A1628" stroke="#F5A623" strokeWidth="1" opacity="0.95" />
                  {/* Flag stripes */}
                  <clipPath id={`flag-${c.code}`}><circle r="28" /></clipPath>
                  <g clipPath={`url(#flag-${c.code})`}>
                    <rect x="-28" y="-28" width="56" height="19" fill={c.flag[0]} opacity="0.3" />
                    <rect x="-28" y="-9" width="56" height="18" fill={c.flag[1]} opacity="0.3" />
                    <rect x="-28" y="9" width="56" height="19" fill={c.flag[2]} opacity="0.3" />
                  </g>
                  {/* Currency symbol */}
                  <text textAnchor="middle" dy="-1" fill="white" fontSize="13" fontWeight="700"
                    fontFamily="Inter, sans-serif">{c.symbol}</text>
                  {/* Code label */}
                  <text textAnchor="middle" dy="12" fill="#F5A623" fontSize="7" fontWeight="600"
                    fontFamily="Inter, sans-serif">{c.code}</text>
                  <circle r="28" fill="none" stroke="#F5A623" strokeWidth="0.4" opacity="0.35" />
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* ── ATRUSTPAY LOGO CENTER (matching actual brand mark) ── */}
        <motion.g
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}>

          {/* Outer glow circle */}
          <circle cx="450" cy="450" r="56" fill="#4F46E5" opacity="0.15" filter="url(#glow)" />
          {/* Logo background */}
          <circle cx="450" cy="450" r="48" fill="url(#logoBg)" filter="url(#glow)" />
          {/* Inner circle lighter */}
          <circle cx="450" cy="450" r="48" fill="white" opacity="0.08" />

          {/* ATrustPay brand mark — abstract triangle with organic shapes */}
          <g transform="translate(425, 426) scale(1.1)">
            {/* Main triangle shape (rounded) */}
            <path
              d="M22 0 C23 -1.5, 25.5 -1.5, 27 0 L46 33 C47.5 35.5, 46 38, 43 38 L6 38 C3 38, 1.5 35.5, 3 33 Z"
              fill="white" opacity="0.95"
            />
            {/* Left organic curve / person shape */}
            <path
              d="M14 30 C8 28, 4 22, 8 16 C10 13, 14 12, 17 14 L22 20 C20 24, 17 28, 14 30Z"
              fill="#4F46E5" opacity="0.9"
            />
            {/* Teardrop / water drop shape inside */}
            <path
              d="M24.5 10 C26 10, 28 12, 28 15 C28 19, 25 22, 23 22 C20 22, 18 19, 19 16 C19.5 13, 22 10, 24.5 10Z"
              fill="#4F46E5" opacity="0.85"
            />
            {/* Top-right dot */}
            <circle cx="35" cy="8" r="5" fill="white" opacity="0.95" />
            {/* Mid-left dot */}
            <circle cx="8" cy="18" r="4" fill="white" opacity="0.9" />
          </g>

          {/* Pulse rings */}
          <motion.circle cx="450" cy="450" fill="none" stroke="#6366F1" strokeWidth="1.5"
            animate={{ r: [52, 68, 52], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
          <motion.circle cx="450" cy="450" fill="none" stroke="#0BB5E0" strokeWidth="1"
            animate={{ r: [52, 80, 52], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }} />
        </motion.g>

        {/* ── FLOATING PARTICLES ── */}
        {[
          { cx: 300, cy: 270, r: 2 }, { cx: 600, cy: 290, r: 2.5 },
          { cx: 230, cy: 510, r: 1.5 }, { cx: 670, cy: 530, r: 2 },
          { cx: 370, cy: 170, r: 1.5 }, { cx: 530, cy: 730, r: 2 },
          { cx: 150, cy: 420, r: 1.5 }, { cx: 750, cy: 440, r: 2 },
          { cx: 340, cy: 690, r: 1.5 }, { cx: 560, cy: 190, r: 2 },
          { cx: 190, cy: 310, r: 1 }, { cx: 710, cy: 370, r: 1.5 },
        ].map((p, i) => (
          <motion.circle key={`p-${i}`} cx={p.cx} cy={p.cy} r={p.r} fill="#7AE2FA"
            animate={{ y: [0, -10, 0, 10, 0], x: [0, 5, 0, -5, 0], opacity: [0.1, 0.45, 0.1] }}
            transition={{ duration: 3.5 + i * 0.3, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
