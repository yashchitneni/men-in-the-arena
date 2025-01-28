'use client'

import { motion } from 'framer-motion'
import { EventCard } from '@/components/EventCard'

const events = [
  {
    id: '1',
    title: 'Build Your Identity',
    imageUrl: '/images/events/workout-1.jpg',
    leader: 'Yash',
    date: 'February 8, 2025',
    time: '4:00 PM',
    location: 'Squatch Frontier Fitness',
    googleMapsUrl: 'https://maps.google.com/?q=Squatch+Frontier+Fitness'
  },
  {
    id: '2',
    title: 'Strength & Brotherhood',
    imageUrl: '/images/events/workout-2.jpg',
    leader: 'Kevin',
    date: 'February 22, 2025',
    time: '4:00 PM',
    location: 'Squatch Frontier Fitness',
    googleMapsUrl: 'https://maps.google.com/?q=Squatch+Frontier+Fitness'
  },
  {
    id: '3',
    title: 'Rise Together',
    imageUrl: '/images/events/workout-3.jpg',
    leader: 'Mason',
    date: 'March 7, 2025',
    time: '4:00 PM',
    location: 'Squatch Frontier Fitness',
    googleMapsUrl: 'https://maps.google.com/?q=Squatch+Frontier+Fitness'
  }
]

export const Features = () => {
  return (
    <section id="events" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for our next workout sessions - challenge yourself and grow with the brotherhood
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 