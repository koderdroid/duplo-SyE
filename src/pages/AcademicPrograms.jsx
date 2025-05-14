import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaBuilding } from 'react-icons/fa'

const AcademicPrograms = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Sample faculties data
  const faculties = [
    { id: 'fcpn', name: 'Facultad de Ciencias Puras y Naturales' },
    { id: 'fca', name: 'Facultad de Ciencias Agronómicas' },
    { id: 'fce', name: 'Facultad de Ciencias Económicas y Financieras' },
    { id: 'fcs', name: 'Facultad de Ciencias Sociales' },
    { id: 'med', name: 'Facultad de Medicina' },
    { id: 'tech', name: 'Facultad de Tecnología' },
    { id: 'hum', name: 'Facultad de Humanidades y Ciencias de la Educación' },
  ]
  
  // Sample programs data
  const programsData = [
    {
      id: 1,
      title: 'Ingeniería de Sistemas',
      faculty: 'fcpn',
      level: 'pregrado',
      years: '5 años',
      description: 'Formación de profesionales en computación, sistemas y tecnologías de la información.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Medicina',
      faculty: 'med',
      level: 'pregrado',
      years: '6 años',
      description: 'Formación de médicos con sólidos conocimientos científicos y humanísticos.',
      image: 'https://images.pexels.com/photos/3652525/pexels-photo-3652525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Derecho',
      faculty: 'fcs',
      level: 'pregrado',
      years: '5 años',
      description: 'Formación de abogados con conocimientos jurídicos y compromiso social.',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Economía',
      faculty: 'fce',
      level: 'pregrado',
      years: '5 años',
      description: 'Estudio de los procesos económicos y su impacto en la sociedad.',
      image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Ingeniería Civil',
      faculty: 'tech',
      level: 'pregrado',
      years: '5 años',
      description: 'Formación en diseño, construcción y mantenimiento de infraestructuras.',
      image: 'https://images.pexels.com/photos/5976542/pexels-photo-5976542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'Matemática',
      faculty: 'fcpn',
      level: 'pregrado',
      years: '5 años',
      description: 'Estudio avanzado de las matemáticas puras y aplicadas.',
      image: 'https://images.pexels.com/photos/6238039/pexels-photo-6238039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      title: 'Maestría en Gestión de Recursos Hídricos',
      faculty: 'fca',
      level: 'postgrado',
      years: '2 años',
      description: 'Especialización en la gestión sostenible de recursos hídricos.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 8,
      title: 'Doctorado en Ciencias Físicas',
      faculty: 'fcpn',
      level: 'postgrado',
      years: '3 años',
      description: 'Investigación avanzada en el campo de la física.',
      image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 9,
      title: 'Lingüística',
      faculty: 'hum',
      level: 'pregrado',
      years: '5 años',
      description: 'Estudio científico del lenguaje y sus manifestaciones.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]
  
  // Filter programs based on active filter and search term
  const filteredPrograms = programsData.filter(program => {
    const matchesFilter = activeFilter === 'all' || program.faculty === activeFilter || program.level === activeFilter
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesFilter && matchesSearch
  })
  
  // Get faculty name by id
  const getFacultyName = (id) => {
    const faculty = faculties.find(f => f.id === id)
    return faculty ? faculty.name : ''
  }
  
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
            Programas Académicos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Explora nuestra oferta académica con programas de pregrado y postgrado en diversas áreas del conocimiento.
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
                placeholder="Buscar programas..."
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
              Todos
            </button>
            <button
              onClick={() => setActiveFilter('pregrado')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'pregrado' 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Pregrado
            </button>
            <button
              onClick={() => setActiveFilter('postgrado')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'postgrado' 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Postgrado
            </button>
            
            {/* Faculty filters */}
            {faculties.map(faculty => (
              <button
                key={faculty.id}
                onClick={() => setActiveFilter(faculty.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeFilter === faculty.id 
                    ? 'bg-primary text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {faculty.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Programs List */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card group h-full flex flex-col hover:shadow-lg">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                        {program.level === 'pregrado' ? 'Pregrado' : 'Postgrado'}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-neutral-500 mb-3">
                        <FaBuilding className="mr-2" />
                        <span>{getFacultyName(program.faculty)}</span>
                      </div>
                      
                      <p className="text-neutral-600 mb-3 flex-grow">
                        {program.description}
                      </p>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-sm font-medium text-neutral-700">Duración: {program.years}</span>
                        <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300">
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </div>
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

export default AcademicPrograms