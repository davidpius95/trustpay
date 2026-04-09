"use client";

import { motion } from "framer-motion";

/* ── Simplified flag components ── */
function NigeriaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="23" height="68" fill="#008751"/><rect x="-11" y="-34" width="22" height="68" fill="#FFF"/><rect x="11" y="-34" width="23" height="68" fill="#008751"/></g>);
}
function KenyaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="68" height="20" fill="#000"/><rect x="-34" y="-14" width="68" height="3" fill="#FFF"/><rect x="-34" y="-11" width="68" height="22" fill="#BB0000"/><rect x="-34" y="11" width="68" height="3" fill="#FFF"/><rect x="-34" y="14" width="68" height="20" fill="#006600"/><ellipse cx="0" cy="0" rx="7" ry="12" fill="#BB0000" stroke="#000" strokeWidth="1.5"/><line x1="0" y1="-12" x2="0" y2="12" stroke="#FFF" strokeWidth="0.8"/></g>);
}
function SouthAfricaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="68" height="34" fill="#DE3831"/><rect x="-34" y="0" width="68" height="34" fill="#002395"/><rect x="-10" y="-7" width="44" height="14" fill="#007A4D"/><polygon points="-34,-20 -14,0 -34,20" fill="#000"/><line x1="-34" y1="-20" x2="-10" y2="0" stroke="#FFB612" strokeWidth="2.5"/><line x1="-34" y1="20" x2="-10" y2="0" stroke="#FFB612" strokeWidth="2.5"/></g>);
}
function GhanaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="68" height="23" fill="#CE1126"/><rect x="-34" y="-11" width="68" height="22" fill="#FCD116"/><rect x="-34" y="11" width="68" height="23" fill="#006B3F"/><polygon points="0,-10 2.9,-3 10,-3 4.5,2 6.9,9 0,5 -6.9,9 -4.5,2 -10,-3 -2.9,-3" fill="#000"/></g>);
}
function EgyptFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="68" height="23" fill="#CE1126"/><rect x="-34" y="-11" width="68" height="22" fill="#FFF"/><rect x="-34" y="11" width="68" height="23" fill="#000"/><circle cx="0" cy="0" r="5" fill="#C09300"/><path d="M-4,-2 L0,-7 L4,-2" fill="#C09300"/></g>);
}
function IvoryCoastFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-34" y="-34" width="23" height="68" fill="#FF8200"/><rect x="-11" y="-34" width="22" height="68" fill="#FFF"/><rect x="11" y="-34" width="23" height="68" fill="#009E60"/></g>);
}
function USAFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}>{[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(<rect key={i} x="-28" y={-28+i*4.3} width="56" height="4.3" fill={i%2===0?"#B22234":"#FFF"}/>))}<rect x="-28" y="-28" width="24" height="24" fill="#3C3B6E"/>{[[-22,-22],[-16,-22],[-10,-22],[-19,-17],[-13,-17],[-22,-12],[-16,-12],[-10,-12]].map(([sx,sy],i)=>(<circle key={i} cx={sx} cy={sy} r="1.5" fill="#FFF"/>))}</g>);
}
function UKFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-28" y="-28" width="56" height="56" fill="#012169"/><line x1="-28" y1="-28" x2="28" y2="28" stroke="#FFF" strokeWidth="6"/><line x1="28" y1="-28" x2="-28" y2="28" stroke="#FFF" strokeWidth="6"/><line x1="-28" y1="-28" x2="28" y2="28" stroke="#C8102E" strokeWidth="3"/><line x1="28" y1="-28" x2="-28" y2="28" stroke="#C8102E" strokeWidth="3"/><line x1="0" y1="-28" x2="0" y2="28" stroke="#FFF" strokeWidth="8"/><line x1="-28" y1="0" x2="28" y2="0" stroke="#FFF" strokeWidth="8"/><line x1="0" y1="-28" x2="0" y2="28" stroke="#C8102E" strokeWidth="5"/><line x1="-28" y1="0" x2="28" y2="0" stroke="#C8102E" strokeWidth="5"/></g>);
}
function EUFlag({ id }: { id: string }) {
  const stars = [[0,-16],[8,-13.9],[13.9,-8],[16,0],[13.9,8],[8,13.9],[0,16],[-8,13.9],[-13.9,8],[-16,0],[-13.9,-8],[-8,-13.9]];
  return (<g clipPath={`url(#${id})`}><rect x="-28" y="-28" width="56" height="56" fill="#003399"/>{stars.map(([sx,sy],i)=>(<polygon key={i} points={`${sx},${sy-2.5} ${sx+1},${sy-0.8} ${sx+2.5},${sy-0.8} ${sx+1.5},${sy+0.4} ${sx+2},${sy+2.5} ${sx},${sy+1.2} ${sx-2},${sy+2.5} ${sx-1.5},${sy+0.4} ${sx-2.5},${sy-0.8} ${sx-1},${sy-0.8}`} fill="#FFCC00"/>))}</g>);
}
function TanzaniaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-28" y="-28" width="56" height="56" fill="#1EB53A"/><polygon points="28,-28 28,28 -28,28" fill="#00A3DD"/><line x1="-28" y1="28" x2="28" y2="-28" stroke="#FCD116" strokeWidth="8"/><line x1="-28" y1="28" x2="28" y2="-28" stroke="#000" strokeWidth="5"/></g>);
}
function UgandaFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-28" y="-28" width="56" height="9.3" fill="#000"/><rect x="-28" y="-18.7" width="56" height="9.3" fill="#FCDC04"/><rect x="-28" y="-9.4" width="56" height="9.3" fill="#D90000"/><rect x="-28" y="-0.1" width="56" height="9.3" fill="#000"/><rect x="-28" y="9.2" width="56" height="9.3" fill="#FCDC04"/><rect x="-28" y="18.5" width="56" height="9.5" fill="#D90000"/><circle cx="0" cy="0" r="8" fill="#FFF"/><circle cx="0" cy="-3" r="2" fill="#666"/><line x1="0" y1="-1" x2="0" y2="5" stroke="#666" strokeWidth="1.5"/></g>);
}
function MoroccoFlag({ id }: { id: string }) {
  return (<g clipPath={`url(#${id})`}><rect x="-28" y="-28" width="56" height="56" fill="#C1272D"/><polygon points="0,-14 3.5,-4.5 14,-4.5 5.5,2 8.5,12 0,6 -8.5,12 -5.5,2 -14,-4.5 -3.5,-4.5" fill="none" stroke="#006233" strokeWidth="2.5"/></g>);
}

function FlagContent({ code, clipId }: { code: string; clipId: string }) {
  switch (code) {
    case "NGN": return <NigeriaFlag id={clipId}/>;
    case "KES": return <KenyaFlag id={clipId}/>;
    case "ZAR": return <SouthAfricaFlag id={clipId}/>;
    case "GHS": return <GhanaFlag id={clipId}/>;
    case "EGP": return <EgyptFlag id={clipId}/>;
    case "XOF": return <IvoryCoastFlag id={clipId}/>;
    case "USD": return <USAFlag id={clipId}/>;
    case "GBP": return <UKFlag id={clipId}/>;
    case "EUR": return <EUFlag id={clipId}/>;
    case "TZS": return <TanzaniaFlag id={clipId}/>;
    case "UGX": return <UgandaFlag id={clipId}/>;
    case "MAD": return <MoroccoFlag id={clipId}/>;
    default: return null;
  }
}

/* ── Currency data ── */
const currencies = [
  { symbol: "₦", code: "NGN", angle: 0 },
  { symbol: "KSh", code: "KES", angle: 60 },
  { symbol: "R", code: "ZAR", angle: 120 },
  { symbol: "₵", code: "GHS", angle: 180 },
  { symbol: "E£", code: "EGP", angle: 240 },
  { symbol: "CFA", code: "XOF", angle: 300 },
  { symbol: "$", code: "USD", angle: 30, inner: true },
  { symbol: "£", code: "GBP", angle: 110, inner: true },
  { symbol: "€", code: "EUR", angle: 190, inner: true },
  { symbol: "TSh", code: "TZS", angle: 270, inner: true },
  { symbol: "USh", code: "UGX", angle: 350, inner: true },
  { symbol: "د.م", code: "MAD", angle: 150, inner: true },
];

function getPos(angle: number, rx: number, ry: number) {
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
      className="relative w-full max-w-2xl mx-auto lg:max-w-3xl xl:max-w-4xl"
    >
      <svg viewBox="0 0 900 900" className="w-full h-full">
        <defs>
          <linearGradient id="globeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#0369A1" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#082F49" stopOpacity="0.95"/>
          </linearGradient>
          <linearGradient id="globeShine" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="orbitG1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.12"/>
          </linearGradient>
          <linearGradient id="orbitG2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7AE2FA" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0.15"/>
          </linearGradient>
          <linearGradient id="connG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0BB5E0" stopOpacity="0.05"/>
          </linearGradient>
          <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5"/>
            <stop offset="100%" stopColor="#6366F1"/>
          </linearGradient>
          <linearGradient id="africaHL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.6"/>
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="bigGlow"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="shadow"><feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#032B44" floodOpacity="0.45"/></filter>
          <filter id="nodeGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <clipPath id="globeClip"><circle cx="450" cy="450" r="148"/></clipPath>
          {currencies.map(c => (
            <clipPath key={`clip-${c.code}`} id={`clip-${c.code}`}>
              <circle r={c.inner ? 28 : 34}/>
            </clipPath>
          ))}
        </defs>

        {/* ── SIGNAL RINGS ── */}
        {[0, 2, 4].map((delay, i) => (
          <motion.circle key={`sig-${i}`} cx="450" cy="450"
            fill="none" stroke="#0BB5E0" strokeWidth="0.5"
            animate={{ r: [155, 400], opacity: [0.2, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity, ease: "easeOut" }}/>
        ))}

        {/* ── ORBIT RINGS ── */}
        <motion.g style={{ transformOrigin: "450px 450px" }} animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={outerRx} ry={outerRy}
            fill="none" stroke="url(#orbitG1)" strokeWidth="1.5" strokeDasharray="10 6" opacity="0.55"
            transform="rotate(-15 450 450)"/>
          <ellipse cx="450" cy="450" rx={outerRx + 4} ry={outerRy + 3}
            fill="none" stroke="#00C9A7" strokeWidth="0.3" opacity="0.15"
            transform="rotate(-15 450 450)"/>
        </motion.g>
        <motion.g style={{ transformOrigin: "450px 450px" }} animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="450" cy="450" rx={innerRx} ry={innerRy}
            fill="none" stroke="url(#orbitG2)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.45"
            transform="rotate(20 450 450)"/>
          <ellipse cx="450" cy="450" rx={innerRx + 3} ry={innerRy + 2}
            fill="none" stroke="#F5A623" strokeWidth="0.3" opacity="0.12"
            transform="rotate(20 450 450)"/>
        </motion.g>

        {/* ── CONNECTORS from logo to currencies (ATrustPay connecting the world) ── */}
        {currencies.map((c, i) => {
          const { x, y } = getPos(c.angle - 15 * (c.inner ? -1 : 1), c.inner ? innerRx : outerRx, c.inner ? innerRy : outerRy);
          return (
            <g key={`conn-${i}`}>
              <motion.line x1="450" y1="450" x2={x} y2={y}
                stroke="url(#connG)" strokeWidth="1" strokeDasharray="300"
                animate={{ strokeDashoffset: [300, 0, 0, 300], opacity: [0, 0.5, 0.5, 0] }}
                transition={{ duration: 5, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}/>
              {/* Data particle flowing */}
              <motion.circle r="3.5" fill="#00C9A7" filter="url(#glow)"
                animate={{ cx: [450, x], cy: [450, y], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: i * 0.6 + 1, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}/>
              {/* Reverse particle (world sending back to Africa) */}
              <motion.circle r="3" fill="#7AE2FA" filter="url(#glow)"
                animate={{ cx: [x, 450], cy: [y, 450], opacity: [0, 0.9, 0.9, 0] }}
                transition={{ duration: 2, delay: i * 0.6 + 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}/>
            </g>
          );
        })}

        {/* ── ROTATING GLOBE WITH WORLD MAP ── */}
        <motion.g
          animate={{ scale: [1, 1.01, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}>

          {/* Globe shadow */}
          <ellipse cx="450" cy="618" rx="95" ry="12" fill="#032B44" opacity="0.12"/>
          {/* Ocean sphere */}
          <circle cx="450" cy="450" r="148" fill="url(#globeGrad)" filter="url(#shadow)"/>
          <circle cx="450" cy="450" r="148" fill="url(#oceanGrad)"/>
          <circle cx="450" cy="450" r="148" fill="url(#globeShine)"/>

          {/* ── ROTATING WORLD MAP (continents) ── */}
          <g clipPath="url(#globeClip)">
            {/* Grid lines (faint) */}
            <g opacity="0.12">
              {[-80, -40, 0, 40, 80].map(lat => (
                <ellipse key={`lat${lat}`} cx="450" cy={450 + lat}
                  rx={148 * Math.cos((Math.abs(lat) * Math.PI) / 180)} ry="5"
                  fill="none" stroke="#7DD3FC" strokeWidth="0.4"/>
              ))}
            </g>

            {/* CONTINENTS — rotating continuously */}
            <motion.g
              animate={{ x: [0, -120, -240, -360, -480, -600, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* === FIRST SET (visible initially) === */}

              {/* AFRICA — highlighted prominently */}
              <g>
                <path d="M470 370 L478 362 L488 358 L495 362 L498 372 L502 385 L505 400 L508 420 L506 442 L510 458 L508 478 L502 495 L494 510 L486 522 L478 530 L468 534 L458 530 L450 518 L444 505 L440 490 L436 472 L434 456 L432 440 L434 425 L438 408 L444 392 L450 380 L458 372 Z"
                  fill="url(#africaHL)" stroke="#00C9A7" strokeWidth="1.2"/>
                {/* Madagascar */}
                <path d="M516 495 L520 488 L522 498 L520 510 L516 515 Z"
                  fill="#10B981" opacity="0.6" stroke="#00C9A7" strokeWidth="0.5"/>
                {/* Africa glow effect — stronger */}
                <path d="M470 370 L478 362 L488 358 L495 362 L498 372 L502 385 L505 400 L508 420 L506 442 L510 458 L508 478 L502 495 L494 510 L486 522 L478 530 L468 534 L458 530 L450 518 L444 505 L440 490 L436 472 L434 456 L432 440 L434 425 L438 408 L444 392 L450 380 L458 372 Z"
                  fill="none" stroke="#00C9A7" strokeWidth="3" opacity="0.5" filter="url(#bigGlow)"/>
              </g>

              {/* EUROPE */}
              <path d="M440 340 L450 332 L462 328 L475 330 L488 326 L496 330 L500 340 L495 348 L488 352 L480 350 L472 354 L464 352 L456 356 L448 354 L440 348 Z"
                fill="#38BDF8" opacity="0.35" stroke="#7DD3FC" strokeWidth="0.6"/>

              {/* MIDDLE EAST */}
              <path d="M500 365 L510 358 L520 360 L525 368 L522 378 L515 382 L508 378 L502 372 Z"
                fill="#38BDF8" opacity="0.3" stroke="#7DD3FC" strokeWidth="0.5"/>

              {/* === SECOND SET (scrolls in from right) === */}

              {/* AMERICAS (positioned to scroll in) */}
              {/* North America */}
              <path d="M620 330 L640 320 L660 316 L680 320 L690 332 L688 348 L680 360 L670 370 L660 378 L648 382 L640 376 L632 370 L626 358 L622 346 Z"
                fill="#38BDF8" opacity="0.3" stroke="#7DD3FC" strokeWidth="0.5"/>
              {/* South America */}
              <path d="M660 400 L668 392 L674 396 L678 410 L680 430 L678 450 L674 468 L668 482 L660 490 L654 486 L650 472 L648 455 L650 435 L652 418 L656 406 Z"
                fill="#38BDF8" opacity="0.3" stroke="#7DD3FC" strokeWidth="0.5"/>

              {/* === THIRD SET === */}

              {/* ASIA */}
              <path d="M780 320 L810 310 L840 314 L860 324 L870 340 L868 358 L858 372 L842 380 L822 378 L805 370 L792 358 L784 344 L780 330 Z"
                fill="#38BDF8" opacity="0.3" stroke="#7DD3FC" strokeWidth="0.5"/>
              {/* India */}
              <path d="M830 380 L840 375 L848 380 L850 395 L846 410 L838 420 L830 415 L828 400 L828 390 Z"
                fill="#38BDF8" opacity="0.25" stroke="#7DD3FC" strokeWidth="0.4"/>

              {/* AUSTRALIA */}
              <path d="M870 460 L890 454 L905 458 L910 468 L906 480 L895 486 L882 484 L872 476 L868 468 Z"
                fill="#38BDF8" opacity="0.25" stroke="#7DD3FC" strokeWidth="0.4"/>

              {/* === DUPLICATE AFRICA (for seamless loop) === */}
              <g transform="translate(600, 0)">
                <path d="M470 370 L478 362 L488 358 L495 362 L498 372 L502 385 L505 400 L508 420 L506 442 L510 458 L508 478 L502 495 L494 510 L486 522 L478 530 L468 534 L458 530 L450 518 L444 505 L440 490 L436 472 L434 456 L432 440 L434 425 L438 408 L444 392 L450 380 L458 372 Z"
                  fill="url(#africaHL)" stroke="#00C9A7" strokeWidth="1.2"/>
                <path d="M516 495 L520 488 L522 498 L520 510 L516 515 Z"
                  fill="#10B981" opacity="0.6" stroke="#00C9A7" strokeWidth="0.5"/>
              </g>
              {/* Duplicate Europe */}
              <path d="M1040 340 L1050 332 L1062 328 L1075 330 L1088 326 L1096 330 L1100 340 L1095 348 L1088 352 L1080 350 L1072 354 L1064 352 L1056 356 L1048 354 L1040 348 Z"
                fill="#38BDF8" opacity="0.35" stroke="#7DD3FC" strokeWidth="0.6"/>
            </motion.g>

            {/* Latitude grid lines (stationary, subtle) */}
            <g opacity="0.08">
              {[0].map(lon => (
                <line key={lon} x1="302" y1="450" x2="598" y2="450" stroke="#7DD3FC" strokeWidth="0.5" strokeDasharray="4 4"/>
              ))}
              <line x1="450" y1="302" x2="450" y2="598" stroke="#7DD3FC" strokeWidth="0.5" strokeDasharray="4 4"/>
            </g>
          </g>

          {/* Globe rim — bolder */}
          <circle cx="450" cy="450" r="148" fill="none" stroke="#7DD3FC" strokeWidth="2" opacity="0.35"/>
          <circle cx="450" cy="450" r="152" fill="none" stroke="#00C9A7" strokeWidth="0.5" opacity="0.12"/>
          {/* Specular highlight */}
          <ellipse cx="410" cy="400" rx="55" ry="75" fill="white" opacity="0.05"/>
          {/* Bottom edge shadow */}
          <path d="M310 510 Q450 560 590 510" fill="none" stroke="#082F49" strokeWidth="4" opacity="0.2"/>
        </motion.g>

        {/* ── OUTER ORBIT CURRENCIES (African - green borders) ── */}
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
          {currencies.filter(c => !c.inner).map((c) => {
            const pos = getPos(c.angle, outerRx, outerRy);
            return (
              <g key={c.code} transform={`translate(${pos.x}, ${pos.y})`}>
                <motion.g animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0px 0px" }}>
                  {/* Outer glow ring */}
                  <circle r="44" fill="#00C9A7" opacity="0.12" filter="url(#nodeGlow)"/>
                  <circle r="40" fill="#00C9A7" opacity="0.06"/>
                  {/* Flag circle */}
                  <circle r="34" fill="#0F172A" filter="url(#shadow)"/>
                  <FlagContent code={c.code} clipId={`clip-${c.code}`}/>
                  {/* Slight dark overlay for text readability */}
                  <circle r="34" fill="#000" opacity="0.15"/>
                  {/* Currency symbol */}
                  <text textAnchor="middle" dy="-3" fill="white" fontSize="18" fontWeight="900"
                    fontFamily="Inter, sans-serif" filter="url(#glow)">{c.symbol}</text>
                  <text textAnchor="middle" dy="14" fill="#FFF" fontSize="9" fontWeight="800"
                    fontFamily="Inter, sans-serif" opacity="1">{c.code}</text>
                  {/* Bold border */}
                  <circle r="34" fill="none" stroke="#00C9A7" strokeWidth="3" opacity="0.95"/>
                  <circle r="38" fill="none" stroke="#00C9A7" strokeWidth="1" opacity="0.35"
                    strokeDasharray="3 3"/>
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* ── INNER ORBIT CURRENCIES (Global - gold borders) ── */}
        <motion.g style={{ transformOrigin: "450px 450px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {currencies.filter(c => c.inner).map((c) => {
            const pos = getPos(c.angle, innerRx, innerRy);
            return (
              <g key={c.code} transform={`translate(${pos.x}, ${pos.y})`}>
                <motion.g animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0px 0px" }}>
                  <circle r="36" fill="#F5A623" opacity="0.1" filter="url(#nodeGlow)"/>
                  <circle r="32" fill="#F5A623" opacity="0.05"/>
                  <circle r="28" fill="#0F172A" filter="url(#shadow)"/>
                  <FlagContent code={c.code} clipId={`clip-${c.code}`}/>
                  <circle r="28" fill="#000" opacity="0.12"/>
                  <text textAnchor="middle" dy="-2" fill="white" fontSize="15" fontWeight="900"
                    fontFamily="Inter, sans-serif" filter="url(#glow)">{c.symbol}</text>
                  <text textAnchor="middle" dy="12" fill="#FFF" fontSize="8" fontWeight="800"
                    fontFamily="Inter, sans-serif" opacity="1">{c.code}</text>
                  <circle r="28" fill="none" stroke="#F5A623" strokeWidth="2.5" opacity="0.95"/>
                  <circle r="32" fill="none" stroke="#F5A623" strokeWidth="0.8" opacity="0.3"
                    strokeDasharray="3 3"/>
                </motion.g>
              </g>
            );
          })}
        </motion.g>

        {/* ── ATRUSTPAY LOGO — connecting hub at center ── */}
        <motion.g
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "450px 450px" }}>

          {/* Large glow backdrop */}
          <circle cx="450" cy="450" r="80" fill="#4F46E5" opacity="0.15" filter="url(#bigGlow)"/>
          <circle cx="450" cy="450" r="70" fill="#00C9A7" opacity="0.06" filter="url(#bigGlow)"/>

          {/* White connector ring - "connecting" visual */}
          <motion.circle cx="450" cy="450" r="66" fill="none" stroke="#00C9A7" strokeWidth="1.5"
            strokeDasharray="8 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "450px 450px" }}/>
          <motion.circle cx="450" cy="450" r="72" fill="none" stroke="#7AE2FA" strokeWidth="0.5"
            strokeDasharray="4 8"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "450px 450px" }}/>

          {/* Logo circle — larger */}
          <circle cx="450" cy="450" r="58" fill="url(#logoBg)" filter="url(#bigGlow)"/>
          <circle cx="450" cy="450" r="58" fill="white" opacity="0.08"/>

          {/* ATrustPay brand mark — scaled up */}
          <g transform="translate(416, 418) scale(1.45)">
            <path d="M23 -2 C24.5 -4, 27 -4, 28.5 -2 L45 28 C47 31.5, 44.5 35.5, 40.5 35.5 L11 35.5 C7 35.5, 4.5 31.5, 6.5 28 Z"
              fill="white" opacity="0.95"/>
            <path d="M16 28 C10 26, 6.5 20, 9.5 14.5 C11.5 11, 15 10, 18 12.5 L22 18 C20 22.5, 17.5 26, 16 28Z"
              fill="#4F46E5"/>
            <path d="M26 7 C28 7.5, 30 10, 30 13.5 C30 17.5, 27 20.5, 24.5 20.5 C21.5 20.5, 19.5 17.5, 20 14.5 C20.5 11, 23 7, 26 7Z"
              fill="#4F46E5"/>
            <circle cx="37" cy="5.5" r="5.5" fill="white"/>
            <circle cx="8.5" cy="16" r="4.5" fill="white"/>
          </g>

          {/* "CONNECTING AFRICA TO THE WORLD" — bolder text */}
          <text textAnchor="middle" x="450" y="526" fill="#7DD3FC" fontSize="7.5" fontWeight="700"
            fontFamily="Inter, sans-serif" letterSpacing="3.5" opacity="0.7">
            CONNECTING AFRICA TO THE WORLD
          </text>

          {/* Pulse rings — stronger */}
          <motion.circle cx="450" cy="450" fill="none" stroke="#6366F1" strokeWidth="2"
            animate={{ r: [62, 85, 62], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}/>
          <motion.circle cx="450" cy="450" fill="none" stroke="#00C9A7" strokeWidth="1.5"
            animate={{ r: [62, 100, 62], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}/>
          <motion.circle cx="450" cy="450" fill="none" stroke="#F5A623" strokeWidth="1"
            animate={{ r: [62, 110, 62], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}/>
          {/* Outer ring */}
          <circle cx="450" cy="450" r="58" fill="none" stroke="white" strokeWidth="2.5" opacity="0.25"/>
        </motion.g>

        {/* ── FLOATING PARTICLES ── */}
        {[
          {cx:300,cy:270,r:2},{cx:600,cy:290,r:2.5},{cx:230,cy:510,r:1.5},
          {cx:670,cy:530,r:2},{cx:370,cy:170,r:1.5},{cx:530,cy:730,r:2},
          {cx:150,cy:420,r:1.5},{cx:750,cy:440,r:2},{cx:340,cy:690,r:1.5},
          {cx:560,cy:190,r:2},{cx:190,cy:310,r:1},{cx:710,cy:370,r:1.5},
        ].map((p, i) => (
          <motion.circle key={`p-${i}`} cx={p.cx} cy={p.cy} r={p.r} fill="#7AE2FA"
            animate={{ y:[0,-10,0,10,0], x:[0,5,0,-5,0], opacity:[0.1,0.4,0.1] }}
            transition={{ duration: 3.5+i*0.3, delay: i*0.35, repeat: Infinity, ease: "easeInOut" }}/>
        ))}
      </svg>
    </motion.div>
  );
}
