import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa'
import NewsCard from '../components/home/NewsCard'

const News = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: 'Convocatoria para Becas de Postgrado 2025',
      summary: 'La Universidad Mayor de San Andrés lanza su programa de becas para estudios de postgrado en universidades internacionales.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-02-15',
      category: 'Académico',
      link: '/noticias/1'
    },
    {
      id: 2,
      title: 'Nueva Infraestructura para la Facultad de Ingeniería',
      summary: 'Se inauguró el nuevo edificio para la Facultad de Ingeniería equipado con laboratorios de última tecnología.',
      image: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-02-10',
      category: 'Institucional',
      link: '/noticias/2'
    },
    {
      id: 3,
      title: 'Simposio Internacional de Investigación Científica',
      summary: 'La UMSA será sede del Simposio Internacional de Investigación Científica con la participación de expertos de Latinoamérica.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-02-05',
      category: 'Académico',
      link: '/noticias/3'
    },
    {
      id: 4,
      title: 'Convenio de Cooperación con Universidad de Barcelona',
      summary: 'La UMSA firma un importante convenio de cooperación académica con la Universidad de Barcelona.',
      image: 'https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-01-28',
      category: 'Internacional',
      link: '/noticias/4'
    },
    {
      id: 5,
      title: 'Reconocimiento a Investigadores Destacados',
      summary: 'La UMSA reconoce a investigadores destacados por sus contribuciones al desarrollo científico del país.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-01-20',
      category: 'Investigación',
      link: '/noticias/5'
    },
    {
      id: 6,
      title: 'Inicio del Proceso de Admisión 2025',
      summary: 'La UMSA inicia el proceso de admisión para nuevos estudiantes para la gestión académica 2025.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-01-15',
      category: 'Académico',
      link: '/noticias/6'
    },
    {
      id: 7,
      title: 'Festival Cultural Universitario',
      summary: 'La UMSA organiza el Festival Cultural Universitario con participación de estudiantes de todas las facultades.',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-01-10',
      category: 'Cultural',
      link: '/noticias/7'
    },
    {
      id: 8,
      title: 'Programa de Intercambio Estudiantil',
      summary: 'Nuevas oportunidades para estudiantes que deseen participar en programas de intercambio internacional.',
      image: 'https://images.pexels.com/photos/1467277/pexels-photo-1467277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2025-01-05',
      category: 'Internacional',
      link: '/noticias/8'
    },
    {
      id: 9,
      title: 'Lanzamiento de Revista Científica',
      summary: 'La UMSA lanza nueva revista científica para la publicación de investigaciones académicas.',
      image: 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2024-12-20',
      category: 'Investigación',
      link: '/noticias/9'
    }
  ]
  
  // Get unique categories
  const categories = [...new Set(newsData.map(item => item.category))]
  
  // Filter news based on active filter and search term
  const filteredNews = newsData.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesFilter && matchesSearch
  })
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary pt-40 pb-20 text-white">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Noticias y Actualidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Mantente informado sobre los últimos acontecimientos y noticias de la Universidad Mayor de San Andrés.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-2xl"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <FaFilter className="text-neutral-500 mr-2" />
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Todas las categorías
            </button>
            
            {/* Category filters */}
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeFilter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* News List */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsCard news={news} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-2xl font-semibold mb-2">No se encontraron resultados</h3>
                <p className="text-neutral-600">Intenta con otra búsqueda o filtro.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default News