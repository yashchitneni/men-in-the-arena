'use client'

import { motion } from 'framer-motion'
import { Youtube, Music } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is there a membership fee?",
    answer: "As of Q1 2025, we do not have a membership fee. Our community workouts are completely free and open to the public."
  },
  {
    question: "How often are the workouts?",
    answer: "We hold bi-weekly workouts every Friday at 3:55 pm at Squatch Frontier Fitness. Check above for our most recent workout."
  },
  {
    question: "What else is there apart from workouts?",
    answer: "We raise awareness, we raise money, and we collectively take action through our quarterly community oriented initiative."
  },
  {
    question: "What are other resources?",
    answer: (
      <div className="flex flex-col space-y-4">
        <p>Follow our journey and get inspired through our content:</p>
        <div className="flex space-x-4">
          <a 
            href="https://www.youtube.com/@MENINTHEARENA_11.11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span>YouTube Channel</span>
          </a>
          <a 
            href="https://open.spotify.com/show/5pOSDqLNCZLArkyc3FLIET?si=51d59711325b40b7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Music className="w-5 h-5" />
            <span>Podcast</span>
          </a>
        </div>
      </div>
    )
  }
]

export const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our community
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 