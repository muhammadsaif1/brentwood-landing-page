"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsSection() {
  const faqs = [
    {
      question: "What services does Brentwood Global offer?",
      answer:
        "We offer a comprehensive range of technology services including web development, mobile app development, AI solutions, blockchain development, cybersecurity, cloud services, UI/UX design, and digital marketing. Our team specializes in cutting-edge technologies to help businesses transform digitally.",
    },
    {
      question: "How can I start a project with Brentwood Global?",
      answer:
        "Starting a project is simple! You can contact us through our contact form, schedule a consultation call, or reach out directly via email or phone. We'll discuss your requirements, provide a detailed proposal, and guide you through our streamlined development process.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive ongoing support and maintenance services. This includes regular updates, security patches, performance monitoring, technical support, and feature enhancements. We offer different support packages to match your specific needs and budget.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with clients across various industries including healthcare, finance, e-commerce, education, manufacturing, startups, and enterprise organizations. Our diverse experience allows us to understand unique industry challenges and deliver tailored solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months or more. We provide detailed project timelines during the planning phase and keep you updated throughout the development process.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "We work with clients globally and have experience managing projects across different time zones. We use modern collaboration tools and maintain clear communication channels to ensure smooth project delivery regardless of location.",
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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and
            how we can help your business grow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl px-6 border-0 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600 transition-colors py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
