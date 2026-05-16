'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ClaudeAIServices from '@/components/ClaudeAIServices'
import Industries from '@/components/Industries'
import TrustCompliance from '@/components/TrustCompliance'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Services />
        <ClaudeAIServices />
        <Industries />
        <TrustCompliance />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}
