import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">CareHub</div>
          <p>Providing compassionate, professional home care services for families who care.</p>
          <p>Trusted by families across the region since our founding.</p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Personal Care</a></li>
            <li><a href="#services">Meal Preparation</a></li>
            <li><a href="#services">Housekeeping</a></li>
            <li><a href="#services">Medical Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 (555) 123-4567</p>
          <p>📧 hello@carehub.local</p>
          <p>📍 Available 24/7 for your needs</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CareHub Home Care Agency. All rights reserved. Made with ❤️ by Jacqueline, Anna, Lisa, and Wendy.</p>
      </div>
    </footer>
  );
}