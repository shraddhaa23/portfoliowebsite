import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-card">
        <h4>Bakery Management System</h4>
        <p>
          Web-based system with admin and customer modules to manage inventory, orders, and stock tracking.
          <br />Tech Stack: HTML, CSS, JavaScript, MySQL, C#, ASP.NET, jQuery
        </p>
      </div>
      <div className="project-card">
        <h4>Song Recommendation System</h4>
        <p>
          Content-based music recommender using NLP and cosine similarity. Built with Streamlit.
          <br />Tech Stack: Python
        </p>
      </div>
    </div>
  </section>
);

export default Projects;