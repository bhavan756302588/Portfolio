import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications } from '../mock';

const Certifications = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-subtitle">Professional credentials</div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <Card key={cert.id} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <Award size={28} />
                </div>
                <div className="certification-main">
                  <h3 className="certification-name">{cert.name}</h3>
                  <div className="certification-org">{cert.organization}</div>
                  <Badge variant="outline" className="certification-year">{cert.year}</Badge>
                </div>
              </div>

              {expandedCard === cert.id && (
                <div className="certification-body">
                  <p className="certification-description">{cert.description}</p>
                  <a 
                    href={cert.verificationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    <ExternalLink size={16} />
                    <span>Verify Certification</span>
                  </a>
                </div>
              )}

              <button 
                onClick={() => toggleCard(cert.id)} 
                className="certification-toggle"
              >
                {expandedCard === cert.id ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>Show More</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
