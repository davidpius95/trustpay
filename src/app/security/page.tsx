"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/animations/GradientOrb";
import { SECURITY_PRINCIPLES } from "@/lib/constants";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const principleIcons = [
  <svg key="0" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  <svg key="1" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="2" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="3" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  <svg key="4" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="5" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <GradientOrb className="top-10 -right-32" color="bg-primary-500" size="w-80 h-80" />
        <GradientOrb className="bottom-0 -left-48" color="bg-accent-green" size="w-64 h-64" delay={2} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/20"
          >
            <svg className="w-10 h-10 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Security &{" "}
            <span className="bg-gradient-to-r from-accent-green to-primary-300 bg-clip-text text-transparent">
              Trust
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-200 max-w-2xl mx-auto"
          >
            TrustPay is designed with security, compliance, and transaction integrity at its core.
          </motion.p>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Trust is not a marketing claim.
              </h2>
              <p className="text-xl text-primary-600 font-medium mb-4">
                It is an infrastructure principle.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Our infrastructure philosophy places security at the foundation of every system, every transaction, and every interaction. From how we design our architecture to how we handle your data — security is never an afterthought.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionHeading
            badge="Security Principles"
            title="Built on uncompromising standards"
            subtitle="Our infrastructure philosophy includes these core security principles."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SECURITY_PRINCIPLES.map((principle, i) => (
              <motion.div
                key={principle.title}
                variants={fadeUpVariant}
                className="group p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-green/10 flex items-center justify-center text-primary-600 mb-6 group-hover:from-primary-500 group-hover:to-accent-green group-hover:text-white transition-all duration-300">
                  {principleIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Infrastructure Visual */}
      <section className="relative py-24 lg:py-32 bg-primary-900 overflow-hidden">
        <GradientOrb className="-top-32 right-0" color="bg-primary-600" size="w-96 h-96" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Layered Security Architecture
              </h2>
              <p className="text-primary-300">
                Multiple layers of protection working together to keep your transactions safe.
              </p>
            </motion.div>

            {/* Security layers visualization */}
            <div className="space-y-4">
              {[
                { label: "Application Layer", desc: "Input validation, authentication, authorization", width: "100%" },
                { label: "Transport Layer", desc: "TLS encryption, certificate pinning", width: "85%" },
                { label: "Data Layer", desc: "Encryption at rest, tokenization, masking", width: "70%" },
                { label: "Infrastructure Layer", desc: "Network segmentation, DDoS protection", width: "55%" },
                { label: "Core", desc: "Secure enclaves, key management", width: "40%" },
              ].map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  style={{ width: layer.width, originX: 0.5 }}
                  className="mx-auto rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {layer.label}
                  </h4>
                  <p className="text-primary-400 text-xs sm:text-sm mt-1">
                    {layer.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
