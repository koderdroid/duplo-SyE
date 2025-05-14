import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaSearch, FaTimes, FaUser, FaGlobe } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ scrolled }) => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white text-neutral-800 shadow-md py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={scrolled ? "/src/assets/logo-color.svg" : "/src/assets/logo-white.svg"}
              alt="UMSA Logo"
              className="h-12 w-auto transition-all duration-300"
            />
            <div className="ml-3">
              <span className="font-bold text-lg block">SIFU</span>
              <span className="text-sm block">UMSA</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : `nav-link ${!scrolled ? 'text-white hover:text-white' : ''}`
              }
              end
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/programas-academicos" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : `nav-link ${!scrolled ? 'text-white hover:text-white' : ''}`
              }
            >
              {t('nav.academic')}
            </NavLink>
            <NavLink 
              to="/noticias" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : `nav-link ${!scrolled ? 'text-white hover:text-white' : ''}`
              }
            >
              {t('nav.news')}
            </NavLink>
            <NavLink 
              to="/eventos" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : `nav-link ${!scrolled ? 'text-white hover:text-white' : ''}`
              }
            >
              {t('nav.events')}
            </NavLink>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : `nav-link ${!scrolled ? 'text-white hover:text-white' : ''}`
              }
            >
              {t('nav.contact')}
            </NavLink>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full hover:bg-opacity-20 ${
                scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white'
              }`}
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            
            <button
              onClick={changeLanguage}
              className={`p-2 rounded-full hover:bg-opacity-20 ${
                scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white'
              }`}
              aria-label="Change Language"
            >
              <FaGlobe className="w-5 h-5" />
              <span className="sr-only">
                {i18n.language === 'es' ? 'English' : 'Español'}
              </span>
            </button>
            
            <Link 
              to="/portal-estudiante" 
              className={`btn ${
                scrolled ? 'btn-primary' : 'bg-white text-primary hover:bg-neutral-100'
              }`}
            >
              <FaUser className="mr-2" />
              {t('auth.login')}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSearch}
              className={`p-2 mr-2 rounded-full hover:bg-opacity-20 ${
                scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white'
              }`}
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full hover:bg-opacity-20 ${
                scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Search Bar Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white p-4 shadow-md mt-2 rounded-b-lg"
            >
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder={t('common.search')}
                  className="w-full bg-neutral-100 border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
                  autoFocus
                />
                <button 
                  type="button" 
                  onClick={toggleSearch}
                  className="ml-3 text-neutral-500 hover:text-neutral-700"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="container-custom py-6 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
                onClick={toggleMenu}
                end
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/programas-academicos" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
                onClick={toggleMenu}
              >
                {t('nav.academic')}
              </NavLink>
              <NavLink 
                to="/noticias" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
                onClick={toggleMenu}
              >
                {t('nav.news')}
              </NavLink>
              <NavLink 
                to="/eventos" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
                onClick={toggleMenu}
              >
                {t('nav.events')}
              </NavLink>
              <NavLink 
                to="/contacto" 
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'} 
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </NavLink>
              
              <div className="pt-4 flex flex-col space-y-4">
                <button
                  onClick={() => {
                    changeLanguage();
                    toggleMenu();
                  }}
                  className="flex items-center text-neutral-700 hover:text-primary"
                >
                  <FaGlobe className="mr-2" />
                  {i18n.language === 'es' ? 'English' : 'Español'}
                </button>
                
                <Link 
                  to="/portal-estudiante" 
                  className="btn btn-primary" 
                  onClick={toggleMenu}
                >
                  <FaUser className="mr-2" />
                  {t('auth.login')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header