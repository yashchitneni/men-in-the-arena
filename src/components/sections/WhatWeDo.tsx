'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SignUpModal } from '@/components/SignUpModal'
import { useState } from 'react'
import { Dumbbell, Clock, Trophy, GraduationCap, Mountain } from 'lucide-react'

const experiences = [
  {
    icon: Dumbbell,
    title: 'Bi-Weekly Men\'s Workouts',
    description: 'Regular community workouts that build strength, endurance, and brotherhood in our local communities.',
    cta: 'Join a Workout',
    isPrimary: true
  },
  {
    icon: Clock,
    title: 'Overnight Marathon Rucks',
    description: 'Push your mental and physical limits through challenging overnight endurance events that forge unbreakable bonds.',
    cta: 'Take on a Challenge With Us',
    isPrimary: false
  },
  {
    icon: Trophy,
    title: 'Racing with Disabled Athletes',
    description: 'Serve others by pushing disabled athletes in 5Ks, half marathons, and marathons—experiencing the true meaning of duty.',
    cta: 'Join a Race',
    isPrimary: false
  },
  {
    icon: GraduationCap,
    title: 'Skill-Building Workshops',
    description: 'Leadership development and practical skills training that help you become the man your family and community needs.',
    cta: 'Learn More',
    isPrimary: false
  },
  {
    icon: Mountain,
    title: 'Future Retreats & Corporate Activations',
    description: 'Expanding our impact through immersive retreats and corporate partnerships that bring these principles to more men.',
    cta: 'Stay Updated',
    isPrimary: false
  }
]

export const WhatWeDo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="what-we-do" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's what stepping into the Arena looks like:
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border flex flex-col h-full"
              >
                <div className="text-center flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <experience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{experience.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {experience.description}
                  </p>
                  <Button
                    variant={experience.isPrimary ? "default" : "outline"}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-auto"
                  >
                    {experience.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4"
              >
                Join a Workout
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4"
              >
                Take on a Challenge With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <SignUpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}