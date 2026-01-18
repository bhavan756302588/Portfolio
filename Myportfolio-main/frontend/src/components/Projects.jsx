import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-subtitle">Featured work</div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Badge className="project-category-badge">{project.category}</Badge>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-year">
                    <Calendar size={16} />
                    {project.year}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <div className="highlights-label">Key Highlights:</div>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
