"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiClaude,
  SiCplusplus,
  SiC,
  SiPostman,  
  SiSupabase,
  SiDocker
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface Skill {
  name: string;
  icon: any;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "AWS", icon: FaAws, color: "#232F3E" },
  {name: "Postman", icon: SiPostman, color: "#FF6C37"},
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Claude", icon: SiClaude, color: "#CC785C" },
  
  
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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