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

            <div className="card-actions">
              <button
                className="btn btn--read-more"
                onClick={() => setFlipped(true)}
              >
                Read More →
              </button>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfcVwR5wPVTWJazfUYHM9O1WgqkRMwhcVgotW2viytE6LRPUQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--join"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="card-back" onClick={() => setFlipped(false)}>
          <h3>{title}</h3>

          {details && (
            <div className="card-details">
              {details.whatYouGet && (
                <>
                  <h4>What You'll Get</h4>
                  <ul>
                    {details.whatYouGet.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {details.finalResult && (
                <>
                  <h4>Final Result</h4>
                  <ul>
                    {details.finalResult.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
