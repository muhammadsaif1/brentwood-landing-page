"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/common/page-hero";
import Link from "next/link";

// IoT Projects Data - easily replaceable with real company data
const iotProjects = [
  {
    id: 1,
    title: "Smart Home Automation",
    description:
      "Complete home automation system with voice control, smart lighting, security integration, and energy management. Connected devices that make homes more efficient and secure.",
    image: "/smart-home.jpg",
    category: "Residential IoT",
  },
  {
    id: 2,
    title: "Industrial Monitoring System",
    description:
      "Real-time monitoring and predictive maintenance for manufacturing equipment. IoT sensors track performance, temperature, and operational efficiency to prevent downtime.",
    image: "/industrial-monitoring.jpg",
    category: "Industrial IoT",
  },
  {
    id: 3,
    title: "Healthcare Device Integration",
    description:
      "Connected medical devices for patient monitoring and data collection. Seamless integration with hospital systems for improved patient care and operational efficiency.",
    image: "/healthcare.jpg",
    category: "Healthcare IoT",
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    description:
      "Urban IoT solutions including traffic management, environmental monitoring, and public safety systems. Creating intelligent cities that respond to citizen needs.",
    image: "/smart-city.jpg",
    category: "Smart City",
  },
  {
    id: 5,
    title: "Agricultural IoT Solutions",
    description:
      "Precision farming with soil sensors, weather monitoring, and automated irrigation systems. IoT technology that optimizes crop yields and resource usage.",
    image: "/agriculture.jpg",
    category: "AgriTech IoT",
  },
  {
    id: 6,
    title: "Fleet Management System",
    description:
      "GPS tracking, vehicle diagnostics, and driver behavior monitoring for commercial fleets. Real-time insights for improved efficiency and safety.",
    image: "/fleet-management.jpg",
    category: "Transportation IoT",
  },
];

export default function IoTPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Internet of Things (IoT)"
        description="Smart, scalable, and interconnected — explore Brentwood's approach to IoT innovation."
      />

      {/* IoT by Brentwood Global Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* [This section already converted correctly — kept unchanged] */}
        ...
      </section>

      {/* IoT Projects Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#00f6ff]/30 to-[#00bfff]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00bfff]/20 to-[#007bff]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00f6ff]/40 to-[#00bfff]/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Popular IoT{" "}
              <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative IoT solutions that bridge the physical and digital
              worlds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#007bff]/80 via-[#00bfff]/40 to-transparent flex items-end justify-center pb-6"
                  >
                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#007bff] px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </motion.button> */}
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-[#007bff] transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-[#00f6ff] to-[#007bff] rounded-full origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00bfff]/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#00f6ff]/20 to-[#00bfff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#00bfff]/10 to-[#00f6ff]/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Connect Your{" "}
              <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
                Future?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s build intelligent IoT solutions that transform your
              business and create meaningful connections
            </p>
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 191, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-[#00bfff]/25 transition-all duration-300"
              >
                Start Your IoT Journey
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="ml-2 inline-block"
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
