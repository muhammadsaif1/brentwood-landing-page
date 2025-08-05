"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToGetToKnowUs = () => {
    const section = document.getElementById("get-to-know-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Preload video
    const video = document.createElement("video");
    video.src = "/animation.webm";
    video.preload = "metadata";

    video.addEventListener("loadeddata", () => {
      setVideoLoaded(true);
    });

    video.addEventListener("error", () => {
      setVideoError(true);
      setVideoLoaded(true); // Show content even if video fails
    });

    // Fallback timeout
    const timeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden w-full max-w-full overscroll-x-none bg-black">
      {/* Loading Screen */}
      {!videoLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black z-20 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#00bfff] border-t-transparent rounded-full mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#00bfff] text-lg font-medium"
            >
              Loading Experience...
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Video Background Wrapper */}
      <div className="w-full max-w-[100vw] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden max-w-[100vw]">
          {!videoError && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => {
                setVideoError(true);
                setVideoLoaded(true);
              }}
              className="absolute inset-0 w-full max-w-[100vw] min-w-full h-full object-cover will-change-transform"
            >
              <source src="/animation.webm" type="video/webm" />
              <source src="/animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          )}

          {/* Fallback animated gradient background */}
          {videoError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
            >
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0"
              />
            </motion.div>
          )}

          {/* Dark overlay for better text readability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-black/70"
          />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 0.3 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center py-20 sm:py-32"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 mb-8 sm:mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: videoLoaded ? 1 : 0,
                y: videoLoaded ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2 flex flex-col items-center"
            >
              <span className="flex items-center gap-2">
                BRENTWOOD
                <Image
                  src="/logo.png"
                  alt="Brentwood Global Logo"
                  width={30}
                  height={30}
                  className="xs:w-10 sm:w-12 md:w-14 lg:w-16 object-contain"
                  priority
                />
              </span>
              <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent mt-2">
                GLOBAL
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: videoLoaded ? 1 : 0,
                y: videoLoaded ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
            animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4 sm:px-6"
          >
            <Link href="/contact-us">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:brightness-110 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00bfff]/25 group min-w-[200px] sm:min-w-[220px]">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={scrollToGetToKnowUs}
              className="w-full sm:w-auto border-2 border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff]/10 hover:border-[#00bfff] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 group bg-transparent backdrop-blur-sm min-w-[200px] sm:min-w-[220px]"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
