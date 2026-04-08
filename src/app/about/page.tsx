"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/animations/GradientOrb";
import { fadeUpVariant, fadeLeftVariant, fadeRightVariant, staggerContainer } from "@/lib/animations";
import { VALUES, SITE_CONFIG } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <GradientOrb className="top-10 -right-32" color="bg-primary-500" size="w-80 h-80" />
        <GradientOrb className="bottom-0 -left-48" color="bg-accent-green" size="w-64 h-64" delay={2} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <Container className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-green border border-white/10"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-accent-green to-primary-300 bg-clip-text text-transparent">
              TrustPay
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-200 max-w-2xl mx-auto"
          >
            Building trusted financial systems for African and cross-border commerce.
          </motion.p>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeftVariant}
              className="p-8 lg:p-12 rounded-2xl bg-white border border-neutral-200 shadow-sm"
            >
              <span className="inline-block mb-4 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
                Our Belief
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                More than moving money
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We believe the future of payments is not just about moving money. It is about enabling secure, compliant, and trustworthy transactions between businesses, platforms, and people.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRightVariant}
              className="p-8 lg:p-12 rounded-2xl bg-white border border-neutral-200 shadow-sm"
            >
              <span className="inline-block mb-4 rounded-full bg-accent-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-green">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Simplify and secure
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our mission is to simplify and secure payments through trust-centered infrastructure built for African realities and global connectivity.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <span className="inline-block mb-6 rounded-full bg-primary-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-600">
                Leadership
              </span>

              {/* Avatar placeholder */}
              <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-green flex items-center justify-center mb-8 shadow-xl shadow-primary-500/20">
                <span className="text-4xl font-bold text-white">CH</span>
              </div>

              <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                {SITE_CONFIG.founder}
              </h3>
              <p className="text-primary-600 font-medium mb-6">
                {SITE_CONFIG.founderTitle}
              </p>
              <p className="text-neutral-600 leading-relaxed max-w-xl mx-auto">
                TrustPay is led by {SITE_CONFIG.founder}, with the vision of building one of Africa&apos;s most trusted financial infrastructure platforms. Under his leadership, TrustPay is pioneering trust-enabled payment systems designed for the unique demands of African commerce.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <Container>
          <SectionHeading
            badge="Our Values"
            title="What drives us"
            subtitle="The principles that guide every decision at TrustPay."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUpVariant}
                className="group p-8 rounded-2xl bg-white border border-neutral-200 text-center hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-green/10 flex items-center justify-center mx-auto mb-6 group-hover:from-primary-500 group-hover:to-accent-green transition-all duration-300">
                  <span className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors">
                    {value.title[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
