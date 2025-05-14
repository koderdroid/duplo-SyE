import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { motion } from 'framer-motion'

const MainLayout = () => {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll for transparent -> solid header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout