"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function BoardOfExpertise() {
  const teamMembers = [
    {
      name: "Ali Ejaz",
      role: "CEO",
      image: "/ali.jpg",
      bio: "Visionary leader with 10+ years in tech innovation and business strategy.",
      linkedin: "#",
    },
    {
      name: "Allah Bachayo Memon",
      role: "CTO",
      image: "/ab2.jpg",
      bio: "Technology expert specializing in AI, blockchain, and scalable architectures.",
      linkedin: "#",
    },
    {
      name: "Khayyam Ahmed",
      role: "Strertgic Partner",
      image: "/khayyam.jpg",
      bio: "Building strong alliances to turn bold ideas into lasting impact.",
      linkedin: "#",
    },
  ];

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
            Board of{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-[#4b5d6b] max-w-3xl mx-auto">
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
              <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden p-0">
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
                    <h3 className="text-xl font-bold text-[#002f5f] mb-2 group-hover:text-[#007bff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#00bfff] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#4b5d6b] leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] mt-4 rounded-full"
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
