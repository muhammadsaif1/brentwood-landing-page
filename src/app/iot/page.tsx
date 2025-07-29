"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/common/page-hero";

// IoT Projects Data - easily replaceable with real company data
const iotProjects = [
  {
    id: 1,
    title: "Smart Home Automation",
    description:
      "Complete home automation system with voice control, smart lighting, security integration, and energy management. Connected devices that make homes more efficient and secure.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Home+IoT+System",
    category: "Residential IoT",
  },
  {
    id: 2,
    title: "Industrial Monitoring System",
    description:
      "Real-time monitoring and predictive maintenance for manufacturing equipment. IoT sensors track performance, temperature, and operational efficiency to prevent downtime.",
    image:
      "/placeholder.svg?height=400&width=600&text=Industrial+IoT+Monitoring",
    category: "Industrial IoT",
  },
  {
    id: 3,
    title: "Healthcare Device Integration",
    description:
      "Connected medical devices for patient monitoring and data collection. Seamless integration with hospital systems for improved patient care and operational efficiency.",
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+IoT+Devices",
    category: "Healthcare IoT",
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    description:
      "Urban IoT solutions including traffic management, environmental monitoring, and public safety systems. Creating intelligent cities that respond to citizen needs.",
    image:
      "/placeholder.svg?height=400&width=600&text=Smart+City+IoT+Infrastructure",
    category: "Smart City",
  },
  {
    id: 5,
    title: "Agricultural IoT Solutions",
    description:
      "Precision farming with soil sensors, weather monitoring, and automated irrigation systems. IoT technology that optimizes crop yields and resource usage.",
    image:
      "/placeholder.svg?height=400&width=600&text=Agricultural+IoT+Sensors",
    category: "AgriTech IoT",
  },
  {
    id: 6,
    title: "Fleet Management System",
    description:
      "GPS tracking, vehicle diagnostics, and driver behavior monitoring for commercial fleets. Real-time insights for improved efficiency and safety.",
    image: "/placeholder.svg?height=400&width=600&text=Fleet+Management+IoT",
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
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Lines - Top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent">
          <motion.div
            className="h-full w-32 bg-gradient-to-r from-orange-400 to-orange-600"
            animate={{ x: ["-100%", "100vw"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Animated Lines - Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent">
          <motion.div
            className="h-full w-32 bg-gradient-to-r from-orange-600 to-orange-400"
            animate={{ x: ["100vw", "-100%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
            >
              IoT by{" "}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-extrabold">
                  Brentwood Global
                </span>

                {/* Glowing Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-extrabold blur-sm -z-10"
                >
                  Brentwood Global
                </motion.div>

                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 origin-left"
                />
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Connecting the future through intelligent IoT solutions that
              transform businesses and enhance lives
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* IoT Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Gradient Spots */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/40 to-orange-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our IoT{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-500/40 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
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

        {/* Gradient Spots */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Connect Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Future?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s build intelligent IoT solutions that transform your
              business and create meaningful connections
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 122, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              Start Your IoT Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
