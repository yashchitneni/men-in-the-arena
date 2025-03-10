'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="bg-card rounded-lg overflow-hidden">
          <iframe 
            src="https://embeds.beehiiv.com/92585930-8570-4988-b68d-e446861a9c2a" 
            data-test-id="beehiiv-embed" 
            width="100%" 
            height="320" 
            frameBorder="0" 
            scrolling="no" 
            style={{ 
              borderRadius: '4px', 
              border: '2px solid #e5e7eb', 
              margin: 0, 
              backgroundColor: 'transparent' 
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 