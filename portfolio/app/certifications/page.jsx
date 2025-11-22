'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Award, Calendar, ExternalLink, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from "@/components/Pages/Navbar";
import TargetCursor from "@/components/ui/TargetCursor";
import { certifications } from '@/lib/certificationsData'

const CertificationsPage = () => {
    return (
        <>
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
                parallaxOn={true}
            />
            {/* <Navbar /> */}
            <div className="min-h-screen bg-slate-950 pt-24 px-4 md:px-8 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Link href="/">
                            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-slate-800">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <Award className="w-10 h-10 text-blue-500" />
                        All Certifications
                    </h1>
                    <p className="text-gray-400 mb-12 text-lg">
                        A comprehensive list of my professional certifications and achievements.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 flex flex-col group hover:border-blue-500/30 overflow-hidden">
                                    {/* Certificate Image Banner */}
                                    <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                                        <img
                                            src={cert.certificateImage}
                                            alt={`${cert.title} certificate`}
                                            className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                        {/* Issuer Logo Badge */}
                                        <div className="absolute bottom-3 right-3 h-14 w-14 bg-white/95 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                            <img
                                                src={cert.image}
                                                alt={cert.issuer}
                                                className="object-contain p-2 w-full h-full"
                                            />
                                        </div>
                                    </div>

                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1 flex-1">
                                                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                                                    {cert.title}
                                                </CardTitle>
                                                <CardDescription className="text-gray-400 font-medium flex items-center gap-2">
                                                    {cert.issuer}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {cert.date}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {cert.skills.map((skill, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="secondary"
                                                    className="bg-blue-900/20 text-blue-300 hover:bg-blue-900/40 border border-blue-800/50"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-4 border-t border-slate-800 group-hover:border-slate-700/50 transition-colors">
                                        <Button
                                            variant="ghost"
                                            className="w-full text-gray-300 hover:text-white hover:bg-blue-600/20 group-hover:border-blue-500/50"
                                        >
                                            <span className="mr-2">View Credential</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default CertificationsPage
