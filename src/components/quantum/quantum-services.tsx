"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuantumServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Quantum Cryptography",
      description:
        "Implementing unbreakable encryption with quantum protocols.",
      image: "/placeholder.svg?height=300&width=400&text=Key+Data+Streams",
      reverse: false,
    },
    {
      title: "Quantum AI Models",
      description:
        "Training AI to adapt within quantum-optimized environments.",
      image:
        "/placeholder.svg?height=300&width=400&text=AI+Brain+Quantum+Sphere",
      reverse: true,
    },
    {
      title: "Quantum IoT Integration",
      description: "Merging quantum logic with smart device intelligence.",
      image: "/placeholder.svg?height=300&width=400&text=IoT+Chip+Particles",
      reverse: false,
    },
    {
      title: "Simulated Quantum Environments",
      description: "Create and test in sandboxed quantum testbeds.",
      image: "/placeholder.svg?height=300&width=400&text=Grid+Matrix+Particles",
      reverse: true,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quantum Technologies –{" "}
              <span className="text-orange-500">Services We Provide</span>
            </h2>

            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-transparent to-orange-50 -z-10 blur-3xl opacity-50" />
          </div>
        </motion.div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Animated Lines Above */}
              <div className="relative mb-8">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                />
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    duration: 12 + index * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-0 right-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                />
              </div>

              {/* Service Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-6 ${service.reverse ? "lg:col-start-2" : ""}`}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: service.reverse ? 50 : -50 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: service.reverse ? 50 : -50 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: service.reverse ? 50 : -50 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    Our quantum research team leverages cutting-edge quantum
                    computing principles to deliver solutions that push the
                    boundaries of what&apos;s possible in modern technology.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 group">
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        Explore This Service →
                      </span>
                    </button>
                  </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: service.reverse ? -50 : 50 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className={`relative group ${service.reverse ? "lg:col-start-1" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-gray-50 p-6">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - Replaceable Service Image`}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute top-4 right-4 w-8 h-8 bg-orange-500/30 rounded-full blur-sm"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Animated Lines Below */}
              <div className="relative mt-8">
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                />
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 14 + index * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 right-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
