"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { Project } from "@/src/types";
import { SiDevpost } from "react-icons/si";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "1",
    title: "Verbexa",
    description: "Educational tutoring companion platform with AI voice agents for real-time conversations.",
    category: "AI",
    tags: ["Next.js", "Typescript", "React.js", "Vapi", "Supabase"],
    github: "https://github.com/Mkscode92/Verbexa",
    image: "/images/verbexaV2.png"
  },
  {
    id: "2",
    title: "SnapLink",
    description: "My group's project at the SparkHacks 2025 hackathon! It's a unique job posting app for underrepresented small businesses.",
    category: "Web",
    tags: ["React.js", "Spring Boot", "Java", "MongoDB"],
    github: "https://github.com/Mkscode92/SparkHackProject",
    devpost: "https://devpost.com/software/snap-link",
    image: "/images/sparkhacks.jpg"
  },
  {
    id: "3",
    title: "StockBits",
    description: "A stock analysis messenger using Yahoo Finance data, Alpha Vantage news, ML price prediction, NLP sentiment analysis, and Twilio API to send SMS summaries for chosen stocks.",
    category: "Finance",
    tags: ["Python", "Machine Learning", "NLP", "APIs"],
    github: "https://github.com/Mkscode92/StockBits",
    image: "/images/stocker.png"
  },
  {
    id: "4",
    title: "SoccerRanker API",
    description: "Part of my multi-page SoccerRanker project - its a 2-in-1 real-time soccer news & player profiles API with an informative landing page and client side demos.",
    category: "Web",
    tags: ["JavaScript", "Node.js", "Bootstrap", "Render"],
    website: "https://soccerranker.com/api.html",
    image: "/images/soccerranker.png"
  },
  {
    id: "5",
    title: "Everything Soccer",
    description: "An educational website covering all aspects of soccer including the rules of the game, club teams, international competitions, player profiles, domestic leagues, and more.",
    category: "Web",
    tags: ["HTML", "CSS", "Javascript"],
    website: "https://mkscode92.github.io/EverythingSoccer/club.html",
    image: "/images/soccer.jpg"
  },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">
            Here are some of my favorite projects I've worked on!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-3 justify-center mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black border-2 border-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 custom-md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg border-2 border-black p-6 hover:shadow-lg transition-all"
    >

      <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden rounded-lg border-2 border-gray-700">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
              </div>
            )}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 max-w-sm">{project.description}</p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            <GrGithub className="w-4 h-4" />
            Code
          </a>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Website
          </a>
        )}
        {project.devpost && (
          <a
            href={project.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <SiDevpost className="w-4 h-4" />
            Devpost
          </a>
        )}
      </div>
    </motion.div>
  );
};