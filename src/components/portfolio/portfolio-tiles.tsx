"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioTiles() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      description: "Modern shopping experience with AI recommendations",
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      category: "AI Solutions",
      image:
        "/placeholder.svg?height=400&width=600&text=AI+Analytics+Dashboard",
      description: "Real-time business intelligence platform",
    },
    {
      id: 3,
      title: "Blockchain Wallet",
      category: "Blockchain",
      image: "/placeholder.svg?height=400&width=600&text=Blockchain+Wallet",
      description: "Secure cryptocurrency management system",
    },
    {
      id: 4,
      title: "IoT Monitoring App",
      category: "IoT Solutions",
      image: "/placeholder.svg?height=400&width=600&text=IoT+Monitoring+App",
      description: "Smart device management platform",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare+Portal",
      description: "Patient management and telemedicine platform",
    },
    {
      id: 6,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Banking+App",
      description: "Secure financial services application",
    },
    {
      id: 7,
      title: "Smart Home Interface",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=400&width=600&text=Smart+Home+Interface",
      description: "Intuitive home automation control",
    },
    {
      id: 8,
      title: "NFT Marketplace",
      category: "Blockchain",
      image: "/placeholder.svg?height=400&width=600&text=NFT+Marketplace",
      description: "Digital asset trading platform",
    },
    {
      id: 9,
      title: "Learning Management System",
      category: "Web Development",
      image:
        "/placeholder.svg?height=400&width=600&text=Learning+Management+System",
      description: "Educational platform with AI tutoring",
    },
    {
      id: 10,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracking+App",
      description: "Health and wellness monitoring solution",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%2300bfff%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest innovations and successful digital
            transformations
          </p>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTile(index)}
              onMouseLeave={() => setHoveredTile(null)}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 7 === 0 || index % 7 === 3
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              } ${index % 5 === 2 ? "lg:col-span-2" : ""}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-80 object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated Border */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: hoveredTile === index ? 1 : 0,
                    rotate: hoveredTile === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-2 border-2 border-[#00bfff] rounded-xl pointer-events-none"
                />
              </div>

              {/* Content Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredTile === index ? 1 : 0,
                  y: hoveredTile === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
              >
                <span className="text-[#00f6ff] text-sm font-semibold mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{item.description}</p>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00bfff] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#007bff] transition-colors"
                  >
                    View
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                  >
                    Details
                  </motion.button>
                </div>
              </motion.div>

              {/* Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#00bfff] rounded-full opacity-60 blur-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
