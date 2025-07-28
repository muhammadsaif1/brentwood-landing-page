"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuantumOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Quantum Computing
              <span className="block text-orange-500">Overview</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Quantum computing represents a fundamental shift in computational
              paradigms, leveraging quantum mechanical phenomena such as
              superposition and entanglement to process information in ways that
              classical computers cannot.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At Brentwood Global, our quantum research division explores
              practical applications of quantum algorithms, quantum
              cryptography, and quantum machine learning to solve complex
              problems that are intractable for classical systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our interdisciplinary team combines expertise in quantum physics,
              computer science, and engineering to develop next-generation
              quantum solutions that will define the future of computing,
              security, and artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4"
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                Learn More About Our Research
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-8">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Quantum+Computing+Visualization"
                  alt="Quantum Computing Visualization - Replaceable"
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Animation Elements */}
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
                  className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 rounded-full blur-sm"
                />

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-8 w-12 h-12 bg-orange-400/30 rounded-full blur-sm"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"
                />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
