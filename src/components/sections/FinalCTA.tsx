'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SignUpModal } from '@/components/SignUpModal'
import { useState } from 'react'

export const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="final-cta" className="py-24 bg-primary/5 border-t">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enter the Arena?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Men: It's time to step into the Arena.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 text-lg"
            >
              Join a Workout
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 text-lg"
            >
              Take on a Challenge With Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <SignUpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}