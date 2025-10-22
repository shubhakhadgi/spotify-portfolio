import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // State to store particle color based on dark mode
  const [particleColor, setParticleColor] = useState("#ffffff");

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    setParticleColor(darkMode ? "#000000" : "#ffffff");

    // Optional: watch for class changes if you toggle dark mode dynamically
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains("dark");
      setParticleColor(dark ? "#000000" : "#ffffff");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: false },
              resize: true,
            },
            modes: {
              grab: { distance: 500, line_linked: { opacity: 0.5 } },
            },
          },
          particles: {
            number: { value: 40, density: { enable: true, area: 1200 } },
            color: { value: particleColor },
            links: { enable: true, distance: 100, color: particleColor, opacity: 0.5, width: 0.55 },
            move: { enable: true, speed: 0.8, direction: "none", outModes: { default: "bounce" } },
            opacity: { value: 0.5 },
            size: { value: { min: 0.1, max: 3 } },
            shape: { type: "circle" },
          },
        }}
      />
    </div>
  );
}
