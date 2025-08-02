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
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
    {
      icon: Factory,
      title: "Industrial IoT",
      description:
        "Connected manufacturing and industrial monitoring solutions.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
    {
      icon: Car,
      title: "Connected Vehicles",
      description: "Advanced automotive IoT and telematics systems.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
    {
      icon: Heart,
      title: "Healthcare IoT",
      description:
        "Medical device connectivity and health monitoring platforms.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Line */}
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
            Internet of{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Things
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
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
              <Card className="bg-white/5 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full relative group">
                {/* Hover Glow - moved to Card level */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/0 to-[#007bff]/0 group-hover:from-[#00f6ff]/10 group-hover:to-[#007bff]/10 transition-all duration-300" />

                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-[#00bfff]/25`}
                  >
                    <service.icon className="w-8 h-8 text-white " />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#00bfff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
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
