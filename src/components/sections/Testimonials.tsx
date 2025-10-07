'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Surrounding myself with men who are excelling in life in many areas I'd like to also excel has made me raise the bar in my own life. My fitness has improved but more so my mind has improved and my conversations and outlook and circle and habits",
    author: "Alec Alvaraz",
    role: "Member"
  },
  {
    quote: "Men In The Arena has had a profound impact as my life. Community, brotherhood, friendship, an outlet for my thoughts and daily stressors, killer workouts, better communication skills, leadership and event planning opportunities. It's provided so much joy and pushed me to fight for what I want out of my life.",
    author: "Jake Morsch",
    role: "Member"
  },
  {
    quote: "Making friends has always been easy, however, developing greater value and intention behind relationships for purpose of lifting up myself and other men around me with the support of MTA has been a critical and impactful element in my life since moving to Austin.",
    author: "Kevin Kurz",
    role: "Member"
  },
  {
    quote: "MTA has introduced me to such a wide and diverse group of men who are looking to improve in almost every facet of their life. It's acted as a healthy measuring stick on my habits, decisions, and actions to show me where I can improve and where I can serve.",
    author: "Jack Lesser",
    role: "Member"
  },
  {
    quote: "It becomes a staple / great social time working out with other like minded men. Helped me work on stepping up and lead / work on my public speaking abilities. Pushed me to step into a new area of life I haven't spend much time, helping others outside of my immediate circle.",
    author: "Robin Perségol",
    role: "Member"
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