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
            src="/images/hero-group.DNG" 
            alt="Men in the Arena Group Workout" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="[text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Where Brotherhood Begins<br />And Men Rise <span className="inline-block">⚔️</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-medium">
            Bi-Weekly workouts for men seeking connection,<br />challenge & growth.
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="text-lg bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Enter The Arena
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10 hover:text-primary transition-colors"
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