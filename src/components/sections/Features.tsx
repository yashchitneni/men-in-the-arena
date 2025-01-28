'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, MessageSquare, Heart } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Active Community',
    description: 'Connect with like-minded individuals in our vibrant community.'
  },
  {
    icon: Calendar,
    title: 'Regular Events',
    description: 'Participate in weekly meetups, workshops, and social gatherings.'
  },
  {
    icon: MessageSquare,
    title: 'Engaging Discussions',
    description: 'Share ideas and learn from others in our discussion forums.'
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Experience a welcoming atmosphere where everyone helps each other grow.'
  }
]

export const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits of being part of our growing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 