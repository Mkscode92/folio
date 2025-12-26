import React from 'react'
import { Home, Briefcase, FileText, CodeXml, Mail, ShieldCheck} from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-black p-4 z-50 shadow-xl">
      <ul className="flex gap-6 justify-center items-center">
        <li>
          <a href="#home" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          
        </li> 
        <li>
          <a href="#projects" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <Briefcase className="w-5 h-5" />
            <span>Projects</span>
          </a>
          
        </li>
        <li>
          <a href="#experience" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <FileText className="w-5 h-5" />
            <span>Experience</span>
          </a>

        </li>
        <li>
          <a href="#skills" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <CodeXml className="w-5 h-5" />
            <span>Skills</span>
          </a>
        </li>
        <li> 
          <a href="#certifications" className='flex item-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <ShieldCheck className='w-5 h-5' />
            <span>Certifications</span>
          </a>

        </li>
        <li>
          <a href="#contact" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </a>

        </li>
      </ul>
    </nav>
  )
}

export default NavBar