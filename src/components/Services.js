'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  PieChart, 
  Briefcase, 
  Shield, 
  Users, 
  DollarSign 
} from 'lucide-react'
import Head from 'next/head'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      name: "GST Filing",
      icon: FileText,
      description: "Complete GST registration, filing, and compliance services",
      gradient: "from-[#7f5af0] to-[#6c4bd3]",
      details: [
        "Monthly/Quarterly GST Returns",
        "GST Registration & Amendments",
        "Reconciliation of GST Data",
        "Refund Processing",
        "Compliance Notices Handling"
      ]
    },
    {
      name: "Bookkeeping",
      icon: Calculator,
      description: "Professional bookkeeping and accounting record maintenance",
      gradient: "from-[#2cb67d] to-[#26a56c]",
      details: [
        "Daily Transaction Recording",
        "Bank Reconciliation",
        "Expense Categorization",
        "Financial Statement Preparation",
        "Custom Reporting"
      ]
    },
    {
      name: "Tax Planning",
      icon: TrendingUp,
      description: "Strategic tax planning to minimize your tax liability",
      gradient: "from-[#7f5af0] to-[#2cb67d]",
      details: [
        "Tax Savings Strategies",
        "Investment Planning",
        "Deduction Optimization",
        "Year-Round Tax Planning",
        "Tax Projections"
      ]
    },
    {
      name: "Financial Analysis",
      icon: PieChart,
      description: "Comprehensive financial analysis and reporting",
      gradient: "from-[#2cb67d] to-[#26a5a5]",
      details: [
        "Ratio Analysis",
        "Cash Flow Forecasting",
        "Budget vs Actual Analysis",
        "Break-even Analysis",
        "Financial Health Reports"
      ]
    },
    {
      name: "Business Consulting",
      icon: Briefcase,
      description: "Expert business advice and growth strategies",
      gradient: "from-[#7f5af0] to-[#a54cb5]",
      details: [
        "Business Plan Development",
        "Process Optimization",
        "Profitability Analysis",
        "Market Expansion Strategies",
        "Operational Efficiency"
      ]
    },
    {
      name: "Audit Services",
      icon: Shield,
      description: "Internal and external audit services for compliance",
      gradient: "from-[#a54cb5] to-[#7f5af0]",
      details: [
        "Statutory Audit",
        "Internal Control Evaluation",
        "Compliance Audit",
        "Process Audit",
        "Special Purpose Audit"
      ]
    },
    {
      name: "Payroll Management",
      icon: Users,
      description: "Complete payroll processing and management solutions",
      gradient: "from-[#2cb67d] to-[#7f5af0]",
      details: [
        "Salary Processing",
        "PF/ESI Compliance",
        "Tax Deduction at Source",
        "Leave Management",
        "Payslip Generation"
      ]
    },
    {
      name: "Investment Advisory",
      icon: DollarSign,
      description: "Investment planning and portfolio management advice",
      gradient: "from-[#26a5a5] to-[#2cb67d]",
      details: [
        "Portfolio Analysis",
        "Risk Assessment",
        "Asset Allocation",
        "Retirement Planning",
        "Wealth Management"
      ]
    }
  ]

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section id="services" className="relative py-24 bg-[#0e0e10] overflow-hidden" ref={ref}>
        {/* Background to match About section */}
        <div className="absolute inset-0 bg-[#0e0e10] z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My Services
            </h2>
            <p className="text-xl text-[#94a1b2] mb-8 max-w-3xl mx-auto">
              Comprehensive financial services tailored to meet your business and personal needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"></div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="perspective-1000 h-[300px]">
                  <motion.div
                    className="relative w-full h-full preserve-3d transition-transform duration-700"
                    initial={false}
                    whileHover={{ rotateY: 180 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-[#16161a] rounded-xl p-8 border border-[#242629] overflow-hidden flex flex-col items-center text-center">
                      <div className="absolute inset-0 bg-[#16161a]/50 backdrop-blur-sm z-0"></div>
                      <motion.div 
                        className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {service.name}
                        </h3>
                        <p className="text-[#94a1b2] leading-relaxed text-sm max-w-[240px]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#16161a] to-[#0e0e10] rounded-xl p-8 border border-[#7f5af0]/30 overflow-hidden flex flex-col items-center text-center rotate-y-180">
                      <div className="absolute inset-0 bg-[#16161a]/50 backdrop-blur-sm z-0"></div>
                      <div className="relative z-10 w-full h-full flex flex-col">
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 mx-auto`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {service.name} Details
                        </h3>
                        <ul className="text-left text-[#94a1b2] text-sm space-y-2 flex-1">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#7f5af0] mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-[#242629]">
                          <span className="text-xs text-[#7f5af0] font-medium">
                            Hover out to return
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-[#94a1b2] mb-8">
  Need a custom solution? Let&apos;s discuss your specific requirements.
</p>
            <motion.button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Custom Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#7f5af0]/90 to-[#2cb67d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  )
}
