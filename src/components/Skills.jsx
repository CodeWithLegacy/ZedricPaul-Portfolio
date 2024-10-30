import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <ul>
          <li>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: '90%' }}>
                <span>Technical Proficiency (90%)</span>
              </div>
            </div>
          </li>
          <li>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: '95%' }}>
                <span>Problem-Solving and Analytical Skills (95%)</span>
              </div>
            </div>
          </li>
          <li>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: '85%' }}>
                <span>Ethical Hacking and Penetration Testing (85%)</span>
              </div>
            </div>
          </li>
          <li>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: '80%' }}>
                <span>Risk Assessment and Management (80%)</span>
              </div>
            </div>
          </li>
          <li>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: '75%' }}>
                <span>Communication and Collaboration (75%)</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;