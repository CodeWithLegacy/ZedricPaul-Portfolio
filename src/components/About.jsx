import React from 'react';

function About() {
  return (
    <section className="about">
        <div className="about-content">
            <h1>Zedric Paul Atillo</h1>
                <h2>Cybersecurity Specialist since 2020</h2>
                <p>
                    As a dedicated cybersecurity professional, I am committed to safeguarding digital assets and 
                    protecting against emerging threats. With a strong foundation in network security, penetration 
                    testing, and incident response, I am passionate about delivering innovative solutions and ensuring 
                    robust cybersecurity for organizations. My expertise lies in threat intelligence, risk assessment, data 
                    privacy. Let's work together to fortify your digital defenses 
                    and mitigate potential risks.
                </p>
                <div className="proj">
                    <div className="p1">
                        <a href="#projects" className="btn">Network Security Assessment <br></br>and Penetration Testing</a>
                    </div>   
                    <div className="p2">
                        <a href="#projects" className="btn">Incident Response Plan <br></br>Development and Training</a>
                    </div> 
                    <div className="p3">
                        <a href="#projects" className="btn">Data Privacy and <br></br>Compliance Assessment</a>
                    </div>       
                </div>
        </div>
    </section>
  );
}

export default About;