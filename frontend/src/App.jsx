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
import { Toaster } from "react-hot-toast";

import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from './components/Profile'

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

   

   
   <Toaster position="top-center" />
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      
   </Routes>
   
   <Footer/>
   
   </>
  )
}

export default App