import React from 'react';

export default function Header({ scrollPosition }) {
  return (
    <header className={`header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#" className="header-logo">
          Care<span>Hub</span>
        </a>
        <nav>
          <ul className="header-nav">
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact" className="header-cta">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}