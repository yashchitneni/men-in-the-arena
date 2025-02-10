'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SignUpModal } from '@/components/SignUpModal'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isMounted) return null // Prevent initial flash

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-[100] ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a 
              href="#hero" 
              className={`text-lg md:text-xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Men in the Arena
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#gallery" 
                className={`transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className={`transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className={`transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                FAQ
              </a>
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant={isScrolled ? "default" : "secondary"}
                className={`${isScrolled ? "" : "bg-white text-foreground hover:bg-white/90"}`}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <SignUpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
} 