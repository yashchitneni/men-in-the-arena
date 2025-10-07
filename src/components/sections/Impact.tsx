'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '___', label: 'Men served', note: 'Total participants across all events' },
  { number: '___', label: 'Workouts hosted', note: 'Community gatherings completed' },
  { number: '___', label: 'Disabled athletes pushed', note: 'Across finish lines in races' },
  { number: '___', label: 'Communities active', note: 'Cities where we gather' }
]

const impactPoints = [
  "They gain brothers they can count on",
  "They discover strength they didn't know they had", 
  "They become better husbands, fathers, leaders, and men"
]

export const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Impact & Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Men who join the Arena don't stay the same.
          </p>
        </motion.div>

        {/* Impact Points */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <blockquote className="text-lg italic mb-4 text-center">
              "Before MTA, I felt isolated and stuck. Now I have men who push me, encourage me, and hold me accountable. It's changed my life."
            </blockquote>
            <cite className="text-sm text-muted-foreground text-center block">
              — Member Testimonial
            </cite>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Reach So Far:</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                className="text-center"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </h4>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-xs text-muted-foreground">
              Statistics last updated: October 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}