import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const getCategoryIcon = (category) => {
    if (category.includes('Programming')) return <Code size={24} />;
    if (category.includes('Platform')) return <Cloud size={24} />;
    return <Wrench size={24} />;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-subtitle">Technologies I work with</div>
        </div>

        <div className="skills-grid">
          {skills.map((category, catIndex) => (
            <Card key={catIndex} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>

              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="skill-progress" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
