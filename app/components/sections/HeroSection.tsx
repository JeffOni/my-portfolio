"use client";
import { motion } from "framer-motion";
import React from "react";
import ParticlesBackground from "../ui/ParticlesBackground";

const HeroSection: React.FC = () => {
    return (<motion.section
        className="w-full min-h-[100vh] flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/* Fondo de partículas - debe estar detrás del contenido */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <ParticlesBackground />
        </div>

        {/* Contenido principal - envuelto en un contenedor con z-index alto */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 gap-6">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text drop-shadow-lg">
                Jefferson Alexis Pozo Bohorquez
            </h1>
            <motion.h2
                className="text-xl sm:text-2xl font-semibold text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
                Desarrollador Frontend &amp; UI Enthusiast
            </motion.h2>
            <motion.p
                className="max-w-xl text-base sm:text-lg text-secondary/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
                Apasionado por crear experiencias web modernas, animadas y accesibles usando
                React, Three.js, Framer Motion y más.
            </motion.p>                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            >
                <a
                    href="#contact"
                    className="mt-4 px-7 py-2 rounded-full glass-effect font-semibold text-lg transition hover:scale-105 shadow-lg inline-block"
                >
                    Contáctame
                </a>
            </motion.div>
        </div> {/* Cierre del contenedor del contenido */}
    </motion.section>
    );
};

export default HeroSection;