"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Palette,
  Cloud,
  BarChart3,
  Headphones,
  Zap,
} from "lucide-react";

export default function AdditionalServices() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates exceptional digital experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance services.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your systems for maximum efficiency and speed.",
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Lines */}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Additional{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to support every aspect of your digital
            journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#00bfff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mx-auto mt-6 rounded-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
