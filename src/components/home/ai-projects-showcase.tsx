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
      title: "SmartaDoc AI – Chat with Your Documents",
      description:
        "An AI-powered web application that lets users upload PDFs, spreadsheets, presentations, JSON files, and more, then interactively query, summarize, and analyze the content using natural-language chat interfaces.",
      image: "/ai-powered.png",
      category: "AI",
    },
    {
      title: "ChatFlow – AI Chatbot Built for Growth",
      description:
        "AI chatbot builder that effortlessly automates customer support, generates qualifying leads, and boosts SEO visibility, reducing support response time by up to 8× while helping businesses rank higher on search engines.",
      image: "/ai-chatbot.png",
      category: "Natural Language Processing",
    },
    {
      title: "AI Health Assistant for Mindful Care",
      description:
        "A fully AI-driven health platform offering patients a 24/7 AI Doctor, symptom checker, and lab test analysis.",
      image: "/ai-health-assisstant.png",
      category: "Computer Vision",
    },
    {
      title: "Runday.ai – AI Agent Sales Assistant",
      description:
        "A no-code generative AI platform that responds to inbound buyer queries 24/7, qualifies leads, books appointments, and follows up on no-shows.",
      image: "/runday-ai.png",
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
              className="flex w-full"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-2xl overflow-hidden w-full m-0 p-0">
                    <CardContent className="p-0 w-full h-full">
                      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-0 h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] max-h-[350px] sm:max-h-[400px] lg:max-h-[450px]">
                        {/* Image */}
                        <div className="relative overflow-hidden h-full min-h-0 w-full max-h-[160px] sm:max-h-[180px] lg:max-h-[400px]">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover m-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#00bfff] text-white px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm font-medium rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl font-bold text-foreground mb-6"
                          >
                            {project.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 lg:mb-8 line-clamp-3"
                          >
                            {project.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            {/* <Button className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:from-[#00e0ff] hover:to-[#005ce6] text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 group">
                              View Project Details
                              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Button> */}
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
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
