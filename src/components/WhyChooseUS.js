'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Star } from 'lucide-react'
import Head from 'next/head'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      name: "24/7 Support",
      competitors: { quality: 0, has: false },
      us: { quality: 95, has: true },
      description: "Round-the-clock availability for urgent queries"
    },
    {
      name: "Personalized Service",
      competitors: { quality: 0, has: false },
      us: { quality: 98, has: true },
      description: "Tailored solutions for your business"
    },
    {
      name: "Response Time",
      competitors: { quality: 50, has: true },
      us: { quality: 90, has: true },
      description: "Average time to respond to inquiries"
    },
    {
      name: "Pricing",
      competitors: { quality: 60, has: true },
      us: { quality: 85, has: true },
      description: "Competitive pricing structure"
    },
    {
      name: "Expertise",
      competitors: { quality: 70, has: true },
      us: { quality: 97, has: true },
      description: "Depth of industry knowledge"
    },
    {
      name: "Technology",
      competitors: { quality: 65, has: true },
      us: { quality: 93, has: true },
      description: "Modern tools and solutions"
    },
    {
      name: "GST Filing",
      competitors: { quality: 40, has: true },
      us: { quality: 96, has: true },
      description: "Accurate and timely GST compliance"
    },
    {
      name: "Tax Planning",
      competitors: { quality: 55, has: true },
      us: { quality: 94, has: true },
      description: "Strategic tax optimization"
    }
  ]

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section id="why-choose-us" className="relative py-24 bg-[#0e0e10] overflow-hidden" ref={ref}>
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7f5af0]/10 to-[#2cb67d]/10 opacity-20"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
          </div>
          
          {/* Floating shapes */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#7f5af0]/10 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-96 h-64 rounded-full bg-[#2cb67d]/10 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-[#2cb67d]/20 blur-xl"
            animate={{
              x: [0, 40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Service Comparison
            </h2>
            <p className="text-xl text-[#94a1b2] mb-8 max-w-3xl mx-auto">
              See how we measure against typical industry offerings
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"></div>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Competitors Card */}
            <motion.div
              className="bg-[#16161a] rounded-xl p-6 border border-[#242629] relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#72757e]/10 blur-xl"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-[#242629] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-[#94a1b2] mb-2">Other Services</h3>
                <p className="text-[#72757e]">Typical industry standards</p>
              </div>

              <div className="space-y-6 relative z-10">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#fffffe] font-medium">{service.name}</span>
                      {service.competitors.has ? (
                        <motion.span 
                          className="text-xs font-medium text-[#fffffe] bg-[#72757e] px-2 py-1 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredService === index ? 1 : 0 }}
                        >
                          {service.competitors.quality}%
                        </motion.span>
                      ) : (
                        <span className="text-xs font-medium text-[#ef4565]">Not offered</span>
                      )}
                    </div>
                    
                    <div className="w-full h-2 bg-[#242629] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#72757e] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredService === index ? `${service.competitors.quality}%` : 0 
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    
                    {hoveredService === index && (
                      <motion.p 
                        className="text-sm text-[#94a1b2]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Services Card */}
            <motion.div
              className="bg-[#16161a] rounded-xl p-6 border border-[#7f5af0]/30 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {/* Premium badge with glow */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-lg shadow-[#7f5af0]/30">
                Premium
              </div>
              
              {/* Card background elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#7f5af0]/10 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#2cb67d]/10 blur-2xl"></div>

              <div className="text-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#7f5af0]/30">
                  <Star className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Service</h3>
                <p className="text-[#7f5af0]">Exceptional quality guaranteed</p>
              </div>

              <div className="space-y-6 relative z-10">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#fffffe] font-medium">{service.name}</span>
                      {service.us.has ? (
                        <motion.span 
                          className="text-xs font-medium text-[#fffffe] bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] px-2 py-1 rounded-full shadow-sm shadow-[#7f5af0]/30"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredService === index ? 1 : 0 }}
                        >
                          {service.us.quality}%
                        </motion.span>
                      ) : (
                        <span className="text-xs font-medium text-[#ef4565]">Not offered</span>
                      )}
                    </div>
                    
                    {service.us.has && (
                      <div className="w-full h-2 bg-[#242629] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: hoveredService === index ? `${service.us.quality}%` : 0 
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    )}
                    
                    {hoveredService === index && (
                      <motion.p 
                        className="text-sm text-[#94a1b2]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-[#94a1b2] mb-8">
              Ready to experience the premium difference?
            </p>
            <motion.button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7f5af0]/90 to-[#2cb67d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}