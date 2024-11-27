import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/project.webp";
import Link from "next/link"

interface ProjectCardProps {
  title: string;
  main: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <Image
        className="p-4"
        src={bannerImg}
        alt="Project banner"
        width={300} 
        height={200}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <Link href="https://vercel.com/madiha-alis-projects/website-with-tailwind-css/Ffwf61hbJmVvwtA488Dh49tihqf7" passHref>
        Demo
        </Link>
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <Link href="https://github.com/MadihaAli1/Assingments/tree/7df5d75738fa6a0c3a2ee0b27190bf1a15a4685a/nextjs_assingments_Q2/milestone_2_assignments/tailwind_css/website" passHref>
        Source Code
        </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
