'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  
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

  const toggleTerms = () => {
    setShowTerms(!showTerms)
    setShowPrivacy(false)
  }

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy)
    setShowTerms(false)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <footer className="bg-[#0e0e10] text-[#fffffe] py-16 border-t border-[#242629] relative">
        {/* Overlay for terms and privacy */}
        {(showTerms || showPrivacy) && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowTerms(false)
              setShowPrivacy(false)
            }}
          >
            <motion.div 
              className="bg-[#16161a] rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-[#94a1b2] hover:text-white"
                onClick={() => {
                  setShowTerms(false)
                  setShowPrivacy(false)
                }}
              >
                ✕
              </button>
              
              {showTerms && (
                <div>
                  <h3 className="text-xl font-bold text-[#7f5af0] mb-4">Terms of Service</h3>
                  <div className="text-[#94a1b2] space-y-4">
                    <p>
                      By using our services, you agree to these terms. Please read them carefully.
                    </p>
                    <h4 className="font-semibold text-white">1. Services Provided</h4>
                    <p>
                      Naveen Kr Jain provides accounting, tax preparation, and financial consulting services. 
                      The exact services will be outlined in your engagement letter.
                    </p>
                    <h4 className="font-semibold text-white">2. Client Responsibilities</h4>
                    <p>
                      Clients must provide accurate and complete information in a timely manner. 
                      Delays in providing information may affect our ability to meet deadlines.
                    </p>
                    <h4 className="font-semibold text-white">3. Fees and Payments</h4>
                    <p>
                      Fees are based on the complexity of work and time required. Payment is due upon receipt 
                      of invoice unless other arrangements have been made.
                    </p>
                    <h4 className="font-semibold text-white">4. Confidentiality</h4>
                    <p>
                      All client information is kept confidential in accordance with professional standards 
                      and applicable laws.
                    </p>
                  </div>
                </div>
              )}
              
              {showPrivacy && (
                <div>
                  <h3 className="text-xl font-bold text-[#7f5af0] mb-4">Privacy Policy</h3>
                  <div className="text-[#94a1b2] space-y-4">
                    <p>
                      We are committed to protecting your privacy. This policy explains how we collect, 
                      use, and protect your information.
                    </p>
                    <h4 className="font-semibold text-white">1. Information Collection</h4>
                    <p>
                      We collect personal and financial information necessary to provide our services. 
                      This may include name, contact details, tax identification numbers, and financial records.
                    </p>
                    <h4 className="font-semibold text-white">2. Use of Information</h4>
                    <p>
                      Information is used solely for the purpose of providing accounting and tax services. 
                      We do not sell or share your information with third parties except as required by law.
                    </p>
                    <h4 className="font-semibold text-white">3. Data Security</h4>
                    <p>
                      We implement appropriate security measures to protect your information from unauthorized 
                      access, alteration, or disclosure.
                    </p>
                    <h4 className="font-semibold text-white">4. Your Rights</h4>
                    <p>
                      You may request access to your personal information or ask us to correct any inaccuracies. 
                      Certain legal or professional restrictions may apply.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
        
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
                  href="mailto:jain123naveen@gmail.com" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">jain123naveen@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+919267938776" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">+91 92679 38776</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <MapPin className="w-5 h-5 text-[#7f5af0] mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">Delhi, India</span>
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
                  onClick={togglePrivacy}
                >
                  Privacy Policy
                </motion.button>
                <motion.button 
                  className="text-[#72757e] hover:text-[#7f5af0] transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  onClick={toggleTerms}
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