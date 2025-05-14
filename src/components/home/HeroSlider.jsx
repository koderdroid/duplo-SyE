import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const HeroSlider = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Slider data
  const slides = [
    {
      id: 1,
      title: t('home.welcome'),
      subtitle: t('home.subtitle'),
      description: 'Formando profesionales de excelencia desde 1830',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos',
      buttonText: t('home.explore')
    },
    {
      id: 2,
      title: 'Excelencia Académica',
      subtitle: 'Programas de alta calidad',
      description: 'Nuestros programas académicos están diseñados para satisfacer las demandas del mercado laboral actual',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos',
      buttonText: 'Conoce más'
    },
    {
      id: 3,
      title: 'Investigación e Innovación',
      subtitle: 'Generando conocimiento',
      description: 'Contribuimos al desarrollo científico y tecnológico a través de proyectos de investigación de alto impacto',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/noticias',
      buttonText: 'Descubre más'
    }
  ]
  
  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    
    return () => clearInterval(interval)
  }, [currentSlide])
  
  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1))
  }
  
  const nextSlide = () => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1))
  }
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-white/90 text-lg md:text-xl mb-2"
                    >
                      {slide.subtitle}
                    </motion.h3>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white/90 text-lg mb-8"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <Link to={slide.link} className="btn btn-primary px-8 py-3 text-lg">
                        {slide.buttonText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-colors duration-300"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
      
      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSlider