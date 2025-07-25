'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <footer className="bg-[#0e0e10] text-[#fffffe] py-16 border-t border-[#242629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">
                  Naveen Kr Jain
                </span>
              </div>
              <p className="text-[#94a1b2] leading-relaxed">
                Your trusted financial partner providing comprehensive accounting 
                and tax services to help you achieve your financial goals.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#94a1b2] hover:text-[#7f5af0] transition-colors duration-200 text-left relative group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f5af0] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4 text-[#94a1b2]">
                <motion.a 
                  href="mailto:your.email@example.com" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">your.email@example.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+15551234567" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <MapPin className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">Your City, State</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#242629] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.p 
                className="text-[#72757e] text-center md:text-left text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                © {currentYear} Naveen Kr Jain. All rights reserved.
              </motion.p>

              {/* Additional Links */}
              <motion.div 
                className="flex space-x-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.button 
                  className="text-[#72757e] hover:text-[#7f5af0] transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.button>
                <motion.button 
                  className="text-[#72757e] hover:text-[#7f5af0] transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 backdrop-blur-sm"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </footer>
    </>
  )
}