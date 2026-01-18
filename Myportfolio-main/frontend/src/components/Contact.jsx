import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { personalInfo } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: response.data.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-subtitle">Let's work together</div>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-intro">
              <h3 className="contact-intro-title">Let's Connect</h3>
              <p className="contact-intro-text">
                I'm always interested in hearing about new opportunities, projects, or just having a chat about technology.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-detail-label">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="contact-detail-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-detail-label">Phone</div>
                  <a href={`tel:${personalInfo.phone}`} className="contact-detail-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">{personalInfo.location}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Linkedin size={24} />
                </div>
                <div className="contact-detail-content">
                  <div className="contact-detail-label">LinkedIn</div>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-detail-value"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="form-submit-button"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
