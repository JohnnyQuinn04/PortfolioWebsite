import React from "react";
import styles from "../styles/Projects.module.css";  // Importing CSS Module

function Projects() {
  const projectList = [
    { name: "Project 1", description: "Description of project 1", link: "#" },
    { name: "Project 2", description: "Description of project 2", link: "#" },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
