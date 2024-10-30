import React from 'react';

function Contact() {
  return (
    <section className="contact">
        <h2><center>Contact Me</center></h2>
      <div className="contact-body">
          <div className="contact-card">
              <div className="card-left">

                    <div className="card-1">
                      <p>Feel free to reach out to me for any inquiries or collaborations. <br></br>I'm open to discussing new 
                        opportunities and projects. <br></br>Let's connect to explore potential collaborations. <br></br>I'm excited 
                        to hear about your ideas and how <br></br>we can work together. Don't hesitate to <br></br>contact me if you 
                        have any questions <br></br>or require further information.
                      </p>
                    </div>

                    <div className="card-2">
                      <p>
                        <a href="https://www.linkedin.com/in/zedric-autillo-8480a7299" title="Visit Cedric Autillo's LinkedIn Profile">
                            <img src="linkedin.png" alt="LinkedIn Icon" />
                          LinkedIn
                        </a>
                      </p>
                      <p>
                        <a href="mailto:zedricatillo@gmail.com">
                            <img src="gmail.png" alt="Gmail Icon" />
                          zedricatillo@gmail.com
                        </a>
                      </p>            
                    </div>

              </div>

              <div className="card-right">
                <img src="me.jpg" alt="Zedric Paul Atillo" />
              </div>
          </div>  

          <footer>
            <p>Copyright © 2025 ZedricPaulAttilo. All rights reserved.</p>
          </footer> 

      </div>
    </section>
  );
}

export default Contact;