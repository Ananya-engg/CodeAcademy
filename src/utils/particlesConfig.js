export const sparkleConfig = {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false }
    },
    size: { value: 1.6, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.35, out_mode: "out" }
  },
  retina_detect: true
};
