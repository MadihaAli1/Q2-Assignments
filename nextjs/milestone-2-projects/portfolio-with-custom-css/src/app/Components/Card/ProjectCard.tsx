import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/project.webp";
import Link from "next/link";
import "./style.css"

interface ProjectCardProps {
  title: string;
  main: string;
}

const ProjectCard = ({ title, main }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <Image
        className="project-card-img"
        src={bannerImg}
        alt="Project banner"
        width={300}
        height={200}
      />
      <h3>{title}</h3>
      <p>{main}</p>
      <div className="button-container">
        <button>
          <Link className="link" href="https://vercel.com/madiha-alis-projects/website-with-tailwind-css/Ffwf61hbJmVvwtA488Dh49tihqf7" passHref>
            Demo
          </Link>
        </button>
        <button>
          <Link  className="link" href="https://github.com/MadihaAli1/Assingments/tree/7df5d75738fa6a0c3a2ee0b27190bf1a15a4685a/nextjs_assingments_Q2/milestone_2_assignments/tailwind_css/website" passHref>
            Source Code
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
