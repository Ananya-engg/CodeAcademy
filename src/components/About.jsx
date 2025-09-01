import React from "react";
import { motion } from "framer-motion";

import AnimatedBackground from "./AnimatedBackground";
export default function About() {
  return (
    <section className="about" id="about">
      <AnimatedBackground/>
      <div id="particles-js-about" className="particles-layer" />
      <div className="about-container">
        <div className="about-image">
          <motion.img
            src="/images/group.png"
            alt="Mentors collaborating"
            width="580"
            height="420"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About Us</h2>
          <div className="about-card">
            <h3>Who We Are</h3>
            <p>We make coding education accessible with tutorials and real-world projects.</p>
            <p>At Code Elevate, we believe that great developers aren’t born — they’re built. Our mission is to make high-quality, practical coding education accessible to everyone, whether you're writing your first line of code or fine-tuning advanced systems.
We offer beginner-friendly tutorials, deep dives into advanced topics, and real-world projects that help you turn knowledge into skill. Our content is crafted by experienced developers and educators who understand the challenges of learning to code — and how to overcome them.</p>
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfcVwR5wPVTWJazfUYHM9O1WgqkRMwhcVgotW2viytE6LRPUQ/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn--get-started"
>
  Get Started
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
