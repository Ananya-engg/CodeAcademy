import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Courses from './components/Courses.jsx'
import Programs from './components/Programs.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Courses />
        <Programs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
