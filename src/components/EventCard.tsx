'use client'

import { CalendarDays, Clock, MapPin, User, Calendar, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  event: {
    id: string
    title: string
    imageUrl: string
    leader: string
    date: string
    time: string
    location: string
    googleMapsUrl: string
  }
  index: number
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const handleAddToCalendar = () => {
    // Parse the date string properly
    const [month, day, year] = event.date.split(', ')[0].split(' ')
    const [time, period] = event.time.split(' ')
    const [hours, minutes] = time.split(':')
    
    // Convert 12-hour format to 24-hour format
    let hour = parseInt(hours)
    if (period === 'PM' && hour !== 12) hour += 12
    if (period === 'AM' && hour === 12) hour = 0

    // Create Date object
    const eventDate = new Date(
      parseInt(year),
      new Date(Date.parse(month + " 1, " + year)).getMonth(),
      parseInt(day),
      hour,
      parseInt(minutes)
    )
    
    // Add one hour for event duration
    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000)

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '')
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(eventDate)}/${formatDate(endDate)}&details=${encodeURIComponent(`Join us for this Men in the Arena workout session led by ${event.leader}.\n\nLocation: ${event.location}`)}&location=${encodeURIComponent(event.location)}`

    window.open(googleCalendarUrl, '_blank')
  }

  const handleLocationClick = () => {
    window.open(event.googleMapsUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
        
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <span>Led by {event.leader}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <button
            onClick={handleLocationClick}
            className="flex items-center gap-2 hover:text-primary transition-colors w-full text-left group"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="flex-1">{event.location}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

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
      </div>
    </motion.div>
  )
} 