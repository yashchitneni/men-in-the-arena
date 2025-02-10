'use client'

import { CalendarDays, Clock, MapPin, User, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { Event } from '@/types'

interface EventCardProps {
  event: Event
  index: number
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const handleAddToCalendar = () => {
    try {
      // Parse the date string properly
      const [month, day, year] = new Date(event.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).split(' ')

      const [time, period] = event.time.split(' ')
      const [hours, minutes] = time.split(':')
      
      // Convert 12-hour format to 24-hour format
      let hour = parseInt(hours)
      if (period?.toUpperCase() === 'PM' && hour !== 12) hour += 12
      if (period?.toUpperCase() === 'AM' && hour === 12) hour = 0

      // Create Date object for start time
      const eventDate = new Date(event.date)
      eventDate.setHours(hour, parseInt(minutes))
      
      // Add one hour for event duration
      const endDate = new Date(eventDate.getTime() + (60 * 60 * 1000))

      // Format dates for Google Calendar URL
      const formatDate = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      }

      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(eventDate)}/${formatDate(endDate)}&details=${encodeURIComponent(`Join us for this Men in the Arena workout session led by ${event.leader}.\n\nLocation: ${event.location}`)}&location=${encodeURIComponent(event.location)}`

      window.open(googleCalendarUrl, '_blank')
    } catch (error) {
      console.error('Error adding to calendar:', error)
      alert('Sorry, there was an error adding the event to your calendar. Please try again.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
      
      <div className="space-y-3 text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          <span>Led by {event.leader}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-primary" />
          <span>{new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span>{event.location}</span>
        </div>

        <div className="pt-4">
          <Button
            onClick={handleAddToCalendar}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </Button>
        </div>
      </div>
    </motion.div>
  )
} 