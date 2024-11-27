import React from "react";
import Image from "next/image";
import AboutImg from "../../../public/about.png";
import { IoArrowForward } from "react-icons/io5";
import "./style.css"

const About: React.FC = () => {
  return (
    <div id="About">
      <h2>About</h2> {/* "About" title at the top */}

      <div className="contentWrapper">
        <div className="imageWrapper">
          <Image src={AboutImg} alt="About image" />
        </div>
        <div>
          <IoArrowForward size={30} className="mt-1" />
          <span>
            <h1>
              Frontend Developer
            </h1>
            <p>
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
  );
};

export default About;
