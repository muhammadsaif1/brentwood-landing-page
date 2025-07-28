"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Calendar } from "lucide-react";

export default function CompanyMetrics() {
  const metrics = [
    {
      icon: Users,
      value: "50+",
      label: "Clients Served",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: Briefcase,
      value: "200+",
      label: "Projects Completed",
      description: "Successful deliveries across industries",
    },
    {
      icon: Calendar,
      value: "5+",
      label: "Years in Business",
      description: "Experience you can count on",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Every number tells a story of success, innovation, and partnership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
              >
                <metric.icon className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {metric.value}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-white/80">{metric.description}</p>

              {/* Animated Underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-white/40 mx-auto mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
