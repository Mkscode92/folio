import React from 'react'
import Link from 'next/link'
import NavBar from '../components/navigation/NavBar'
import { Hero } from '../components/sections/Hero'
import {Projects} from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Certificates from '../components/sections/Certificates'
import { Skills } from '../components/sections/Skills'
import Experience from '../components/sections/Experience'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-section-bg1 text-section-text border-b-10 border-blue-100">
        <Hero />
      </section>
      {/* bg-gray-100 */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-section-bg2 text-nav-text border-b-10 border-blue-100">
        <Projects />
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center bg-section-bg1 text-section-text border-b-10 border-blue-100">
        <Experience />
      </section>
      
      <section id="skills" className="min-h-screen flex items-center justify-center bg-section-bg2 border-b-10 border-blue-100">
        <Skills />
      </section>

      <section id="certificates" className="min-h-screen flex items-center justify-center bg-section-bg1 text-section-text border-b-10 border-blue-100">
        <Certificates />
      </section>
      
      <section id="contact" className="min-h-[95vh] flex items-center justify-center bg-section-bg2 border-b-10 border-blue-100">
        <Contact />
      </section>

      <section className="min-h-[5vh] flex items-center justify-center bg-section-bg1">
        <h1 className="text-s text-white">© {new Date().getFullYear()} Mohan Krishna Srinivasula. All rights reserved.</h1>
      </section>

    </div>
  )
}

export default HomePage