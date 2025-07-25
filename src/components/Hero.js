'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  const typingTimeoutRef = useRef(null)

  const slides = [
    {
      title: "Expert Tax Planning",
      subtitle: "Maximize Your Returns",
      description: "Strategic tax solutions tailored to your financial situation to help you keep more of what you earn.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Tax Services",
      color: "from-[#0e0e10] to-[#2a2a3a]",
      button: "bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300 shadow-md"
    },
    {
      title: "Financial Strategy",
      subtitle: "Grow Your Wealth",
      description: "Comprehensive financial planning to help you achieve your long-term goals and secure your future.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Learn More",
      color: "from-[#16161a] to-[#3a3a4a]",
      button: "bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300 shadow-md"
    },
    {
      title: "Business Consulting",
      subtitle: "Optimize Operations",
      description: "Expert advice to streamline your business processes and maximize profitability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Get Started",
      color: "from-[#0e0e10] to-[#3a2a4a]",
      button: "bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300 shadow-md"
    }
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Typing effect
  useEffect(() => {
    const subtitle = slides[currentSlide].subtitle

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    if (currentIndex < subtitle.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayText(prev => prev + subtitle[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
    }

    return () => clearTimeout(typingTimeoutRef.current)
  }, [currentIndex, currentSlide, slides])

  // Reset typing on slide change
  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [currentSlide])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Glassmorphism Effect */}
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              filter: 'brightness(0.7)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${slides[currentSlide].color} opacity-95 z-0`} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex flex-col items-center justify-center min-h-screen py-20">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl mx-auto backdrop-blur-sm bg-[#0e0e10]/30 p-8 rounded-2xl border border-[#242629]/50"
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-semibold text-[#94a1b2] mb-6 min-h-[3.5rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-[#94a1b2] mb-8 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    onClick={scrollToContact}
                    className={`${slides[currentSlide].button} px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide`}
                  >
                    {slides[currentSlide].cta}
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-white w-8 scale-110' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-10 h-16 border-2 border-[#7f5af0]/50 rounded-full flex justify-center items-center hover:border-[#7f5af0] transition-all duration-300">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown className="text-[#7f5af0] text-xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}