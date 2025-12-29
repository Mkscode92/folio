"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { Home, Briefcase, FileText, CodeXml, Mail, ShieldCheck, Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    // most important style element is max-w-fit to get that pill shape 
    <nav className="fixed top-5 mx-auto inset-x-0 max-w-fit bg-nav-background text-nav-text border-b-2 border-amber-950 px-4 py-2 z-50 shadow-xl rounded-4xl">
      <ul className="flex gap-2 justify-center items-center">
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
          <a href="#certificates" className='flex item-center gap-2 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-105'>
            <ShieldCheck className='w-5 h-5' />
            <span>Certificates</span>
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 p-3 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <nav>
              <ul className="space-y-8 text-center">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a 
                    href="#home" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                  >
                    <Home className="w-6 h-6" />
                    <span>Home</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a 
                    href="#projects" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                  >
                    <Briefcase className="w-6 h-6" />
                    <span>Projects</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#experience" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                  >
                    <FileText className="w-6 h-6" />
                    <span>Experience</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="#skills" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                  >
                    <CodeXml className="w-6 h-6" />
                    <span>Skills</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="#certifications"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transitions-colors"
                  >
                    <ShieldCheck className='w-6 h-6' />
                    <span>Certificates</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-2xl hover:text-gray-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <span>Contact</span>
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    
  );
};

export default NavBar