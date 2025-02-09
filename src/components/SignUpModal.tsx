'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useEffect } from 'react'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

// Add type declaration for CustomSubstackWidget
declare global {
  interface Window {
    CustomSubstackWidget?: {
      substackUrl: string
      placeholder: string
      buttonText: string
      theme: string
      colors: {
        primary: string
        input: string
        email: string
        text: string
      }
    }
  }
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.CustomSubstackWidget = {
        substackUrl: "meninthearena.substack.com",
        placeholder: "Enter your email",
        buttonText: "Enter the Arena",
        theme: "custom",
        colors: {
          primary: "#0f172a", // Darker button for better contrast
          input: "#ffffff", // White input background
          email: "#1e293b", // Dark text for input
          text: "#ffffff", // White text for button
        }
      };

      const script = document.createElement('script');
      script.src = "https://substackapi.com/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

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
            <div id="custom-substack-embed" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 