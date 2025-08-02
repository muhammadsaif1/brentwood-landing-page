"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pause, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Define YouTube Iframe API types
interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
}

interface YouTubeWindow extends Window {
  YT: {
    Player: new (
      id: string,
      options: {
        events: {
          onStateChange: (event: { data: number }) => void;
        };
      }
    ) => YouTubePlayer;
    PlayerState: {
      PLAYING: number;
      PAUSED: number;
      ENDED: number;
    };
  };
  onYouTubeIframeAPIReady?: () => void;
}

declare const window: YouTubeWindow;

export default function GetToKnowUs() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load YouTube Iframe API
  useEffect(() => {
    // Check if API is already loaded to prevent duplicate scripts
    if (typeof window.YT !== "undefined" && window.YT.Player) {
      initializePlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializePlayer;

    function initializePlayer() {
      if (!window.YT?.Player) return;

      playerRef.current = new window.YT.Player("youtube-player", {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              // Hide button after 2 seconds
              timeoutRef.current = setTimeout(() => {
                setShowButton(false);
              }, 2000);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
              setShowButton(true);
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }
          },
        },
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Clean up global handler
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  // Handle play/pause toggle
  const handleTogglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Get to{" "}
              <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
                Know Us
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-foreground leading-relaxed"
            >
              At Brentwood Global, we&apos;re more than just a service agency –
              we&apos;re your strategic partners in digital transformation. With
              a passion for innovation and a commitment to excellence,
              we&apos;ve been helping businesses across the globe turn their
              boldest ideas into reality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-foreground leading-relaxed"
            >
              Our team of experts specializes in cutting-edge technologies
              including AI, blockchain, web development, and digital marketing.
              We believe in building lasting relationships with our clients,
              ensuring every project exceeds expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/about-us">
                <Button className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:from-[#00e0ff] hover:to-[#005ce6] text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40 group">
                  About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group m-0 p-0">
              {/* YouTube Video */}
              <div className="aspect-video relative">
                <iframe
                  id="youtube-player"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
                  title="Brentwood Global Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  className="w-full h-full object-cover m-0 border-none"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/20 to-[#007bff]/20 pointer-events-none" />

                {/* Animated Gradient Circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-sm pointer-events-none"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full blur-sm pointer-events-none"
                />

                {/* Play/Pause Button */}
                {showButton && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleTogglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:bg-white/30 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </motion.div>
                )}

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <h3 className="text-xl font-bold">Brentwood Global</h3>
                  <p className="text-white/80">Innovation in Action</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/20 to-[#007bff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Floating Gradient Orbs */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-[#00d4ff] rounded-full opacity-20 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#007bff] rounded-full opacity-30 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
