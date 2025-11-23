'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Award, Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { certifications } from '@/lib/certificationsData'
import CertificateModal from '@/components/ui/CertificateModal'

const Certifications = () => {
    const displayedCertifications = certifications.slice(0, 4);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openModal = (cert) => {
        setSelectedCertificate(cert);
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <div id="certifications" className="w-full h-full overflow-y-auto p-8 custom-scrollbar">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto pb-12"
            >
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-2 flex items-center gap-2">
                    <Award className="w-8 h-8 text-blue-500" />
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {displayedCertifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            className="h-full"
                        >
                            <Card className="h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 flex flex-col group overflow-hidden">
                                {/* Certificate Image Banner */}
                                <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                                    <img
                                        src={cert.certificateImage}
                                        alt={`${cert.title} certificate`}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
                                    {/* Issuer Logo Badge */}
                                    <div className="absolute bottom-3 right-3 h-14 w-14 bg-white/95 rounded-lg flex items-center justify-center shadow-lg">
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
                                <CardFooter className="pt-4 border-t border-slate-700/50">
                                    <Button
                                        onClick={() => openModal(cert)}
                                        variant="ghost"
                                        className="w-full text-gray-300 hover:text-white hover:bg-blue-600/20 group-hover:border-blue-500/50"
                                    >
                                        <span className="mr-2">View Certificate</span>
                                        <Award className="w-4 h-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <Link href="/certifications">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-transparent cursor-target border border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 min-w-[220px] rounded-2xl font-medium"
                            >
                                <span className="relative z-10 mr-2">View All Certifications</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-all duration-500"></div>
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Certificate Modal */}
            <CertificateModal
                certificate={selectedCertificate}
                isOpen={!!selectedCertificate}
                onClose={closeModal}
            />
        </div>
    )
}

export default Certifications