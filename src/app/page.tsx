import React from 'react'
import Link from 'next/link'
import NavBar from '../components/navigation/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">Home Section</h1>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Experience Section</h1>
      </section>
      
      <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Skills Section</h1>
      </section>

      <section id="certifications" className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Certifications Section</h1>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
      <Link href="/resume" style={{textDecoration : 'underline'}}>Resume Link</Link>
    </div>
  )
}

export default HomePage