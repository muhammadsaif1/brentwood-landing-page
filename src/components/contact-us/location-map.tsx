"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Islamabad, we&apos;re always ready to
            welcome you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background p-4 md:p-8 rounded-3xl shadow-2xl border border-[#00f6ff]/20"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0234567890123!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-96 lg:h-[400px] rounded-2xl"
            />

            {/* Overlay with company info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs"
            >
              <h3 className="font-bold text-foreground mb-2">
                Brentwood Global
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Technology & Innovation Hub
              </p>
              <p className="text-xs text-muted-foreground">
                📍 Islamabad, Pakistan
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span className="text-xs text-muted-foreground">
                  We&apos;re here!
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-muted-foreground text-sm md:text-base">
              📧 business@brentwoodglobal.com • 📞 +92 123 4567890
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
