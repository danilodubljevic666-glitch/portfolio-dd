import { useState } from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
import About  from './About'
import Technologies from './Technologies'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  

  return (
    <>
      <Nav/>
      <HeroSection/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
