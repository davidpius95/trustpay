"use client";

import { motion } from "framer-motion";

export default function HeroSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full max-w-xl mx-auto"
    >
      <svg viewBox="0 0 900 900" className="w-full h-full">
        <defs>
          <linearGradient id="globeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#0BB5E0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#076B8F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#032B44" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="globeShine" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#0BB5E0" stopOpacity="0" />
            <stop offset="100%" stopColor="#032B44" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="currencyBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0BB5E0" />
            <stop offset="100%" stopColor="#00C9A7" />
          </linearGradient>
          <linearGradient id="currencyBg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id="currencyBg3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" />
            <stop offset="100%" stopColor="#0BB5E0" />
          </linearGradient>
          <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9A7" />
            <stop offset="100%" stopColor="#0BB5E0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#032B44" floodOpacity="0.4" />
          </filter>
          <clipPath id="globeClip">
            <circle cx="450" cy="450" r="155" />
          </clipPath>
        </defs>

        {/* Outer ambient glow */}
        <motion.circle
          cx="450"
          cy="450"
          r="200"
          fill="none"
          stroke="#0BB5E0"
          strokeWidth="0.5"
          opacity="0.1"
          animate={{ r: [200, 220, 200], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* === ORBIT RINGS === */}

        {/* Outer orbit ring */}
        <motion.g
          style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx="450" cy="450" rx="350" ry="180"
            fill="none" stroke="url(#orbitGrad1)" strokeWidth="1"
            strokeDasharray="8 6" opacity="0.5"
            transform="rotate(-20 450 450)"
          />
        </motion.g>

        {/* Middle orbit ring */}
        <motion.g
          style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx="450" cy="450" rx="300" ry="150"
            fill="none" stroke="url(#orbitGrad2)" strokeWidth="1"
            strokeDasharray="6 8" opacity="0.4"
            transform="rotate(15 450 450)"
          />
        </motion.g>

        {/* Inner orbit ring */}
        <motion.g
          style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx="450" cy="450" rx="230" ry="110"
            fill="none" stroke="#7AE2FA" strokeWidth="0.8"
            strokeDasharray="4 10" opacity="0.3"
            transform="rotate(-35 450 450)"
          />
        </motion.g>

        {/* === CONNECTING LINES from currencies to globe === */}

        {/* Animated connector lines that pulse */}
        {[
          { x: 130, y: 340 },
          { x: 770, y: 340 },
          { x: 200, y: 620 },
          { x: 700, y: 620 },
          { x: 450, y: 130 },
          { x: 450, y: 770 },
        ].map((pos, i) => (
          <motion.line
            key={`conn-${i}`}
            x1="450" y1="450"
            x2={pos.x} y2={pos.y}
            stroke="url(#connectorGrad)"
            strokeWidth="0.8"
            strokeDasharray="300"
            initial={{ strokeDashoffset: 300, opacity: 0 }}
            animate={{
              strokeDashoffset: [300, 0, 0, 300],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* === DATA PARTICLES flowing along connectors === */}
        {[
          { startX: 450, startY: 450, endX: 130, endY: 340, delay: 0 },
          { startX: 450, startY: 450, endX: 770, endY: 340, delay: 1.5 },
          { startX: 450, startY: 450, endX: 200, endY: 620, delay: 3 },
          { startX: 450, startY: 450, endX: 700, endY: 620, delay: 0.5 },
          { startX: 130, startY: 340, endX: 450, endY: 450, delay: 2.5 },
          { startX: 770, startY: 340, endX: 450, endY: 450, delay: 4 },
        ].map((p, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill="#00C9A7"
            filter="url(#glow)"
            animate={{
              cx: [p.startX, p.endX],
              cy: [p.startY, p.endY],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3,
            }}
          />
        ))}

        {/* === GLOBE === */}
        <motion.g
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}
        >
          {/* Globe shadow */}
          <ellipse cx="450" cy="620" rx="100" ry="15" fill="#032B44" opacity="0.2">
            <animate attributeName="rx" values="100;110;100" dur="6s" repeatCount="indefinite" />
          </ellipse>

          {/* Globe base circle */}
          <circle cx="450" cy="450" r="155" fill="url(#globeGrad)" filter="url(#shadow)" />

          {/* Globe shine overlay */}
          <circle cx="450" cy="450" r="155" fill="url(#globeShine)" />

          {/* Globe grid lines - latitude */}
          <g clipPath="url(#globeClip)" opacity="0.25">
            {[-80, -40, 0, 40, 80].map((lat) => (
              <motion.ellipse
                key={`lat-${lat}`}
                cx="450"
                cy={450 + lat}
                rx={155 * Math.cos((lat * Math.PI) / 180)}
                ry="8"
                fill="none"
                stroke="#7AE2FA"
                strokeWidth="0.8"
              />
            ))}

            {/* Longitude lines rotating */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "450px 450px" }}
            >
              {[0, 30, 60, 90, 120, 150].map((lon) => (
                <ellipse
                  key={`lon-${lon}`}
                  cx="450"
                  cy="450"
                  rx={20 + Math.abs(Math.sin((lon * Math.PI) / 180)) * 135}
                  ry="155"
                  fill="none"
                  stroke="#7AE2FA"
                  strokeWidth="0.6"
                  transform={`rotate(${lon} 450 450)`}
                />
              ))}
            </motion.g>

            {/* Africa continent silhouette (simplified) */}
            <motion.g
              animate={{ x: [0, -5, 0, 5, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M460 370 L470 365 L478 370 L482 380 L485 395 L490 410 L488 430 L492 445 L490 460 L485 475 L478 490 L470 500 L462 510 L455 515 L448 510 L442 500 L438 490 L435 475 L432 460 L430 445 L432 430 L435 415 L440 400 L445 385 L450 375 Z"
                fill="#00C9A7"
                opacity="0.35"
              />
              {/* Madagascar */}
              <ellipse cx="498" cy="490" rx="5" ry="12" fill="#00C9A7" opacity="0.25" transform="rotate(-15 498 490)" />
            </motion.g>
          </g>

          {/* Globe rim highlight */}
          <circle
            cx="450" cy="450" r="155"
            fill="none" stroke="#7AE2FA" strokeWidth="1.5" opacity="0.3"
          />

          {/* Globe specular highlight */}
          <ellipse cx="410" cy="400" rx="60" ry="80" fill="white" opacity="0.04" />
        </motion.g>

        {/* === ROTATING CURRENCY NODES === */}

        {/* Outer orbit currencies */}
        <motion.g
          style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* NGN - Nigerian Naira */}
          <g transform="translate(130, 340)">
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="32" fill="url(#currencyBg)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="1" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">&#8358;</text>
              <text textAnchor="middle" dy="16" fill="white" fontSize="7" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">NGN</text>
            </motion.g>
          </g>

          {/* KES - Kenyan Shilling */}
          <g transform="translate(770, 340)">
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="28" fill="url(#currencyBg2)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="1" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">KSh</text>
              <text textAnchor="middle" dy="14" fill="white" fontSize="6" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">KES</text>
            </motion.g>
          </g>

          {/* ZAR - South African Rand */}
          <g transform="translate(200, 620)">
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="30" fill="url(#currencyBg3)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="2" fill="white" fontSize="17" fontWeight="700" fontFamily="Inter, sans-serif">R</text>
              <text textAnchor="middle" dy="16" fill="white" fontSize="7" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">ZAR</text>
            </motion.g>
          </g>
        </motion.g>

        {/* Second orbit currencies (counter-rotating) */}
        <motion.g
          style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* GHS - Ghanaian Cedi */}
          <g transform="translate(700, 620)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="28" fill="url(#currencyBg)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="1" fill="white" fontSize="17" fontWeight="700" fontFamily="Inter, sans-serif">&#8373;</text>
              <text textAnchor="middle" dy="15" fill="white" fontSize="6" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">GHS</text>
            </motion.g>
          </g>

          {/* EGP - Egyptian Pound */}
          <g transform="translate(450, 130)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="26" fill="url(#currencyBg2)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="1" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">E&#163;</text>
              <text textAnchor="middle" dy="14" fill="white" fontSize="6" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">EGP</text>
            </motion.g>
          </g>

          {/* XOF - CFA Franc */}
          <g transform="translate(450, 770)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle r="27" fill="url(#currencyBg3)" filter="url(#glow)" opacity="0.9" />
              <text textAnchor="middle" dy="1" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">CFA</text>
              <text textAnchor="middle" dy="14" fill="white" fontSize="6" fontWeight="500" opacity="0.8" fontFamily="Inter, sans-serif">XOF</text>
            </motion.g>
          </g>
        </motion.g>

        {/* === ATRUSTPAY LOGO at center of globe === */}
        <motion.g
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}
        >
          {/* Logo circle background */}
          <circle cx="450" cy="450" r="42" fill="url(#logoBg)" filter="url(#glow)" />

          {/* Simplified ATrustPay shield/triangle logo mark */}
          <g transform="translate(450, 445) scale(0.9)">
            {/* Triangle base */}
            <path
              d="M0 -22 L20 14 L-20 14 Z"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Trust dot top */}
            <circle cx="0" cy="-22" r="4" fill="white" />
            {/* Connection dots */}
            <circle cx="-12" cy="8" r="3" fill="white" opacity="0.8" />
            <circle cx="12" cy="8" r="3" fill="white" opacity="0.8" />
            {/* Center checkmark */}
            <path
              d="M-5 0 L-1 4 L7 -5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Pulsing ring around logo */}
          <motion.circle
            cx="450" cy="450" r="50"
            fill="none" stroke="#00C9A7" strokeWidth="1.5"
            animate={{ r: [50, 60, 50], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx="450" cy="450" r="50"
            fill="none" stroke="#0BB5E0" strokeWidth="1"
            animate={{ r: [50, 70, 50], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
          />
        </motion.g>

        {/* === FLOATING MICRO PARTICLES === */}
        {[
          { cx: 320, cy: 280, r: 2, dur: 4 },
          { cx: 580, cy: 300, r: 2.5, dur: 5 },
          { cx: 250, cy: 500, r: 1.5, dur: 3.5 },
          { cx: 650, cy: 520, r: 2, dur: 4.5 },
          { cx: 380, cy: 180, r: 1.5, dur: 3 },
          { cx: 520, cy: 720, r: 2, dur: 5.5 },
          { cx: 160, cy: 450, r: 1.5, dur: 4 },
          { cx: 740, cy: 450, r: 2, dur: 3.5 },
          { cx: 350, cy: 680, r: 1.5, dur: 4.5 },
          { cx: 550, cy: 200, r: 2, dur: 5 },
        ].map((p, i) => (
          <motion.circle
            key={`micro-${i}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#7AE2FA"
            animate={{
              y: [0, -12, 0, 12, 0],
              x: [0, 6, 0, -6, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: p.dur,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* === SIGNAL RINGS emanating from globe === */}
        {[0, 1.5, 3].map((delay, i) => (
          <motion.circle
            key={`signal-${i}`}
            cx="450" cy="450"
            fill="none"
            stroke="#0BB5E0"
            strokeWidth="0.8"
            animate={{
              r: [160, 350],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
