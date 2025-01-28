import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'
import { Statistics } from '@/components/sections/Statistics'
import { Activities } from '@/components/sections/Activities'
import { JoinCommunity } from '@/components/sections/JoinCommunity'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Statistics />
      <Testimonials />
      <Activities />
      <JoinCommunity />
      <FAQ />
      <Footer />
    </main>
  )
} 