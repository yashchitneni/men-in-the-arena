'use client'

import { motion } from 'framer-motion'
import { EventCard } from '@/components/EventCard'
import { useEffect, useState } from 'react'
import type { Event } from '@/types'

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/events')
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
        setError('Failed to load events. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <section id="events" className="py-24">
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

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading events...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            No upcoming events scheduled. Check back soon!
          </div>
        )}
      </div>
    </section>
  )
} 