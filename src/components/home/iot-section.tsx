"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Factory, Car, Heart } from "lucide-react";

export default function IoTSection() {
  const iotServices = [
    {
      icon: Home,
      title: "Smart Homes",
      description: "Intelligent home automation systems for modern living.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Factory,
      title: "Industrial IoT",
      description:
        "Connected manufacturing and industrial monitoring solutions.",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: Car,
      title: "Connected Vehicles",
      description: "Advanced automotive IoT and telematics systems.",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Heart,
      title: "Healthcare IoT",
      description:
        "Medical device connectivity and health monitoring platforms.",
      gradient: "from-red-600 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Internet of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Things
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting devices, data, and decisions to create intelligent
            ecosystems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {iotServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-8 text-center relative">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Bottom Border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${service.gradient} mx-auto mt-6 rounded-full`}
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
