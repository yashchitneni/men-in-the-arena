'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: '1st Phorm',
    logo: '/images/partners/1st-phorm.png',
    link: 'https://1stphorm.com'
  },
  {
    name: 'Ainsleys Angels',
    logo: '/images/partners/ainsleys-angels.png',
    link: 'https://ainsleysangels.org'
  },
  {
    name: 'HYROX',
    logo: '/images/partners/hyrox.png',
    link: 'https://hyrox.com'
  },
  {
    name: 'LSKD',
    logo: '/images/partners/lskd.png',
    link: 'https://lskd.com'
  },
  {
    name: 'PWR LIFT',
    logo: '/images/partners/pwr-lift.png',
    link: 'https://pwrlift.com'
  },
  {
    name: 'Squatch Frontier',
    logo: '/images/partners/squatch.png',
    link: 'https://squatchfrontier.com'
  }
]

export const Partners = () => {
  // Double the partners array for seamless infinite scroll
  const scrollPartners = [...partners, ...partners]

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Partners in the Arena
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to work with brands that share our values of strength, resilience, and brotherhood
          </p>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 items-center"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {scrollPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-48 h-32 flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex items-center justify-center group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 