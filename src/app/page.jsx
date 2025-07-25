import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUS'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/Contactform'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <ContactForm/>
    
      <Footer />
    </main>
  )
}
