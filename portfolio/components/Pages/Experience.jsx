'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
    {
        id: 1,
        role: "SDE INTERN",
        company: "Arvanch Chicago, Illinois, United States",
        location: "Remote",
        date: "2025- Present",
        description: [
            "Working On MERN Stack Project",
            "Developing & Testing Frontend and Backend ",
            "Wroking on multiple technologies to slove problems"
        ],
        skills: ["Node.js", "Express", "MongoDB", "React","REST-API","GIT"]
    },
    {
        id: 2,
        role: "AI ML LEAD",
        company: "GOGGLE DEVELOPER STUDENT CLUB",
        location: "N.B.N.Sinhgad College of Engineering, Solpaur",
        date: "2023 - 2024",
        description: [
            "Lead As AI ML Lead in GDSC NBNSCOE For 1 year",
            "Mentored junior developers and established code quality standards.",
        ],
        skills: ["Artificial Intelligence", "Machine Learning", "Leadership"]
    },
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