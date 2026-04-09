"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GradientOrb from "@/components/animations/GradientOrb";
import { PRODUCTS } from "@/lib/constants";
import { fadeUpVariant, fadeLeftVariant, fadeRightVariant } from "@/lib/animations";

const productIcons = [
  // Payment Gateway
  <svg key="0" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  // Escrow Engine
  <svg key="1" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  // Dashboard
  <svg key="2" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  // API
  <svg key="3" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Compliance
  <svg key="4" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
];

const codeSnippet = `// Initialize ATrustPay SDK
const trustpay = new ATrustPay({
  apiKey: 'sk_live_...',
  environment: 'production'
});

// Create a payment
const payment = await trustpay.payments.create({
  amount: 50000,
  currency: 'NGN',
  customer: { email: 'user@example.com' },
  metadata: { order_id: 'ORD-001' }
});`;

export default function ProductsPage() {
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
            Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-accent-green to-primary-300 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-200 max-w-2xl mx-auto"
          >
            Comprehensive payment infrastructure tools designed for African businesses and global commerce.
          </motion.p>
        </Container>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {PRODUCTS.map((product, i) => {
              const isEven = i % 2 === 1;
              const isAPI = product.title === "API Infrastructure";

              return (
                <div
                  key={product.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text Side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? fadeRightVariant : fadeLeftVariant}
                    className={`${isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-green/10 flex items-center justify-center text-primary-600 mb-6">
                      {productIcons[i]}
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                      {product.title}
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-accent-green flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Visual Side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={isEven ? fadeLeftVariant : fadeRightVariant}
                    className={`${isEven ? "lg:order-1" : ""}`}
                  >
                    {isAPI ? (
                      <div className="rounded-2xl bg-primary-900 p-6 shadow-2xl overflow-hidden">
                        <div className="flex gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <pre className="text-sm text-primary-200 font-mono leading-relaxed overflow-x-auto">
                          <code>{codeSnippet}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="relative rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-green/5 border border-neutral-200 p-12 flex items-center justify-center min-h-[300px]">
                        <div className="text-primary-500/20">
                          <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                            {i === 0 && <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>}
                            {i === 1 && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>}
                            {i === 2 && <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>}
                            {i === 4 && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>}
                          </svg>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-green/10 blur-xl" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent-green/10 to-accent-gold/10 blur-xl" />
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
