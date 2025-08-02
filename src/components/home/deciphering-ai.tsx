"use client";

import { motion } from "framer-motion";

export default function DecipheringAI() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          >
            Deciphering{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/80 leading-relaxed mb-8"
          >
            At Brentwood Global, we&apos;re at the forefront of AI innovation,
            transforming complex algorithms into practical solutions that drive
            business growth. Our AI expertise spans machine learning, natural
            language processing, computer vision, and predictive analytics.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 leading-relaxed"
          >
            We believe AI should be accessible, ethical, and transformative. Our
            team works closely with clients to identify opportunities where AI
            can create meaningful impact, from automating routine tasks to
            uncovering insights that drive strategic decisions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
