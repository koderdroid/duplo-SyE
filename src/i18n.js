import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation resources
const resources = {
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.academic': 'Programas Académicos',
      'nav.news': 'Noticias',
      'nav.events': 'Eventos',
      'nav.portal': 'Portal Estudiante',
      'nav.contact': 'Contacto',
      
      // Home
      'home.welcome': 'Bienvenido al Sistema de Información Facultativo Universitario',
      'home.subtitle': 'Universidad Mayor de San Andrés',
      'home.explore': 'Explorar Programas',
      'home.latestNews': 'Últimas Noticias',
      'home.upcomingEvents': 'Próximos Eventos',
      'home.viewAll': 'Ver Todo',
      
      // Footer
      'footer.rights': 'Todos los derechos reservados',
      'footer.address': 'Av. Villazón N° 1995, Plaza del Bicentenario - Zona Central',
      'footer.city': 'La Paz, Bolivia',
      
      // Auth
      'auth.login': 'Iniciar Sesión',
      'auth.logout': 'Cerrar Sesión',
      'auth.username': 'Usuario',
      'auth.password': 'Contraseña',
      'auth.forgotPassword': '¿Olvidó su contraseña?',
      
      // Common
      'common.readMore': 'Leer más',
      'common.loading': 'Cargando...',
      'common.search': 'Buscar',
      'common.date': 'Fecha',
      'common.location': 'Ubicación',
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.academic': 'Academic Programs',
      'nav.news': 'News',
      'nav.events': 'Events',
      'nav.portal': 'Student Portal',
      'nav.contact': 'Contact',
      
      // Home
      'home.welcome': 'Welcome to the University Faculty Information System',
      'home.subtitle': 'Universidad Mayor de San Andrés',
      'home.explore': 'Explore Programs',
      'home.latestNews': 'Latest News',
      'home.upcomingEvents': 'Upcoming Events',
      'home.viewAll': 'View All',
      
      // Footer
      'footer.rights': 'All rights reserved',
      'footer.address': 'Av. Villazón N° 1995, Plaza del Bicentenario - Central Zone',
      'footer.city': 'La Paz, Bolivia',
      
      // Auth
      'auth.login': 'Login',
      'auth.logout': 'Logout',
      'auth.username': 'Username',
      'auth.password': 'Password',
      'auth.forgotPassword': 'Forgot password?',
      
      // Common
      'common.readMore': 'Read more',
      'common.loading': 'Loading...',
      'common.search': 'Search',
      'common.date': 'Date',
      'common.location': 'Location',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  })

export default i18n