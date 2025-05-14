import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaLock, FaUserGraduate, FaBook, FaCalendarAlt, FaClipboardList, FaFileAlt } from 'react-icons/fa'

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  
  const handleLogin = (e) => {
    e.preventDefault()
    // In a real application, you would validate credentials with a server
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true)
    }
  }
  
  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginData({
      username: '',
      password: ''
    })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
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
            Portal Estudiante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Accede a información académica, trámites y servicios universitarios.
          </motion.p>
        </div>
      </section>
      
      {/* Login/Dashboard Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          {isLoggedIn ? (
            <StudentDashboard onLogout={handleLogout} />
          ) : (
            <LoginForm 
              loginData={loginData} 
              handleChange={handleChange} 
              handleLogin={handleLogin} 
            />
          )}
        </div>
      </section>
    </>
  )
}

const LoginForm = ({ loginData, handleChange, handleLogin }) => {
  return (
    <div className="max-w-md mx-auto">
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <FaUserGraduate className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
          <p className="text-neutral-600 mt-2">
            Ingresa tus credenciales para acceder al portal
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-1">
              Nombre de Usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-neutral-500" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                required
                className="w-full pl-10 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="usuario@umsa.bo"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-neutral-500" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                Recordarme
              </label>
            </div>
            
            <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Iniciar Sesión
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <p className="text-neutral-600">
            ¿No tienes una cuenta?{' '}
            <a href="#" className="font-medium text-primary hover:text-primary-dark">
              Contacta con administración
            </a>
          </p>
        </div>
      </motion.div>
      
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Ayuda para iniciar sesión</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-neutral-600">Si olvidaste tu contraseña, haz clic en "¿Olvidaste tu contraseña?" y sigue las instrucciones.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-neutral-600">Si no puedes acceder a tu cuenta, contacta con la Oficina de Sistemas al 2440574.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-neutral-600">Si eres estudiante nuevo, debes activar tu cuenta en la Dirección de Tecnologías de Información.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

const StudentDashboard = ({ onLogout }) => {
  // Sample student data
  const studentData = {
    name: 'María Fernanda Quiroga',
    id: '2018-56789',
    career: 'Ingeniería de Sistemas',
    faculty: 'Facultad de Ciencias Puras y Naturales',
    semester: '7mo Semestre',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
  
  // Sample courses data
  const courses = [
    {
      id: 'SIS-301',
      name: 'Ingeniería de Software I',
      teacher: 'Dr. Juan Pérez',
      schedule: 'Lunes y Miércoles 08:00 - 10:00',
      score: 85
    },
    {
      id: 'SIS-302',
      name: 'Bases de Datos II',
      teacher: 'Ing. Laura Rodríguez',
      schedule: 'Martes y Jueves 10:00 - 12:00',
      score: 78
    },
    {
      id: 'SIS-303',
      name: 'Redes de Computadoras',
      teacher: 'MSc. Roberto Guzmán',
      schedule: 'Lunes y Viernes 14:00 - 16:00',
      score: 92
    },
    {
      id: 'SIS-304',
      name: 'Inteligencia Artificial',
      teacher: 'Dra. Patricia Mendoza',
      schedule: 'Miércoles y Viernes 16:00 - 18:00',
      score: 88
    }
  ]
  
  // Sample upcoming tasks
  const tasks = [
    {
      id: 1,
      title: 'Entrega de Proyecto Final',
      course: 'Ingeniería de Software I',
      deadline: '2025-03-20',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Examen Parcial',
      course: 'Bases de Datos II',
      deadline: '2025-03-15',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Práctica de Laboratorio',
      course: 'Redes de Computadoras',
      deadline: '2025-03-10',
      status: 'completed'
    }
  ]
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Student Profile */}
      <motion.div 
        className="lg:col-span-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-primary-dark p-6 text-center">
            <img 
              src={studentData.photo} 
              alt={studentData.name} 
              className="w-32 h-32 object-cover rounded-full border-4 border-white mx-auto"
            />
            <h2 className="text-white text-xl font-bold mt-4">{studentData.name}</h2>
            <p className="text-blue-200">{studentData.id}</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-500">Carrera</p>
                <p className="font-medium">{studentData.career}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Facultad</p>
                <p className="font-medium">{studentData.faculty}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Semestre Actual</p>
                <p className="font-medium">{studentData.semester}</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="w-full btn border border-neutral-300 text-neutral-700 hover:bg-neutral-100 mt-6"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-4">Accesos Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-neutral-50 rounded-lg text-neutral-700 hover:text-primary transition-colors">
                  <FaCalendarAlt className="mr-3" />
                  Horario Académico
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-neutral-50 rounded-lg text-neutral-700 hover:text-primary transition-colors">
                  <FaClipboardList className="mr-3" />
                  Historial Académico
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-neutral-50 rounded-lg text-neutral-700 hover:text-primary transition-colors">
                  <FaFileAlt className="mr-3" />
                  Trámites y Solicitudes
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-neutral-50 rounded-lg text-neutral-700 hover:text-primary transition-colors">
                  <FaBook className="mr-3" />
                  Biblioteca Virtual
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <motion.div 
        className="lg:col-span-9"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Bienvenido/a, {studentData.name}</h2>
          <p className="text-neutral-600">
            Este es tu portal estudiantil donde puedes acceder a toda la información académica, realizar trámites y gestionar tus cursos.
          </p>
        </div>
        
        {/* Courses */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-6">Mis Cursos</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Asignatura
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Docente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Horario
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Calificación
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {course.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                      {course.teacher}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                      {course.schedule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        course.score >= 90 ? 'bg-green-100 text-green-800' : 
                        course.score >= 80 ? 'bg-blue-100 text-blue-800' : 
                        course.score >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.score}/100
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-6">Próximas Tareas y Evaluaciones</h3>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`border-l-4 ${
                  task.status === 'completed' ? 'border-green-500' : 'border-primary'
                } pl-4 py-2`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-medium">{task.title}</h4>
                    <p className="text-neutral-600">{task.course}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-primary/10 text-primary'
                  }`}>
                    {task.status === 'completed' ? 'Completado' : 'Pendiente'}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-neutral-500">
                  <FaCalendarAlt className="mr-2" />
                  <span>Fecha límite: {task.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StudentPortal