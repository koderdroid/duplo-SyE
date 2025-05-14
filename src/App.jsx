import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import HomePage from './pages/HomePage'
import AcademicPrograms from './pages/AcademicPrograms'
import News from './pages/News'
import Events from './pages/Events'
import StudentPortal from './pages/StudentPortal'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for demo purposes
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <img 
            src="/src/assets/logo.svg" 
            alt="UMSA Logo" 
            className="w-24 h-24 animate-pulse"
          />
          <h2 className="mt-4 text-xl font-semibold text-primary">Cargando...</h2>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="programas-academicos" element={<AcademicPrograms />} />
          <Route path="noticias" element={<News />} />
          <Route path="eventos" element={<Events />} />
          <Route path="portal-estudiante" element={<StudentPortal />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App