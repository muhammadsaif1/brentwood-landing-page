"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function MessageBoxBanner() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Message Box */}
          <div className="relative bg-gradient-to-br from-[#00f6ff]/10 to-[#007bff]/10 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%2300bfff%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
            </div>

            {/* Soft Lighting Effects */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#00f6ff]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#007bff]/20 rounded-full blur-3xl" />

            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl text-[#00bfff]/20 mb-6 text-center"
            >
              &apos;
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Your success is our mission —{" "}
                <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
                  let&apos;s build the future together
                </span>
              </h3>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Every partnership begins with trust, every project starts with
                passion, and every success story is written together.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-8 right-8 w-8 h-8 border-2 border-[#00f6ff] rounded-full opacity-30"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-8 left-8 w-6 h-6 border-2 border-[#007bff] rounded-full opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
