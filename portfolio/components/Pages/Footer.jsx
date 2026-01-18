'use client'
import React from 'react'
import * as motion from "motion/react-client"
import { Instagram, Facebook, Linkedin, Github, Code2, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react'
import SliderTextAnimation from '../ui/SliderTextAnimation'
const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gaurav-kadam-093b75242/',
            icon: Linkedin,
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/gauravk310',
            icon: Github,
            color: 'hover:text-gray-400'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/chikku_310/',
            icon: Instagram,
            color: 'hover:text-pink-400'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/gaurav.kadam.373374/',
            icon: Facebook,
            color: 'hover:text-blue-500'
        },
    ]

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Achievements & Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative w-full bg-black border-t border-zinc-800/50 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00c951]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `
                    linear-gradient(to right, #00c951 1px, transparent 1px),
                    linear-gradient(to bottom, #00c951 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {/* Main Footer Content */}
                <div className="pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2"
                        >
                            <SliderTextAnimation />
                            <p className="text-zinc-400 mb-6 max-w-md leading-relaxed">
                                Software Developer passionate about building modern, user-friendly applications
                                and solving complex problems through code.
                            </p>
                            <div className="flex items-center gap-2 text-zinc-500">
                                <Mail className="w-4 h-4" />
                                <a
                                    href="mailto:gskadam3b@gmail.com"
                                    className="text-zinc-400 hover:text-[#00c951] transition-colors duration-300 cursor-target"
                                >
                                    gskadam3b@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                                Quick Links
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00c951] to-transparent"></div>
                            </h3>
                            <ul className="space-y-3">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-zinc-400 hover:text-[#00c951] transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-[#00c951] transition-all duration-300"></span>
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Connect Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                                Connect
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00c951] to-transparent"></div>
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className={`p-3 rounded-xl cursor-target bg-zinc-900/50 border border-zinc-800 ${social.color} transition-all duration-300 group relative overflow-hidden`}
                                            aria-label={social.name}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00c951]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <IconComponent className="w-5 h-5 relative z-10 text-zinc-400 group-hover:text-current transition-colors duration-300" />
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"
                    ></motion.div>

                    {/* Bottom Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row justify-between items-center gap-4"
                    >
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <span>© {currentYear} Gaurav Kadam. Built with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                            <span>and Next.js</span>
                        </div>

                        {/* Scroll to Top Button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-[#00c951]/50 transition-all duration-300 text-zinc-400 hover:text-[#00c951] cursor-target"
                        >
                            <span className="text-sm font-medium">Back to Top</span>
                            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Subtle animated gradient line at the very bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00c951] to-transparent opacity-50"></div>
        </footer>
    )
}

export default Footer
