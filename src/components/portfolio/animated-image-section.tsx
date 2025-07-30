"use client";

import { motion } from "framer-motion";

export default function AnimatedImageSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%2300bfff%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated Tech Illustration */}
              <div className="aspect-video bg-gradient-to-br from-[#00f6ff] via-[#00bfff] to-[#007bff] flex items-center justify-center relative overflow-hidden">
                {/* Rotating Tech Elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/30 rounded-full" />
                  <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white/30 rounded-lg" />
                  <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-white/30 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white/30 rounded-lg" />
                </motion.div>

                {/* Central Innovation Hub */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 text-center"
                >
                  <div className="text-8xl md:text-9xl text-white/90 mb-6">
                    💡
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Innovation Hub
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Where Ideas Come to Life
                  </p>
                </motion.div>

                {/* Floating Code Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.3, 0.9, 0.3],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    className="absolute w-3 h-3 bg-white rounded-full"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${20 + (i % 3) * 25}%`,
                    }}
                  />
                ))}

                {/* Pulse Effect */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-white/10 rounded-full"
                />

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"
                />
              </div>

              {/* Overlay Lines */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              />
              <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 1.5,
                }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              />
            </motion.div>

            {/* Floating Elements & Accents */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-[#00bfff]/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#007bff]/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-4 left-4 w-8 h-8 border-2 border-[#00bfff]/50 rounded-full"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-4 right-4 w-6 h-6 border-2 border-[#007bff]/50 rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
