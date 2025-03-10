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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full">
          <img 
            src="/images/hero-group.DNG" 
            alt="Men in the Arena Group Workout" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
            Where Brotherhood Begins
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-2"
            >
              And Men Rise <motion.span
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-block"
              >⚔️</motion.span>
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Bi-Weekly workouts for men seeking connection,<br />challenge & growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="relative text-lg bg-primary hover:bg-primary/90 text-white px-12 py-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden group"
            >
              <span className="relative z-10">Enter The Arena</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
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