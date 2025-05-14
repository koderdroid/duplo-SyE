import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const NewsCard = ({ news }) => {
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
          src={news.image} 
          alt={news.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
          {news.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <FaCalendarAlt className="mr-2" />
          <span>{formatDate(news.date)}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {news.title}
        </h3>
        
        <p className="text-neutral-600 mb-5 flex-grow">
          {news.summary}
        </p>
        
        <Link 
          to={news.link} 
          className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors duration-300 mt-auto"
        >
          {t('common.readMore')}
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

export default NewsCard