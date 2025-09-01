import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

// import the animation
import 'animate.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/coursedetails' element={<CourseDetails />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
