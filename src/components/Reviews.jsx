import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
const reviews = [
  {
    text: "What I love most is the flexibility. Whether I have 15 minutes or an hour, there’s always something valuable to learn. The content is well-organized and beginner-friendly.",
    author: "— Rohan T., College Student",
  },
  {
    text: "The Scratch to Advance series helped me refresh my basics and build on them quickly. It’s perfect for both beginners and those looking to fill in gaps.",
    author: "— Priya S., Self-Taught Coder",
  },
  {
    text: "From clear explanations to hands-on projects, everything about Code Elevate is designed to help you grow. The community support is a bonus!",
    author: "— Aditya K., Career Switcher",
  },
  {
    text: "Code Elevate gave me the confidence to apply for internships. The real-world projects and guidance made all the difference—I finally feel like a developer, not just a learner.",
    author: "— Sneha D., Mechanical Student",
  },
  {
    text: "The mentorship and 1:1 live sessions are priceless. I never felt stuck because help was always one call away.",
    author: "— Arjun M., Full-Stack Learner",
  },
  {
    text: "I built my first real-world project with guidance here. Now I feel industry-ready and confident in interviews.",
    author: "— Kavya R., Aspiring Software Engineer",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="student-reviews" id="reviews" aria-labelledby="reviews-title">
      <AnimatedBackground/>
      <h2 id="reviews-title">What Our Students Say</h2>
      
      <div className="reviews-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="review-card"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <span className="quote">“</span>
            <p className="review-text">{reviews[index].text}</p>
            <p className="review-author">{reviews[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="nav-dots" aria-label="Review navigation">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
