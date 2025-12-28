"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-0"
    >
        <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col custom-md:flex-row items-center justify-between gap-12">

                <div className="max-w-4xl mx-auto text-left">
                    <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4 text-blue-100"
                    >
                    Mohan Krishna Srinivasula
                    </motion.h1>

                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white mb-8"
                    >
                    I'm a dedicated <b>CS + Math student @ UIUC</b> passionate about building <b>innovative solutions</b> that have <b>meaningful impacts.</b>
                    </motion.p>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4 justify-left flex-wrap"
                    >
                    <a
                        href="/resume"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Resume
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mksrinivasula/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-3 text-white rounded-xl bg-resume hover:bg-resume-hover transition-colors"
                    >
                        <SlSocialLinkedin className="w-6 h-6"/>
                    </a>

                    <a
                        href="https://github.com/Mkscode92"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-3 text-white rounded-xl bg-black hover:bg-gray-900 transition-colors"
                    >
                        <GrGithub className="w-6 h-6"/>
                    </a>
                    
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="shrink-0"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="relative w-full h-full overflow-hidden border-4 border-blue-100 rounded-lg">
                            <Image
                                src="/images/MohanV2.png"
                                alt="Mohan Srinivasula"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};