import React from 'react';
import './App.css';

function App() {
  return (
      <div id="wrap">
          <div id="header">
              <div id="header-content">
                  <h1>PROJECT QUICK PROTOTYPING</h1>
                  <h2>Freelance Web Designer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <div id="contact-details">
                      <p className="contact"><span>Email: </span>dsaunders@email.com</p>
                      <p className="contact"><span>Website: </span>www.portfolio.com</p>
                      <p className="contact"><span>Phone: </span>01234 567 890</p>
                  </div>
              </div>
          </div>

          <div className="line"></div>
          <div id="content">
              <div id="experience" className="cv-section">
                  <h3>Experience</h3>
                  <div className="cv-section-item">
                      <h4 className="title">Senior Project Manager</h4>
                      <h4 className="meta">Web Media Agency / June 2008 - Present</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className="cv-section-item">
                      <h4 className="title">Junior Web Developer</h4>
                      <h4 className="meta">Web Design Studios / May 2005 - June 2008</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

              </div>

              <div className="line"></div>
              <div id="expertise" className="cv-section">
                  <h3>Expertise</h3>
                  <div className="cv-section-item">
                      <h4 className="title">Photoshop / Illustrator / InDesign</h4>
                      <h4 className="meta">Experience Level: Advanced [5 Years]</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className="cv-section-item">
                      <h4 className="title">XHTML &amp; CSS</h4>
                      <h4 className="meta">Experience Level: Intermediate [2 Years]</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className="cv-section-item">
                      <h4 className="title">JavaScript / jQuery</h4>
                      <h4 className="meta">Experience Level: Basic [1 Year]</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

              </div>

              <div className="line"></div>
              <div id="education" className="cv-section">
                  <h3>Education</h3>
                  <div className="cv-section-item">
                      <h4 className="title">Cambridge University</h4>
                      <h4 className="meta">PhD Computer Science / 2004 - 2008</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className="cv-section-item">
                      <h4 className="title">University College London</h4>
                      <h4 className="meta">MSc Interaction Design / 1999 - 2000</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className="cv-section-item">
                      <h4 className="title">Oxford University</h4>
                      <h4 className="meta">BSc (Hons) Computer Science / 1995 - 1999</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>

              </div>

              <div className="line"></div>
              <div id="training" className="cv-section">
                  <h3>Training</h3>
                  <div className="cv-section-item">
                      <h4 className="title">Adobe Certified Instructor</h4>
                      <h4 className="meta">Awarded: August 2008</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className="cv-section-item">
                      <h4 className="title">Microsoft Certification</h4>
                      <h4 className="meta">Awarded: February 2008</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
