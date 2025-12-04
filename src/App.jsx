import { useState } from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
import About  from './About'
import Technologies from './Technologies'
import Projects from './Projects'
import './App.css'

function App() {
  

  return (
    <>
      <Nav/>
      <HeroSection/>
      <About/>
      <Technologies/>
      <Projects/>
    </>
  )
}

export default App
