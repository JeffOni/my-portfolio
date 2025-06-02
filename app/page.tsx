"use client";
import React from "react";
import useLenis from "./hooks/useLenis";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  // Activa el smooth scrolling de Lenis en toda la página
  useLenis();

  return (
    <main className="overflow-hidden">
      {/* Sección de héroe con imagen de fondo */}
      <HeroSection />
      <AboutSection />

      {/* Sección de proyectos */}


      {/* Sección de contacto */}


      {/* Sección "Sobre mí" */}

    </main>

  );
}
