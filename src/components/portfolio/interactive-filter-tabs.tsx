"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveFilterTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ["All", "Web", "AI", "Blockchain", "IoT", "Design"];

  const projects = {
    All: [
      {
        id: 1,
        title: "E-Commerce Platform",
        image: "/placeholder.svg?height=300&width=400&text=E-Commerce",
        link: "#",
      },
      {
        id: 2,
        title: "AI Dashboard",
        image: "/placeholder.svg?height=300&width=400&text=AI+Dashboard",
        link: "#",
      },
      {
        id: 3,
        title: "Crypto Wallet",
        image: "/placeholder.svg?height=300&width=400&text=Crypto+Wallet",
        link: "#",
      },
      {
        id: 4,
        title: "Smart Home App",
        image: "/placeholder.svg?height=300&width=400&text=Smart+Home",
        link: "#",
      },
      {
        id: 5,
        title: "Brand Identity",
        image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
        link: "#",
      },
      {
        id: 6,
        title: "Healthcare Portal",
        image: "/placeholder.svg?height=300&width=400&text=Healthcare",
        link: "#",
      },
      {
        id: 7,
        title: "ML Analytics",
        image: "/placeholder.svg?height=300&width=400&text=ML+Analytics",
        link: "#",
      },
      {
        id: 8,
        title: "NFT Marketplace",
        image: "/placeholder.svg?height=300&width=400&text=NFT+Marketplace",
        link: "#",
      },
    ],
    Web: [
      {
        id: 1,
        title: "E-Commerce Platform",
        image: "/placeholder.svg?height=300&width=400&text=E-Commerce",
        link: "#",
      },
      {
        id: 6,
        title: "Healthcare Portal",
        image: "/placeholder.svg?height=300&width=400&text=Healthcare",
        link: "#",
      },
      {
        id: 9,
        title: "Corporate Website",
        image: "/placeholder.svg?height=300&width=400&text=Corporate+Site",
        link: "#",
      },
      {
        id: 10,
        title: "SaaS Platform",
        image: "/placeholder.svg?height=300&width=400&text=SaaS+Platform",
        link: "#",
      },
    ],
    AI: [
      {
        id: 2,
        title: "AI Dashboard",
        image: "/placeholder.svg?height=300&width=400&text=AI+Dashboard",
        link: "#",
      },
      {
        id: 7,
        title: "ML Analytics",
        image: "/placeholder.svg?height=300&width=400&text=ML+Analytics",
        link: "#",
      },
      {
        id: 11,
        title: "Chatbot System",
        image: "/placeholder.svg?height=300&width=400&text=Chatbot",
        link: "#",
      },
      {
        id: 12,
        title: "Predictive Analytics",
        image: "/placeholder.svg?height=300&width=400&text=Predictive",
        link: "#",
      },
    ],
    Blockchain: [
      {
        id: 3,
        title: "Crypto Wallet",
        image: "/placeholder.svg?height=300&width=400&text=Crypto+Wallet",
        link: "#",
      },
      {
        id: 8,
        title: "NFT Marketplace",
        image: "/placeholder.svg?height=300&width=400&text=NFT+Marketplace",
        link: "#",
      },
      {
        id: 13,
        title: "DeFi Platform",
        image: "/placeholder.svg?height=300&width=400&text=DeFi+Platform",
        link: "#",
      },
      {
        id: 14,
        title: "Smart Contracts",
        image: "/placeholder.svg?height=300&width=400&text=Smart+Contracts",
        link: "#",
      },
    ],
    IoT: [
      {
        id: 4,
        title: "Smart Home App",
        image: "/placeholder.svg?height=300&width=400&text=Smart+Home",
        link: "#",
      },
      {
        id: 15,
        title: "Industrial IoT",
        image: "/placeholder.svg?height=300&width=400&text=Industrial+IoT",
        link: "#",
      },
      {
        id: 16,
        title: "Wearable Tech",
        image: "/placeholder.svg?height=300&width=400&text=Wearable+Tech",
        link: "#",
      },
      {
        id: 17,
        title: "Smart City",
        image: "/placeholder.svg?height=300&width=400&text=Smart+City",
        link: "#",
      },
    ],
    Design: [
      {
        id: 5,
        title: "Brand Identity",
        image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
        link: "#",
      },
      {
        id: 18,
        title: "Mobile UI Kit",
        image: "/placeholder.svg?height=300&width=400&text=Mobile+UI",
        link: "#",
      },
      {
        id: 19,
        title: "Dashboard Design",
        image: "/placeholder.svg?height=300&width=400&text=Dashboard+Design",
        link: "#",
      },
      {
        id: 20,
        title: "Logo Collection",
        image: "/placeholder.svg?height=300&width=400&text=Logo+Collection",
        link: "#",
      },
    ],
  };

  const currentProjects = projects[activeTab as keyof typeof projects] || [];
  const projectsPerPage = 6;
  const totalPages = Math.ceil(currentProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = currentProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filter through our diverse portfolio of successful projects across
            different industries
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2 max-w-2xl mx-auto"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                activeTab === tab
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <div className="flex space-x-3">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
                  >
                    View
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                  >
                    Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                  >
                    Share
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center space-x-2"
          >
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
