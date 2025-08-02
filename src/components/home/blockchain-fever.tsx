"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "lucide-react";

export default function BlockchainFever() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "NFTs",
      content: {
        title: "Non-Fungible Tokens",
        description:
          "Create, mint, and trade unique digital assets with our comprehensive NFT development services. From art marketplaces to gaming assets, we build secure and scalable NFT platforms.",
        features: [
          "Custom NFT Marketplaces",
          "Smart Contract Development",
          "IPFS Integration",
          "Cross-chain Support",
        ],
      },
    },
    {
      title: "Smart Contracts",
      content: {
        title: "Smart Contract Development",
        description:
          "Automate business processes with self-executing contracts. Our smart contracts are secure, efficient, and tailored to your specific business requirements.",
        features: [
          "Solidity Development",
          "Contract Auditing",
          "Gas Optimization",
          "Multi-chain Deployment",
        ],
      },
    },
    {
      title: "DApps",
      content: {
        title: "Decentralized Applications",
        description:
          "Build the future of web applications with decentralized architecture. Our DApps provide transparency, security, and user ownership of data.",
        features: [
          "Web3 Integration",
          "Wallet Connectivity",
          "Decentralized Storage",
          "User-friendly Interfaces",
        ],
      },
    },
    {
      title: "Tokenomics",
      content: {
        title: "Token Economics Design",
        description:
          "Design sustainable token economies that drive adoption and value creation. We help you create tokenomics models that align with your project goals.",
        features: [
          "Token Design",
          "Economic Modeling",
          "Governance Systems",
          "Incentive Mechanisms",
        ],
      },
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/10 via-[#00bfff]/10 to-[#007bff]/10" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#00bfff]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#007bff]/10 rounded-full blur-xl"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blockchain{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Fever
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing industries with decentralized solutions and
            blockchain technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-2"
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {tabs[activeTab].content.description}
                </p>

                <div className="space-y-4">
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#00bfff] rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-80 h-80 mx-auto bg-gradient-to-r from-[#00f6ff]/20 to-[#007bff]/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-60 h-60 bg-gradient-to-r from-[#00f6ff]/30 to-[#007bff]/30 rounded-full flex items-center justify-center">
                    <Link className="w-24 h-24 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
