'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Briefcase, Users, Star, Award, BookOpen } from 'lucide-react'
import Head from 'next/head'

const CountUp = ({ end, suffix, duration, delay, isInView }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    
    const timer = setTimeout(() => {
      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animate();
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(countRef.current);
    };
  }, [end, isInView, duration, delay]);

  return <span>{count}{suffix}</span>;
};

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section id="about" className="py-24 bg-[#0e0e10] relative overflow-hidden" ref={ref}>
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
          
          {/* Animated Grid Pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRINnYtOGgzMHY4em0xOCAwSDQ0di04aDEwdjh6TTM2IDZINnY4aDMwVjZ6bTE4IDBINDZ2OGg4VjZ6bTAgNDhINDZ2OGg4di04em0wLTE4SDQ0djEwaDEwdi0xMHpNNiA1NGgzMHYtOEg2djh6bTAtMThINHYxMGgzMHYtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
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
              About Me
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Professional Photo */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#7f5af0]/20 blur-sm"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-[#2cb67d]/20 blur-sm"
                />
                
                <div className="relative z-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#7f5af0] to-[#2cb67d] p-1.5 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-[#16161a] overflow-hidden border-4 border-[#242629]">
                    <img 
                      src="/profileimg.png" 
                      alt="Naveen Kr Jain" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Hi, I&apos;m Naveen Kr Jain
              </h3>
              
              <div className="space-y-4 text-lg text-[#94a1b2] leading-relaxed">
                <p>
                  With over 30 years of experience in accounting and financial services, 
                  I specialize in helping individuals and businesses navigate complex 
                  tax regulations and achieve their financial goals.
                </p>
                <p>
                  My expertise spans across tax preparation, bookkeeping, financial 
                  planning, and business consulting. I believe in building long-term 
                  relationships with my clients by providing personalized service 
                  and expert guidance.
                </p>
                <p>
                  Whether you&apos;re a small business owner looking to optimize your 
                  finances or an individual seeking tax advice, I&apos;m here to provide 
                  reliable, professional service tailored to your unique needs.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <motion.div 
                  className="flex items-center gap-2 bg-[#16161a] text-white px-4 py-2 rounded-full text-sm font-medium border border-[#7f5af0]"
                  whileHover={{ scale: 1.05, backgroundColor: "#7f5af0" }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-4 h-4" />
                  <span>CPA Certified</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-[#16161a] text-white px-4 py-2 rounded-full text-sm font-medium border border-[#2cb67d]"
                  whileHover={{ scale: 1.05, backgroundColor: "#2cb67d" }}
                  transition={{ duration: 0.2 }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>QuickBooks Pro</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-[#16161a] text-white px-4 py-2 rounded-full text-sm font-medium border border-[#2cb67d]"
                  whileHover={{ scale: 1.05, backgroundColor: "#2cb67d" }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-4 h-4" />
                  <span>Tax Specialist</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { number: 30, suffix: "+", label: "Years of Experience", icon: <Briefcase className="w-8 h-8 text-[#7f5af0]" /> },
              { number: 100, suffix: "+", label: "Clients Served", icon: <Users className="w-8 h-8 text-[#2cb67d]" /> },
              { number: 98, suffix: "%", label: "Satisfaction Rate", icon: <Star className="w-8 h-8 text-[#7f5af0]" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#16161a] rounded-xl p-8 border border-[#242629] hover:border-[#7f5af0]/30 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#7f5af0]/10 blur-xl opacity-70"></div>
                <div className="flex items-center justify-center w-16 h-16 bg-[#242629] rounded-full mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent mb-2 text-center relative z-10 h-16 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <CountUp 
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2}
                    delay={0.5 + index * 0.2}
                    isInView={isInView}
                  />
                </motion.div>
                <p className="text-[#94a1b2] font-medium text-lg text-center relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}