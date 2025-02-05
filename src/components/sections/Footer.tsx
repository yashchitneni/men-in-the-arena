'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram } from 'lucide-react'

const SubstackIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <div className="text-muted-foreground space-y-2">
              <p className="font-semibold">ENTER THE ARENA..</p>
              <p>Where brotherhood begins and men rise ⚔️</p>
              <p>Bi-Weekly workouts for men seeking connection, challenge & growth.</p>
              <p className="font-semibold mt-4">TOGETHER, WE RISE</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Location: Squatch Frontier Fitness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://meninthearena.substack.com/" className="text-muted-foreground hover:text-primary transition-colors">
                <SubstackIcon />
              </a>
              <a href="https://www.instagram.com/meninthearena_/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Men in the Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 