import React from "react";
import "./AnimatedBackground.css";

export default function Animatedackground() {
  // Generate 40 particles (you can increase if you want denser background)
  const particles = Array.from({ length: 80 });

  return (
    <div className="particles-bg">
      {particles.map((_, i) => (
        <span key={i} className="particle"></span>
      ))}
    </div>
  );
}
