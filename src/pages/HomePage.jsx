import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import HeroSlider from '../components/home/HeroSlider'
import NewsCard from '../components/home/NewsCard'
import EventCard from '../components/home/EventCard'
import ProgramCard from '../components/home/ProgramCard'

const HomePage = () => {
  const { t } = useTranslation()
  
  // Sample data for programs
  const programs = [
    {
      id: 1,
      title: 'Ingeniería de Sistemas',
      description: 'Carrera de Ingeniería de Sistemas en la Facultad de Ciencias Puras y Naturales',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos/ingenieria-sistemas'
    },
    {
      id: 2,
      title: 'Medicina',
      description: 'Carrera de Medicina en la Facultad de Medicina',
      image: 'https://images.pexels.com/photos/3652525/pexels-photo-3652525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos/medicina'
    },
    {
      id: 3,
      title: 'Derecho',
      description: 'Carrera de Derecho en la Facultad de Derecho y Ciencias Políticas',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos/derecho'
    },
    {
      id: 4,
      title: 'Economía',
      description: 'Carrera de Economía en la Facultad de Ciencias Económicas y Financieras',
      image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/programas-academicos/economia'
    }
  ]
  
  // Sample data for news
  const news = [
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
    }
  ]
  
  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Feria de Oportunidades Laborales 2025',
      date: '2025-03-15',
      time: '09:00 - 17:00',
      location: 'Campus Universitario Central',
      image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/eventos/1'
    },
    {
      id: 2,
      title: 'Conferencia: Inteligencia Artificial y su Impacto Social',
      date: '2025-03-20',
      time: '15:00 - 18:00',
      location: 'Auditorio de la Facultad de Tecnología',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/eventos/2'
    },
    {
      id: 3,
      title: 'Workshop: Herramientas Digitales para la Investigación',
      date: '2025-03-25',
      time: '10:00 - 13:00',
      location: 'Biblioteca Central Universitaria',
      image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/eventos/3'
    }
  ]

  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Programas Académicos
            </motion.h2>
            <motion.p 
              className="text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Descubre nuestra amplia oferta académica con programas de pregrado y postgrado en diversas áreas del conocimiento.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programas-academicos" className="btn btn-outline">
              Ver Todos los Programas <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold mb-2">180+</h3>
              <p className="text-blue-100">Años de Historia</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">13</h3>
              <p className="text-blue-100">Facultades</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-4xl font-bold mb-2">54</h3>
              <p className="text-blue-100">Carreras de Pregrado</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-4xl font-bold mb-2">80,000+</h3>
              <p className="text-blue-100">Estudiantes</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">{t('home.latestNews')}</h2>
              <p className="text-neutral-600">Mantente informado de las últimas noticias y acontecimientos</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 md:mt-0"
            >
              <Link to="/noticias" className="btn btn-outline">
                {t('home.viewAll')} <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <NewsCard news={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">{t('home.upcomingEvents')}</h2>
              <p className="text-neutral-600">Participa en nuestros próximos eventos académicos y culturales</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 md:mt-0"
            >
              <Link to="/eventos" className="btn btn-outline">
                {t('home.viewAll')} <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Forma parte de la comunidad universitaria de la UMSA
            </motion.h2>
            
            <motion.p 
              className="text-white/90 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Descubre todas las oportunidades académicas que te ofrece la universidad pública más antigua y prestigiosa de Bolivia.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/programas-academicos" className="btn bg-white text-secondary hover:bg-neutral-100">
                {t('home.explore')}
              </Link>
              <Link to="/contacto" className="btn border-2 border-white text-white hover:bg-white hover:text-secondary">
                Contáctanos
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage