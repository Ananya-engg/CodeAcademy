import React from 'react'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="logo" aria-label="Code Elevate Academy">
        <img src="/images/logo.png" alt="Code Elevate Academy logo" width="160" height="90" />
      </div>
      <nav aria-label="Primary">
        <ul className="nav">
          <li><a className="btn btn--ghost" href="#home">Home</a></li>
          <li><a className="btn btn--ghost" href="#about">About Us</a></li>
          <li><a className="btn btn--ghost" href="#courses">Courses</a></li>
          <li><a className="btn btn--ghost" href="#programs">Programs</a></li>
          <li><a className="btn btn--ghost" href="#reviews">Reviews</a></li>
          <li><a className="btn btn--gradient" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
