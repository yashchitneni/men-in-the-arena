import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Gallery } from '@/components/sections/Gallery'
import { Partners } from '@/components/sections/Partners'
import { Testimonials } from '@/components/sections/Testimonials'
import { JoinCommunity } from '@/components/sections/JoinCommunity'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Partners />
      <Testimonials />
      <JoinCommunity />
      <FAQ />
      <Footer />
    </main>
  )
} 