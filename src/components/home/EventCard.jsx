import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const EventCard = ({ event }) => {
  const { t, i18n } = useTranslation()
  
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString)
      return format(date, 'dd MMMM, yyyy', { locale: i18n.language === 'es' ? es : undefined })
    } catch (error) {
      return dateString
    }
  }

  return (
    <article className="card group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-5 flex-grow">
          <div className="flex items-center text-sm text-neutral-600">
            <FaCalendarAlt className="mr-2 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <FaClock className="mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <FaMapMarkerAlt className="mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <Link 
          to={event.link} 
          className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors duration-300 mt-auto"
        >
          Ver detalles
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="ml-2" />
          </motion.span>
        </Link>
      </div>
    </article>
  )
}

export default EventCard