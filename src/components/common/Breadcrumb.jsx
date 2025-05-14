import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  
  const getPathName = (path) => {
    switch(path) {
      case 'programas-academicos':
        return 'Programas Académicos'
      case 'noticias':
        return 'Noticias'
      case 'eventos':
        return 'Eventos'
      case 'portal-estudiante':
        return 'Portal Estudiante'
      case 'contacto':
        return 'Contacto'
      default:
        return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    }
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm text-neutral-500 hover:text-primary">
            <FaHome className="mr-2" />
            Inicio
          </Link>
        </li>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          
          return (
            <li key={routeTo}>
              <div className="flex items-center">
                <FaChevronRight className="text-neutral-400 mx-1" />
                {isLast ? (
                  <span className="text-sm font-medium text-neutral-700">
                    {getPathName(name)}
                  </span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-sm text-neutral-500 hover:text-primary"
                  >
                    {getPathName(name)}
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb