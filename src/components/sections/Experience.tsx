'use client'
import React from 'react'
import { motion } from "framer-motion";

interface Experiences {
  id: string;
  title_company: string;
  duration: string;
  description: string;
  tags: string[];
  icon: string;
  type: string; 
}

const experience: Experiences[] = [
  {id: "1",
  title_company: "Automation Software Intern @ University of Illinois Chicago",
  duration: "June 2025 - August 2025", 
  description: "As an intern in Dr. Meenesh Singh's MaSE Lab, I contributed to the automation of the lab’s microscope stage system and implemented a computer vision pipeline to detect and find the center of the wells/holes of fluid distribution manifolds when placed on the stage. This involved using OpenCV, Python, and real-time microscope imaging to precisely align the stage with target wells for image capture, data acquisition, and robotic control integration.",
  tags: ["Python", "OpenCV", "Computer Vision"],
  icon: "images/uic.jpg",
  type: "work"},
  {id: "2",
  title_company: "Full Stack Intern @ AiC Company",
  duration: "March 2024 - August 2024", 
  description: "Built e-commerce components such as an online store and pay-per-view features for a small company delivering HLS and WebRTC services for soccer streams.",
  tags: ["Javascript", "Node.js", "SQL", "Stripe API"],
  icon: "images/aic.jpg",
  type: "work"},
  {id: "3",
  title_company: "SIG AI Project Lead @ UIC Association for Computing Machinery",
  duration: "October 2024 - December 2024", 
  description: "For the sentiment analysis AI project, I led a team of four to create an analyzer using the RoBERTa Python model, accessible through the Hugging Face Transformers library. Processed amazon reviews, applied machine learning, and integrated the google translate API for multilingual support.",
  tags: ["Python", "Machine Learning", "NLP", "APIs", "Transformers"],
  icon: "images/acm.jpg",
  type: "club"},
]

const Experience = () => {
    const workExperiences = experience.filter(p => p.type === "work");
    const clubExperiences = experience.filter(p => p.type === "club");

    return (
        <section id="experience" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
                    <p className="text-xl text-left mb-2">Work:</p>
                    <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-6">
                        {workExperiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                    <p className="text-xl text-left mb-2">Club:</p>
                    <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-6">
                        {clubExperiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const ExperienceCard = ({exp, index}: {exp: Experiences, index: number}) => { 
    return (
        <h1>h</h1>
    )
}
export default Experience