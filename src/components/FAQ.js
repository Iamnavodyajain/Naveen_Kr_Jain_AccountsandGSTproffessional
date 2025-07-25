'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Head from 'next/head'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer for small businesses?",
      answer: "I provide comprehensive accounting services including bookkeeping, tax preparation, GST filing, payroll management, financial analysis, and business consulting. My services are tailored to help small businesses manage their finances efficiently while ensuring compliance with all regulations."
    },
    {
      question: "How much do your accounting services cost?",
      answer: "My pricing varies based on the complexity and scope of services required. I offer competitive rates and flexible packages to suit different business needs. Contact me for a personalized quote based on your specific requirements."
    },
    {
      question: "Do you provide year-round support or just during tax season?",
      answer: "I provide year-round support to all my clients. While tax season is certainly busy, I believe in maintaining ongoing relationships and providing continuous support for bookkeeping, financial planning, and business advice throughout the year."
    },
    {
      question: "Can you help with QuickBooks setup and training?",
      answer: "Absolutely! I&apos;m QuickBooks certified and can help you set up your QuickBooks system, customize it for your business needs, provide training to you and your team, and offer ongoing support to ensure you&apos;re making the most of this powerful tool."
    },
    {
      question: "What makes your services different from other accountants?",
      answer: "I focus on building personal relationships with my clients and providing customized solutions. Unlike larger firms, you&apos;ll always work directly with me, ensuring consistent service and deep understanding of your business. I also emphasize proactive communication and use modern technology to streamline processes."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <section id="faq" className="py-24 bg-[#0e0e10]" ref={ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#94a1b2] mb-8">
              Get answers to common questions about my accounting services
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"></div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#16161a] rounded-xl border border-[#242629] overflow-hidden transition-all duration-300 hover:border-[#7f5af0]/30"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg lg:text-xl font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-[#7f5af0]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#94a1b2]" />
                      )}
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mb-4"></div>
                    <p className="text-[#94a1b2] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 p-8 bg-[#16161a] rounded-xl border border-[#242629] backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full mb-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl">💬</span>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-[#94a1b2] mb-8 max-w-2xl mx-auto">
              Contact me for personalized solutions tailored to your specific needs. 
              I&apos;m here to help you navigate your financial journey with confidence.
            </p>

            <motion.button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Personalized Help</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7f5af0]/90 to-[#2cb67d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}