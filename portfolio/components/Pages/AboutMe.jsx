'use client'
import React from 'react';
import Image from 'next/image';
import { MapPin, Briefcase, Code, User } from 'lucide-react';
import * as motion from "motion/react-client"

const AboutMe = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-zinc-950/50 relative overflow-hidden border border-t-[#00c951]" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left Side - Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-zinc-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-zinc-700/50"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-700/50 shadow-xl flex items-center gap-3"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Experience</p>
                  <p className="text-sm font-bold text-white">2+ Years</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 flex flex-col gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400"
              >
                About Me
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-zinc-400 text-lg leading-relaxed"
              >
                I am a passionate Full Stack Developer with a keen eye for detail and a drive for creating seamless digital experiences. My journey in tech is fueled by curiosity and a commitment to writing clean, efficient code. I love turning complex problems into simple, beautiful solutions.
              </motion.p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <p className="text-base font-medium text-zinc-200">San Francisco, CA</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Role</p>
                    <p className="text-base font-medium text-zinc-200">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group md:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                    <User className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Availability</p>
                    <p className="text-base font-medium text-zinc-200">Open for freelance & full-time roles</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
