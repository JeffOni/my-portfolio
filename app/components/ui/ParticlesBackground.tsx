"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    // Estado para controlar si el motor de partículas está inicializado
    const [init, setInit] = useState(false);

    // Inicializar el motor de partículas una sola vez al montar el componente
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // loadSlim carga solo las características básicas (menor tamaño del bundle)
            await loadSlim(engine);
        }).then(() => {
            // Marcar como inicializado cuando esté listo
            setInit(true);
        });
    }, []);

    // No renderizar hasta que el motor esté inicializado
    if (!init) return null; return (
        <Particles
            id="tsparticles" options={{
                // Desactivar pantalla completa para usar dentro de un contenedor
                fullScreen: { enable: false },
                // Fondo transparente (sin color de debugging)
                background: { color: "transparent" },
                particles: {
                    // Más partículas para un efecto más rico
                    number: { value: 80, density: { enable: true } },
                    // Colores que coinciden con el tema del portfolio
                    color: { value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#ffffff"] },
                    // Diferentes formas para variedad
                    shape: {
                        type: ["circle", "triangle"],
                        options: { triangle: { sides: 3 } },
                    },
                    // Opacidad más sutil
                    opacity: { value: 0.6 },
                    // Tamaños más pequeños y variados
                    size: { value: { min: 1, max: 4 } },
                    // Configuración de movimiento más suave
                    move: {
                        enable: true,
                        speed: 1.5, // Movimiento más lento y elegante
                        direction: "none",
                        outModes: { default: "out" },
                        random: true,
                        straight: false,
                    },
                    // Líneas conectoras para efecto de red
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#8b5cf6",
                        opacity: 0.15,
                        width: 1,
                    },
                },
                // Detección de retina para mejor calidad
                detectRetina: true,
                // Interactividad sutil
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { quantity: 4 },
                    },
                },
            }}
            style={{
                // Posicionamiento absoluto para que no afecte el layout
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1, // Mantener debajo del contenido
                pointerEvents: "none", // No interferir con interacciones del usuario
            }}
        />
    );
};

export default ParticlesBackground;
