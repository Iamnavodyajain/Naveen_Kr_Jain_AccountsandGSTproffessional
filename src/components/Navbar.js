'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Head from 'next/head'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0e0e10]/90 backdrop-blur-md shadow-xl' : 'bg-transparent backdrop-blur-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo and Name - Updated with subtitle and removed border */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img
                    src="/logo2.png"
                    alt="Naveen Kr Jain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-xl font-bold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">
                    Naveen Kr Jain
                  </span>
                  <span className="block text-xs text-[#94a1b2] font-medium">
                    Accounting Taxation and GST Professional
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="relative text-[#fffffe] hover:text-[#7f5af0] px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f5af0] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white text-sm font-medium hover:shadow-lg transition-all duration-300 hover:opacity-90"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#fffffe] hover:text-[#7f5af0] hover:bg-[#16161a]/50 transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden transition-all duration-300 ease-in-out">
              <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-[#16161a] shadow-xl rounded-lg mt-2 border border-[#242629]">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#fffffe] hover:text-[#7f5af0] hover:bg-[#242629]/50 block px-4 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="mt-2 w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white text-base font-medium hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </>
  )
}