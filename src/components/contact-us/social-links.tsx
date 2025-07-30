"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/brentwoodglobal",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      shadowColor: "hover:shadow-blue-500/25",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/brentwoodglobal",
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-800",
      shadowColor: "hover:shadow-gray-500/25",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/brentwoodglobal",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      shadowColor: "hover:shadow-purple-500/25",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/brentwoodglobal",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
      shadowColor: "hover:shadow-blue-500/25",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/brentwoodglobal",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      shadowColor: "hover:shadow-red-500/25",
    },
  ];

  return (
    <section className="py-12 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow us on social media for the latest updates and insights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${social.bgColor} ${social.hoverColor} ${social.shadowColor} p-4 md:p-5 rounded-2xl transition-all duration-300 transform hover:shadow-2xl`}
            >
              <social.icon className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300 group-hover:scale-110" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none scale-95 group-hover:scale-100">
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
