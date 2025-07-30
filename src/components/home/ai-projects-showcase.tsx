"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AIProjectsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Smart Analytics Platform",
      description:
        "AI-powered business intelligence dashboard with predictive analytics.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Business Intelligence",
    },
    {
      title: "Voice Assistant Integration",
      description:
        "Custom voice AI solution for enterprise customer service automation.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Natural Language Processing",
    },
    {
      title: "Computer Vision System",
      description:
        "Advanced image recognition for quality control in manufacturing.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Computer Vision",
    },
    {
      title: "Predictive Maintenance AI",
      description: "Machine learning models for equipment failure prediction.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Machine Learning",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Projects{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we&apos;re transforming industries with cutting-edge AI
            solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-80 lg:h-96 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#00bfff] text-white px-3 py-1 rounded-full text-sm font-medium">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-foreground mb-6"
                          >
                            {project.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-muted-foreground leading-relaxed mb-8"
                          >
                            {project.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <Button className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:from-[#00e0ff] hover:to-[#005ce6] text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 group">
                              View Project Details
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#00bfff] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
