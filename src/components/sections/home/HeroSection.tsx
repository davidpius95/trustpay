"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroSVG from "@/components/animations/HeroSVG";
import GradientOrb from "@/components/animations/GradientOrb";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background orbs */}
      <GradientOrb className="top-20 -left-48" color="bg-primary-500" size="w-96 h-96" />
      <GradientOrb className="bottom-20 -right-32" color="bg-accent-green" size="w-80 h-80" delay={2} />
      <GradientOrb className="top-1/2 left-1/3" color="bg-primary-400" size="w-64 h-64" delay={4} />
      <GradientOrb className="top-10 right-1/4" color="bg-accent-gold" size="w-48 h-48" delay={3} />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Extra ambient glow behind the hero SVG */}
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-green/[0.04] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-primary-500/[0.06] blur-2xl pointer-events-none" />

      <Container className="relative z-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Text — takes 5 cols */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block mb-6 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-green border border-accent-green/20 shadow-lg shadow-accent-green/5">
                Financial Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg"
            >
              Trusted Payment{" "}
              <span className="bg-gradient-to-r from-accent-green via-primary-300 to-accent-green bg-clip-text text-transparent drop-shadow-none">
                Infrastructure
              </span>{" "}
              for Africa and Beyond
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-7 text-lg lg:text-xl leading-relaxed text-primary-100/80 max-w-xl font-medium"
            >
              Accept payments. Secure transactions. Move money with confidence.
              ATrustPay is building a new generation of financial infrastructure
              designed for African businesses, cross-border commerce, and
              trust-enabled transactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" variant="primary">
                Get Started
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right: SVG Animation — takes 7 cols for larger display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden md:block lg:col-span-7"
          >
            <HeroSVG />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-primary-300 uppercase tracking-widest">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-primary-300"
            >
              <path
                d="M10 4v12m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
