"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Calendar, Globe } from "lucide-react";

export function ImpactStats() {
  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    experience: 0,
    countries: 0,
  });

  const stats = [
    {
      icon: Building2,
      label: "Projects Completed",
      value: 200,
      suffix: "+",
      key: "projects",
    },
    {
      icon: Users,
      label: "Happy Customers",
      value: 120,
      suffix: "+",
      key: "customers",
    },
    {
      icon: Calendar,
      label: "Years of Experience",
      value: 5,
      suffix: "+",
      key: "experience",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: 15,
      suffix: "+",
      key: "countries",
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("impact-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="impact-stats"
    >
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent">
        <motion.div
          className="h-full w-20 bg-gradient-to-r from-orange-400 to-orange-600"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent">
        <motion.div
          className="h-full w-20 bg-gradient-to-r from-orange-400 to-orange-600"
          animate={{ x: [window.innerWidth + 100, -100] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-5xl font-bold text-gray-900 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {counts[stat.key as keyof typeof counts]}
                      {stat.suffix}
                    </motion.div>

                    <p className="text-gray-600 font-medium">{stat.label}</p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-1 bg-gradient-to-r from-orange-500 to-red-600 mt-4 rounded-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Our journey is defined by numbers that reflect trust, commitment,
            and performance. Every project represents a story of collaboration
            and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
