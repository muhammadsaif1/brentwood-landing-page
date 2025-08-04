"use client";
// #00f6ff

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const offices = [
    {
      flag: "🇺🇸",
      country: "Blacksburg, USA",
      address: "105 Roanoke St E, VA 24060,",
    },
    {
      flag: "🇵🇰",
      country: "Islamabad, Pakistan",
      address: "Plot No, 94 Street 7, I-10/3",
    },
    {
      flag: "🇺🇰",
      country: "Coventry, United Kingdom",
      address: "Plot 29, Financial Plaza, Downtown Toronto, Ontario M5H 2N2",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-r from-orange-500 to-pink-500",
      href: "#",
    },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600", href: "#" },
    { name: "Twitter", icon: Twitter, color: "bg-black", href: "#" },
    { name: "Linkedin", icon: Linkedin, color: "bg-blue-700", href: "#" },
    { name: "Medium", icon: MessageCircle, color: "bg-gray-800", href: "#" },
  ];

  const footerLinks = [
    { name: "Terms & conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Careers", href: "/careers" },
    { name: "Impressum", href: "/impressum" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Section - Company Info & Locations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Company Logo and Description */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white tracking-wider flex items-center gap-2">
                  BRENTWOOD
                  <Image
                    src="/logo.png"
                    alt="Brentwood Global Logo"
                    width={24}
                    height={24}
                    className="lg:w-9 lg:h-9 object-contain"
                  />
                </h1>
                <div className="text-xs text-gray-400 uppercase tracking-widest">
                  GLOBAL
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm max-w-lg">
                Welcome to Brentwood Global, a multi-faceted IT powerhouse
                offering a comprehensive suite of services that span Artificial
                Intelligence (AI), Blockchain, NFTs, Game development, Web and
                software development, cloud computing, and strategic marketing.
                With a passion for pushing technological boundaries, we are a
                dynamic force in the ever-evolving world of IT solutions.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-3 group hover:bg-gray-900/30 p-2 rounded-lg transition-all duration-300"
                >
                  <span className="text-lg mt-1">{office.flag}</span>
                  <div>
                    <h3 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                      {office.country}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Middle Section - Social Media Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex items-center space-x-4 p-4 rounded-xl ${social.color} hover:scale-105 transition-all duration-300 group`}
              >
                <social.icon className="w-6 h-6 text-white" />
                <span className="text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div> */}
          <div></div>

          {/* Right Section - Get A Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Get A Quote Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl font-bold"
              >
                <span className="text-white">GET A</span>
                <br />
                <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
                  QUOTE
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-gray-300 text-base"
              >
                Book your free consultation with our experts today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:from-[#00eaff] hover:via-[#00aaff] hover:to-[#0066cc] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-[0_4px_20px_#00bfff40]">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4 text-sm text-gray-400"
            >
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-[#00f6ff] transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500"
        >
          © 2024 Brentwood Global. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
