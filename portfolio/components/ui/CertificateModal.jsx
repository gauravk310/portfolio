'use client'
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Calendar, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const CertificateModal = ({ certificate, isOpen, onClose }) => {
    if (!certificate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2.5 bg-red-600/90 hover:bg-red-500 rounded-full transition-all duration-200 shadow-lg hover:shadow-red-500/50 hover:scale-110 group"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
                        </button>

                        {/* Certificate Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{certificate.title}</h3>
                                <p className="text-blue-100">{certificate.issuer}</p>
                            </div>
                        </div>

                        {/* Certificate Image */}
                        <div className="p-6 bg-slate-900">
                            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src={certificate.certificateImage}
                                    alt={`${certificate.title} certificate`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Certificate Details */}
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                                    <span>{certificate.date}</span>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {certificate.skills.map((skill, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className="bg-blue-900/30 text-blue-300 border border-blue-800/50"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CertificateModal
