import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

// import the animation
import 'animate.css'
import ForgetPassword from './pages/ForgetPassword'
import LessonDetails from './pages/LessonDetails'
import Lessons from './pages/Lessons'
import Profile from './pages/Profile'

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/profile";
  return (
    <div className='App'>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:name' element={<Lessons />} />
        <Route path='/courses/:name/:lessonId' element={<LessonDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  )
}

export default App
