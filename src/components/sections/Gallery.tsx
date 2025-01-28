'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    src: '/images/gallery/brotherhood-1.jpg',
    alt: 'Men embracing in brotherhood',
    className: 'col-span-2 row-span-2'
  },
  {
    src: '/images/gallery/brotherhood-2.jpg',
    alt: 'Men praying together',
  },
  {
    src: '/images/gallery/brotherhood-3.jpg',
    alt: 'Men helping each other',
  },
  {
    src: '/images/gallery/brotherhood-4.jpg',
    alt: 'Man during workout',
    className: 'col-span-2'
  },
  {
    src: '/images/gallery/brotherhood-5.jpg',
    alt: 'Men at the beach',
  }
]

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brotherhood in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments of strength, support, and growth as we journey together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-lg ${photo.className || ''}`}
            >
              <div className="aspect-[4/3] w-full h-full relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-sm md:text-base font-medium px-4 text-center">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 