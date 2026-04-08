"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeUpVariant } from "@/lib/animations";

export default function FooterCTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-green" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build with confidence.
            <br />
            Transact with trust.
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            TrustPay — Trusted Payment Infrastructure for Africa and Beyond
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
              className="bg-white text-primary-700 hover:bg-neutral-100 shadow-xl"
            >
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
