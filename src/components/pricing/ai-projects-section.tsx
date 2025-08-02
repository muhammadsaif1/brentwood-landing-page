"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Target } from "lucide-react";

export default function AIProjectsSection() {
  const aiProjects = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description:
        "Streamline workflows with AI-powered process automation that learns and adapts to your business needs.",
      image:
        "https://images.pexels.com/photos/8294560/pexels-photo-8294560.jpeg",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Harness the power of machine learning to forecast trends and make data-driven decisions.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    },
    {
      icon: Zap,
      title: "Smart Recommendations",
      description:
        "Deliver personalized experiences with AI recommendation engines that boost engagement.",
      image:
        "https://images.pexels.com/photos/4476623/pexels-photo-4476623.jpeg",
    },
    {
      icon: Target,
      title: "Computer Vision",
      description:
        "Transform visual data into actionable insights with advanced image recognition technology.",
      image: "https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Top Animated Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From intelligent automation to predictive analytics, our AI services
            help you unlock new dimensions of efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full  p-0">
                <CardContent className="p-0 ">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 bg-[#00bfff]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00bfff]/30 transition-all duration-300"
                    >
                      <project.icon className="w-6 h-6 text-[#007bff]" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#007bff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-4 rounded-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00bfff] to-transparent">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
    </section>
  );
}
