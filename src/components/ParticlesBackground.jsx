import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
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
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                area: 1200,
              },
            },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.2,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 0.1, max: 4 },
            },
            shape: {
              type: "circle",
            },
          },
        }}
      />
    </div>
  );
}
