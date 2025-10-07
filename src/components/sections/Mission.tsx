'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Zap, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Together We Rise',
    description: 'Brotherhood and support lift us all higher'
  },
  {
    icon: Zap,
    title: 'Leaders Go First',
    description: 'Setting the example through action and service'
  },
  {
    icon: Shield,
    title: 'Answer the Call',
    description: 'Take decisive action when it matters most'
  },
  {
    icon: TrendingUp,
    title: 'Vulnerability is Strength',
    description: 'True power comes from authentic connection with one another'
  }
]

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a collective of men helping one another step into the arena to compete, to struggle, and to emerge as better men for our friends, family, teams and everyone that we love most.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-8">Our Values are Simple:</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}