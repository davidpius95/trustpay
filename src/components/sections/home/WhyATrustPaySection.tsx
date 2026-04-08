"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/animations/GradientOrb";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const pillars = [
  {
    title: "Payment Acceptance",
    description: "Multi-channel collection across cards, mobile money, and bank transfers.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Escrow Security",
    description: "Hold, verify, and release — conditional payment flows that protect all parties.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Compliance Intelligence",
    description: "KYC, KYB, AML screening, and regulatory reporting built into every flow.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Settlement Efficiency",
    description: "Automated reconciliation and faster settlement cycles for merchants.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function WhyTrustPaySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary-900 overflow-hidden">
      <GradientOrb className="-top-32 -right-32" color="bg-primary-600" size="w-96 h-96" />
      <GradientOrb className="bottom-0 -left-48" color="bg-accent-green" size="w-80 h-80" delay={3} />

      <Container className="relative z-10">
        <SectionHeading
          badge="Why TrustPay"
          title="Because commerce needs more than payments. It needs trust."
          subtitle="TrustPay combines payment acceptance, escrow security, compliance intelligence, and settlement efficiency into one modern financial infrastructure platform."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUpVariant}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-green/20 flex items-center justify-center text-accent-green group-hover:from-primary-500 group-hover:to-accent-green group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-primary-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
