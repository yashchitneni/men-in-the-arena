'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const JoinCommunity = () => {
  return (
    <section id="join" className="py-24 bg-primary/5">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the first step towards being part of something amazing. Join our community today!
          </p>
          <Button size="lg" className="text-lg">
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 