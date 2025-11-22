'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
    {
        id: 1,
        role: "Senior Frontend Developer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        date: "2023 - Present",
        description: [
            "Led the migration of the main application to Next.js 14, improving performance by 40%.",
            "Mentored junior developers and established code quality standards.",
            "Implemented a new design system using Tailwind CSS and Storybook."
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "StartUp Inc",
        location: "Remote",
        date: "2021 - 2023",
        description: [
            "Developed and maintained multiple client-facing features using MERN stack.",
            "Optimized database queries reducing server load by 25%.",
            "Collaborated with UX/UI designers to implement responsive interfaces."
        ],
        skills: ["Node.js", "Express", "MongoDB", "React"]
    },
    {
        id: 3,
        role: "Web Developer Intern",
        company: "Digital Agency",
        location: "New York, NY",
        date: "2020 - 2021",
        description: [
            "Assisted in the development of marketing websites for various clients.",
            "Fixed bugs and improved cross-browser compatibility.",
            "Learned modern web development practices and tools."
        ],
        skills: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
]

const Experience = () => {
    return (
        <div id="experience" className="w-full h-full overflow-y-auto p-8 custom-scrollbar">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-2">Experience</h2>

                <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[5px] top-6 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-gray-900" />

                            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-colors">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                                            <CardDescription className="text-blue-400 font-medium flex items-center mt-1">
                                                <Briefcase className="w-4 h-4 mr-1" />
                                                {exp.company}
                                            </CardDescription>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end text-sm text-gray-400">
                                            <span className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {exp.date}
                                            </span>
                                            <span className="flex items-center mt-1">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-outside ml-4 text-gray-300 space-y-2 mb-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <Badge key={i} variant="secondary" className="bg-blue-900/30 text-blue-300 hover:bg-blue-900/50 border-blue-800">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experience