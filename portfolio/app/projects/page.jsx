/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { Code2, Sparkles, Filter, Search, ArrowLeft } from 'lucide-react';
import { projects } from '@/lib/projectsData';
import Link from 'next/link';
import SourceCodeButton from '@/components/ui/SourceCodeButton';
import LiveDemoButton from '@/components/ui/LiveDemoButton';

const ProjectsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(projects.map(project => project.category))];

    // Filter projects based on search and category
    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b] py-20 px-4 sm:px-6 lg:px-8">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gray-900/50 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 cursor-target"
                >
                    <ArrowLeft size={18} />
                    <span>Back</span>
                </Link>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>Complete Collection</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        All <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore my complete portfolio of projects showcasing various technologies, frameworks, and solutions to real-world problems.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{projects.length}</div>
                        <div className="text-gray-400 text-sm">Total Projects</div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{categories.length - 1}</div>
                        <div className="text-gray-400 text-sm">Categories</div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                            {new Set(projects.flatMap(p => p.technologies)).size}
                        </div>
                        <div className="text-gray-400 text-sm">Technologies</div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                            {projects.filter(p => p.featured).length}
                        </div>
                        <div className="text-gray-400 text-sm">Featured</div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects by name, description, or technology..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <Filter size={18} className="text-gray-400" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                    : 'bg-gray-900/50 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <p className="text-center text-gray-400 text-sm">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </p>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredProjects.map((project) => (
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

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-medium bg-gray-900/90 backdrop-blur-md text-cyan-400 rounded-full border border-cyan-500/20">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg shadow-lg">
                                                <Sparkles size={16} className="text-white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Floating Tech Stack (Visible on Hover) */}
                                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
                                        {project.longDescription || project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 border border-white/10 rounded-full">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
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
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900/50 border border-white/10 mb-6">
                            <Search size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('All');
                            }}
                            className="px-6 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
