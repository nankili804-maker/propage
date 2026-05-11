import React from 'react';

export default function Team() {
  const team = [
    {
      name: 'Jacqueline',
      role: 'Founder & Lead Caregiver',
      emoji: '👩‍⚕️',
      bio: 'Passionate about providing compassionate care with 15+ years of experience in home healthcare services.'
    },
    {
      name: 'Anna',
      role: 'Senior Care Specialist',
      emoji: '👩‍🍳',
      bio: 'Dedicated caregiver specializing in elderly care and daily living assistance with exceptional attention to detail.'
    },
    {
      name: 'Lisa',
      role: 'Wellness Coordinator',
      emoji: '💪',
      bio: 'Focused on holistic wellness, nutrition planning, and ensuring optimal health outcomes for our clients.'
    },
    {
      name: 'Wendy',
      role: 'Companion & Support',
      emoji: '🤗',
      bio: 'Brings warmth and joy to every interaction, specializing in companionship and emotional support services.'
    }
  ];

  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>Experienced, compassionate professionals dedicated to your family's care</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-image">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}