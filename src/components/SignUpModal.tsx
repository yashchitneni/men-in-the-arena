'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')

  const handleSuccess = () => {
    setStep('success')
    // Optional: Add to Airtable here if needed
    // You can access the form data from the Substack iframe submission
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <AnimatePresence mode="wait">
          {step === 'form' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DialogHeader>
                <DialogTitle>Join the Brotherhood</DialogTitle>
                <DialogDescription>
                  Subscribe to our newsletter to stay updated with our latest events and stories.
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-white rounded-lg overflow-hidden">
                <iframe 
                  src="https://meninthearena.substack.com/embed" 
                  width="100%" 
                  height="320" 
                  style={{ border: '1px solid #EEE', background: 'white' }}
                  frameBorder="0" 
                  scrolling="no"
                  onLoad={() => {
                    // Add event listener for successful subscription
                    window.addEventListener('message', (event) => {
                      if (event.data?.type === 'subscriptionSuccess') {
                        handleSuccess()
                      }
                    })
                  }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-4"
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <DialogTitle className="mb-2">Welcome to the Brotherhood!</DialogTitle>
              <DialogDescription className="mb-6">
                Check your email for a welcome message and stay tuned for our latest updates.
              </DialogDescription>
              <Button onClick={onClose} className="w-full">
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
} 