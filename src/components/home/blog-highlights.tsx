"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  summary: string;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export default function BlogHighlights() {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of AI in Business Automation",
      summary:
        "Explore how artificial intelligence is revolutionizing business processes and driving efficiency across industries.",
      thumbnail:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Artificial Intelligence",
      slug: "future-ai-business-automation",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      summary:
        "Discover the innovative applications of blockchain technology in supply chain, healthcare, and digital identity.",
      thumbnail:
        "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      category: "Blockchain",
      slug: "blockchain-beyond-cryptocurrency",
    },
    {
      title: "Building Scalable Web Applications",
      summary:
        "Best practices and modern frameworks for developing web applications that can handle millions of users.",
      thumbnail:
        "https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg",
      author: "David Kim",
      date: "Dec 10, 2024",
      category: "Web Development",
      slug: "building-scalable-web-applications",
    },
    {
      title: "The Rise of Progressive Web Apps",
      summary:
        "How PWAs are bridging the gap between web and mobile applications, offering native-like experiences.",
      thumbnail:
        "https://images.pexels.com/photos/7567591/pexels-photo-7567591.jpeg",
      author: "Emily Rodriguez",
      date: "Dec 8, 2024",
      category: "Mobile Development",
      slug: "rise-progressive-web-apps",
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
            Latest{" "}
            <span className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in
            technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full m-0 p-0">
                <CardContent className="p-0 m-0">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-[4/3] m-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width={450}
                        height={281}
                        className="w-full h-full object-cover m-0"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00bfff] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3 px-6 pb-6 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#007bff] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-[#00bfff] text-[#007bff] hover:bg-[#00f6ff]/10 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300 bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] hover:from-[#00f6ff] hover:to-[#007bff] text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00bfff]/25 group">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
