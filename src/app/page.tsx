import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Mission } from '@/components/sections/Mission'
import { HowWeDoIt } from '@/components/sections/HowWeDoIt'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { Impact } from '@/components/sections/Impact'
import { Partners } from '@/components/sections/Partners'
import { FutureVision } from '@/components/sections/FutureVision'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Mission />
      <HowWeDoIt />
      <WhatWeDo />
      <Impact />
      <Partners />
      <FutureVision />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  )
}
