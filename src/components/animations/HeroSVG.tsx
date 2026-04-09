"use client";

import { motion } from "framer-motion";

/* ── Proper flag components inside circular clips ── */
function NigeriaFlag({ id }: { id: string }) {
  // Green | White | Green (vertical)
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="23" height="68" fill="#008751" />
      <rect x="-11" y="-34" width="22" height="68" fill="#FFFFFF" />
      <rect x="11" y="-34" width="23" height="68" fill="#008751" />
    </g>
  );
}

function KenyaFlag({ id }: { id: string }) {
  // Black | Red (white edge) | Green horizontal + shield
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="68" height="20" fill="#000000" />
      <rect x="-34" y="-14" width="68" height="3" fill="#FFFFFF" />
      <rect x="-34" y="-11" width="68" height="22" fill="#BB0000" />
      <rect x="-34" y="11" width="68" height="3" fill="#FFFFFF" />
      <rect x="-34" y="14" width="68" height="20" fill="#006600" />
      {/* Simplified Maasai shield */}
      <ellipse cx="0" cy="0" rx="8" ry="14" fill="#BB0000" stroke="#000000" strokeWidth="1.5" />
      <line x1="0" y1="-14" x2="0" y2="14" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="-5" y1="-5" x2="5" y2="-5" stroke="#FFFFFF" strokeWidth="0.8" />
      <line x1="-5" y1="5" x2="5" y2="5" stroke="#FFFFFF" strokeWidth="0.8" />
    </g>
  );
}

function SouthAfricaFlag({ id }: { id: string }) {
  // Red top, Blue bottom, Green Y-shape, black triangle, white/gold borders
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="68" height="34" fill="#DE3831" />
      <rect x="-34" y="0" width="68" height="34" fill="#002395" />
      {/* Green Y band */}
      <polygon points="-34,-10 -10,0 -34,10" fill="#007A4D" />
      <rect x="-10" y="-7" width="44" height="14" fill="#007A4D" />
      {/* Black triangle */}
      <polygon points="-34,-20 -14,0 -34,20" fill="#000000" />
      {/* Gold border lines */}
      <line x1="-34" y1="-20" x2="-10" y2="0" stroke="#FFB612" strokeWidth="2" />
      <line x1="-34" y1="20" x2="-10" y2="0" stroke="#FFB612" strokeWidth="2" />
      {/* White edges */}
      <line x1="-34" y1="-12" x2="-8" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
      <line x1="-34" y1="12" x2="-8" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
    </g>
  );
}

function GhanaFlag({ id }: { id: string }) {
  // Red | Gold | Green horizontal + black star
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="68" height="23" fill="#CE1126" />
      <rect x="-34" y="-11" width="68" height="22" fill="#FCD116" />
      <rect x="-34" y="11" width="68" height="23" fill="#006B3F" />
      {/* Black star */}
      <polygon points="0,-10 2.9,-3 10,-3 4.5,2 6.9,9 0,5 -6.9,9 -4.5,2 -10,-3 -2.9,-3" fill="#000000" />
    </g>
  );
}

function EgyptFlag({ id }: { id: string }) {
  // Red | White | Black horizontal + golden eagle
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="68" height="23" fill="#CE1126" />
      <rect x="-34" y="-11" width="68" height="22" fill="#FFFFFF" />
      <rect x="-34" y="11" width="68" height="23" fill="#000000" />
      {/* Simplified Eagle of Saladin */}
      <circle cx="0" cy="0" r="5" fill="#C09300" />
      <path d="M-4,-2 L0,-7 L4,-2" fill="#C09300" stroke="#C09300" strokeWidth="0.5" />
      <line x1="-6" y1="0" x2="6" y2="0" stroke="#C09300" strokeWidth="1.5" />
    </g>
  );
}

function IvoryCoastFlag({ id }: { id: string }) {
  // Orange | White | Green (vertical) for CFA / Ivory Coast
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-34" y="-34" width="23" height="68" fill="#FF8200" />
      <rect x="-11" y="-34" width="22" height="68" fill="#FFFFFF" />
      <rect x="11" y="-34" width="23" height="68" fill="#009E60" />
    </g>
  );
}

function USAFlag({ id }: { id: string }) {
  // Stripes + blue canton with stars
  return (
    <g clipPath={`url(#${id})`}>
      {/* Red and white stripes */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <rect key={i} x="-28" y={-28 + i * 4.3} width="56" height="4.3"
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      {/* Blue canton */}
      <rect x="-28" y="-28" width="24" height="24" fill="#3C3B6E" />
      {/* Simplified stars */}
      {[
        [-22, -22], [-16, -22], [-10, -22],
        [-19, -17], [-13, -17],
        [-22, -12], [-16, -12], [-10, -12],
      ].map(([sx, sy], i) => (
        <circle key={i} cx={sx} cy={sy} r="1.5" fill="#FFFFFF" />
      ))}
    </g>
  );
}

function UKFlag({ id }: { id: string }) {
  // Union Jack
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-28" y="-28" width="56" height="56" fill="#012169" />
      {/* Diagonal whites */}
      <line x1="-28" y1="-28" x2="28" y2="28" stroke="#FFFFFF" strokeWidth="6" />
      <line x1="28" y1="-28" x2="-28" y2="28" stroke="#FFFFFF" strokeWidth="6" />
      {/* Diagonal reds */}
      <line x1="-28" y1="-28" x2="28" y2="28" stroke="#C8102E" strokeWidth="3" />
      <line x1="28" y1="-28" x2="-28" y2="28" stroke="#C8102E" strokeWidth="3" />
      {/* Cross whites */}
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#FFFFFF" strokeWidth="8" />
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#FFFFFF" strokeWidth="8" />
      {/* Cross reds */}
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#C8102E" strokeWidth="5" />
      <line x1="-28" y1="0" x2="28" y2="0" stroke="#C8102E" strokeWidth="5" />
    </g>
  );
}

function EUFlag({ id }: { id: string }) {
  // Blue with circle of 12 gold stars (pre-computed positions to avoid hydration mismatch)
  const stars = [
    { x: 0, y: -16 }, { x: 8, y: -13.9 }, { x: 13.9, y: -8 }, { x: 16, y: 0 },
    { x: 13.9, y: 8 }, { x: 8, y: 13.9 }, { x: 0, y: 16 }, { x: -8, y: 13.9 },
    { x: -13.9, y: 8 }, { x: -16, y: 0 }, { x: -13.9, y: -8 }, { x: -8, y: -13.9 },
  ];
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-28" y="-28" width="56" height="56" fill="#003399" />
      {stars.map((s, i) => (
        <polygon key={i}
          points={`${s.x},${s.y - 2.5} ${s.x + 1},${s.y - 0.8} ${s.x + 2.5},${s.y - 0.8} ${s.x + 1.5},${s.y + 0.4} ${s.x + 2},${s.y + 2.5} ${s.x},${s.y + 1.2} ${s.x - 2},${s.y + 2.5} ${s.x - 1.5},${s.y + 0.4} ${s.x - 2.5},${s.y - 0.8} ${s.x - 1},${s.y - 0.8}`}
          fill="#FFCC00" />
      ))}
    </g>
  );
}

function TanzaniaFlag({ id }: { id: string }) {
  // Green top-left, blue bottom-right, black diagonal, gold borders
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-28" y="-28" width="56" height="56" fill="#1EB53A" />
      <polygon points="28,-28 28,28 -28,28" fill="#00A3DD" />
      {/* Black diagonal band with yellow edges */}
      <line x1="-28" y1="28" x2="28" y2="-28" stroke="#FCD116" strokeWidth="8" />
      <line x1="-28" y1="28" x2="28" y2="-28" stroke="#000000" strokeWidth="5" />
    </g>
  );
}

function UgandaFlag({ id }: { id: string }) {
  // Black | Yellow | Red horizontal (×2) + white circle with crane
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-28" y="-28" width="56" height="9.3" fill="#000000" />
      <rect x="-28" y={-28 + 9.3} width="56" height="9.3" fill="#FCDC04" />
      <rect x="-28" y={-28 + 18.6} width="56" height="9.3" fill="#D90000" />
      <rect x="-28" y={-28 + 27.9} width="56" height="9.3" fill="#000000" />
      <rect x="-28" y={-28 + 37.2} width="56" height="9.3" fill="#FCDC04" />
      <rect x="-28" y={-28 + 46.5} width="56" height="9.5" fill="#D90000" />
      {/* White circle with simplified crane */}
      <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
      <circle cx="0" cy="-3" r="2" fill="#9E9E9E" />
      <line x1="0" y1="-1" x2="0" y2="5" stroke="#9E9E9E" strokeWidth="1.5" />
      <line x1="-3" y1="5" x2="0" y2="5" stroke="#9E9E9E" strokeWidth="1" />
      <line x1="0" y1="5" x2="3" y2="5" stroke="#9E9E9E" strokeWidth="1" />
      {/* Crest on head */}
      <line x1="0" y1="-5" x2="0" y2="-7" stroke="#D90000" strokeWidth="1" />
    </g>
  );
}

function MoroccoFlag({ id }: { id: string }) {
  // Red background with green pentacle star
  return (
    <g clipPath={`url(#${id})`}>
      <rect x="-28" y="-28" width="56" height="56" fill="#C1272D" />
      {/* Green pentacle (5-pointed star outline) */}
      <polygon
        points="0,-14 3.5,-4.5 14,-4.5 5.5,2 8.5,12 0,6 -8.5,12 -5.5,2 -14,-4.5 -3.5,-4.5"
        fill="none" stroke="#006233" strokeWidth="2.5" />
    </g>
  );
}

/* ── Flag renderer by currency code ── */
function FlagContent({ code, clipId }: { code: string; clipId: string }) {
  switch (code) {
    case "NGN": return <NigeriaFlag id={clipId} />;
    case "KES": return <KenyaFlag id={clipId} />;
    case "ZAR": return <SouthAfricaFlag id={clipId} />;
    case "GHS": return <GhanaFlag id={clipId} />;
    case "EGP": return <EgyptFlag id={clipId} />;
    case "XOF": return <IvoryCoastFlag id={clipId} />;
    case "USD": return <USAFlag id={clipId} />;
    case "GBP": return <UKFlag id={clipId} />;
    case "EUR": return <EUFlag id={clipId} />;
    case "TZS": return <TanzaniaFlag id={clipId} />;
    case "UGX": return <UgandaFlag id={clipId} />;
    case "MAD": return <MoroccoFlag id={clipId} />;
    default: return null;
  }
}

/* ── Currency data ── */
const currencies = [
  // Outer orbit (African)
  { symbol: "₦", code: "NGN", angle: 0 },
  { symbol: "KSh", code: "KES", angle: 60 },
  { symbol: "R", code: "ZAR", angle: 120 },
  { symbol: "₵", code: "GHS", angle: 180 },
  { symbol: "E£", code: "EGP", angle: 240 },
  { symbol: "CFA", code: "XOF", angle: 300 },
  // Inner orbit (Global + more African)
  { symbol: "$", code: "USD", angle: 30, inner: true },
  { symbol: "£", code: "GBP", angle: 110, inner: true },
  { symbol: "€", code: "EUR", angle: 190, inner: true },
  { symbol: "TSh", code: "TZS", angle: 270, inner: true },
  { symbol: "USh", code: "UGX", angle: 350, inner: true },
  { symbol: "د.م", code: "MAD", angle: 150, inner: true },
];

function getOrbitPos(angle: number, rx: number, ry: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: 450 + rx * Math.cos(rad), y: 450 + ry * Math.sin(rad) };
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
          <filter id="bigGlow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#032B44" floodOpacity="0.35" />
          </filter>
          <clipPath id="globeClip">
            <circle cx="450" cy="450" r="148" />
          </clipPath>
          {/* Clip paths for each currency node */}
          {currencies.map(c => (
            <clipPath key={`clip-${c.code}`} id={`clip-${c.code}`}>
              <circle r={c.inner ? 28 : 34} />
            </clipPath>
          ))}
        </defs>

        {/* ── SIGNAL RINGS ── */}
        {[0, 1.8, 3.6].map((delay, i) => (
          <motion.circle key={`sig-${i}`} cx="450" cy="450"
            fill="none" stroke="#0BB5E0" strokeWidth="0.6"
            animate={{ r: [155, 400], opacity: [0.2, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* ── ORBIT RINGS ── */}
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={outerRx} ry={outerRy}
            fill="none" stroke="url(#orbitGrad1)" strokeWidth="1" strokeDasharray="8 6" opacity="0.45"
            transform="rotate(-15 450 450)" />
        </motion.g>
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={innerRx} ry={innerRy}
            fill="none" stroke="url(#orbitGrad2)" strokeWidth="0.8" strokeDasharray="5 8" opacity="0.35"
            transform="rotate(20 450 450)" />
        </motion.g>

        {/* ── CONNECTOR LINES + DATA PARTICLES ── */}
        {currencies.map((c, i) => {
          const { x, y } = getOrbitPos(
            c.angle - 15 * (c.inner ? -1 : 1),
            c.inner ? innerRx : outerRx,
            c.inner ? innerRy : outerRy
          );
          return (
            <g key={`conn-${i}`}>
              <motion.line x1="450" y1="450" x2={x} y2={y}
                stroke="url(#connGrad)" strokeWidth="0.5" strokeDasharray="300"
                animate={{ strokeDashoffset: [300, 0, 0, 300], opacity: [0, 0.3, 0.3, 0] }}
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
          <ellipse cx="450" cy="615" rx="90" ry="12" fill="#032B44" opacity="0.15" />
          <circle cx="450" cy="450" r="148" fill="url(#globeGrad)" filter="url(#shadow)" />
          <circle cx="450" cy="450" r="148" fill="url(#globeShine)" />
          <g clipPath="url(#globeClip)" opacity="0.2">
            {[-90, -50, -20, 20, 50, 90].map(lat => (
              <ellipse key={`lat${lat}`} cx="450" cy={450 + lat}
                rx={148 * Math.cos((lat * Math.PI) / 180)} ry="6"
                fill="none" stroke="#7AE2FA" strokeWidth="0.6" />
            ))}
            <motion.g animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "450px 450px" }}>
              {[0, 30, 60, 90, 120, 150].map(lon => (
                <ellipse key={`lon${lon}`} cx="450" cy="450"
                  rx={18 + Math.abs(Math.sin((lon * Math.PI) / 180)) * 130} ry="148"
                  fill="none" stroke="#7AE2FA" strokeWidth="0.5"
                  transform={`rotate(${lon} 450 450)`} />
              ))}
            </motion.g>
            <motion.g animate={{ x: [0, -4, 0, 4, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <path d="M458 375 L468 368 L476 374 L480 385 L484 398 L488 415 L486 435 L490 450 L488 465 L483 480 L476 494 L468 504 L460 512 L453 516 L447 512 L441 502 L437 490 L434 476 L432 462 L430 448 L432 434 L435 418 L440 402 L445 388 L450 378 Z"
                fill="#00C9A7" opacity="0.3" />
              <ellipse cx="496" cy="494" rx="5" ry="11" fill="#00C9A7" opacity="0.2"
                transform="rotate(-15 496 494)" />
            </motion.g>
          </g>
          <circle cx="450" cy="450" r="148" fill="none" stroke="#7AE2FA" strokeWidth="1.2" opacity="0.3" />
          <ellipse cx="415" cy="405" rx="50" ry="70" fill="white" opacity="0.035" />
        </motion.g>

        {/* ── OUTER ORBIT CURRENCY NODES ── */}
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
                  {/* Shadow */}
                  <circle r="36" fill="#000000" opacity="0.2" />
                  {/* Flag background */}
                  <circle r="34" fill="#1a1a2e" />
                  <FlagContent code={c.code} clipId={`clip-${c.code}`} />
                  {/* Dark overlay for readability */}
                  <circle r="34" fill="#000000" opacity="0.3" />
                  {/* Currency symbol */}
                  <text textAnchor="middle" dy="-2" fill="white" fontSize="17" fontWeight="800"
                    fontFamily="Inter, sans-serif" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
                    {c.symbol}
                  </text>
                  {/* Code label */}
                  <text textAnchor="middle" dy="14" fill="#FFFFFF" fontSize="8" fontWeight="700"
                    fontFamily="Inter, sans-serif" opacity="0.9">{c.code}</text>
                  {/* Bright border ring */}
                  <circle r="34" fill="none" stroke="#00C9A7" strokeWidth="2" opacity="0.8" />
                  {/* Outer glow ring */}
                  <circle r="37" fill="none" stroke="#00C9A7" strokeWidth="0.5" opacity="0.3" />
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* ── INNER ORBIT CURRENCY NODES ── */}
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
                  {/* Shadow */}
                  <circle r="30" fill="#000000" opacity="0.2" />
                  {/* Flag background */}
                  <circle r="28" fill="#1a1a2e" />
                  <FlagContent code={c.code} clipId={`clip-${c.code}`} />
                  {/* Dark overlay for readability */}
                  <circle r="28" fill="#000000" opacity="0.25" />
                  {/* Currency symbol */}
                  <text textAnchor="middle" dy="-1" fill="white" fontSize="14" fontWeight="800"
                    fontFamily="Inter, sans-serif">{c.symbol}</text>
                  {/* Code label */}
                  <text textAnchor="middle" dy="12" fill="#FFFFFF" fontSize="7" fontWeight="700"
                    fontFamily="Inter, sans-serif" opacity="0.9">{c.code}</text>
                  {/* Bright border ring */}
                  <circle r="28" fill="none" stroke="#F5A623" strokeWidth="1.8" opacity="0.8" />
                  <circle r="31" fill="none" stroke="#F5A623" strokeWidth="0.4" opacity="0.3" />
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* ── ATRUSTPAY LOGO CENTER ── */}
        <motion.g
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}>
          {/* Glow backdrop */}
          <circle cx="450" cy="450" r="62" fill="#4F46E5" opacity="0.12" filter="url(#bigGlow)" />
          {/* Logo circle */}
          <circle cx="450" cy="450" r="52" fill="url(#logoBg)" filter="url(#glow)" />
          <circle cx="450" cy="450" r="52" fill="white" opacity="0.06" />

          {/* ATrustPay logo mark — faithful recreation */}
          <g transform="translate(421, 423) scale(1.25)">
            {/* Main triangle body */}
            <path
              d="M23 -2 C24.5 -4, 27 -4, 28.5 -2 L45 28 C47 31.5, 44.5 35.5, 40.5 35.5 L11 35.5 C7 35.5, 4.5 31.5, 6.5 28 Z"
              fill="white" opacity="0.95"
            />
            {/* Left organic/person shape */}
            <path
              d="M16 28 C10 26, 6.5 20, 9.5 14.5 C11.5 11, 15 10, 18 12.5 L22 18 C20 22.5, 17.5 26, 16 28Z"
              fill="#4F46E5"
            />
            {/* Inner teardrop / droplet */}
            <path
              d="M26 7 C28 7.5, 30 10, 30 13.5 C30 17.5, 27 20.5, 24.5 20.5 C21.5 20.5, 19.5 17.5, 20 14.5 C20.5 11, 23 7, 26 7Z"
              fill="#4F46E5"
            />
            {/* Top-right circle */}
            <circle cx="37" cy="5.5" r="5.5" fill="white" />
            {/* Mid-left circle */}
            <circle cx="8.5" cy="16" r="4.5" fill="white" />
          </g>

          {/* Pulse rings */}
          <motion.circle cx="450" cy="450" fill="none" stroke="#6366F1" strokeWidth="1.5"
            animate={{ r: [56, 72, 56], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
          <motion.circle cx="450" cy="450" fill="none" stroke="#0BB5E0" strokeWidth="1"
            animate={{ r: [56, 88, 56], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }} />
          {/* White outer ring */}
          <circle cx="450" cy="450" r="52" fill="none" stroke="white" strokeWidth="2" opacity="0.25" />
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
