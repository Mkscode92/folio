"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { Home, Briefcase, FileText, CodeXml, Mail, ShieldCheck, Menu, X} from "lucide-react";

// type NavBarProps = {
//   size: number | null;
// };

// main navbar 
const NavBar = () => {
  const [IsMobile, setIsMobile] = useState(false)
  // const [Size, setSize] = useState(0)

  useEffect(() => { 
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 860);
      // setSize(window.innerWidth)
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, []);

  return <>{IsMobile ? <MobileNavBar/> : <DesktopNavBar/>}</>;
}

const DesktopNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-black p-4 z-50 shadow-xl">
      <ul className="flex gap-6 justify-center items-center">
        <li>
          <a href="#home" className='flex items-center gap-2 px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
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

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 p-3 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Full Screen Menu (only shows when isOpen is true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
          <nav>
            <ul className="space-y-8 text-center">
              <li>
                <a 
                  href="#home" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                >
                  <Home className="w-6 h-6" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                >
                  <Briefcase className="w-6 h-6" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                >
                  <FileText className="w-6 h-6" />
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                >
                  <CodeXml className="w-6 h-6" />
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transitions-colors"
                >
                  <ShieldCheck className='w-6 h-6' />
                  <span>Certifications</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar