import React from "react";
import { MapPin, Clock, Phone } from "lucide-react"; // simple icons

export default function Contact() {
  return (
    <section className="contact-us" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        {/* Info Cards */}
        <div className="contact-cards">
          <div className="info-card">
            <MapPin size={28} className="info-icon" />
            <h3>Office Location</h3>
            <p>
              Mehandibagh Colony, Nagpur, MH <br />
              * Ramna Maruti Nandanvan, Nagpur, MH
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              Direction →
            </a>
          </div>

          <div className="info-card">
            <Clock size={28} className="info-icon" />
            <h3>Working Hours</h3>
            <p>
              Mon–Fri: 10am to 7pm <br />
              Sat: 10am to 5pm
            </p>
            <a href="#">Learn more →</a>
          </div>

          <div className="info-card">
            <Phone size={28} className="info-icon" />
            <h3>Communication</h3>
            <p>+91 9665658240</p>
            <p>support@codeelevateacademy.tech</p>
            <a href="#">Support →</a>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="contact-flex">
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="What's your Name?" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Message" rows="5" required />
              <button type="submit">Send Message</button>
            </form>
          </div>

          <aside className="contact-info">
            <h4>Have any query?</h4>
            <h2>CONTACT US</h2>
            <p>
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out. Our team is here
              to help and support your learning journey.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
