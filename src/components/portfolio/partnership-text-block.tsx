"use client";

import { motion } from "framer-motion";

export default function PartnershipTextBlock() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Gradient Animation */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-transparent to-red-100/50 bg-[length:200%_100%]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Every product is a{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                partnership
              </motion.span>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg -z-10 blur-sm"
              />
            </span>
            . We evolve with our clients, learning from each build, and{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                scaling what works
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
              />
            </span>
            .
          </h2>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-10 left-10 w-16 h-16 bg-orange-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-12 h-12 bg-red-200/30 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
