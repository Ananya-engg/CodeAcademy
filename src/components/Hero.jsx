import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import AnimatedBackground from "./AnimatedBackground";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <AnimatedBackground/>
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Learn Smarter. Build Faster.<br />Elevate Your Skills.</h1>
          <p className="lead">
            From zero-to-pro: modern web development, real projects, mentorship and
            job-ready skills — all in one place.
          </p>
          <div className="hero-cta">
            <a href="#courses" className="btn btn--gradient">Get Started</a>
            <a href="#programs" className="btn btn--outline">Explore Programs</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/model.png"
            alt="Learner holding a laptop"
            className="hero-model floating"
            width="520"
            height="520"
          />
        </div>
      </div>
    </section>
  );
}
