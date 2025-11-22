/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Github, ExternalLink, Code2, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      name: "AI Chat Application",
      description: "Real-time chat application powered by AI with message encryption and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop",
      technologies: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      name: "Task Management Tool",
      description: "Collaborative project management platform with Kanban boards, time tracking, and team analytics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "Interactive weather forecasting app with real-time data, maps, and weather alerts for multiple locations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      technologies: ["React", "Weather API", "Mapbox", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description: "Personal fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      technologies: ["React Native", "Express", "MySQL", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },

  ];

  return (
    <section className="project-container relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border min-h-screen border-b-cyan-500">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[100px] overflow-hidden pointer-events-none ">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>My Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one was an opportunity to learn, explore new technologies, and solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>

                {/* Floating Tech Stack (Visible on Hover) */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-gray-900/90 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-lg">
                    <Code2 size={20} className="text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 border border-white/10 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group/link"
                  >
                    <Github size={18} className="group-hover/link:text-cyan-400 transition-colors" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors ml-auto group/link"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} className="group-hover/link:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        {/* <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-cyan-500/30 text-cyan-400 rounded-full font-medium hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300">
            <span>View All Projects</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;