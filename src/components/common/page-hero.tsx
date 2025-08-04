"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Tech Grid Pattern with Blue Theme */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%232563eb%22 fillOpacity=%220.3%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
        </div>

        {/* Floating Animated Elements - Blue Theme */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 120, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-indigo-500/15 to-blue-500/15 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/25 to-purple-500/25 rounded-full blur-xl"
        />

        {/* Animated Lines - EPAM Style */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />

        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            {title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className={`inline-block mr-4 ${
                  index === title.split(" ").length - 1
                    ? "bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-8"
          >
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - EPAM Style */}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
