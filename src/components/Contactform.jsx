'use client'
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Facebook, FileText, Calculator } from 'lucide-react'
import Head from 'next/head'

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    "GST Filing & Compliance",
    "Income Tax Filing",
    "Tax Planning",
    "Accounting Services",
    "Company Registration",
    "Audit Services",
    "Financial Consulting",
    "Other"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Company: ", company);
    console.log("Service: ", service);
    console.log("Message: ", message);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phone,
        company,
        service,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setPhone("");
      setCompany("");
      setService("");
      setMessage("");
    }
    
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section id="contact" className="py-24 bg-[#0e0e10] relative overflow-hidden" ref={ref}>
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Blob 1 */}
          <motion.div
            initial={{ x: -100, y: -100, rotate: 0 }}
            animate={isInView ? { x: 0, y: 0, rotate: 360 } : { x: -100, y: -100, rotate: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#7f5af0]/10 to-[#2cb67d]/10 filter blur-3xl opacity-20"
          />
          
          {/* Floating Blob 2 */}
          <motion.div
            initial={{ x: 200, y: 300, rotate: 0 }}
            animate={isInView ? { x: 100, y: 200, rotate: -360 } : { x: 200, y: 300, rotate: 0 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#2cb67d]/10 to-[#7f5af0]/10 filter blur-3xl opacity-20"
          />
          
          {/* Geometric Shapes */}
          <motion.div
            initial={{ x: -50, y: -50, rotate: 45 }}
            animate={isInView ? { x: 0, y: 0, rotate: 0 } : { x: -50, y: -50, rotate: 45 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-[#7f5af0]/20 rounded-lg transform rotate-45"
          />
          
          <motion.div
            initial={{ x: 50, y: 50, rotate: -45, scale: 0.8 }}
            animate={isInView ? { x: 0, y: 0, rotate: 0, scale: 1 } : { x: 50, y: 50, rotate: -45, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3, ease: "backOut" }}
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-[#2cb67d]/20 rounded-full"
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
              Contact Our Accounting Team
            </h2>
            <p className="text-[#94a1b2] max-w-2xl mx-auto mb-6">
              Get expert advice on GST filing, tax planning, and financial compliance
            </p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="bg-[#16161a] rounded-xl border border-[#242629] overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Accounting-themed Background Image */}
            <div className="absolute inset-0 z-0 opacity-40">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#16161a]/70 via-[#16161a]/90 to-[#16161a]"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#242629] relative z-10">
              {/* Left side - Contact Info */}
              <motion.div 
                className="p-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-[#7f5af0] mr-3" />
                  <h3 className="text-2xl font-bold text-white">Accounting Services</h3>
                </div>
                <p className="text-[#94a1b2] mb-8 leading-relaxed">
                  Specializing in GST compliance, tax planning, and financial consulting for businesses of all sizes. 
                  Contact us for a free initial consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#242629] p-3 rounded-full mr-4">
                      <Mail className="w-5 h-5 text-[#7f5af0]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email Us</h4>
                      <p className="text-[#94a1b2]">accounts@naveenjain.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#242629] p-3 rounded-full mr-4">
                      <Phone className="w-5 h-5 text-[#2cb67d]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Call Us</h4>
                      <p className="text-[#94a1b2]">+91 98765 43210 (GST Helpdesk)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#242629] p-3 rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-[#7f5af0]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Our Office</h4>
                      <p className="text-[#94a1b2]">123 Financial Street, Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#242629] p-3 rounded-full mr-4">
                      <FileText className="w-5 h-5 text-[#2cb67d]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Business Hours</h4>
                      <p className="text-[#94a1b2]">Mon-Fri: 9AM - 6PM (IST)</p>
                      <p className="text-[#94a1b2]">Sat: 10AM - 2PM (IST)</p>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="pt-4">
                    <h4 className="font-medium text-white mb-3">Follow for Tax Updates</h4>
                    <div className="flex space-x-3">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#242629] p-3 rounded-full hover:bg-[#0077b5]/20 transition-colors duration-200 group">
                        <Linkedin className="w-5 h-5 text-[#0077b5] group-hover:text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#242629] p-3 rounded-full hover:bg-[#1da1f2]/20 transition-colors duration-200 group">
                        <Twitter className="w-5 h-5 text-[#1da1f2] group-hover:text-white" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#242629] p-3 rounded-full hover:bg-[#e1306c]/20 transition-colors duration-200 group">
                        <Instagram className="w-5 h-5 text-[#e1306c] group-hover:text-white" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#242629] p-3 rounded-full hover:bg-[#1877f2]/20 transition-colors duration-200 group">
                        <Facebook className="w-5 h-5 text-[#1877f2] group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Contact Form */}
              <motion.div 
                className="p-10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center mb-6">
                  <Send className="w-8 h-8 text-[#2cb67d] mr-3" />
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-[#94a1b2] mb-2">
                      Your Name <span className="text-[#ff3860]">*</span>
                    </label>
                    <input
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                      type="text"
                      id="fullname"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#94a1b2] mb-2">
                      Email Address <span className="text-[#ff3860]">*</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#94a1b2] mb-2">
                        Phone Number
                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="tel"
                        id="phone"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#94a1b2] mb-2">
                        Company Name
                      </label>
                      <input
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                        type="text"
                        id="company"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#94a1b2] mb-2">
                      Service Needed <span className="text-[#ff3860]">*</span>
                    </label>
                    <select
                      onChange={(e) => setService(e.target.value)}
                      value={service}
                      id="service"
                      required
                      className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d] appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#94a1b2] mb-2">
                      How Can We Help? <span className="text-[#ff3860]">*</span>
                    </label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      id="message"
                      placeholder="I need help with GST filing for my business..."
                      required
                      className="w-full px-4 py-3 bg-[#242629] border border-[#36383b] rounded-lg focus:ring-1 focus:ring-[#7f5af0] focus:border-[#7f5af0] outline-none transition-all duration-200 text-white placeholder-[#5a626d] h-32 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-[#7f5af0]/70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] hover:from-[#7f5af0]/90 hover:to-[#2cb67d]/90 text-white shadow-sm hover:shadow-md'
                    } flex items-center justify-center`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Accounting Help
                      </>
                    )}
                  </motion.button>
                </form>
                
                {/* Error/Success Messages */}
                <div className="mt-6 space-y-3">
                  {error.map((e, index) => (
                    <motion.div
                      key={index}
                      className={`px-4 py-3 rounded-lg text-sm flex items-start ${
                        success
                          ? 'bg-[#2cb67d]/10 text-[#2cb67d] border border-[#2cb67d]/20'
                          : 'bg-[#ff3860]/10 text-[#ff3860] border border-[#ff3860]/20'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {success ? (
                        <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      )}
                      <span>{e}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}