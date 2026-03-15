"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiClaude,
  SiC,
  SiSupabase,
  SiDocker,
  SiFastapi,
  SiNumpy,
  SiOpencv,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";

interface Skill {
  name: string;
  icon: any;
  color: string;
}

const skills: Skill[] = [
  { name: "Python",       icon: SiPython,      color: "#3776AB" },
  { name: "TypeScript",   icon: SiTypescript,  color: "#3178C6" },
  { name: "JavaScript",   icon: SiJavascript,  color: "#F7DF1E" },
  { name: "C",            icon: SiC,           color: "#A8B9CC" },
  { name: "SQL",          icon: FaDatabase,    color: "#4479A1" },
  { name: "React",        icon: SiReact,       color: "#61DAFB" },
  { name: "Next.js",      icon: SiNextdotjs,   color: "#000000" },
  { name: "Node.js",      icon: SiNodedotjs,   color: "#339933" },
  { name: "FastAPI",      icon: SiFastapi,     color: "#009688" },
  { name: "OpenCV",       icon: SiOpencv,      color: "#5C3EE8" },
  { name: "NumPy",        icon: SiNumpy,       color: "#013243" },
  { name: "Git",          icon: SiGit,         color: "#F05032" },
  { name: "AWS",          icon: FaAws,         color: "#FF9900" },
  { name: "PostgreSQL",   icon: SiPostgresql,  color: "#4169E1" },
  { name: "Supabase",     icon: SiSupabase,    color: "#3ECF8E" },
  { name: "Docker",       icon: SiDocker,      color: "#2496ED" },
  { name: "Linux",        icon: SiLinux,       color: "#FCC624" },
  { name: "Claude",       icon: SiClaude,      color: "#CC785C" },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-gray-600">
            Here are some of the technologies and tools I'm proficient in.
          </p>
        </motion.div>

        <div className="grid grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-100 text-black rounded-lg border-2 border-black hover:border-black transition-all"
              >
                <Icon 
                  className="w-20 h-20 mb-3" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};