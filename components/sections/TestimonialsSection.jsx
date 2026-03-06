"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";

const TESTIMONIALS = [
  {
    name: "Dr. P Sureshkumar",
    role: "MD Pediatrics, MBBS • Anbu Hospital, Oddanchatram",
    quote:
      "In moderation, pure ghee can be a healthy addition to a child's diet, providing essential fats for brain development and growth.",
    avatar: "/testimonials/customer1.jpeg",
  },
  {
    name: "Dr. N. B. Senthil",
    role: "Consultant Pediatrician",
    quote:
      "Liquid Gold for Growing Children. As a Pediatrician, I always emphasize balanced nutrition for healthy growth. Pure traditional cow's ghee (in moderation) can be a valuable addition to your child's diet. It supports brain development with healthy fats, helps weight gain in underweight children, improves digestion and gut health, enhances immunity, and helps absorb vitamins A, D, E, and K. A small spoon of pure traditionally prepared cow's ghee added to rice, dal, or chapati can make meals more nutritious and energy-dense.",
    avatar: "/testimonials/customer2.1.jpeg",
  },
];

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="pt-4 pb-10 sm:pb-12 lg:pb-16 bg-[#fff9ed] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="CUSTOMER LOVE"
          title="What Our Customers Say"
          description="Families across Tamil Nadu trust Sarva Natural Foods for purity, taste and tradition."
        />
        <div className="relative max-w-5xl mx-auto mt-4 p-4 sm:p-6 lg:p-10 min-h-[200px] sm:min-h-[240px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <motion.img
                src={TESTIMONIALS[testimonialIndex].avatar}
                alt={TESTIMONIALS[testimonialIndex].name}
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 rounded-full mx-auto object-cover mt-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[#5e4521] italic">
                &ldquo;{TESTIMONIALS[testimonialIndex].quote}&rdquo;
              </p>
              <div className="mt-5 text-sm text-[#7a6130]">
                <span className="font-semibold text-[#2a1b08]">
                  {TESTIMONIALS[testimonialIndex].name}
                </span>{" "}
                • {TESTIMONIALS[testimonialIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === testimonialIndex ? "bg-[#e08a00]" : "bg-[#e7d3a0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
