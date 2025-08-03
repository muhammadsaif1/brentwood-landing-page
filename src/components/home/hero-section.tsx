"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden w-full max-w-full overscroll-x-none">
      {/* Video Background Wrapper */}
      <div className="w-full max-w-[100vw] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden max-w-[100vw]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full max-w-[100vw] min-w-full h-full object-cover will-change-transform"
          >
            <source
              src="https://videos.pexels.com/video-files/27936889/12266398_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center py-20 sm:py-32">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 mb-8 sm:mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2"
            >
              <span className="block">BRENTWOOD</span>
              <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent block mt-2">
                GLOBAL
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
            >
              A multi-faceted IT powerhouse offering comprehensive solutions in{" "}
              <span className="text-[#00bfff] font-semibold">AI</span>,{" "}
              <span className="text-[#00bfff] font-semibold">Blockchain</span>,{" "}
              <span className="text-[#00bfff] font-semibold">
                Web Development
              </span>
              , and{" "}
              <span className="text-[#00bfff] font-semibold">
                Strategic Marketing
              </span>
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4 sm:px-6"
          >
            <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:brightness-110 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00bfff]/25 group min-w-[200px] sm:min-w-[220px]">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff]/10 hover:border-[#00bfff] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 group bg-transparent backdrop-blur-sm min-w-[200px] sm:min-w-[220px]"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Optional: Scroll Indicator for Mobile */}
        </div>
      </div>
    </section>
  );
}
