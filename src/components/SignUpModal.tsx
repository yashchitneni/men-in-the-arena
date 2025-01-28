'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Here you would typically send the data to your backend
      // await fetch('/api/signup', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // })
      
      // Move to success step
      setStep('success')
      
      // Optional: Send this data to your CRM or email service
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleWhatsAppJoin = () => {
    // Replace with your actual WhatsApp group invite link
    window.open('https://chat.whatsapp.com/your-group-invite-link', '_blank')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
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
                  Take the first step towards becoming part of our community.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
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
                Join our WhatsApp group to connect with the community and stay updated on upcoming events.
              </DialogDescription>
              <Button onClick={handleWhatsAppJoin} className="w-full">
                Join WhatsApp Group
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
} 