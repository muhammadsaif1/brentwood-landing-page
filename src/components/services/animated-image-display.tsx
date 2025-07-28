"use client";

import { motion } from "framer-motion";

export default function AnimatedImageDisplay() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated Tech Illustration */}
            <div className="aspect-video bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full" />
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white/20 rounded-lg" />
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/20 rounded-lg" />
              </motion.div>

              {/* Central Tech Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10 text-center"
              >
                <div className="text-8xl md:text-9xl text-white/80 mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Digital Innovation
                </h3>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                />
              ))}

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-red-500/20" />
            </div>

            {/* Overlay Lines */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
            <motion.div
              animate={{
                x: ["100%", "-100%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 2,
              }}
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>

          {/* Floating Elements Around Image */}
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
            className="absolute -top-6 -right-6 w-12 h-12 bg-orange-400 rounded-full opacity-20 blur-sm"
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
            }}
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-30 blur-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
