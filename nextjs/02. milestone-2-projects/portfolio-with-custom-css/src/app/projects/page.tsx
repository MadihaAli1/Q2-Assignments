import React from "react";
import ProjectCard from "../Components/Card/ProjectCard";
import "./style.css"

const Projects = () => {
  return (
    <div id="Projects" className="projects-section">
      <h1>Projects</h1>
      <div className="project-list">
        <ProjectCard
          title="Salon Website"
          main="This is a salon website created in Next.js and used some components and Tailwind CSS."
        />
      </div>
    </div>
  );
};

export default Projects;
