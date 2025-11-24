'use client'
import React from 'react'
import * as motion from "motion/react-client"
import { Instagram, Facebook, Linkedin, Github, Code2, Mail, MessageCircle } from 'lucide-react'

const ContactMe = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            username: 'Gaurav Kadam',
            url: 'https://www.linkedin.com/in/gaurav-kadam-093b75242/',
            icon: Linkedin,
            color: 'from-blue-700 to-blue-500',
            hoverColor: 'hover:border-blue-600/50',
            bgGlow: 'group-hover:bg-blue-600/10',
            description: 'Professional network'
        },
        {
            name: 'GitHub',
            username: '@gauravk310',
            url: 'https://github.com/gauravk310',
            icon: Github,
            color: 'from-gray-700 via-gray-600 to-gray-500',
            hoverColor: 'hover:border-gray-500/50',
            bgGlow: 'group-hover:bg-gray-500/10',
            description: 'Check out my code'
        },
        {
            name: 'HackerRank',
            username: '@gskadam3b',
            url: 'https://www.hackerrank.com/profile/gskadam3b',
            icon: Code2,
            color: 'from-green-600 to-emerald-500',
            hoverColor: 'hover:border-green-500/50',
            bgGlow: 'group-hover:bg-green-500/10',
            description: 'View my solutions'
        },
        {
            name: 'Instagram',
            username: '@chikku_310',
            url: 'https://instagram.com/chikku_310',
            icon: Instagram,
            color: 'from-purple-500 via-pink-500 to-orange-500',
            hoverColor: 'hover:border-pink-500/50',
            bgGlow: 'group-hover:bg-pink-500/10',
            description: 'Follow my journey'
        },
        {
            name: 'Facebook',
            username: 'Gaurav Kadam',
            url: 'https://www.facebook.com/gaurav.kadam.373374/',
            icon: Facebook,
            color: 'from-blue-600 to-blue-400',
            hoverColor: 'hover:border-blue-500/50',
            bgGlow: 'group-hover:bg-blue-500/10',
            description: 'Connect on Facebook'
        },
        
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-zinc-950/50 relative overflow-hidden border border-t-[#00c951]" id="contact">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Find me on these platforms and let's build something amazing together
                    </p>
                </motion.div>

                {/* Social Media Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={cardVariants}
                                className={`group relative p-6 rounded-2xl bg-zinc-900/50 border cursor-target border-zinc-800 ${social.hoverColor} transition-all duration-300 hover:shadow-2xl hover:shadow-${social.color}/20 cursor-pointer overflow-hidden`}
                            >
                                {/* Card Glow Effect */}
                                <div className={`absolute inset-0 ${social.bgGlow} transition-colors duration-300`}></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon with Gradient */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>

                                        {/* External Link Indicator */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Platform Name */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all duration-300">
                                        {social.name}
                                    </h3>

                                    {/* Username */}
                                    <p className="text-zinc-500 text-sm mb-3 font-mono">
                                        {social.username}
                                    </p>

                                    {/* Description */}
                                    <p className="text-zinc-400 text-sm mt-auto">
                                        {social.description}
                                    </p>

                                    {/* Bottom Gradient Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                </div>
                            </motion.a>
                        )
                    })}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span className="text-zinc-300">Or reach out via email at</span>
                        <a href="mailto:gskadam3b@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            gskadam3b@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactMe