"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Brain,
  Shield,
  Cloud,
  Palette,
  BarChart3,
  Gamepad2,
} from "lucide-react";

export default function ServicesWeOffer() {
  const services = [
    { icon: Code, title: "Web Development", color: "text-blue-500" },
    { icon: Smartphone, title: "Mobile Apps", color: "text-green-500" },
    { icon: Brain, title: "AI Solutions", color: "text-purple-500" },
    { icon: Shield, title: "Cybersecurity", color: "text-red-500" },
    { icon: Cloud, title: "Cloud Services", color: "text-cyan-500" },
    { icon: Palette, title: "UI/UX Design", color: "text-pink-500" },
    { icon: BarChart3, title: "Data Analytics", color: "text-yellow-500" },
    { icon: Gamepad2, title: "Game Development", color: "text-indigo-500" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Lines */}
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-background border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <CardContent className="p-8 text-center relative">
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/90 to-[#007bff]/90 flex items-center justify-center z-10"
                  >
                    <Link href="/contact">
                      <Button className="bg-white text-[#00bfff] hover:bg-gray-100 font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300">
                        Get a Quote
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Default Content */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.color} group-hover:text-white transition-colors duration-300`}
                    />
                  </motion.div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
