/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { projects } from '@/lib/projectsData';
import Link from 'next/link';
import SourceCodeButton from '@/components/ui/SourceCodeButton';
import LiveDemoButton from '@/components/ui/LiveDemoButton';

const Projects = () => {
  // Show only featured projects on the home page
  const featuredProjects = projects.filter(project => project.featured).slice(0, 6);

  return (
    <section id="projects" className="project-container relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border min-h-screen border-b-cyan-500">
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
            <span>My Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one was an opportunity to learn, explore new technologies, and solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>

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
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <SourceCodeButton href={project.github} />
                  <LiveDemoButton href={project.demo} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-cyan-500/30 text-cyan-400 rounded-2xl cursor-target  font-medium hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 cursor-none">
              <span>View All Projects</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;