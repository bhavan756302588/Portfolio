import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-tagline">{personalInfo.tagline}</p>
            
            <div className="hero-ctas">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="hero-btn-primary"
                size="lg"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline"
                className="hero-btn-secondary"
                size="lg"
              >
                Contact Me
              </Button>
            </div>

            <div className="hero-social">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email">
                <Mail size={24} />
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                <Twitter size={24} />
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="hero-image"
              />
              <div className="hero-image-backdrop"></div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')} 
          className="hero-scroll-indicator"
        >
          <ArrowDown size={24} className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
