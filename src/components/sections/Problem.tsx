'use client'

import { motion } from 'framer-motion'

export const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Problem Men Face Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Men today are struggling. Too many of us are walking through life alone—without purpose, accountability, or fellowship to lean on.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-destructive mb-2">1 in 5</div>
              <p className="text-sm text-muted-foreground">
                men experience anxiety or depression each year
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-destructive mb-2">Suicide</div>
              <p className="text-sm text-muted-foreground">
                is the leading cause of death for men under 50
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-destructive mb-2">1 in 3</div>
              <p className="text-sm text-muted-foreground">
                men admit they have no close friends
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-primary"
          >
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Crisis Support:</strong> If you are in crisis, call or text{' '}
              <a 
                href="tel:988" 
                className="text-primary hover:underline font-semibold"
              >
                988
              </a>{' '}
              for the Suicide and Crisis Lifeline. You are not alone.
            </p>
            <div className="text-xs text-muted-foreground space-x-4">
              <a 
                href="https://www.cdc.gov/nchs/products/databriefs/db464.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CDC Mental Health Statistics
              </a>
              <a 
                href="https://www.nimh.nih.gov/health/statistics/mental-illness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NIMH Data
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}