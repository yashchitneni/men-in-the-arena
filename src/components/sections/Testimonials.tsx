'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Being part of this brotherhood has transformed not just my physical strength, but my mental fortitude. Every session pushes me to be a better man than I was yesterday.",
    author: "Mason Stevens",
    role: "Member since 2023"
  },
  {
    quote: "There's something powerful about struggling together, growing together. This isn't just a workout - it's where iron sharpens iron.",
    author: "CJ Finley",
    role: "Founding Member"
  },
  {
    quote: "The brotherhood we've built here goes beyond the gym. We push each other to excel in every aspect of life - fitness, faith, and family.",
    author: "Jack Lesser",
    role: "Member since 2023"
  },
  {
    quote: "Every time I think I've hit my limit, the guys here help me push through. It's about building character as much as building strength.",
    author: "Ryan Baca",
    role: "Member since 2024"
  },
  {
    quote: "This isn't just about getting stronger physically - it's about building a community of men who support and challenge each other to grow.",
    author: "Theo Tsirigotis",
    role: "Member since 2023"
  },
  {
    quote: "The accountability and brotherhood here is unmatched. We're all on the same mission to become better men, better leaders.",
    author: "Alec Alvarez",
    role: "Member since 2023"
  }
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brotherhood Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our members about how this community has impacted their lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <div className="relative">
                  <span className="text-6xl text-primary/20 absolute -top-4 -left-2">"</span>
                  <p className="text-muted-foreground relative z-10 pt-2">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 