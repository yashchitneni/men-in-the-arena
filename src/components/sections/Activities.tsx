'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Video, BookOpen } from 'lucide-react'

const activities = [
  {
    icon: Calendar,
    title: 'Weekly Meetups',
    description: 'Join our regular community gatherings every week',
    date: 'Every Thursday'
  },
  {
    icon: Video,
    title: 'Online Workshops',
    description: 'Learn new skills from industry experts',
    date: 'Twice a month'
  },
  {
    icon: Users,
    title: 'Networking Events',
    description: 'Connect with peers in your industry',
    date: 'Monthly'
  },
  {
    icon: BookOpen,
    title: 'Study Groups',
    description: 'Collaborative learning sessions',
    date: 'Weekly'
  }
]

export const Activities = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our exciting community events and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <activity.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-muted-foreground mb-4">{activity.description}</p>
              <p className="text-sm font-medium text-primary">{activity.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 