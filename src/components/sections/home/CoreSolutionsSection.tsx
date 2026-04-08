"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { SOLUTIONS } from "@/lib/constants";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

const solutionIcons: Record<string, React.ReactNode> = {
  "credit-card": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  lock: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

export default function CoreSolutionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          badge="Core Solutions"
          title="Everything you need to power trusted commerce"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SOLUTIONS.map((solution) => (
            <Card key={solution.title}>
              <motion.div variants={fadeUpVariant}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-green/10 flex items-center justify-center text-primary-600 mb-6 group-hover:from-primary-500 group-hover:to-accent-green group-hover:text-white transition-all duration-300">
                  {solutionIcons[solution.icon]}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
