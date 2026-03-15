'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Certificate } from 'node:crypto';
import Image from 'next/image';

interface Experiences {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
  icon: string;
  type: string; 
}

const experience: Experiences[] = [
  {id: "1",
  title: "Operational Strategy & People Analytics Extern",
  company: "Amazon",
  duration: "March 2026 - Present", 
  description: "Automated Python ETL workflows to ingest 5,000+ data points, performing sentiment analysis and keyword extraction to identify cultural trends and improve worker retention in Amazon Fullfillment Centers.",
  tags: ["Python", "ETL Workflows", "Data Analytics", "Consulting"],
  icon: "/images/amazon--600.png",
  type: "work"},
  {id: "2",
  title: "Automation Software Intern",
  company: "University of Illinois Chicago",
  duration: "June 2025 - August 2025", 
  description: "As an intern in Dr. Meenesh Singh's MaSE Lab, I contributed to the automation of the lab’s microscope stage system and implemented a computer vision pipeline to detect and find the center of the wells/holes of fluid distribution manifolds when placed on the stage. This involved using OpenCV, Python, and real-time microscope imaging to precisely align the stage with target wells for image capture, data acquisition, and robotic control integration.",
  tags: ["Python", "OpenCV", "Computer Vision", "Automation"],
  icon: "/images/uic.jpg",
  type: "work"},
  {id: "3",
  title: "Full Stack Web Development Intern",
  company: "AiC Company",
  duration: "March 2024 - August 2024", 
  description: "Built e-commerce components such as an online store to showcase merchandise, pay-per-view features, and a user registration page for a small company delivering HLS and WebRTC services for soccer streams.",
  tags: ["Javascript", "Node.js", "PostgreSQL", "Render", "Stripe API"],
  icon: "/images/aic.jpg",
  type: "work"},
  {id: "4",
  title: "SIG AI Project Lead",
  company: "UIC Association for Computing Machinery",
  duration: "October 2024 - December 2024", 
  description: "For the sentiment analysis AI project, I led a team of four to create an analyzer using the RoBERTa Python model, accessible through the Hugging Face Transformers library. Processed amazon reviews, applied machine learning, and integrated the google translate API for multilingual support.",
  tags: ["Python", "Machine Learning", "NLP", "APIs", "Transformers"],
  icon: "/images/acm.jpg",
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
                    <p className="text-xl text-left mb-2"><b>Work:</b></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        {workExperiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                    <p className="text-xl text-left mb-2 mt-2"><b>Club:</b></p>
                    <div className="grid grid-cols-1 gap-6">
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
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all border border-white flex flex-col h-full"
            >
              <div className="flex gap-4 mb-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grow min-w-0">
                  <h3 className="text-base font-bold text-white text-left leading-snug">{exp.title}</h3>
                  <p className="text-gray-400 text-sm text-left">{exp.company}</p>
                  <p className="text-xs text-gray-500 text-left mt-0.5">{exp.duration}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-left text-sm grow">{exp.description}</p>

              <div className="flex gap-2 flex-wrap mt-auto">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white text-black font-medium text-xs rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
        </motion.div>
    )
}
export default Experience