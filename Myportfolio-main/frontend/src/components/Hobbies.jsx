import React from 'react';
import { Card } from './ui/card';
import { Trophy, BookOpen, Headphones } from 'lucide-react';
import { hobbies } from '../mock';

const Hobbies = () => {
  const getHobbyIcon = (iconName) => {
    switch(iconName) {
      case 'trophy': return <Trophy size={32} />;
      case 'book-open': return <BookOpen size={32} />;
      case 'headphones': return <Headphones size={32} />;
      default: return <Trophy size={32} />;
    }
  };

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="section-subtitle">Beyond work</div>
        </div>

        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <Card key={hobby.id} className="hobby-card">
              <div className="hobby-icon">
                {getHobbyIcon(hobby.icon)}
              </div>
              <h3 className="hobby-name">{hobby.name}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
