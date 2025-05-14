import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProgramCard = ({ program }) => {
  return (
    <Link to={program.link} className="block h-full">
      <div className="card group h-full overflow-hidden">
        <div className="relative overflow-hidden h-48">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
          <h3 className="absolute bottom-0 left-0 right-0 text-white font-semibold text-xl p-4">
            {program.title}
          </h3>
        </div>
        <div className="p-4">
          <p className="text-neutral-600">{program.description}</p>
          <motion.div 
            className="mt-4 inline-flex items-center text-sm font-medium text-primary"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Ver programa
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </div>
    </Link>
  )
}

export default ProgramCard