import React from "react";
import { MapPin, Clock, Phone } from "lucide-react"; // simple icons

export default function Contact() {
  return (
    <section
      className="contact-us bg-black text-gray-300 py-20 px-5"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="text-2xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#00d4ff] to-[#ff4ecd] bg-clip-text text-transparent"
      >
        Contact details
      </h2>
      <div className="contact-container max-w-[1200px] mx-auto">
        {/* Info Cards */}
        <div className="contact-cards flex flex-col md:flex-row gap-5 justify-between mb-12 md:mb-20">
          <div className="info-card bg-gray-900 p-6 rounded-lg flex-1 min-w-[17.5rem] transition-all duration-300 hover:-translate-y-6 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]">
            <MapPin size={28} className="info-icon text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold mt-2.5 mb-2">Office Location</h3>
            <p className="text-gray-400">
              Mehandibagh Colony, Nagpur, MH <br />
              * Ramna Maruti Nandanvan, Nagpur, MH
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block"
            >
              Direction →
            </a>
          </div>

          <div className="info-card bg-gray-900 p-6 rounded-lg flex-1 min-w-[17.5rem] transition-all duration-300 hover:-translate-y-6 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]">
            <Clock size={28} className="info-icon text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold mt-2.5 mb-2">Working Hours</h3>
            <p className="text-gray-400">
              Mon–Fri: 10am to 7pm <br />
              Sat: 10am to 5pm
            </p>
            <a
              href="tel:+919665658240"
              className="btn btn--read-more inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white font-semibold mt-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_40px_rgba(0,212,255,0.2)] hover:-translate-y-2"
            >
              Learn more →
            </a>
          </div>

          {/* ✅ Modified Communication card */}
          <div className="info-card bg-gray-900 p-6 rounded-lg flex-1 min-w-[17.5rem] transition-all duration-300 hover:-translate-y-6 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]">
            <Phone size={28} className="info-icon text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold mt-2.5 mb-2">Communication</h3>
            <p className="text-gray-400">+91 9665658240</p>
            <p className="text-gray-400">support@codeelevateacademy.tech</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@codeelevateacademy.tech&su=Support%20Request&body=Hi%20Team,"
              target="_blank"
              rel="noreferrer"
              className="btn btn--read-more inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white font-semibold mt-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_40px_rgba(0,212,255,0.2)] hover:-translate-y-2"
            >
              Support →
            </a>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="contact-flex flex flex-col md:flex-row gap-10">
          <div className="contact-form bg-gray-900 p-6 rounded-lg flex-1 min-w-[21.875rem]">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="What's your Name?"
                required
                className="w-full mb-3.75 p-3.5 rounded-md bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full mb-3.75 p-3.5 rounded-md bg-gray-700 text-white"
              />
              <textarea
                placeholder="Message"
                rows="5"
                required
                className="w-full mb-3.75 p-3.5 rounded-md bg-gray-700 text-white"
              />
              <a
                href="tel:+919665658240"
                className="btn btn--send-message inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold w-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,204,0.5),0_0_50px_rgba(157,78,221,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
              >
                Send Message
              </a>
            </form>
          </div>

          <aside className="contact-info flex-1 min-w-[21.875rem] text-gray-400">
            <h4 className="text-sm text-pink-500">Have any query?</h4>
            <h2 className="text-2xl md:text-4xl font-bold mt-2.5 mb-5 bg-gradient-to-r from-[#00d4ff] to-[#ff4ecd] bg-clip-text text-transparent">
              CONTACT US
            </h2>
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