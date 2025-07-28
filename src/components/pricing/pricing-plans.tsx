"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic web development",
        "Responsive design",
        "3 months support",
        "SEO optimization",
        "Contact form integration",
        "Social media integration",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$7,500",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Advanced web development",
        "Custom functionality",
        "6 months support",
        "Advanced SEO",
        "Analytics integration",
        "Payment gateway",
        "Admin dashboard",
        "API integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "per project",
      description: "For large-scale applications",
      features: [
        "Full-stack development",
        "Scalable architecture",
        "12 months support",
        "Advanced security",
        "Performance optimization",
        "Third-party integrations",
        "Custom admin panel",
        "Dedicated project manager",
        "Priority support",
      ],
      popular: false,
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "tailored pricing",
      description: "Bespoke solutions for unique needs",
      features: [
        "Fully customized solution",
        "Unlimited revisions",
        "Ongoing support",
        "Advanced integrations",
        "Custom workflows",
        "Dedicated team",
        "24/7 support",
        "Training included",
        "Scalable infrastructure",
      ],
      popular: false,
    },
  ];

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
            Choose Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan that matches your project requirements and
            business goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <Card
                className={`bg-white border-2 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden ${
                  plan.popular
                    ? "border-orange-500 hover:border-orange-600"
                    : "border-gray-200 hover:border-orange-300"
                }`}
              >
                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500/5 to-red-500/5"
                      : "bg-gradient-to-r from-orange-500/3 to-red-500/3"
                  }`}
                />

                <CardContent className="p-8 relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Contact Us" && (
                        <span className="text-gray-500 text-sm ml-2">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white shadow-lg hover:shadow-orange-500/25"
                        : "bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
