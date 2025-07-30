"use client";

import { motion } from "framer-motion";

export default function ProjectInMind() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Moving Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/20 via-transparent to-[#007bff]/20 bg-[length:200%_100%]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Have a Project in{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
              Mind?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Let&apos;s turn your vision into reality. Our team is ready to bring
            innovation and expertise to your next big idea.
          </motion.p>

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
            className="absolute top-20 left-1/4 w-16 h-16 bg-[#00f6ff]/20 rounded-full blur-xl"
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
            className="absolute bottom-20 right-1/4 w-12 h-12 bg-[#007bff]/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
