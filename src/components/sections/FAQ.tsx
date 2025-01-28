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
    answer: "Our community is built on the principles of collaboration, support, and growth. We bring together passionate individuals from diverse backgrounds who share common goals and interests."
  },
  {
    question: "How can I participate in events?",
    answer: "Once you're a member, you'll have access to our events calendar. You can RSVP to any event that interests you and join either in-person or virtually, depending on the event type."
  },
  {
    question: "Is there a membership fee?",
    answer: "We offer both free and premium membership tiers. The free tier gives you access to basic community features, while premium members enjoy additional benefits and exclusive content."
  },
  {
    question: "How can I contribute to the community?",
    answer: "There are many ways to contribute! You can share your knowledge through discussions, mentor other members, organize events, or create content for our community platforms."
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