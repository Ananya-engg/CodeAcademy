import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ id }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        background: { color: "#000000" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#ff6a88", "#00d4ff", "#ff9a9e"] },
          links: { enable: true, color: "#00d4ff", distance: 150, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 6 } },
        },
        detectRetina: true,
      }}
    />
  );
}
