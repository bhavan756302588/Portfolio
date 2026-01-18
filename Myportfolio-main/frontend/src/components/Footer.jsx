import React from 'react';
import { Linkedin, Mail, Heart, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">BB</div>
            <p className="footer-tagline">Building scalable solutions with ServiceNow</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <nav className="footer-nav">
                <button onClick={() => scrollToSection('about')} className="footer-link">About</button>
                <button onClick={() => scrollToSection('experience')} className="footer-link">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
              </nav>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <div className="footer-social">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="footer-social-link"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a 
                  href={personalInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a 
                  href={personalInfo.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
                <a 
                  href={personalInfo.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="footer-made-with">
            Made with <Heart size={16} className="heart-icon" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
