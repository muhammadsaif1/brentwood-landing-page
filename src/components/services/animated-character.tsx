"use client";

import { motion } from "framer-motion";

export default function AnimatedCharacter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At Brentwood Global, we don&apos;t just build technology – we
              craft digital experiences that transform businesses and empower
              growth. Our team of experts combines innovation with proven
              methodologies to deliver solutions that exceed expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              From startups to enterprise organizations, we&apos;ve helped
              hundreds of clients navigate their digital transformation journey
              with confidence and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {["Innovation", "Excellence", "Partnership", "Results"].map(
                (value, index) => (
                  <motion.div
                    key={value}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white px-6 py-3 rounded-full shadow-md border border-orange-200 hover:border-orange-400 transition-all duration-300"
                  >
                    <span className="text-orange-600 font-semibold">
                      {value}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden">
              {/* Animated Character */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 transform -translate-x-1/2 top-8"
              >
                <div className="text-8xl">🚀</div>
              </motion.div>

              {/* Moving Person */}
              <motion.div
                animate={{
                  y: [0, 300, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute right-8 top-8"
              >
                <div className="text-6xl">🧑‍💻</div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="absolute w-4 h-4 bg-orange-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                />
              ))}

              {/* Tech Icons */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute bottom-8 left-8 text-4xl"
              >
                ⚙️
              </motion.div>

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-8 text-3xl"
              >
                💡
              </motion.div>
            </div>

            {/* Floating Decorative Elements */}
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
      </div>
    </section>
  );
}
