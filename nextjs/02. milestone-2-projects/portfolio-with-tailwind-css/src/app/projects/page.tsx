import React from "react";
import ProjectCard from "../Components/Card/ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-[#171d32] text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Salon Website"
          main="This is a salon website created in next js and used some components and Tailwindcss"
        />
      </div>
    </div>
  );
};

export default Projects;