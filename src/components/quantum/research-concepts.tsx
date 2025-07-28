"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ResearchConcepts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      title: "Advanced Security at the Quantum Level",
      image:
        "/placeholder.svg?height=200&width=200&text=Security+Hammer+Bitcoin",
      description: "Quantum cryptography and blockchain security integration",
    },
    {
      title: "Continuous Learning & Prototyping",
      image: "/placeholder.svg?height=200&width=200&text=Laptop+Researcher",
      description: "Research-driven development and quantum algorithm testing",
    },
    {
      title: "Quantum Architecture & Entanglement",
      image:
        "/placeholder.svg?height=200&width=200&text=Quantum+Flower+Structure",
      description: "Complex quantum system design and entanglement protocols",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Lines Top */}
        <div className="relative mb-16">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Research & Core Concepts
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.8, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={concept.image || "/placeholder.svg"}
                    alt={`${concept.title} - Replaceable Image`}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500/30 rounded-full blur-sm"
                />
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
              >
                {concept.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-gray-600 leading-relaxed"
              >
                {concept.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Animated Lines Bottom */}
        <div className="relative mt-16">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-0 right-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
