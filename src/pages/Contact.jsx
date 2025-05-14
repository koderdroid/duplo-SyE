import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    console.log(formData)
    setSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 5000)
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
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Estamos aquí para responder a tus preguntas y brindarte la información que necesitas.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-5">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-neutral-600">
                      Av. Villazón N° 1995, Plaza del Bicentenario - Zona Central<br />
                      La Paz, Bolivia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-5">
                    <FaPhoneAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-neutral-600">
                      +591 2 2440571<br />
                      +591 2 2440572
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-5">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                    <p className="text-neutral-600">
                      info@umsa.bo<br />
                      sifu@umsa.bo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-5">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horario de Atención</h3>
                    <p className="text-neutral-600">
                      Lunes a Viernes: 08:30 a 16:30<br />
                      Sábados: 09:00 a 12:00
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-md">
                <div className="bg-neutral-200 h-80 w-full flex items-center justify-center">
                  <p className="text-neutral-600 text-center p-4">
                    Mapa interactivo de la Universidad Mayor de San Andrés<br />
                    <span className="text-sm">(En un sitio real, aquí se mostraría un mapa de Google Maps u otra plataforma similar)</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">Envíanos un Mensaje</h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-green-700">
                    Gracias por contactarnos. Responderemos a tu mensaje lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              )}
              
              {/* FAQ Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
                
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-neutral-50 font-medium">
                        ¿Cómo puedo solicitar información sobre el proceso de admisión?
                        <span className="transition group-open:rotate-180">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-neutral-200">
                        <p className="text-neutral-600">
                          Para solicitar información sobre el proceso de admisión, puedes acercarte a la Oficina de Admisiones en el edificio Rectorado, enviar un correo a admisiones@umsa.bo o llamar al +591 2 2440573.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-neutral-50 font-medium">
                        ¿Dónde puedo encontrar información sobre becas y ayudas económicas?
                        <span className="transition group-open:rotate-180">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-neutral-200">
                        <p className="text-neutral-600">
                          La información sobre becas y ayudas económicas está disponible en la Dirección de Bienestar Estudiantil. También puedes consultar el sitio web oficial en la sección de Servicios Estudiantiles.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-neutral-50 font-medium">
                        ¿Cómo puedo acceder a los servicios de la biblioteca?
                        <span className="transition group-open:rotate-180">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-neutral-200">
                        <p className="text-neutral-600">
                          Para acceder a los servicios de la biblioteca, necesitas presentar tu carnet universitario vigente. Los horarios de atención son de lunes a viernes de 08:00 a 20:00 y sábados de 09:00 a 13:00.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact