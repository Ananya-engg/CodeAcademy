import React, { useState } from "react";

export default function FlipCard({ frontImg, title, details, duration, reviews, btnText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article className={`course-card ${flipped ? "flipped" : ""}`}>
      <div className="card-inner">
        {/* Front */}
        <div className="card-front">
          {frontImg && <img src={frontImg} alt={`${title} banner`} />}
          <div className="card-content">
            {duration && <p>Duration: {duration} • {reviews} Reviews</p>}
            <h3>{title}</h3>
            <button
              className="btn btn--chip"
              onClick={() => setFlipped(true)}
            >
              Read More →
            </button>
            <a href="#contact" className="btn btn--gradient">{btnText || "Join Now"}</a>
          </div>
        </div>

        {/* Back */}
        <div className="card-back">
          <h3>{title}</h3>
          <p>{details}</p>
          <button
            className="btn btn--gradient"
            onClick={() => setFlipped(false)}
          >
            Back
          </button>
        </div>
      </div>
    </article>
  );
}
