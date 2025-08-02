"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Palette, CheckCircle } from "lucide-react";

export default function FeatureTags() {
  const features = [
    {
      icon: Eye,
      title: "Define Your Vision",
      description: "Collaborate with us to refine your goals.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
    {
      icon: Palette,
      title: "Design with Clarity",
      description: "We bring precision to every detail.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
    {
      icon: CheckCircle,
      title: "Deliver with Confidence",
      description: "From strategy to execution – we've got you covered.",
      gradient: "from-[#00f6ff] to-[#00bfff]",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Moving Gradient Background Overlay */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] bg-[length:200%_100%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                {/* Hover Glow Overlay - moved to Card level */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff]/0 to-[#007bff]/0 group-hover:from-[#00f6ff]/10 group-hover:to-[#007bff]/10 transition-all duration-300" />

                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#00bfff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} mx-auto mt-6 rounded-full`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
