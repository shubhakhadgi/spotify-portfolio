import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, left: 0, zIndex: -1, pointerEvents: "none" }}>
      <Particles
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
          fullScreen: { enable: false },
        }}
      />
    </div>
  );
}
