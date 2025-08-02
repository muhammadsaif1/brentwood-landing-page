"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Briefcase,
  Calendar,
  Award,
  Globe,
  LucideIcon,
} from "lucide-react";
import { useRef, useEffect } from "react";

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export default function CompanyMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform vertical scroll to horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current && scrollContainerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          // Only prevent default for significant horizontal scroll
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaX;
          } else if (Math.abs(e.deltaY) > 10) {
            // Threshold to allow small vertical scrolls
            scrollContainerRef.current.scrollLeft += e.deltaY;
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const metrics: Metric[] = [
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
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      description: "Recognition for excellence",
    },
    {
      icon: Globe,
      value: "10+",
      label: "Countries Served",
      description: "Global reach and impact",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 bg-background relative overflow-hidden"
    >
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Every number tells a story of success, innovation, and partnership
          </p>
        </motion.div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <motion.div
            className="flex flex-nowrap gap-8 min-w-max"
            style={{ x }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group flex-shrink-0 w-80 p-8 snap-center bg-background"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#00f6ff] to-[#00bfff] rounded-full flex items-center justify-center group-hover:brightness-110 transition-all duration-300"
                >
                  <metric.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mb-2"
                >
                  {metric.value}
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>

                <p className="text-foreground/70">{metric.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mx-auto mt-4 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        ></motion.div>
      </div>
    </section>
  );
}
