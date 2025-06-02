"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <motion.section
            className="w-full min-h-screen flex flex-col items-center py-20 lg:py-32 text-center gap-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>

            {/* Contenido principal */}

            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 gap-6">
                <h2 className="text-3xl sm:text-5xl font-bold gradient-text drop-shadow-lg">
                    Sobre mí
                </h2>                <div className="grid lg:grid-cols-2 gap-12 mt-16">
                    {/* Columna izquierda - Texto descriptivo */}
                    <div className='space-y-6 text-left'>
                        <motion.p
                            className="text-base sm:text-lg text-secondary/80 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                        >
                            Soy un desarrollador frontend con experiencia en la creación de aplicaciones web modernas y accesibles. Me apasiona el diseño de interfaces de usuario y la implementación de soluciones innovadoras.
                        </motion.p>

                        <motion.p
                            className="text-base sm:text-lg text-secondary/80 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                        >
                            Mi enfoque se centra en crear experiencias de usuario excepcionales utilizando las últimas tecnologías como React, Next.js, TypeScript y Tailwind CSS. Disfruto transformando ideas complejas en interfaces intuitivas y elegantes.
                        </motion.p>

                        <motion.p
                            className="text-base sm:text-lg text-secondary/80 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                        >
                            Cuando no estoy programando, me dedico a aprender nuevas tecnologías, contribuir a proyectos open source y experimentar con animaciones web para crear experiencias más inmersivas.
                        </motion.p>
                    </div>

                    {/* Columna derecha - Cards de estadísticas */}
                    <div className='grid grid-cols-2 gap-6'>
                        <motion.div
                            className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                            <div className="text-sm text-muted">Años de experiencia</div>
                        </motion.div>

                        <motion.div
                            className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                            <div className="text-sm text-muted">Proyectos completados</div>
                        </motion.div>

                        <motion.div
                            className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-sm text-muted">Tecnologías</div>
                        </motion.div>

                        <motion.div
                            className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                            <div className="text-sm text-muted">Dedicación</div>                        </motion.div>
                    </div>
                </div>

                {/* Sección de Skills y Tecnologías */}
                <motion.div 
                    className="w-full mt-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-12 text-center">
                        Tecnologías & Herramientas
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* Frontend Technologies */}
                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-blue-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">⚛️</div>
                            <div className="text-sm font-medium text-secondary/90">React</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-black/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">▲</div>
                            <div className="text-sm font-medium text-secondary/90">Next.js</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-blue-600/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">📘</div>
                            <div className="text-sm font-medium text-secondary/90">TypeScript</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-cyan-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🎨</div>
                            <div className="text-sm font-medium text-secondary/90">Tailwind</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-orange-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🔥</div>
                            <div className="text-sm font-medium text-secondary/90">JavaScript</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-orange-600/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🎭</div>
                            <div className="text-sm font-medium text-secondary/90">HTML/CSS</div>
                        </motion.div>

                        {/* Tools & Others */}
                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-gray-700/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.9, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🐙</div>
                            <div className="text-sm font-medium text-secondary/90">Git</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-green-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.0, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">📦</div>
                            <div className="text-sm font-medium text-secondary/90">Node.js</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-purple-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.1, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🎬</div>
                            <div className="text-sm font-medium text-secondary/90">Framer Motion</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-blue-700/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">💾</div>
                            <div className="text-sm font-medium text-secondary/90">VS Code</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-pink-500/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.3, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🎨</div>
                            <div className="text-sm font-medium text-secondary/90">Figma</div>
                        </motion.div>

                        <motion.div 
                            className="glass-effect p-4 rounded-xl text-center hover:scale-110 hover:bg-green-600/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌱</div>
                            <div className="text-sm font-medium text-secondary/90">MongoDB</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;