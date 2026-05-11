import React from 'react';

export default function Services() {
  const services = [
    {
      icon: '🏥',
      title: 'Personal Care',
      description: 'Assistance with bathing, grooming, dressing, and personal hygiene needs with dignity and respect.'
    },
    {
      icon: '🍽️',
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation tailored to dietary preferences and medical requirements.'
    },
    {
      icon: '🧹',
      title: 'Housekeeping',
      description: 'Light housekeeping services including cleaning, laundry, and maintaining a safe living environment.'
    },
    {
      icon: '👵',
      title: 'Elderly Care',
      description: 'Specialized care for seniors including mobility assistance, medication reminders, and companionship.'
    },
    {
      icon: '💊',
      title: 'Medical Support',
      description: 'Help with medication management, health monitoring, and coordination with healthcare providers.'
    },
    {
      icon: '🎉',
      title: 'Companionship',
      description: 'Meaningful social interaction, activities, and emotional support to enhance quality of life.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive home care solutions designed to support your family's unique needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}