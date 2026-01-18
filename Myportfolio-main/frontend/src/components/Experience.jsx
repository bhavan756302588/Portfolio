import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-subtitle">My professional journey</div>
        </div>

        <div className="experience-timeline">
          {experience.map((exp) => (
            <Card key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={28} />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <Calendar size={16} />
                      {exp.duration}
                    </span>
                    <span className="meta-item">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="experience-body">
                <div className="responsibilities-label">Key Responsibilities:</div>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="responsibility-item">{resp}</li>
                  ))}
                </ul>

                <div className="technologies-section">
                  <div className="technologies-label">Technologies:</div>
                  <div className="technologies-tags">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
