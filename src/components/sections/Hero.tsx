'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { SignUpModal } from '@/components/SignUpModal'
import { useState } from 'react'

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img 
            src="/images/hero-group.jpg" 
            alt="Men in the Arena Group Workout" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Where Brotherhood Begins<br />And Men Rise ⚔️
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Bi-Weekly workouts for men seeking connection,<br />challenge & growth.
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="text-lg bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-lg"
          >
            Enter The Arena
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
        onClick={handleScroll}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      <SignUpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
} 