import { useEffect } from "react"; // Importa el hook useEffect de React
import Lenis from "@studio-freight/lenis"; // Importa la clase Lenis

// Hook personalizado para smooth scrolling con Lenis
const useLenis = () => {
    useEffect(() => {
        // Solo ejecutar en el cliente para evitar errores de hidratación SSR
        if (typeof window === "undefined") return;

        // Crear instancia de Lenis con configuración personalizada
        const lenis = new Lenis({
            duration: 1.2, // Duración de la animación de scroll (en segundos)
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing para el scroll
        });

        // Función para animar el scroll en cada frame usando requestAnimationFrame
        function raf(time: number) {
            lenis.raf(time); // Actualiza el estado del scroll en este frame
            requestAnimationFrame(raf); // Solicita el siguiente frame de animación
        }

        // Iniciar el ciclo de animación
        requestAnimationFrame(raf);

        // Limpiar al desmontar el componente (evita fugas de memoria)
        return () => {
            lenis.destroy(); // Destruye la instancia de Lenis y libera recursos
        };
    }, []); // Solo se ejecuta una vez al montar/desmontar
};

export default useLenis; // Exporta el hook para usarlo en otros componentes