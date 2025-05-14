import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Página no encontrada</h2>
      <p className="text-neutral-600 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </motion.div>
  )
}

export default NotFound