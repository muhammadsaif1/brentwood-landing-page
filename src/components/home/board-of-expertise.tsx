"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function BoardOfExpertise() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology expert specializing in AI, blockchain, and scalable architectures.",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative director with expertise in user experience and digital design.",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with passion for clean code and innovative solutions.",
      linkedin: "#",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Digital marketing strategist driving growth through data-driven campaigns.",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Agile expert ensuring seamless project delivery and client satisfaction.",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Board of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who drive innovation and excellence at
            Brentwood Global
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* LinkedIn Icon */}
                    <motion.a
                      href={member.linkedin}
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/30 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-gradient-to-r from-orange-500 to-red-600 mt-4 rounded-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
