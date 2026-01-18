import React from 'react';
import { Card } from './ui/card';
import { Shield, CheckCircle2, Code2, FileCheck } from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  const getServiceIcon = (id) => {
    switch(id) {
      case 1: return <Shield size={32} />;
      case 2: return <Code2 size={32} />;
      case 3: return <FileCheck size={32} />;
      default: return <Shield size={32} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <div className="section-subtitle">What I offer</div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Card key={service.id} className="service-card">
              <div className="service-icon">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <CheckCircle2 size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
