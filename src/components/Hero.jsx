import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Compassionate Home Care for Your Loved Ones</h1>
          <p>Jacqueline and her dedicated team provide exceptional in-home care services with warmth, professionalism, and dignity. Your family's well-being is our priority.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon">❤️</div>
            <h3>Expert Care</h3>
            <p>Professional caregivers trained in all aspects of home care assistance</p>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">⏰</div>
            <h3>24/7 Available</h3>
            <p>Round-the-clock support to ensure your loved ones are always cared for</p>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">🤝</div>
            <h3>Trusted Team</h3>
            <p>Jacqueline, Anna, Lisa, and Wendy - dedicated to your family's needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}