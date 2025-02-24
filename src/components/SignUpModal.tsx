'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Join the Brotherhood</DialogTitle>
          <DialogDescription>
            Take your first step into the arena. Subscribe to receive wisdom, challenges, and brotherhood.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-card rounded-lg overflow-hidden p-6">
            <iframe 
              src="https://meninthearena.substack.com/embed" 
              width="100%" 
              height="320" 
              style={{ border: '1px solid #EEE', background: 'white' }} 
              frameBorder="0" 
              scrolling="no"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 