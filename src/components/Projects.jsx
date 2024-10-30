import React from 'react';

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="project-card1">
                    <img src="p1.jpg" alt="Project 1" />
                        <h3>Threat Intelligence and Risk Assessment</h3>
                            <p>This project involves identifying, analyzing, and assessing potential threats to an organization's 
                                security. Cybersecurity specialists collect threat intelligence from various sources, conduct 
                                risk assessments to evaluate the potential impact of threats, and develop strategies to mitigate 
                                risks.
                            </p>
                    <a href="project1-link" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                <div className="project-card2">
                    <img src="p2.jpeg" alt="Project 2" />
                        <h3>Security Awareness Training and Education</h3>
                            <p>This project focuses on enhancing employees' security awareness and knowledge to prevent security 
                                incidents. Cybersecurity specialists develop and conduct training programs, create security 
                                awareness materials, and measure the effectiveness of training initiatives.
                            </p>
                    <a href="project1-link" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
                <div className="project-card3">
                    <img src="p3.jpg" alt="Project 3" />
                        <h3>Cloud Security Assessment and Governance</h3>
                            <p>This project aims to ensure the security of cloud-based systems and data. Cybersecurity specialists 
                                conduct assessments to identify vulnerabilities in cloud environments, develop cloud security 
                                policies and procedures, monitor cloud usage, and implement appropriate security controls.
                            </p>
                    <a href="project1-link" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;