"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Blockchain Development",
    "Game Development",
    "NFT Development",
    "Cloud Computing",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "Custom Software Development",
    "Consulting Services",
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices((prev) => [...prev, service]);
    } else {
      setSelectedServices((prev) => prev.filter((s) => s !== service));
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    // Add selected services to form data
    formData.append("services", selectedServices.join(", "));

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setSelectedServices([]); // Reset services
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
    setSelectedServices([]);
  };

  return (
    <section className="py-16 md:py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                >
                  Send us a Message
                </motion.h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form action={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </motion.div>
                    )}

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label
                          htmlFor="fullName"
                          className="text-gray-700 font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label
                          htmlFor="email"
                          className="text-gray-700 font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>

                    {/* Company Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label
                          htmlFor="companyName"
                          className="text-gray-700 font-medium"
                        >
                          Company Name{" "}
                          <span className="text-gray-400">(Optional)</span>
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                          placeholder="Your Company Inc."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label
                          htmlFor="companyWebsite"
                          className="text-gray-700 font-medium"
                        >
                          Company Website{" "}
                          <span className="text-gray-400">(Optional)</span>
                        </Label>
                        <Input
                          id="companyWebsite"
                          name="companyWebsite"
                          type="url"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                          placeholder="https://yourcompany.com"
                        />
                      </motion.div>
                    </div>

                    {/* Services Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <Label className="text-gray-700 font-medium">
                        Services You&apos;re Interested In{" "}
                        <span className="text-gray-400">
                          (Select all that apply)
                        </span>
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto p-4 border border-gray-200 rounded-lg bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] ">
                        {services.map((service, index) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white transition-colors duration-200"
                          >
                            <Checkbox
                              id={`service-${index}`}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={(checked) =>
                                handleServiceChange(service, checked as boolean)
                              }
                              className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                            />
                            <Label
                              htmlFor={`service-${index}`}
                              className="text-sm text-gray-700 cursor-pointer flex-1"
                            >
                              {service}
                            </Label>
                          </motion.div>
                        ))}
                      </div>
                      {selectedServices.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-orange-600 font-medium"
                        >
                          {selectedServices.length} service
                          {selectedServices.length !== 1 ? "s" : ""} selected
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="subject"
                        className="text-gray-700 font-medium"
                      >
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="message"
                        className="text-gray-700 font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none transition-all duration-300"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#00bfff] to-[#007bff] hover:from-[#0099e6] hover:to-[#0066cc] text-white py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00bfff]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#cceeff] to-[#e6f5ff] rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-[#b3e0ff]/50 shadow-xl"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-6xl md:text-8xl mb-6"
                >
                  🤝
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Let&apos;s Collaborate
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  Ready to transform your ideas into reality? Our team of
                  experts is here to help you build innovative solutions that
                  drive success.
                </p>

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { emoji: "⚡", text: "Fast Response" },
                    { emoji: "🎯", text: "Expert Solutions" },
                    { emoji: "🚀", text: "Innovation First" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/70 rounded-xl p-3 md:p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-2xl md:text-3xl mb-2">
                        {item.emoji}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
