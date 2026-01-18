import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, GraduationCap, Award } from 'lucide-react';
import { personalInfo, about } from '../mock';

const About = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-subtitle">Get to know me better</div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <Card className="about-card">
              <div className="about-text">
                <h3 className="about-intro">I'm a <span className="typing-role">{displayedText}<span className="typing-cursor">|</span></span></h3>
                <p className="about-bio">{about.bio}</p>
              </div>

              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Education</div>
                    <div className="detail-value">{about.education.degree}</div>
                    <div className="detail-sub">{about.education.university}</div>
                    <div className="detail-location">
                      <MapPin size={14} />
                      {about.education.location} • {about.education.year}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Current Location</div>
                    <div className="detail-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="about-highlights">
            {about.highlights.map((highlight, index) => (
              <Card key={index} className="highlight-card">
                <div className="highlight-icon">
                  <Award size={28} />
                </div>
                <div className="highlight-content">
                  <div className="highlight-value">{highlight.value}</div>
                  <div className="highlight-label">{highlight.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
