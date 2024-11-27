import React from "react";
import Image from "next/image";
import AboutImg from "../../../public/about.png";
import { IoArrowForward } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-centershadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <Image className="md:h-80" src={AboutImg} alt="About image" />
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />

            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                "I am a passionate Frontend Developer with skills in HTML, CSS,
                JavaScript, TypeScript, ReactJS, and NextJS. As a fresher, I am
                eager to learn and grow in web development. Currently, I am
                focusing on improving my frontend expertise to create responsive
                and user-friendly applications. My goal is to sharpen my skills
                and become a professional in frontend development."
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
