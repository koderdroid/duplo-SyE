import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa'
import EventCard from '../components/home/EventCard'

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('upcoming')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Sample events data
  const eventsData = [
    {
      id: 1,
      title: 'Feria de Oportunidades Laborales 2025',
      date: '2025-03-15',
      time: '09:00 - 17:00',
      location: 'Campus Universitario Central',
      image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Feria',
      link: '/eventos/1'
    },
    {
      id: 2,
      title: 'Conferencia: Inteligencia Artificial y su Impacto Social',
      date: '2025-03-20',
      time: '15:00 - 18:00',
      location: 'Auditorio de la Facultad de Tecnología',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Conferencia',
      link: '/eventos/2'
    },
    {
      id: 3,
      title: 'Workshop: Herramientas Digitales para la Investigación',
      date: '2025-03-25',
      time: '10:00 - 13:00',
      location: 'Biblioteca Central Universitaria',
      image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Workshop',
      link: '/eventos/3'
    },
    {
      id: 4,
      title: 'Jornada de Extensión Universitaria',
      date: '2025-04-05',
      time: '09:00 - 16:00',
      location: 'Plaza del Bicentenario',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Cultural',
      link: '/eventos/4'
    },
    {
      id: 5,
      title: 'Congreso Internacional de Ciencias de la Salud',
      date: '2025-04-10',
      time: '08:00 - 18:00',
      location: 'Paraninfo Universitario',
      image: 'https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Congreso',
      link: '/eventos/5'
    },
    {
      id: 6,
      title: 'Seminario de Investigación en Ciencias Sociales',
      date: '2025-04-15',
      time: '14:00 - 17:00',
      location: 'Facultad de Ciencias Sociales',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Seminario',
      link: '/eventos/6'
    },
    {
      id: 7,
      title: 'Feria del Libro Universitario',
      date: '2025-04-20',
      time: '09:00 - 20:00',
      location: 'Atrio de la Facultad de Humanidades',
      image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Feria',
      link: '/eventos/7'
    },
    {
      id: 8,
      title: 'Torneo Deportivo Interfacultativo',
      date: '2025-04-25',
      time: '08:00 - 18:00',
      location: 'Complejo Deportivo Universitario',
      image: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Deportivo',
      link: '/eventos/8'
    },
    {
      id: 9,
      title: 'Jornada de Orientación Profesional',
      date: '2025-05-05',
      time: '14:00 - 18:00',
      location: 'Facultad de Ciencias Económicas',
      image: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Académico',
      link: '/eventos/9'
    }
  ]
  
  // Get unique categories
  const categories = [...new Set(eventsData.map(item => item.category))]
  
  // Filter for upcoming/past events
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  // Filter events based on active filter and search term
  const filteredEvents = eventsData.filter(item => {
    const eventDate = new Date(item.date)
    eventDate.setHours(0, 0, 0, 0)
    
    let dateMatches = true
    if (activeFilter === 'upcoming') {
      dateMatches = eventDate >= today
    } else if (activeFilter === 'past') {
      dateMatches = eventDate < today
    }
    
    const categoryMatches = activeFilter === 'upcoming' || activeFilter === 'past' || activeFilter === 'all' || item.category === activeFilter
    const searchMatches = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    return dateMatches && categoryMatches && searchMatches
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
            Eventos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Calendario de eventos académicos, culturales y deportivos de la Universidad Mayor de San Andrés.
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
                placeholder="Buscar eventos..."
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
              onClick={() => setActiveFilter('upcoming')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'upcoming' 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Próximos Eventos
            </button>
            <button
              onClick={() => setActiveFilter('past')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === 'past' 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Eventos Pasados
            </button>
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
      
      {/* Events List */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-2xl font-semibold mb-2">No se encontraron eventos</h3>
                <p className="text-neutral-600">Intenta con otra búsqueda o filtro.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events