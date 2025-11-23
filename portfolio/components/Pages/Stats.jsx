"use client";
import React from "react";
import * as motion from "motion/react-client";
import { projects } from "@/lib/projectsData";
import { certifications } from "@/lib/certificationsData";
import { FolderGit2, Award, Trophy, Briefcase } from "lucide-react";

const StatCard = ({ title, count, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition duration-300 h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:scale-110 transition duration-300">
                    <Icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    {count}
                </h3>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                    {title}
                </p>
            </div>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        {
            title: "Total Projects",
            count: projects.length + "+",
            icon: FolderGit2,
        },
        {
            title: "Total Certificates",
            count: certifications.length,
            icon: Award,
        },
        {
            title: "Hackathon Participations",
            count: "3+", // Placeholder
            icon: Trophy,
        },
        {
            title: "Years Experience",
            count: "6 Months", // Placeholder
            icon: Briefcase,
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-[#0f172a]" id="stats">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-cyan-400"></span> Achievement Stats
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A quick overview of my technical journey and milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            title={stat.title}
                            count={stat.count}
                            icon={stat.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
