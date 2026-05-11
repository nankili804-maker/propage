import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'The care and attention my mother receives from Jacqueline and her team is truly exceptional. We feel confident knowing she is in such capable hands.',
      author: 'Margaret T.',
      role: 'Daughter'
    },
    {
      text: 'From the very first day, this team made us feel like family. They treat our father with such respect and kindness. Highly recommended!',
      author: 'Robert M.',
      role: 'Son'
    },
    {
      text: 'Jacqueline listened to all our concerns and customized a care plan that perfectly fits our needs. Professional, reliable, and genuinely caring.',
      author: 'Sarah J.',
      role: 'Family Member'
    },
    {
      text: 'My grandmother absolutely loves the team. They have become like family to her. The personal attention and care make all the difference.',
      author: 'Emily L.',
      role: 'Granddaughter'
    },
    {
      text: 'We tried several agencies before finding this team. They are truly the best - dependable, professional, and full of heart.',
      author: 'David P.',
      role: 'Family Member'
    },
    {
      text: 'The peace of mind knowing my loved one is receiving excellent care allows me to focus on other important things. Thank you!',
      author: 'Patricia W.',
      role: 'Daughter'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Families Say</h2>
          <p>Real testimonials from families who trust us with their loved ones</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}