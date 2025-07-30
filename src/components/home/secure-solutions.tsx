"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Zap } from "lucide-react";

export default function SecureSolutions() {
  const solutions = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced protection for your digital assets and infrastructure.",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Comprehensive data protection and compliance solutions.",
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Real-time monitoring and threat intelligence systems.",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 incident response and recovery services.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Secure{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Protecting your business with enterprise-grade security solutions
            and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/10"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-r from-[#00f6ff] to-[#007bff] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00bfff]/25"
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#00bfff] transition-colors">
                {solution.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {solution.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-[#00f6ff] to-[#007bff] mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
