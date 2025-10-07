'use client'

import { motion } from 'framer-motion'
import { Heart, Mountain, BookOpen, HandHeart } from 'lucide-react'

const pillars = [
  {
    icon: Mountain,
    title: 'Challenge',
    description: 'Stepping into the hard things—weekly workouts, overnight marathon rucks, and endurance events. Growth happens when we push beyond our comfort zones.'
  },
  {
    icon: Heart,
    title: 'Duty',
    description: 'Serving others by pushing disabled athletes in races, volunteering, and leading. We believe men find purpose when they serve something greater than themselves.'
  },
  {
    icon: BookOpen,
    title: 'Reflection',
    description: 'Pausing to learn, journal, and share openly about life\'s battles. True strength comes from understanding ourselves and our experiences.'
  },
  {
    icon: HandHeart,
    title: 'Fellowship',
    description: 'Real connection. Shoulder-to-shoulder brotherhood that carries you through. No man should face life\'s challenges alone.'
  }
]

export const HowWeDoIt = () => {
  return (
    <section id="how-we-do-it" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How We Do It
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe men transform when they commit to four pillars:
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}