'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  const handleJoinClick = () => {
    const joinSection = document.getElementById('join')
    joinSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to Our Community
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a thriving community of passionate individuals working together to make a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleJoinClick}
              className="text-lg"
            >
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12"
        >
          <div className="p-4 bg-card rounded-lg shadow-lg inline-block">
            <p className="text-sm font-medium text-muted-foreground">Trusted by over</p>
            <p className="text-3xl font-bold text-foreground">10,000+ Members</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 