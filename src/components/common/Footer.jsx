import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/src/assets/logo-white.svg" 
                alt="UMSA Logo" 
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <span className="font-bold text-lg block">SIFU</span>
                <span className="text-sm block">UMSA</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-6">
              Sistema de Información Facultativo Universitario de la Universidad Mayor de San Andrés
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/programas-academicos" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.academic')}
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/portal-estudiante" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.portal')}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span className="text-neutral-300">
                  {t('footer.address')}<br/>
                  {t('footer.city')}
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-primary" />
                <span className="text-neutral-300">+591 2 2440571</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:info@umsa.bo" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  info@umsa.bo
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Boletín Informativo</h3>
            <p className="text-neutral-300 mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className="px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Universidad Mayor de San Andrés. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer