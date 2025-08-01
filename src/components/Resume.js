import React from 'react';
import './Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <p>
      Download my resume:
      <br />
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
        Click here to view/download Resume
      </a>
    </p>
  </section>
);

export default Resume;
