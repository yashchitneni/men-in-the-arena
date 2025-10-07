'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, BookOpen, Globe } from 'lucide-react'

const visionItems = [
  {
    icon: MapPin,
    title: 'National retreats for men and families',
    description: 'Immersive experiences that strengthen not just individual men, but the families and communities they lead.'
  },
  {
    icon: Building2,
    title: 'Corporate activations and workshops',
    description: 'Bringing our principles of brotherhood, resilience, and growth into workplace cultures across industries.'
  },
  {
    icon: Globe,
    title: 'Expanding to more cities and communities',
    description: 'Taking the Arena nationwide, establishing chapters in communities where men need connection and purpose most.'
  },
  {
    icon: BookOpen,
    title: 'A global newsletter reaching men everywhere',
    description: 'Sharing stories, insights, and challenges that inspire men worldwide to step into their own arena.'
  }
]

export const FutureVision = () => {
  return (
    <section id="future-vision" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Where We Go Next
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This is just the beginning.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every expansion, every new initiative, every partnership is guided by our core mission: 
                helping men step into the arena to become better for themselves, their families, and their communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}