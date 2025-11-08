import React, { useEffect } from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Photo from './pages/Photo'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Courses from './pages/Courses'
import Footer from './components/Footer'
import News from './pages/News'
import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css";








const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
   <>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/news' element={<News/>}/>
   </Routes>
   
   <Footer/>
   
   </>
  )
}

export default App