"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, TechStart Inc.",
      content:
        "Brentwood Global transformed our digital presence completely. Their AI solutions increased our efficiency by 300% and their team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "CTO, InnovateCorp",
      content:
        "The blockchain solution they developed for us revolutionized our supply chain. Professional, innovative, and delivered on time. Highly recommended!",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Founder, StartupXYZ",
      content:
        "From concept to deployment, Brentwood Global exceeded our expectations. Their web development team created exactly what we envisioned and more.",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      role: "Director, GlobalTech",
      content:
        "Outstanding mobile app development! The user experience is seamless and the performance is exceptional. Our users love the new app.",
      rating: 5,
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] to-[#007bff] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-muted/50 to-background border-0 shadow-2xl">
                    <CardContent className="p-12 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-[#00bfff] fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic"
                      >
                        &quot;{testimonial.content}&quot;
                      </motion.p>

                      {/* Author */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-4"
                      >
                        {/* Avatar Icon */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f6ff] to-[#007bff] flex items-center justify-center shadow-lg ring-4 ring-[#00bfff]/20">
                          <User
                            className="w-7 h-7 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#007bff] font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </motion.div>
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
            <ChevronLeft className="w-6 h-6 text-[#007bff]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-[#007bff]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#00bfff] scale-125"
                    : "bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
