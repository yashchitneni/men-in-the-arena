'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes this community special?",
    answer: "We don't only push ourselves, but create room for other men to tap into their full potential. Our community is built on the foundation of mutual growth and empowerment."
  },
  {
    question: "How often are the workouts?",
    answer: "Our workouts are held biweekly on Fridays. We come together regularly to challenge ourselves and build brotherhood through shared experiences."
  },
  {
    question: "Is there a membership fee?",
    answer: "As of Q1 2025, we do not have a membership fee. Our community workouts are completely free and open to the public."
  },
  {
    question: "What else is there apart from the workouts?",
    answer: "We have our podcast which serves as a hub for inspiring stories from our community. Through these stories, we share experiences, insights, and wisdom that help foster growth and connection beyond our physical gatherings."
  }
]

export const FAQ = () => {
  return (
    <section className="py-24">
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